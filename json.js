const user = { id: 20, name: 'rahman riad', designation: 'Software Engineer' };
const stringFied = JSON.stringify(user);
// console.log(stringFied);
// console.log(user);

const shop = {
    name: 'Riad Store',
    address: 'Dhaka',
    profit: 200000,
    products: ['laptop', 'mobile', 'pendrive', 'monitor'],
    isExpensive: false
}
const shopStringFied = JSON.stringify(shop);
console.log(shop);
console.log(shopStringFied);
const converted = JSON.parse(shopStringFied);
console.log(converted);