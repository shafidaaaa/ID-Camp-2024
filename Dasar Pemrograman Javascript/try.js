const age = 10;
const name = 'Dicoding';

// console.log('aku ${name}, umur ${age} tahun.');


// Object
const buah = {};
const bukanBuah = {
    columnss: 'Buah',
    nama: ['Alpukat', 'Apel'],
    harga: [10000, 5000],

    tahunHarga : {
        2016: [2000, 4000],
        2017: [4000, 6000],
        2018: [1000, 7000]
    }
};

// console.log(bukanBuah.nama);
// bukanBuah.tahunHarga[2016][0] = 3500;
// delete bukanBuah.tahunHarga[2016];
// console.log(bukanBuah.tahunHarga);
// Comment

/* Comment
banyak
baris */



const arr = [1, 2];
// console.log(typeof arr);
// console.log(Array.from('ghenwjnjci'))
// console.log(Array.from(['ff', 'fdfd', 'sdfd', 'dfc']))

// const nama = ['jdsdj', 'baba'];

// const [nama1, nama2] = nama;
// console.log(nama1);


const map = new Map(
    [
        ['Apel', 5000],
        ['Srikaya', 7000]
    ]
);


// console.log(map);
// console.log(map.get('Apel'));

const obj1 = { first_name: 'Bayu'};
const obj2 = { last_name: 'Adi'};
const newObj = {...obj1, ...obj2};
// console.log(newObj);

const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];

// console.log(newArray);

function terimaArgDalamBentukArray(nNumber, ...StateManyArgs) {
    // console.log('No. ', nNumber);
    // console.log('Apa aja', StateManyArgs);
    // console.log(StateManyArgs.length);
}

terimaArgDalamBentukArray([1, 2, 34], 'O', 'C', 'D');


const Newbuah = ['Apel', 'Pisang', 'Anggur', 'Ceri'];

const [first, second, ...restOfBuah] = Newbuah; //the rest of the array is in the var restOfBuah
// console.log(first);
// console.log(second);
// console.log(restOfBuah);

// console.log(['apple', ...['banana']])

// price = 500;
// isMoreThan200 = price > 200;
// let result = isMoreThan200 ? 'Benar': 'Salah Bro';

// console.log(result);

// const fruit = 'non';

// switch (fruit) {
//     case 'banana':
//         console.log('It\'s not apple');
//         break;
//     case 'apple':
//         console.log('It\'s apple');
//         break;
//     default:
//         console.log('Guess aahahahha');
// }

// const animals = {name: 'Panda', origin: 'China'};

// for (const animal in animals) {
//     console.log(`${animal} bernilai ${animals[animal]}`);
// }

// animalssi = ['Panda', 'Rat'];

// for (const animal of animalssi) {
//     console.log(animal);
// }

// let i = 0

// do {
//     console.log(`angka ke-${i}`);
//     i++;
// } while (i<=5);

// try {
//     consol.log('Mulai Program'); //coba taruh error di sini
//     console.log('Akhiri Program');
// } catch (err) {
//     console.log('Cek Error');
// } finally {
//     console.log('Mulai Program');
// }


function categorizeNumber(input) {
    /**
     * TODO:
     * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
     * Dengan ketentuan sebagai berikut:
     * 1. Jika input bukan number, bangkitkan (throw) error.
     * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
     * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
     * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
     * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
     * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
     */

    if (typeof input !== "number") {
        throw new Error("Input harus berupa bilangan bulat!");
    }

    if (input < 0) {
        return "Negatif";
    } else if (input === 0) {
        return "Nol";
    } else if (input > 0) {
        let is_prime = true;
        for (let i = 2; i <= Math.sqrt(input); i++) { // Optimize prime check
            if (input % i === 0) {
                is_prime = false;
                break;
            }
        }

        if (is_prime) {
            return "Prima";
        } else if (input % 2 === 0) {
            return "Genap";
        } else {
            return "Ganjil";
        }
    }
}
  
  // Contoh
// console.log(categorizeNumber(15)); // Output: "Ganjil"
// console.log(categorizeNumber(12)); // Output: "Genap"
// console.log(categorizeNumber(17)); // Output: "Prima"
// console.log(categorizeNumber(0)); // Output: "Nol"
// console.log(categorizeNumber(-5)); // Output: "Negatif"

// try {
//     categorizeNumber('abc');
// } catch (error) {
//     console.log(error.message);
// } // Output: "Input harus berupa bilangan bulat"
  


// JANGAN PAKAI console.log(console.log("Nol"));
// function Entah(angka) {
//     if (z < 0) {
//         console.log("Negatif");
//     }
//     else if (z === 0) {
//         console.log("Nol");
//     }
// }

// z = 0;
// Entah


function Chara(name, age) {
    this.name = name;
    this.age = age;
}

Chara.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}

const person1 = new Person('Ali', 40);
const person2 = new Person('Sarah', 20);

// console.log(person1.name);
// console.log(person2.age);

// person1.eat();
// person2.eat();

class Visitor {
    constructor(nama, umur, hobi) {
        this.nama = nama;
        this.umur = umur;
        this.hobi = hobi;
    }

    // STATIC METHODS 
    print_identitas() {
        console.log(`nama = ${this.nama}`);
        console.log(`umur = ${this.umur}`);
        console.log(`hobi = ${this.hobi}`);
    }

}

class Member extends Visitor {
    constructor(nama, age, pilihan_paket) {
        super(nama);
        this.age = age;
        this.pilihan_paket = pilihan_paket;
    }

    // print_identitas_member() {
    //     return this.print_identitas();
    // }


    // PRIVATE METHOD 
    #membership_morning() {
        console.log("Morning Everybody!");
    }

    print_membership() {
        this.#membership_morning();
        console.log(`Selamat untuk ${this.nama} yang telah menempuh hidup selama ${this.age} tahun. Dan selamat menikmati atas Pilihan Paket ${this.pilihan_paket}`);

    }



}

const visitor1 = new Visitor('Bayne', 19, 'Membaca');
// visitor1.print_identitas();

// INSTANCE METHODS
// method for 1 instance(visitor1)
visitor1.sayNuUh = function() {
    console.log("Nuh Uh");
}
// visitor1.sayNuUh();



// const visitor2 = new Member("Liam", 22, "Menulis");
// const visitor2 = new Member("Liam", 20, "12 Bulan");
// visitor2.print_membership();



class CoffeMachine {

    #temperature = 90;
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.#temperature = this.#defaultTemperature();
    }

    set temperature(temperature) {
        console.log("You are not allowed to change the temperature");
    }

    get temperature() {
        return this._temperature;
    }

    #defaultTemperature() {
        return 100
    }

    makeCoffee() {
        console.log("Membuat kopi dengan suhu", this.#temperature);
    }
}

// const coffee = new CoffeMachine(100);
// console.log('Sebelum diubah = ', coffee.temperature);
// coffee.temperature = 60;
// console.log('Setelah diubah = ', coffee.temperature);
// coffee.makeCoffee();




class Spices {
    constructor(spice_name, price, year) {
        this.spice_name = spice_name;
        this.price = price;
        this.year = year;
    }

    print_all() {
        console.log(this.spice_name);
        console.log(this.price);
        console.log(this.year);
    }
}

class Indonesian_Spices extends Spices {
    constructor(spice_name, price, year) {
        super(spice_name);
        this.price = price;
        this.year = year;
    }

    print_all() {
        console.log(this.spice_name);
        console.log(this.price);
        console.log(this.year);
    }
}
function canSmell(Spices) {
    return {
        smelly: () => {
            console.log(`${Spices} bisa tercium dari jarak 2 meter.`);
        }
    }
}

function createSpices(spices_name, harga, tahun) {
    const spice = new Spices(spices_name, harga, tahun);
    return Object.assign(spice, canSmell(spice))
}



// const bawang = new Spices('bawang', 500, 900);
// const bawang2 = new Indonesian_Spices(bawang.spice_name, 1000, 2025);

// bawang.print_all();
// bawang2.print_all();


// const bawang = createSpices('bawang', 500, 2024);
// bawang.smelly(); //assign it to the smelly not canSmell


// FUNCTIONAL PROGRAMMING

const nameess = ['Harry', 'Ron', 'Hermione'];

const newNameessWithExcMark = [];

// YANG BIASA DIGUNAKAN ITU IMPERATIF
for (let i=0; i < nameess.length; i++) {
    newNameessWithExcMark.push(`${nameess[i]}!`);
}

// console.log(newNameessWithExcMark);

// NAH INI BARU DEKLARATIF
const newNameessWithExcMark_part2 = nameess.map((name) => `${name}!`);
// console.log(newNameessWithExcMark_part2);

// angka = [1, 6, 8, 23];
// console.log(angka.map((setiapAngka) => `${setiapAngka+1}`));

function apply(operation, ...args) {
    return operation(...args);
}

function to_logarithmic(...args) {

    for (let arg of args) {
        if (arg <= 0) {
            return 0;
        } else if (arg>=1) {
            return 1;
        } else {
            return Math.log([arg]);
        }
    }
}

// const results = apply(to_logarithmic, -.86, -3, 0.5);

// console.log(results);


function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);

        return result;
    }
}


function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

const memoizeSumArray = memoize(sumArray);
const largeArray = Array.from({length: 5000}, (_, i) => i + 1);

// console.time('Memoized Sum First Call');
// console.log('Total: ', memoizeSumArray(largeArray));
// console.timeEnd('Memoized Sum First Call');

// console.time('Memoized Sum Second Call (Cached)');
// console.log('Total: ', memoizeSumArray(largeArray));
// console.timeEnd('Memoized Sum Second Call (Cached)');


function adjectify(adjective) {
    return function (noun) {
        return `${noun} ${adjective}`
    }
}

function multiplyBy(x) {
    return function(y) {
        return x * y;
    }
}


function nambahinGaje(gaje) {
    return function(sesuatu) {
        return `${sesuatu} ${gaje}`;
    }
}

const coolifier = adjectify('keren');
const funnifier = adjectify('seru');

const multiplyByFive = multiplyBy(5);

// console.log(coolifier('Dicoding'));
// console.log(funnifier('Javascript'));
// console.log(multiplyByFive);
// console.log(multiplyByFive(7));
// console.log(multiplyByFive(10));

const nambahApa = nambahinGaje('Gaje');
// console.log(nambahApa('R'));

function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g) {
    return (x) => {
        return f(g(x));
    }
}

const addOneAndSquare = compose(square, addOne);
// console.log(addOneAndSquare(2));


const tryNumber = [1, 5, 6, 7];
const tryOperation = tryNumber.map((everyNumber) => everyNumber/2);

// console.log(tryOperation);

function generateNumber(n) {
    const result = [];
    for (let counter = 0; counter < n+999; counter += 10) {
        result.push(counter);
    }
    return result;
}

// console.log(generateNumber(1));

// REKURSI

function generateNumberRecursion(n) {
    if (n < 0) {
        return [];
    }

    return[...generateNumberRecursion(n - 1), n];
}

// console.log(generateNumberRecursion(100));

function registerEmail(person, email) {
    return Object.assign(person, {email});
}

const personnn = {
    name: 'John',
    username: 'johndoe'
};

const personWithEmail = registerEmail(personnn, 'john@gmail.com');

// console.log(person);
// console.log(personWithEmail);

function AddReference(refs, judul_journal, penulis, tahun, penerbit, link) {
    return Object.assign(refs, {judul_journal, penulis, tahun, penerbit, link});
}

const refs = {}

const ref1 = AddReference(refs, 
    "Dampak Sosial Media pada remaja", 
    "Jonathan Soe", 
    2021, 
    "Sosiologi Jurnal", 
    "www.journal-sosiologi.org/124552.pdf"
);

// console.log(refs);

const ref2 = AddReference(refs, 
    "Perbandingan Artificial Neural Network dengan Convolutional Neural Network", 
    "Sapti Sandara", 
    2022, 
    "Jurnal Informatika Indonesia", 
    "www.inforJournal-Indonesia.org/3209293.pdf"
);

// console.log(refs);

// Object assign hanya mengganti, tidak bisa menyimpan variabel sebelumnya yg telah di assign 

function max(arrayOfNumber) {
    // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
    return [...arrayOfNumber]
        .sort((a, b) => a - b)
        .pop();
}

function reegisterEmail(personnsns, email) {
    // menggunakan spread operator untuk menduplikasi nilai person
    return { ...personnsns, email };
}


const aa = [9, 1, 2, 5, 7];
// console.log(aa);

const bbb = [...aa].shift(); //cara lain untuk duplikat array
// console.log(bbb);

const bbb2 = aa.map((a) => a); //cara lain duplikat
// console.log(bbb2);


const truthyArray = [1, '', 
    'Halo', 
    null, 0, 
    'Harr', 100, 
    -3, .6
].filter((item) => Boolean(item));

// console.log(truthyArray);
const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleStudents = students.filter((students) => students.score > 85);
console.log(eligibleStudents);
console.log(eligibleStudents.name);

const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);

// array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])

// Object.freeze(eligibleStudents.name);
// eligibleStudents.score[0] = 20;
// console.log(eligibleStudents);



console.log(5 == '5');