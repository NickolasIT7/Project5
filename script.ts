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

function showMessage(from: string, text: any, devider = ':') { // параметры: from, text
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

var nothing
console.log(nothing)

nothing = 2

const sayHi = function () {
  console.log("Привет")
}
// alert(sayHi)

let sayH = () => alert("Hello!");
// sayH();

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

// let sum
// sum = (a: number, b: number) => a + b
// sum = (a: number, b: number) => {
//   let s = a + b
//   return s
// }

// Всего существует 8 типов данных:

// number для целых и вещественных чисел,
// bigint для работы с целыми числами произвольной длины,
// string для строк,
// boolean для логических значений истинности или ложности: true/false,
// null – тип с единственным значением null, т.е. «пустое значение» или «значение не существует»,
// undefined – тип с единственным значением undefined, т.е. «значение не задано»,
// object и symbol – сложные структуры данных и уникальные идентификаторы; их мы ещё не изучили.
// Оператор typeof возвращает тип значения переменной.

let varFromServer = '' || 0 || 'not'

// Значения null и undefined особенные: они равны == только друг другу, но не равны ничему ещё.

/**
 * Возвращает x, возведённое в n-ную степень.
 * В случае, если n не целое или отрицательное, результат NaN
 * 
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x: number, n: number) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  return x ** n
}

pow(2, 2)

//Объекты
//Создание пустого объекта
const user = {} as any //синтаксис "литерал объекта"
const user1 = new Object() //синтаксис "конструктор объекта"

user.age = 18
user['two words'] = 'ok'
user[18] = 18
user['two words'] = 'not'
console.log(user['18'])

const car = {
  wheels: 4,
  engine: 'v8',
  hp: 200,
  'two words': 'yes',
} as any
let horsePowers = 'hP'
console.log(car[horsePowers])
delete car['two words']
car.wheels = 5
console.log(car)

// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")

// function makeUser(name:string, age:number) {
//   return {
//     name: name,
//     age, //имя переменной ставновится свойством, а ее значение - значением
//     // ...другие свойства
//   };
// }

// let user2 = makeUser("John", 30);
// console.log(user2)

function showMessage1() {
  console.log('Всем привет!');
}
showMessage1()

function CurrTimeAndSeconds(hours, minutes, seconds) {
  let TimeInSeconds = hours * 3600 + minutes * 60 + seconds
  let AboutSeconds = +(prompt('на сколько увеличить время в секундах') as string)
  let NewTimeInSeconds = TimeInSeconds + AboutSeconds
  let hours2 = Math.floor(NewTimeInSeconds / 3600)
  let minutes2 = Math.floor((NewTimeInSeconds - (hours2 * 3600)) / 60)
  let seconds2 = Math.floor(NewTimeInSeconds%60)
  let NewCurrentTime = `${hours2}:${minutes2}:${seconds2}`
  // return NewCurrentTime;
  console.log(NewCurrentTime)
}

CurrTimeAndSeconds(12,10,15)
// console.log(CurrTimeAndSeconds(12,10,15))

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объ-ектом.
// 1 Функция сложения 2-х объектов-дробей.
// 2 Функция вычитания 2-х объектов-дробей.
// 3 Функция умножения 2-х объектов-дробей.
// 4 Функция деления 2-х объектов-дробей.
// 5 Функция сокращения объекта-дроби.




const fraction1 = {
numerator:2,
denominator:5,  
}

const fraction2 = {
  numerator:2,
  denominator:8,  
  }

console.log(`${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator}`)

function maxDenominator (f:any) {
  const min = f.numerator < f.denominator ? f.numerator : f.denominator
  for (let i = min; i>1; i--) {
  if (f.numerator % i == 0 && f.denominator % i == 0)
  return i
  } 
  return 1
}
function fractionReduction (f:any) {
const denominator = maxDenominator (f)
f.numerator /= denominator
f.denominator /= denominator
return f
}

function fractionSubstraction (f1:any,f2:any) {
  const ajusted = fractionAjust (f1,f2)
 const sub = {
 numerator:ajusted.f1.numerator - ajusted.f2.numerator,
 denominator:f1.denominator, 
 } 
 return fractionReduction(sub)
}
 
function fractionAjust (f1:any, f2:any) {
 const f1D = f1.denominator
 const f2D = f2.denominator
 f1.numerator *=f2D
 f1.denominator *=f2D
 f2.numerator *=f1D
 f2.denominator *=f1D
 return {f1,f2}
}

function fractionMultiplication (f1:any, f2:any) {
const mult = {
  numerator: f1.numerator * f2.numerator,
  denominator:f1.denominator * f2.denominator,
 }
 return fractionReduction(mult)
}

function fractionDivision (f1: any, f2: any) {
const div = {
 numerator: f1.numerator * f2.denominator,
 donominator: f1.denominator * f2.numerator,
}
return fractionReduction(div)
}

function fractionSum (f1:any, f2:any) {
const ajusted = fractionAjust (f1, f2)
const sum = {
numerator:ajusted.f1.numerator + ajusted.f2.numerator,
denominator:ajusted.f1.denominator
}
return fractionReduction(sum)
}

const sumResult = fractionSum (fraction1, fraction2)
const subResult = fractionSubstraction (fraction1, fraction2)
const multResult = fractionMultiplication (fraction1, fraction2)
const divResult = fractionDivision (fraction1, fraction2)
console.log (`sum = ${sumResult.numerator}/ ${sumResult.denominator}`)
console.log (`sub = ${subResult.numerator}/ ${subResult.denominator}`)
console.log (`mult = ${multResult.numerator}/ ${multResult.denominator}`)
console.log (`div = ${divResult.numerator}/ ${divResult.denominator}`)

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const newUser = {} as any
newUser.name = 'John'
newUser.surname = 'Smith'
newUser.name = 'Pete'
delete newUser.name

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
const obj1 = {a:1}
const obj2 = {a:1}
console.log ('obj1 === obj2', obj1 === obj2)

function isEmpty(obj:any) {

}

//Два одинаковых объекта никогда не будут равны

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: '160$',
  Pete: 130
}

let salariesSum = 0
for (let key in salaries) {
salariesSum += parseFloat(salaries[key])
}
console.log(salariesSum)

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
function multiplyNumeric(obj:any) {
  for (let key in obj) {
  if (typeof (obj[key]) == 'number') 
  obj[key]*=2
  }
}
multiplyNumeric(salaries)
console.log(salaries)

// object+function
// let currentTime = {
// hours:11,
// minutes:47,
// seconds:50,    
// }
// function currTime(time:any) {
//   return `${time.hours}:${time.minutes}:${time.seconds}`
// }
// function addMinutes(time:any, minutes:number) {
//   let hours = time.hours
//   let newMinutes = time.minutes + minutes
//   if (newMinutes>59) {
//     hours += Math.floor(newMinutes/60)
//     newMinutes %= 60 
//   }
//   return {
//     hours:hours,
//     minutes:newMinutes,
//     seconds:time.seconds,    
//   }
// }
// console.log(currTime(currentTime))
// const minutes = +(prompt('Input minutes to add') as string)
// console.log(currTime(addMinutes(currentTime, minutes)))

let messageStr = "Привет!";
let phraseStr = messageStr;

console.log (`messageStr`,messageStr)
console.log ('phraseStr', phraseStr)
phraseStr +='User!'
console.log (`messageStr`,messageStr)
console.log ('phraseStr', phraseStr)

// Два объекта равны только в том случае, если это один и тот же объект.

let mainUser = {
  name: "John",
  age: 30,
  work: {
  salari:100  
  }
} as any

let clone = {} as any; // новый пустой объект

// давайте скопируем все свойства user в него
//1 способ клонирования объектов.Копирование свойств объекта в цикле
// for (let key in mainUser) {
//   if (typeof(mainUser[key])=='object') {
//     clone[key] = {}
//     for (let innerKey in mainUser) {
//      clone [key][innerKey] = mainUser[key][innerKey] 
//     }
// } else {
//   clone[key] = user[key]
// }
// }
// 2 Spred оператор (развертывание)
clone = {...mainUser, work: {...mainUser.work}}
//  3 Object.assign
// clone = Object.assign ({}, mainUser, {work: {...mainUser.work}})
//  Для плоских объектов доступны 2 варианта записи
//  Object.assign(clone,mainUser)
//  clone = Object.assign({},mainUser)
//  4 Преобразование в JSON (строка) и назад в объект. Не надо думать о вложенности,
//  но теряются Symbol и методы
// clone = JSON.parse(JSON.stringify(mainUser))
//  5 structedClone().Выдает ошибку, если в объекте присутствует метод
// clone  = structuredClone(mainUser)

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные
console.log(clone)
clone.work.salari = 200
console.log( mainUser.name ); // все ещё John в первоначальном объекте
console.log( clone.name ) //уже Pete
console.log (clone.work.salari)