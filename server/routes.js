// let loginController = require('./server/controllers/loginController');
let signupController = require('./controllers/signupController')
let bookController = require('./controllers/bookController')

module.exports = (router) =>{
    router.post('/signup', signupController.save);
    router.post('/getCren', signupController.getCren);
    router.post('/getsubscribedbook', bookController.getSubscribedBook);
    router.get('/getbooks', bookController.getBooks);
}