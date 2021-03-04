const path = require('path');
const fs = require('fs')


let chirpArray = [
    {
        name: "ksdjfsdkl",
        chirp: "sdfewwer"
    },
    {
        name: "hdfjfj",
        chirp: "weoijfdj"
    },
    {
        name: "kds111111",
        chirp: "sdf8327482974982"
    },
    {
        name: "ghufdjhdjv",
        chirp: "seiruifr"
    },
    {
        name: "zmnxcvbnmsd",
        chirp: "sdejfejgeer"
    }
]

let chirpJSON = JSON.stringify(chirpArray);

fs.writeFile('chirps.json', chirpJSON, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log(JSON.stringify(chirpArray))

