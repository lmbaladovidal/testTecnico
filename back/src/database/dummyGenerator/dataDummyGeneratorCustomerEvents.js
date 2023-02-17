import { faker } from '@faker-js/faker';


let customerEventArr = [];
for (let i = 0; i < 10000; i++) {

    eventArr.push({
        customerId: faker.datatype.number({ min: 1, max: 10000}),
        eventId: faker.datatype.number(1, 6),
        timeStamp: faker.date.past().toLocaleDateString()
    })
}


export default customerEventArr;