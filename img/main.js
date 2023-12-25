// console.log('Hello from external JS file');

// INPUT ////////////////////
// let age = prompt('How old are you?');
// console.log(age);

// let isDelete = confirm('Are you sure you want to delete this?');
// console.log(isDelete);

// if (a > 4) {
//   console.log('');
// }

// let a = 3 + 4;

// NAMING ///////////////////////////
// let $firstName = 'John';
// let last_name = 'Doe';

// let son1 = 34;
// let son2 = 45;

// let age = 34;
// let Age = 35;

// let a = 56;
// let age = 45;

// let if = 56 // XXX

// COMMENTS /////////////////
/*
let first_name = 'John'; // under_score
let FirstName = 'John'; // Pascal
let firstName = 'John'; // camelCase
*/

// VARIABLES ////////////////////////
// var a = 3;
// let b = 4;
// const c = 5;
// a = a * 2;
// b = b * 2;
// // c = c * 2;
// console.log(a, b, c);

// let d;
// console.log(d);

// let c = 45;
// c = 'Hello';

// let a = 3,
//   b = 4,
//   c = 5;

// let a = 3;
// let b = 4;
// let c = 5;

// console.log(d); // Undeclared

// let d;
// console.log(d); // undefined

// const PI = 3.1415;

// const KARTOSHKA_NARXI = 4000;

// ARITHMETIC OPERATORS //////////////
// let a = 10;
// let b = 5;
// let c;

// c = a + b; // ADD
// c = a - b; // SUBTRACT
// c = a * b; // MULTIPLY
// c = a / b; // DIVIDE
// c = a ** b; // POWER
// c = a % b; // MODULE

// console.log(c);

// console.log(typeof 45);
// let a = 'Hello';
// console.log(typeof a);
// console.log(typeof true);

// if (typeof a == 'number') {

// }

// let a = '34';
// console.log(typeof a);

// let a = 45;
// console.log(-a);

// PREFIX ////////////////
// let a = 34;
// console.log(++a);
// console.log(a++);
// let b = ++a;
// let b = a++;
// console.log(a, b);

// let a = 34;
// // let b = --a;
// let b = a--;
// console.log(a, b);

// DARSDA KO'RILADIGAN MASALALAR //////////

// BEGIN-1 /////////////////////
// let a = 30;
// let a = +prompt('Kvadratning tomonini kiriting: ');
// let P = 4 * a;
// console.log(P);

// let b = a ** (1 / 2) // ILDIZ ////////






/* Begin 1 */
// let a = +prompt('Togri tortburchakning tomonlarini kiriting: a = ');
// let b = +prompt('Togri tortburchakning tomonlarini kiriting: b = ');
// let S = a * b;
// let P = 2 * (a + b);
// console.log("Togri tortburchakning perimetri " + P);
// console.log("Togri tortburchakning yuzasi " + S);



/* Begin 2 */
// let d = +prompt('Aylana diametrini kiriting: d = ');
// let pi = 3.14;
// let L = pi * d;
// console.log("Aylana diametrini " + L);



/* Begin 3 */
// let a = +prompt('Kubning tomonini kiriting: a = ');
// let V = 3 * a;
// let S = 6 * (a ** 2);
// console.log("Kubning tola sirti " + S);
// console.log("Kubning hajmi " + V);



/* Begin 4 */
// let a = +prompt('Parelelepepedning tomonini kiriting: a = ');
// let b = +prompt('Parelelepepedning tomonini kiriting: b = ');
// let c = +prompt('Parelelepepedning tomonini kiriting: c = ');
// let V = a * b * c;
// let S = 2 * ( a*b + a*c + b*c );
// console.log("Parelelepepedning tola sirti " + S);
// console.log("Parelelepepedning hajmi " + V);



/* Begin 5 */
// let a = +prompt('a = ');
// let b = +prompt('b = ');
// let M = (a + b) / 2;
// console.log(a + ' + ' + b + ' sonlarining orta arifmetigi ' + M);



/* Begin 6 */
// let a = +prompt('Togri tortburchakning katetini kiriting: a = ');
// let b = +prompt('Togri tortburchakning katetini kiriting: b = ');
// let c =  (a**2 + b**2) ** 0.5;
// let P = a + b +c;
// console.log("Gipotenuzasi " + c);
// console.log("Perimetri " + P);



/* Begin 7 */
// let r1 = +prompt('r1 = ');
// let r2 = +prompt('r2 = ');
// let pi = 3.14
// let S1 = pi * r1;
// let S2 = pi * r2;
// let S = S1 - S2;
// console.log("S1 = " + S1);
// console.log("S2 = " + S2);
// console.log("S = " + S);



/* Begin 8 */
// let L = +prompt('Aylana uzunligini kiriting L = ');
// let pi = 3.14;
// let R;
// let S;
// R = L / (2 * pi);
// S = pi * R**2;
// console.log("R = " + R);
// console.log("S = " + S);



/* Begin 9 */
// let x1 = +prompt('x1 = ');
// let y1 = +prompt('y1 = ');
// let x2 = +prompt('x2 = ');
// let y2 = +prompt('y2 = ');
// let L = ((x1-x2)**2 + (y1-y2)**2) ** 0.5;
// console.log("L = " + L);



/* Begin 10 */
// let a = +prompt("A = ");
// let b = +prompt("B = ");
// let c = +prompt("C = ");
// let x;

// x = a;
// a = b;
// b = c;
// c = x;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log("NATIJA");
// console.log(a);
// console.log(b);
// console.log(c);



/* Begin 11 */
// let x = +prompt('x = ');
// let y = 4*(x-3)**6 - 7*(x-3)**3 + 2;
// console.log(y);



/* Begin 12 */
// let a = +prompt('a = ');
// let A3 = a**3;
// let A6 = a**6;
// let A9 = a**9;
// let A15 = a**15;
// console.log(A3);
// console.log(A6);
// console.log(A9);
// console.log(A15);



/* Begin 13 */
// let Tf = +prompt('Farangeyt = ');
// let Ts = (Tf-32)*5/9;
// console.log('Selsiy' + Ts);



/* Begin 14 */
// let ShNarx = +prompt('Shokolad narxi = ');
// let KNarx = +prompt('Konfed narxi = ');
// // // Bu yerda shokolad va konfetning ogirligi ahamiyatga ega emas 
// let Farq = ShNarx - KNarx;
// console.log('Farqi' + Farq);






/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
/* Begin 1 */
