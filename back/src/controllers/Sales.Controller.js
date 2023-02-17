import db from "../database/models";
import Transaction from "../database/models/Transaction"
import TransactionDetail from "../database/models/TransactionDetail";


const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

const createTransaction = (req,res)=>{
    const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    let arrId = []
    let total = 0;    
    req.body.products.map(data=>{
        arrId.push(data.id)
        total += parseFloat(data.price)
    })
    Transaction.create({
        idCustomer:req.body.idCustomer,
        totalPrice:total,
        taxes:21,
        date:event.toLocaleString('en-ES', options)
    })
    .then(response=>{
        arrId.map(id=>{
            TransactionDetail.create({
                idTransaction:response.id,
                idProduct:id
            }).then(response).catch(error=>res.json({data:error,status:500,idProduct:id}))
        })
        CustomerEvent.create({
            customerId:response.idCustomer,
            eventId:1,
            timeStamp:response.date
        })
        res.json({
            data:response,
            status:201
        })
    }).catch(error=>res.json({data:error,status:500}))

}

export const methods = {createTransaction}