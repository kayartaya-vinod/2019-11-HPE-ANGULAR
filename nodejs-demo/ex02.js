const axios = require('axios');

console.log('Start of script');
axios.get('http://localhost:3000/contacts/22')
    .then(resp => resp.data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log('End of script');
