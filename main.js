require(`dotenv`).config();
const md5 = require(`md5`);
const private_key = '547f1b41988e4ab890e2ea3f69b9d90e7496df36';
const ts = new Date().getTime();
const public_key = `7a40b956450425ab84960bc38b8bb0b8`;
const hash = md5(ts+private_key+public_key);
const apikey = public_key
console.log(hash)

// const fetchAPI{
// //    fetch from API
// }