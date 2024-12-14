import { doSomething } from "./utils.mjs";

// function onFulfilled(doSomethingData) {
//     console.log(doSomethingData);
// }

// function onRejected(doSomethingError) {
//     console.log(doSomethingError);
// }

// doSomething().then(onFulfilled, onRejected);


async function promiseWithAsyncAwait() {
    console.log('Start');

    const result = await doSomething();
    console.log(result);

    console.log('End');
}

promiseWithAsyncAwait();