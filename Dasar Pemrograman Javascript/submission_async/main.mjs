import { API, sampleErrorData, sampleSuccessData } from './support.mjs';



/* Jadi, di dalam function processData 
Kakak lakukan perulangan map pada parameter data (data.map) 
lalu di dalam map Kakak pakai method API.fetch 
yang telah diimpor lalu isi dengan dua argumen, 
yaitu item.delay, item.simulateError. 
Hasil perulangan data.map ini kemudian tampung di variabel, 
dan variabelnya diproses lagi di dalam Promise.all(variabel) yang di return.*/
/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
async function processData(data) {
  // kode di bawah hanya untuk melihat nilai data. Silakan hapus untuk menjawab kuis.
    const fetchPromises = data.map((item) => 
        API.fetch(item.delay, item.simulateError)

    );

    // Promises = new Promise((resolve, reject) => {
    //     if (res) {
    //         resolve("Success");
    //     } else {
    //         reject("Error Fetching Data");
    //     }
    // });

    return Promise.all(fetchPromises);

    // return Promise.resolve(data);
}

// processData(sampleErrorData).then(console.log(new Exception(`Error from delay ${sampleErrorData.delay}`))).catch(console.log(Error('Error sample Error Data'))); // Throw exception: Error from delay 50
// processData(sampleSuccessData).then(console.log(`Data from delay 100 ${sampleSuccessData.delay}`)).catch(console.log(Error('Error sample Success Data'))); // expected output: ['Data from delay 100', 'Data from delay 50']
processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']