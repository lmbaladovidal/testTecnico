import { faker } from '@faker-js/faker';


let productArr = [];
for (let i = 0; i < 10000; i++) {

    productArr.push({     
        name : faker.commerce.productName(),
        description : faker.commerce.productDescription(),
        price : faker.commerce.price(),
        quantity : faker.datatype.number({ min: 0, max: 100 }),
        creationDate : faker.date.past().toLocaleDateString()
    })   
}


export default productArr;