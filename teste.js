const data = "2021-11-19T20:19:25.000Z"

console.log(data.split('T')[0].split('-').reverse().join('/'));
