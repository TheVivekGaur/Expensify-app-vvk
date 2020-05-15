
//OBJECT DESTRUCTURING

// const person = {
// name:'vivek',
// age:20,
// location:{
//     city:'Philadelphia',
//     temp:92
// }
// };
// // const name= person.name;
// // const age= person.age
// const {name: firstname= 'anynomous', age}  = person
// console.log(`${firstname}  is ${age}`)

// const {city , temp: temperature} = person.location
// if(city && temperature)
// {
// console.log(`It is ${temperature} in ${city}`);
// }

// 

//ARRAY DESTRUCTURING

const address = ['1299 s juniper street', 'philadelphia', 'pennsylvania', '19147'];

const [, city , state='New york'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ItemName, , MediumPrice] = item;
console.log(`A Medium ${ItemName} costs ${MediumPrice}`)