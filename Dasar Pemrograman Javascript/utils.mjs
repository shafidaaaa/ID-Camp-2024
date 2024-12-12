// PROMISE 
function promiseTry(rightt, notRight) {
    setTimeout(() => {
        console.log('Melakukan sesuatu sebelum Promise Selesai');

        const angka = Math.random();

        if (angka === 0) {
            rightt('DONE');
        } else {
            notRight(new Error("Still haven't reach 0. Don/'t be sad and try again."));
        }
    }, 2000);
}

export function doSomething() {
    return new Promise(promiseTry);
}