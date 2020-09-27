const mongoose = require('mongoose');
const bill = mongoose.model("Bill");

class BillController{   

    static async list(req, res){
       try {
        res.status(200).json( await bill.find()) 
       } catch (error) {
        console.log("[BILLS] : LIST => ERROR:" + error)
        res.status(500).send("Error during searching for bills");
       }
    }

    static async create(req, res){
        try {
            let newBill = req.body
            res.status(201).json( await bill.create(newBill)) 
           } catch (error) {
            console.log("[BILLS] : CREATE => ERROR:" + error)
            res.status(500).send("Error during creating bills");
           }
    }

    static async delete(req, res){
        try {
            const billId = req.params.id
            await bill.findByIdAndDelete(billId)
            res.send().status(204)
           } catch (error) {
            console.log("[BILLS] : DELETE => ERROR:" + error)
            res.status(500).send("Error during deleting bills");
           }
    }
}

module.exports = BillController;