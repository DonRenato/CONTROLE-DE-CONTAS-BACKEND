const UserController = require('../controller/UserController')

class UserRoute{
    constructor(app){
        app.route("/user")
            .get(UserController.list)
            .post(UserController.create)
            .put(UserController.update)
            .delete(UserController.delete)
    }
}

module.exports = UserRoute