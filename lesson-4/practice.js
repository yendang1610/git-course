// let month = 11;
// switch(month){
//     case 11:
//         console.log(' having 30 days');
//         break;
//     case 12:
//         console.log('having 31 days');
//         break;
//     default:
//         console.log('invalid month');
// }

// let result = '5' == 5;
// let result1 = '5' === 5;

// console.log(result);
// console.log(result1);

let student = {
    name: 'Yen',
    age: 40,
    city: 'HN',
    street: 'PVD'
};

for (let property in student) {
    //console.log(property);
    console.log(student[property]);
}

let number = [4, 5, 6];
for (let index in number) {
    console.log(index);
    console.log(`index: ${index} : ${number[index]}`);
}

// forEach

let number1 = [4, 5, 6];

number1.forEach((val, index) => {
    console.log(`${index} : ${val}`);
});

// for ... of

let name = ['Loi', 'Uyen', 'Yen'];

//break

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

//continue 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}


