import db from "../database/models";
import customerArr from "../database/dummyGenerator/dataDummyGeneratorCustomer";
import Customer from "../database/models/Customer";
import Event from "../database/models/Event";
const sequelize = db.sequelize;

const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
const getCustomer = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.json({ data: error, status: 500 });
  }
};

const createCustomer = (req, res) => {
  const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  Customer.create({
    idType: req.body.idType,
    name: req.body.name,
    lastname: req.body.lastname,
    dateCreation: event.toLocaleString('en-ES', options)
  }).then(result => {
    res.json({
      data: result,
      status: 201
    })
  })
    .catch(error => {
      res.json({
        data: error,
        status: 500
      })
    });
};


const createDummyCustomer = async (req, res) => {
  try {
    res.send(customerArr)
    customerArr.map(data => (
      customer = Customer.create({
        idType: data.idType,
        name: data.name,
        lastname: data.lastname,
        dateCreation: data.creationDate
      })
    ))
  } catch (error) { }
};

const createEventCustomer = (req, res) => {

  Event.create({
    event: req.body.event
  }).then(result => {
    res.json({
      data: result,
      status: 200
    })
  })
}

const selectCustomers = (req, res) => {
  sequelize.query("SELECT	idCustomer,	c.name,	c.lastname FROM	transactions t INNER JOIN (	SELECT idtransaction FROM (	SELECT idtransaction, count(t.idTransaction) AS count FROM transactiondetails t GROUP BY t.idTransaction) AS c WHERE c.count > 3) c ON c.idtransaction = t.id INNER JOIN customers c ON c.id = t.idCustomer where month (t.date) = month(CURDATE()) AND year(t.date)=year(CURDATE())")
    .then(result => {
      res.json({
        data: result,
        status: 200
      })
    })
}

const selecCustomersTransaction = (req,res)=>{
  sequelize.query("select c.name,	c.lastname,	c.idType, t.id, t.totalPrice, t.date, c2.id from customers c inner join transactions t on t.idCustomer = c.id inner join customerevents c2 on c2.customerId =c.id where c2.eventId = 1")
  .then(result=>{
    res.json({
      data: result,
      status: 200
    })
  })
}
export const methods = {
  getCustomer,
  createCustomer,
  createDummyCustomer,
  createEventCustomer,
  selectCustomers,
  selecCustomersTransaction
};
