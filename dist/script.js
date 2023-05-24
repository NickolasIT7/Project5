// 7dz
// let input 
// do {
// input = prompt ('введите число') as string
// }while (input?.length<1)
// const shift = +(prompt ('на сколько разрядов сдвинуть число?')as string)
// let newNumber = ''
// for (let i=shift;i<input.length;i++){
// newNumber += input[i]
// }
// for (let i=shift-1;i>=0;i--) {
// newNumber += input [i]   
// }
// alert (newNumber)
// 2pz
// let num = 1000
// let i = 0
// do { num/=2
// i++
// } while (num > 50)
// console.log ('num=',num, 'i=',i)
// dz10
// let userConfirmGht
// let userConfirmSht
// let userConfirmEqls
// let N0 = 51
// let N1 = 100
// alert ('загадать число от 0 до 100')
// do {
//   let userConfirmGht = confirm (`Ваше число больше ${N0} и меньше ${N1}?`)
// if (userConfirmGht) {
// N0 = N1/2 
// N1 = N0 + N1/2 
// }
// else {
// N1 = N0 
// N0 /= 2 
// }
// }while(N0!=N1)
// alert ('Ваше число ${N0}')
// Функции
// function имя(параметры, через запятую) {
//     /тело, код функции/
//   }
// let local = 'глобальная переменная'
//  function showMessage(local:any) {
//     local = 'локальная переменная'
//     console.log( 'Всем привет!' )
// return local
//   }
//   console.log(local)
//   console.log(showMessage(local))
function showMessage(from, text, devider) {
    if (devider === void 0) { devider = ':'; }
    console.log(from + devider + '' + text);
}
showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)
// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.
// Функция должна делать только то, что явно подразумевается её названием. 
// И это должно быть одним действием.
// Два независимых действия обычно подразумевают две функции, 
// даже если предполагается, что они будут вызываться вместе 
// (в этом случае мы можем создать третью функцию, которая будет их вызывать).
// function checkAge(age) {
//       return (age > 18) || confirm('Родители разрешили?');
//     } 
// function getSum(a:number, b=0, c=0, d=0, e=0) {
// return a+b+c+d+e
// }
// function getUserValues(text){
// return (prompt) (text)   
// }
// function min(a,b) {
//  if (a<b){
//  return a
//  }
//  else {return b 
// }
// }
// let a = getUserValues('первое число')
// let b = getUserValues('второе число')
// console.log (min(a,b))
// function getUserValues(text){
//     let temp = +(prompt(text) as string)   
//     return temp
// }
// function pow(chislo,stepen) {
//     return chislo**stepen
// }
// let a = getUserValues('введите число')
// let b = getUserValues('степень')
// console.log(pow(a,b))
var nothing;
console.log(nothing);
nothing = 2;
var sayHi = function () {
    console.log("Привет");
};
alert(sayHi);
var sayH = function () { return alert("Hello!"); };
sayH();
// Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
// Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
// Если функция была создана как часть выражения, то это “Function Expression”.
// Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
// Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения 
// достигает их.
//стрелочные функции
// Они бывают двух типов:
// Без фигурных скобок: (...args) => expression – 
// правая сторона выражения: функция вычисляет его и возвращает результат. 
// Скобки можно не ставить, если аргумент только один: n => n * 2.
// С фигурными скобками: (...args) => { body } – 
// скобки позволяют нам писать несколько инструкций внутри функции, 
// но при этом необходимо явно вызывать return, чтобы вернуть значение.
// let func123 = (arg1, arg2, ...argN) => expression;
// let func123 = function (arg1,arg, ...argN) {
//   return expression
// }
var sum;
sum = function (a, b) { return a + b; };
sum = function (a, b) {
    var s = a + b;
    return s;
};
// Всего существует 8 типов данных:
// number для целых и вещественных чисел,
// bigint для работы с целыми числами произвольной длины,
// string для строк,
// boolean для логических значений истинности или ложности: true/false,
// null – тип с единственным значением null, т.е. «пустое значение» или «значение не существует»,
// undefined – тип с единственным значением undefined, т.е. «значение не задано»,
// object и symbol – сложные структуры данных и уникальные идентификаторы; их мы ещё не изучили.
// Оператор typeof возвращает тип значения переменной.
var varFromServer = '' || 0 || 'not';
// Значения null и undefined особенные: они равны == только друг другу, но не равны ничему ещё.
/**
 * Возвращает x, возведённое в n-ную степень.
 * В случае, если n не целое или отрицательное, результат NaN
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
    if (n < 0)
        return NaN;
    if (Math.round(n) != n)
        return NaN;
    return Math.pow(x, n);
}
pow(2, 2);
