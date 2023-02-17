
import  axios from 'axios';

export const datosComprador = ()=>{
  
  axios.get('http://localhost:4000/api/customers/serviceTransactions',{
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*' // Could work and fix the previous problem, but not in all APIs
    }})
  .then(function (response) {
    // handle success
    console.log(response);
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}