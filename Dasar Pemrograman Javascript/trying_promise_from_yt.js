// const p = new Promise((resolve, reject) => {
//     const a = 1 + 1;
//     if (a==2) {
//          resolve('Success');
//     } else {
//         reject('Failed');
//     }
// })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// });

const settt = [
    {
        delay: 100,
        simulateError: false,
    },
    {
        delay: 50,
        simulateError: true,
    },
];

function fetchingbro(data) {
    data.map((item) => (item.delay, item.simulateError))
    
}

console.log(fetchingbro(settt));