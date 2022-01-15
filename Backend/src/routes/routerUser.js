const { Router } = require("express");
const Users = require('../controllers/CRUDUser');
const router = Router();

router.get('/' , Users.getAllUser)
router.get('/searchUser/:searchers' , Users.searchersInTimeReal);
router.get('/oneuser/:_id' , Users.getOneUser);
router.post('/signin' , Users.addUser);
router.put('/updateUser/:_id' , Users.updateUser);
router.delete('/deleteoneUser/:_id' , Users.deleteOneUser);
router.delete('/deleteallUser/:_id' , Users.deleteAllUser);



module.exports = router;