const { app } = require("./app");
          
const server = async () => {
   await app.listen(app.get('port')) 
   await console.log(`This is run port ${app.get('port')}`)
}


server();