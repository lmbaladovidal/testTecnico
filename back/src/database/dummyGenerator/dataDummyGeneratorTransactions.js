import { faker } from '@faker-js/faker';


let transactionArr = [];
for (let i = 0; i < 10000; i++) {

    transactionArr.push({     
        customerId: faker.datatype.number(1, 10000),
        totalPrice : faker.commerce.price(),
        taxes : totalPrice*0.11,
        creationDate : faker.date.past().toLocaleDateString()
    })   
}


export default transactionArr;