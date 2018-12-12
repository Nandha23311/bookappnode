// let loginController = require('./server/controllers/loginController');
let signupController = require('./controllers/signupController')

module.exports = (router) =>{
    router.post('/signup', signupController.save);
    router.post('/getCren', signupController.getCren);
}