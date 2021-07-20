var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;


// job = 'teacher';
// console.log(job);

// var $3years = 3;
// var johnMark = 'John and Mark'; 

// console.log(firstName + ' ' + age);

// var job, isMarries;
// job = 'teacher';
// isMarries = false;

// console.log(firstName + ' is a ' + age + 'year old' + job + '. Is he married?' + isMarries);

// //Variable mutation

// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + 'year old' + job + '. Is he married?' + isMarries);

// var lastName= prompt('what is his last name?');
// console.log(firstName + ' ' + lastName);

//logical operators
// ageJohn = 28;
// ageMark = 33;

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof operators
// console.log(typeof johnOlder);
// console.log(typeof ageJohn)
// console.log(typeof 'mark');
// console.log(typeof x);

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark)/2;
// console.log(average);

// //Multiple assignments

// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// x *= 2;
// console.log(x);
// x +=10;
// console.log(x);
// x--;
// console.log(x);

//BMI

// var massMark = 78; //
// var heightMark = 1.69; //meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// var markHigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI);



//if else statements

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married ');
// } else {
//     console.log(firstName + 'will hopefully marry soon')
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married ');
// } else {
//     console.log(firstName + 'will hopefully marry soon')
// }

//twernary operator

// var firstName = 'JOHN';
// var age  = 16;
// age >= 18 ? console.log(firstName + ' drinks bear. ') : console.log(firstName + ' drinks juice. ')

// var drink = age >= 18 ? 'bear' : 'juice';
// console.log(drink);



//switch statement
// var job = 'cop ';
// switch (job) {
//    case 'teacher':
//        console.log(firstName + 'teaches kids how to code');
//        break;
//     case 'designer':
//         console.log(firstName + 'designs beautiful websites');
//     case 'driver':
//         console.log(firstName + 'drives car');
//     default:
//         console.log(firstName + ' does something else ');    

// }

//truthy and falsy values 

//falsy: undefined, null, 0 , '', NaN
//truthy: NOT falsy values

// var height = 0 ;

// if(height || height === 0){
//     console.log('variable is defined');
// } else{
//     console.log('variable has NOT been defined');
// }


// var scoreJohn = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// var scoreMarry = (97 + 134 + 105) / 3;
// console.log(scoreJohn, scoreMike, scoreMarry);

// if(scoreMike > scoreJohn){
//     console.log('Mike wins')
// } else if (scoreJohn > scoreMike){
//     console.log('John wins')
// }

if ( scoreJohn > scoreMike && scoreJohn > scoreMarry){
    console.log('John wins')
} else if (scoreMike > scoreJohn && scoreMike > scoreMarry){
    console.log('marry wins')
} else {
    console.log('Marry wins')
}

