const UserSchema = require('../models/modelsUser');
const fs = require('fs-extra');
const path = require('path');

const addUser = async (req, res) => {
    const { names, lastNameFathers, lastNameMothers, Directions, numberphone } = req.body;
    console.log(req.body)
    const name = names.trim()
    const lastNameFather = lastNameFathers.trim()
    const lastNameMother = lastNameMothers.trim()
    const Direction = Directions.trim()
    const phone = Number(numberphone)



    if (name.length >= 1 && lastNameFather.length >= 1 && lastNameMother.length >= 1 && Direction.length >= 1) {
        // Verify if exist the user.
        console.log(name)
        const searchName = await UserSchema.findOne({ name });
        console.log(searchName);
        if (searchName != null) return res.status(302).json({ "messages": "The user already exist" })

        const User = await new UserSchema({ name, lastNameFather, lastNameMother, Direction, phone });

        await User.save((error, success) => {
            if (error) return res.status(500).json({
                msg: error
            })
            return res.status(201).json({ msg: 'Successfully user created' })
        });

    } else {
        return res.status(200).json({ msg: 'No vasio user created' })
    }

}

const searchersInTimeReal = async (req, res) => {
    const { searchers } = req.params;
    // ,  lastNameFather: { $regex: searchers, $options: 'i'}
    console.log(searchers);
    try {
        if (searchers.length <= 0) return res.json({ searchers: 'You have not written anything | No has escrito nada' });

        await UserSchema.count({ name: { $regex: searchers, $options: 'i' } } || { lastNameFather: { $regex: searchers, $options: 'i' } }, async (error, success) => {

            if (error) return res.status(500).send('Not i finds | No lo encuentro.')

            if (success == 0) {
                await UserSchema.count({ lastNameFather: { $regex: searchers, $options: 'i' } } || { lastNameFather: { $regex: searchers, $options: 'i' } }, async (error, success) => {

                    if (success == 0) {
                        const DBAUser = await UserSchema.find({ lastNameMother: { $regex: searchers, $options: 'i' } }, (error, success) => { if (error) return res.send('No encontrado') }).sort({ createdAt: -1 });
                        compare(DBAUser)
                    } else {
                        const DBAUser = await UserSchema.find({ lastNameFather: { $regex: searchers, $options: 'i' } }, (error, success) => { if (error) return res.send('No encontrado') }).sort({ createdAt: -1 });
                        compare(DBAUser)
                    }

                });

            } else {
                const DBAUser = await UserSchema.find({ name: { $regex: searchers, $options: 'i' } }, (error, success) => { if (error) return res.send('No encontrado') }).sort({ createdAt: -1 });
                compare(DBAUser)
            }


            function compare(DBAUser) {
                res.json({ DBAUser })
            }






        });
    } catch (error) {
        return res.status(500).json({ mgs: 'Excuse me, but you are writing invalid data. | Disculpe, pero estas escribiendo datos invalidos. catch' })
    }
}

const getOneUser = async (req, res) => {
    const { _id } = req.params;
    try {
        if (_id.length <= 0) return res.send('No as seleccionado el producto...');
        const showOneUser = await UserSchema.findOne({ _id });
        if (showOneUser === null) return res.status(404).send('El productos no existe o no esta en sistema...');
        res.status(200).json({ msg: showOneUser })
    } catch (error) {
        return res.send('No me parece que me estas enviado un dato valido...');
    }
}

const getAllUser = async (req, res) => {
    try {
        const countUserSchema = await UserSchema.count((error, success) => {
            if (error) return res.status(500).send('Error del sistema...');
        });
        if (countUserSchema === 0) return res.status(404).json({ msg: "No posee ningun producto" });
        const showAllUserSchema = await UserSchema.find((error, success) => {
            if (error) return res.status(500).send('Error del sistema...');
        });
        res.status(200).json({ msg: showAllUserSchema })
    } catch (error) {
        return res.send('No me parece que me estas enviado un dato valido...');
    }
}

async function updateUserDate(_id, response) {
    console.log(response)
    await UserSchema.updateOne({ _id }, { $set: response }, (error, success) => {
        if (error) return res.status(500).json({
            msg: error
        })
        return 'Successfully';
    });
}

const updateUser = async (req, res) => {

    const { _id } = req.params;
    updateUserDate(_id, req.body);
        return res.status(200).json({ msg: 'Successfully user updated' })
}

const deleteOneUser = async (req, res) => {

    const { _id } = req.params;
    try {
        if (_id.length <= 0) return res.send('No me as dicho que usuario deseas eliminar...');
        const showOneUserSchema = await UserSchema.findOne({ _id });
        if (showOneUserSchema === null) return res.status(404).send('El productos no existe o no esta en sistema...');

        await UserSchema.deleteOne({ _id });
        res.status(200).json({ msg: 'Successfully user deleted' })
    } catch (error) {
        return res.status(500).send('Parece que algo no funciona bien...');
    }

}

const deleteAllUser = async (req, res) => {

    try {
        const { _id } = req.body;
        for (let index = 0; index < _id.length; index++) {
            const _ids = _id[index];
            if (_id.length <= 0) return res.send('No as seleccionado el producto...');
            const showOneUserSchema = await UserSchema.findOne({ _id: _ids });
            if (showOneUserSchema === null) return res.status(404).send('El productos no existe o no esta en sistema...');



            await UserSchema.deleteOne({ _id: _ids });
            //console.log(showOneProducts)
        }
        res.status(200).json({ msg: 'He deleted all products' })
    } catch (error) {
        return res.send('It does not seem to me that you are sending me a valid information ... / No me parece que me estás enviado un dato válido...');
    }

}

module.exports = {
    addUser,
    getOneUser,
    getAllUser,
    updateUser,
    deleteOneUser,
    deleteAllUser,
    searchersInTimeReal
}