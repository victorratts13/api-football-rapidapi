//const api = require('./index');
//const apiFootball = new api('fec9660e1fmsha52ec2f330972a6p1b3664jsnbdbf86af7e58');

//let get = apiFootball.get('v2/fixtures/live', '?')
//console.log(get)

const test = require('./app');
const Test = new test('API_KEY');

Test.get('v2/fixtures/live', '?').then((res) => {
    console.log(JSON.stringify(res, true, 1))
})

