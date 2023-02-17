import { faker } from '@faker-js/faker';


let customerArr = [];
for (let i = 0; i < 10000; i++) {

    customerArr.push({    
        idType : faker.datatype.string(),    
        name : faker.name.firstName(),    
        lastname : faker.name.lastName(),    
        creationDate : faker.date.past().toLocaleDateString()
    })   
}


export default customerArr;