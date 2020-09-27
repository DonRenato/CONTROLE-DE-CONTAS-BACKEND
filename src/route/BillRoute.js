const BillController = require('../controller/BillController')

class BillRoute{
    constructor(app){
        app.route("/bills")
            .get(BillController.list)
            .post(BillController.create)

        app.route("/bills/:id")
            .delete(BillController.delete)
            
    }

}

module.exports = BillRoute