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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
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
// alert(sayHi)
var sayH = function () { return alert("Hello!"); };
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
//Объекты
//Создание пустого объекта
var user = {}; //синтаксис "литерал объекта"
var user1 = new Object(); //синтаксис "конструктор объекта"
user.age = 18;
user['two words'] = 'ok';
user[18] = 18;
user['two words'] = 'not';
console.log(user['18']);
var car = {
    wheels: 4,
    engine: 'v8',
    hp: 200,
    'two words': 'yes'
};
var horsePowers = 'hP';
console.log(car[horsePowers]);
delete car['two words'];
car.wheels = 5;
console.log(car);
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
// function showMessage1() {
//   console.log('Всем привет!');
// }
// showMessage1()
// function CurrTimeAndSeconds(hours, minutes, seconds) {
//   let TimeInSeconds = hours * 3600 + minutes * 60 + seconds
//   let AboutSeconds = +(prompt('на сколько увеличить время в секундах') as string)
//   let NewTimeInSeconds = TimeInSeconds + AboutSeconds
//   let hours2 = Math.floor(NewTimeInSeconds / 3600)
//   let minutes2 = Math.floor((NewTimeInSeconds - (hours2 * 3600)) / 60)
//   let seconds2 = Math.floor(NewTimeInSeconds%60)
//   let NewCurrentTime = `${hours2}:${minutes2}:${seconds2}`
//   // return NewCurrentTime;
//   console.log(NewCurrentTime)
// }
// CurrTimeAndSeconds(12,10,15)
// console.log(CurrTimeAndSeconds(12,10,15))
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объ-ектом.
// 1 Функция сложения 2-х объектов-дробей.
// 2 Функция вычитания 2-х объектов-дробей.
// 3 Функция умножения 2-х объектов-дробей.
// 4 Функция деления 2-х объектов-дробей.
// 5 Функция сокращения объекта-дроби.
var fraction1 = {
    numerator: 2,
    denominator: 5
};
var fraction2 = {
    numerator: 2,
    denominator: 8
};
console.log(fraction1.numerator + "/" + fraction1.denominator + " and " + fraction2.numerator + "/" + fraction2.denominator);
function maxDenominator(f) {
    var min = f.numerator < f.denominator ? f.numerator : f.denominator;
    for (var i = min; i > 1; i--) {
        if (f.numerator % i == 0 && f.denominator % i == 0)
            return i;
    }
    return 1;
}
function fractionReduction(f) {
    var denominator = maxDenominator(f);
    f.numerator /= denominator;
    f.denominator /= denominator;
    return f;
}
function fractionSubstraction(f1, f2) {
    var ajusted = fractionAjust(f1, f2);
    var sub = {
        numerator: ajusted.f1.numerator - ajusted.f2.numerator,
        denominator: f1.denominator
    };
    return fractionReduction(sub);
}
function fractionAjust(f1, f2) {
    var f1D = f1.denominator;
    var f2D = f2.denominator;
    f1.numerator *= f2D;
    f1.denominator *= f2D;
    f2.numerator *= f1D;
    f2.denominator *= f1D;
    return { f1: f1, f2: f2 };
}
function fractionMultiplication(f1, f2) {
    var mult = {
        numerator: f1.numerator * f2.numerator,
        denominator: f1.denominator * f2.denominator
    };
    return fractionReduction(mult);
}
function fractionDivision(f1, f2) {
    var div = {
        numerator: f1.numerator * f2.denominator,
        donominator: f1.denominator * f2.numerator
    };
    return fractionReduction(div);
}
function fractionSum(f1, f2) {
    var ajusted = fractionAjust(f1, f2);
    var sum = {
        numerator: ajusted.f1.numerator + ajusted.f2.numerator,
        denominator: ajusted.f1.denominator
    };
    return fractionReduction(sum);
}
var sumResult = fractionSum(fraction1, fraction2);
var subResult = fractionSubstraction(fraction1, fraction2);
var multResult = fractionMultiplication(fraction1, fraction2);
var divResult = fractionDivision(fraction1, fraction2);
console.log("sum = " + sumResult.numerator + "/ " + sumResult.denominator);
console.log("sub = " + subResult.numerator + "/ " + subResult.denominator);
console.log("mult = " + multResult.numerator + "/ " + multResult.denominator);
console.log("div = " + divResult.numerator + "/ " + divResult.denominator);
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
var newUser = {};
newUser.name = 'John';
newUser.surname = 'Smith';
newUser.name = 'Pete';
delete newUser.name;
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
var obj1 = { a: 1 };
var obj2 = { a: 1 };
console.log('obj1 === obj2', obj1 === obj2);
function isEmpty(obj) {
}
//Два одинаковых объекта никогда не будут равны
// У нас есть объект, в котором хранятся зарплаты нашей команды:
var salaries = {
    John: 100,
    Ann: '160$',
    Pete: 130
};
var salariesSum = 0;
for (var key in salaries) {
    salariesSum += parseFloat(salaries[key]);
}
console.log(salariesSum);
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
function multiplyNumeric(obj) {
    for (var key in obj) {
        if (typeof (obj[key]) == 'number')
            obj[key] *= 2;
    }
}
multiplyNumeric(salaries);
console.log(salaries);
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
var messageStr = "Привет!";
var phraseStr = messageStr;
console.log("messageStr", messageStr);
console.log('phraseStr', phraseStr);
phraseStr += 'User!';
console.log("messageStr", messageStr);
console.log('phraseStr', phraseStr);
// Два объекта равны только в том случае, если это один и тот же объект.
var mainUser = {
    name: "John",
    age: 30,
    work: {
        salari: 100
    }
};
var clone = {}; // новый пустой объект
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
clone = __assign(__assign({}, mainUser), { work: __assign({}, mainUser.work) });
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
console.log(clone);
clone.work.salari = 200;
console.log(mainUser.name); // все ещё John в первоначальном объекте
console.log(clone.name); //уже Pete
console.log(clone.work.salari);
// type News = {
//   h1: string,
//   image: string,
//   text: string,
//   paragraph: string,
//   tags?: [string],
// }
// const news: Array<News> = [
//   {
//     h1: 'getafe',
//     image: 'getafe1.jpg',
//     text: '23',
//     paragraph: '23',
//     tags: ['la-liga']
//   }
// ]
// for (let el of news) {
//   el.paragraph = el.text.split('\n')[0]
//   document.write(`${el.h1}`)
//   if (el.tags) {
//     for (let tag of el.tags) {
//       document.write(`${tags}`)
//     }
//   }
// }
// console.log(news)
var userObj = {
    address: {}
}; // пользователь без свойства "address"
// Мы не можем использовать ?. для записи т.к. опциональная цепочка ?. не имеет смысла в левой части присваивания.
// userObj?.adress.street = 'roz' //Левая часть выражения присваивания не может быть обращением к нему
// Так создаются сложные объекты необходимой конфигурации
var street; //может быть, а может и не быть
if (street && userObj.address) {
    userObj.address.street = 'roz';
}
else if (street && !userObj.address) {
    userObj.address = {};
    userObj.address.street = 'roz';
}
// console.log(userObj.address.street) // Ошибка!
console.log(user.address ? user.address.street : undefined); // развернутая запись
console.log((_a = userObj.address) === null || _a === void 0 ? void 0 : _a.street); // сокращенная запись 
// fetch ('http://jservice.io/api/random?count=1').
//   then((response) => {
//     return response.json()
//   })
// .then((data) =>{
//   console.log(data)
//  data =[]
//  console.log(data[0]?.category?.id)
// })
// console.log(JSON.stringify(news))
// let user = null;
// user?.name = "John"; // Ошибка, не работает
// то же самое что написать undefined = "John"
// obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
// obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
// obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.
// Мы должны использовать ?. осторожно, только там, где по логике кода допустимо,
//  что левая часть не существует. Чтобы он не скрывал от нас ошибки программирования, если они возникнут.
// Number ('12') тоже самое +'12'
var billion = 1000000000; //1 миллиард, буквально: 1 и 9 нулей
var billion1 = 1e9;
console.log(billion == billion1);
// 1e3 = 1 * 1000
// 1.23e6 = 1.23 * 1000000
// 1 делится на 1 с 3 нулями
// 1e-3 = 1 / 1000 (=0.001)
// 1.23 делится на 1 с 6 нулями
// 1.23e-6 = 1.23 / 1000000 (=0.00000123)
// Шестнадцатеричные, двоичные и восьмеричные числа
// 0x - префикс для записи в шестнадцатиричной системе счисления
console.log('oxf5', 0xff); //255
// 0b - префикс для записи в двоичной системе счисления
console.log('ob10010', 18);
// 0o - префикс для записи в восьмиричной системе счисления
console.log('0o377', 255);
// base может варьироваться от 2 до 36 (по умолчанию 10)
console.log('255..toString', 255..toString(2));
console.log('255..toString', 255..toString(8));
console.log('255..toString', 255..toString(16));
// Округление
// Одна из часто используемых операций при работе с числами – это округление.
// В JavaScript есть несколько встроенных функций для работы с округлением:
// Math.floor
// Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
console.log('Math.floor(3.1)', Math.floor(3.1));
// Math.ceil
// Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
console.log('Math.ceil(3.1)', Math.ceil(3.1));
// Math.round
// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
console.log('Math.round(3.1)', Math.round(3.1));
// Math.trunc (не поддерживается в Internet Explorer)
// Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
console.log('Math.trunc(3.1)', Math.trunc(3.1));
// Округление до n-го знака
// 1 способ
// Умножить и разделить.
// Например, чтобы округлить число до второго знака после запятой, 
// мы можем умножить число на 100, вызвать функцию округления и разделить обратно.
console.log('Math.floor(1.243456* 100) / 100 ', Math.floor(1.243456 * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23
// 2 способ
// Метод toFixed(n) округляет число до n знаков после запятой 
// и возвращает строковое представление результата.
console.log('1.234656.toFixed(2)', 1.234656.toFixed(2)); //1.24
console.log('90..toFixed(2)', 90..toFixed(2)); //90.00
console.log('90000.00.toLocaleString', 90000.00.toLocaleString('ru-RU')); //'90 000'
// Потеря точности
console.log(0.1.toFixed(20)); //// 0.10000000000000000555
// Можно ли обойти проблему? 
// Конечно, наиболее надёжный способ — это округлить результат используя метод toFixed(n):
// console.log('0.1+0.2',0.1+0.2)//0.30000000000000004
console.log('+(0.1+0.2).toFixed(2)', +(0.1 + 0.2).toFixed(2));
// Проверка: isFinite и isNaN
// Infinity (и -Infinity) — особенное численное значение, которое ведёт себя в точности как математическая бесконечность ∞.
// NaN представляет ошибку.
// Эти числовые значения принадлежат типу number, но они не являются «обычными» числами, поэтому есть функции для их проверки:
// isNaN(value) преобразует значение в число и проверяет является ли оно NaN:
// alert( isNaN(NaN) );  true
// alert( isNaN("str") );  true
// Значение NaN уникально тем, что оно не является равным ничему другому, даже самому себе:
// alert('NaN === NaN', NaN === NaN ); false
// Методы Number.isNaN и Number.isFinite – это более «строгие» версии функций isNaN и isFinite. 
// Они не преобразуют аргумент в число, а наоборот – первым делом проверяют,
// является ли аргумент числом (принадлежит ли он к типу number).
// Не стоит считать Number.isNaN и Number.isFinite более «корректными» версиями функций isNaN и isFinite. 
// Это дополняющие друг-друга инструменты для разных задач.
// Сравнение Object.is
// Существует специальный метод Object.is, который сравнивает значения 
// примерно как ===, но более надёжен в двух особых ситуациях:
// Работает с NaN: 
console.log('Object.is(NaN, NaN) === true', Object.is(NaN, NaN) === true); //здесь он хорош.
// Значения 0 и -0 разные: 
console.log('Object.is(0, -0) === false', Object.is(0, -0) === false);
// это редко используется, но технически эти значения разные.
// Во всех других случаях Object.is(a, b) идентичен a === b.
// parseInt и parseFloat
console.log(parseInt('0xff', 16)); //255
// Math.random()
// Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
// Math.max(a, b, c...) / Math.min(a, b, c...)
// Возвращает наибольшее/наименьшее число из перечисленных аргументов.
//Правильное округление 6.35
console.log(6.35.toFixed(20)); // 6.34999999999999964473
console.log(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
//случайное число
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//случайное число в выровненной верятностью появления
function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    return Math.round(rand);
}
console.log(randomInteger(1, 3));
console.log('Math.min(1,1,5,7,8,15,47,32)', Math.min(1, 1, 5, 7, 8, 15, 47, 32));
console.log('Math.max(1,1,5,7,8,15,47,32)', Math.max(1, 1, 5, 7, 8, 15, 47, 32));
console.log('Math.max(..[1,1,5,7,8,15,47,32])', Math.max.apply(Math, [1, 1, 5, 7, 8, 15, 47, 32])); //Можем развернуть массив используя spread оператор
// 10. Заросите у пользователя целое число и выведите в ответ, четное число или нет. 
// В задании используйте логические операторы, не надо использовать if или switch.
// let numFromUser = +(prompt('Введите целое число') as string)
// const evenOdd = (numFromUser%2==0 && 'четное') || 'не четное'
// console.log(evenOdd)
var guestList = "Guests:\n * John\n * Pete\n * Mary\n";
console.log(guestList);
console.log("My\n".length); // 3 (\ - один спецсимвол)
// let testStr = `Hello`;
// получаем первый символ
// alert( testStr[0] ); // H
// alert( testStr(0) ); // H
// получаем последний символ
// alert( testStr[testStr.length - 1] ); // o
// alert( testStr.at(-1) ); // o
for (var _i = 0, _b = "Hello"; _i < _b.length; _i++) {
    var char = _b[_i];
    console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}
//testStr[0] = 'h'; // ошибка, разрешено только чтение
//console.log( testStr[0] ); // не работает
var testStr = 'Hi Alex';
testStr = testStr[0].toLowerCase() + testStr.slice(1, 5) + testStr[5].toUpperCase + testStr.slice(6); //заменяем строку
console.log(testStr);
// alert('Interface'.toUpperCase()); // INTERFACE
// alert('Interface'.toLowerCase()); // interface
// Поиск подстроки
// Первый метод — str.indexOf(substr, pos).
// Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, 
// на которой располагается совпадение, либо -1 при отсутствии совпадений.
var TestStr = 'Widget with id';
console.log(TestStr.indexOf('Widget')); // 0, потому что подстрока 'Widget' найдена в начале
console.log(TestStr.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру
console.log(TestStr.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
// let index = 0
// while (true) {
//  index = testStr.indexOf("id",index)
//  if (index !=-1) {
// console.log('Подстрока "id" найдена на позиции', index)
//  index++ 
//  } else {
// break
//  }
// }
// Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.
// Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки 
// или начинающееся до (включительно) определённой позиции.
console.log('testStr.lastIndexOf("id")', testStr.lastIndexOf("id"));
// includes, startsWith, endsWith
console.log("Widget with id".includes("Widget")); // true
console.log("Hello".includes("Bye")); // false
console.log("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")); // true, "get" — окончание "Widget
console.log("Widget".endsWith("get") ? 'Строка "Widget" заканчивается на подстроку "get"' : 'Строка "Widget" не заканчивается на строку "get"');
// Получение подстроки
// достаточно запомнить slice
// str.slice(start [, end])
// Возвращает часть строки от start до (не включая) end.
console.log('"Widget with id".slice(7)', testStr.slice(7));
// str.substring(start [, end])
// Возвращает часть строки между start и end (не включая) end.
// Это — почти то же, что и slice, но можно задавать start больше end.
// Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.
// str.substr(start [, length])
// Возвращает часть строки от start длины length.
// В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции
console.log('z > Z', 'z' > 'Z');
console.log("z".codePointAt(0)); // 122
console.log("Z".codePointAt(0)); // 90
console.log(String.fromCodePoint(128555)); //😫
console.log('😫.lenght'); //2
var str = '';
for (var i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
// Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:
// Отрицательное число, если str меньше str2.
// Положительное число, если str больше str2.
// 0, если строки равны.
console.log('Österreich' > 'Zealand'); // true.Сравнение по кодам символа
console.log('Österreich'.localeCompare('Zealand')); // -1. Сравнение по положению в алфавите
//Методы replace и replaceAll возвращают новую строку
str = "Ослик Иа-Иа посмотрел на виадук";
console.log(str.replace('Иа', 'юю')); //меняет только первое совпадение
//метод split(simb) разбивает строку на массив строку по символу-разделителю simb
console.log(str.split(''));
//метод join(simb) соединяет массив в строку символом-разделителем simb
console.log(str.split('').join('_'));
console.log([0, 1, 2, 3, 5, 5].join('_'));
str.trim(); // — убирает пробелы в начале и конце строки.
console.log('"     s  t  r     ".(trim)', "        s     t           r      ".trim());
// str.repeat(n) — повторяет строку n раз.
console.log('"abc".repeat(3)', "abc".repeat(3));
// Написать функцию, которая принимает 2 строки и сравнивает их длину. 
// Функция возвращает 1, если в первой строке больше символов, чем во второй; 
// -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.
function compare(a, b) {
    if (a.lenght > b.lenght)
        return 1;
    else if (a.lenght < b.lenght)
        return -1;
    else
        return 0;
}
// Массивы
// Существует два варианта синтаксиса для создания пустого массива:
var arr = new Array();
console.log(arr);
arr = new Array(12, 15, 35);
console.log(arr);
arr = new Array(10); //Если указать только одно число, то создастся пустой массив на n элементов
console.log('Array(10)', arr);
arr = [];
console.log('[]', arr);
// Элементы массива нумеруются, начиная с нуля
// Мы можем получить элемент, указав его номер в квадратных скобках
var fruits = ["Яблоко", "Апельсин", "Слива"];
console.log(fruits[0]); // Яблоко
console.log(fruits[1]); // Апельсин
console.log(fruits[2]); // Слива
//Также работает метод at()
// console.log('fruits.at(1)',fruits.at(1))
//В отличии от строк, мы можем заменить элемент
fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
//...Или добавить новый к существующему массиву 
fruits[3] = 'Лимон'; //теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]
//Для добавления элементов в массив существуют специальные методыю. По индексу обычно не добавляют
//Если надо добавить элементов в конец массива можем использовать один из вариантов:
fruits.push('Слива');
fruits[fruits.length] = 'Слива';
//Общее число элементов массива содержится в его свойстве length:
console.log(fruits); // ["Яблоко", "Апельсин", "Слива","Груша", "Лимон", "Слива"];
console.log(fruits.length); // 6
//Массивы ведут себя также как объекты в плане того, что значения хранятся по ссылку
var fruits2 = fruits; //Сохранили в переменную fruits2 ссылку на массив переменной fruits
fruits2.push('Банан');
console.log(fruits); //в массив переменной fruits добавили еще один элемент
//console.log([]==[])//всегда false, потому что ссылки разные
console.log('{}.toString()', {}.toString()); //[object Object]
console.log('[1,2,[3,4],function(){}, {}].toString()', [1, 2, [3, 4], function () { }, {}]);
var arr3 = [1, 'dasd', [1, 2, ['ftsrad', 43]], [12, 35]];
console.log("arr3", arr3);
//Самый простой способ сделать сложный массив, состоящий из примитивов плоским
console.log("arr3.split(',')", arr3.toString().split(','));
fruits.length = 3; //Изменили количество элементов в массиве. Все, что не вошли - исчезли
fruits.length = 7; //Если увеличить длину массива, появятся новые индексы, но элементы будут пустые
console.log('fruits', fruits); //(3) ["Яблоко", "Апельсин", "Груша"]
//fruits.lengt = -1.Ошибка. Длина массива не может быть меньше 0.
//Методы pop/push, shift/unshift
// Эффективность
// Методы push/pop выполняются быстро, а методы shift/unshift – медленно.
//pop и shift удаляют первый(shift) и последний(pop) элемент и возвращают его значение
function pop(arr) {
    var el = arr[arr.length - 1]; //читаем последний элемент
    arr.length = arr.length - 1; //удаляем последний элемент
    return el; //возвращаем последний элемент
}
function shift(arr) {
    var el = arr[0]; //читаем последний элемент
    arr = arr.slice(1); //удаляем последний элемент
    return el; //возвращаем последний элемент
}
//push и unshift добавляют элементы в начало(unshift) или конец(push) массива и возвращают новую длину массива
function push(arr, elements) {
    arr = __spreadArrays(arr, elements);
    return arr.length;
}
function unshift(arr, elements) {
    arr = __spreadArrays(arr, elements);
    return arr.length;
}
//Если мы работаем с массивом, как с обычным объектом.
//  Способы оптимизации, используемые для массивов, в этом случае не подходят, 
//  поэтому они будут отключены и никакой выгоды не принесут.
// Варианты неправильного применения массива:
// Добавление нечислового свойства, например: arr.test = 5.
// Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет).
// Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.
// Массив следует считать особой структурой, позволяющей работать с упорядоченными данными. 
// Для этого массивы предоставляют специальные методы. Массивы тщательно настроены в движках JavaScript для работы 
// с однотипными упорядоченными данными, поэтому, пожалуйста, используйте их именно в таких случаях. 
// Если вам нужны произвольные ключи, вполне возможно, лучше подойдёт обычный объект {}.
// Перебор элементов
// Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам:
arr = ["Яблоко", "Апельсин", "Груша"];
console.log('классический цикл for', arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Но для массивов возможен и другой вариант цикла, for..of:
fruits = ["Яблоко", "Апельсин", "Слива"];
// проходит по значениям. Нет доступа к индексам
console.log('for..of', fruits);
for (var _c = 0, fruits_1 = fruits; _c < fruits_1.length; _c++) {
    var fruit = fruits_1[_c];
    console.log(fruit);
}
// Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению, но в большинстве случаев этого достаточно. А также это короче.
// Технически, так как массив является объектом, можно использовать и вариант for..in:
arr = ["Яблоко", "Апельсин", "Груша"];
for (var key in arr) {
    console.log('arr[key] ', arr[key]); // Яблоко, Апельсин, Груша
}
// Но на самом деле это – плохая идея. Существуют скрытые недостатки этого способа:
// Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.
// В браузере и других программных средах также существуют так называемые «псевдомассивы» – объекты, которые выглядят, как массив. То есть, у них есть свойство length и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл for..in выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие «лишние» свойства могут стать проблемой.
// Цикл for..in оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение скорости выполнения может иметь значение только при возникновении узких мест. Но мы всё же должны представлять разницу.
// В общем, не следует использовать цикл for..in для массивов.
//Многомерные массивы
// Массивы могут содержать элементы, которые тоже являются массивами. 
// Это можно использовать для создания многомерных массивов, например, для хранения матриц:
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]); // 5, центральный элемент
console.log('fruits', fruits);
arr = __spreadArrays(fruits); //Копируем массив 
fruits.push('Кокос');
console.log('fruits', fruits);
console.log('arr', arr); //arr не изменился
// pz2 - 2
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.
// 1 Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
//  2 Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3 Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.
var purchase = [
    {
        name: 'a',
        count: 10,
        purchased: true
    },
    {
        name: 'b',
        count: 5,
        purchased: false
    },
    {
        name: 'c',
        count: 3,
        purchased: true
    },
    {
        name: 'd',
        count: 1,
        purchased: true
    },
];
var purchasedol = document.querySelector('.purchase');
var showPurchaseButton = document.querySelector('.showPurchase');
var addPurchaseButton = document.querySelector('.addPurchase');
var setPurchasedButton = document.querySelector('.setPurchased');
function showPurchase() {
    if (purchasedol) {
        purchasedol.innerHTML = "";
    }
    for (var _i = 0, purchase_1 = purchase; _i < purchase_1.length; _i++) {
        var el = purchase_1[_i];
        if (!el.purchased) {
            if (purchasedol) {
                purchasedol.innerHTML += "<li>" + el.name + " \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043A\u0443\u043F\u0438\u0442\u044C " + el.count + " \u0448\u0442\u0443\u043A </li>";
            }
        }
    }
    for (var _a = 0, purchase_2 = purchase; _a < purchase_2.length; _a++) {
        var el = purchase_2[_a];
        if (el.purchased) {
            if (purchasedol) {
                purchasedol.innerHTML += "<li>" + el.name + " \u043A\u0443\u043F\u043B\u0435\u043D\u043E " + el.count + " \u0448\u0442\u0443\u043A </li>";
            }
        }
    }
}
function addPurchase() {
    var name = prompt('Введите название покупки');
    var count = +prompt('Введите количество');
    var find = false;
    for (var _i = 0, purchase_3 = purchase; _i < purchase_3.length; _i++) {
        var el = purchase_3[_i];
        if (el.name == name) {
            find = true;
            el.count += count;
        }
    }
    if (!find) {
        purchase.push({
            name: name,
            count: count,
            purchased: false
        });
    }
    showPurchase();
}
function setPurchased() {
    var name = prompt('Введите название покупки');
    for (var _i = 0, purchase_4 = purchase; _i < purchase_4.length; _i++) {
        var el = purchase_4[_i];
        if (el.name == name) {
            el.purchased = true;
        }
        showPurchase();
    }
}
showPurchaseButton === null || showPurchaseButton === void 0 ? void 0 : showPurchaseButton.addEventListener('click', showPurchase);
addPurchaseButton === null || addPurchaseButton === void 0 ? void 0 : addPurchaseButton.addEventListener('click', addPurchase);
setPurchasedButton === null || setPurchasedButton === void 0 ? void 0 : setPurchasedButton.addEventListener('click', setPurchased);
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() 
// в тегах <p></p>, добавив в открывающий тег атрибут style со всеми сти-лями, перечисленными в массиве.
var styleRed = [
    {
        name: 'color',
        value: 'red'
    },
    {
        name: 'text-decoration',
        value: 'underline'
    },
];
var styleGreen = [
    {
        name: 'color',
        value: 'green'
    },
    {
        name: 'font-size',
        value: '20px'
    },
];
var printTextDiv = document.querySelector('.print.Text');
function printText(style, text) {
    var styleStr = '';
    for (var _i = 0, style_1 = style; _i < style_1.length; _i++) {
        var el = style_1[_i];
        styleStr += el.name + ":" + el.value + ";";
    }
    if (printTextDiv) {
        printTextDiv.innerHTML += "<p style= " + styleStr + " </p>";
    }
}
printText(styleRed, 'Хетафе ');
printText(styleGreen, 'Мадрид ');
var rectangle = {
    x: 10,
    y1: 18,
    x2: 16,
    y2: 0
};
function getRectWidth(rectangle) {
    return rectangle.x2 - rectangle.x1;
}
function getRectHeight(rectangle) {
    return rectangle.y1 - rectangle.y2;
}
function getRectArea(rectangle) {
    return getRectWidth(rectangle) * getRectHeight(rectangle);
}
function getRectperimeter(rectangle) {
    return getRectWidth(rectangle) * 2 + getRectHeight(rectangle) * 2;
}
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
// количества и цены за единицу товара. Написать следующие функции.
// 1.Распечатка чека на экран.
// 2.Подсчет общей суммы покупки.
// 3.Получение самой дорогой покупки в чеке.
// 4.Подсчет средней стоимости одного товара в чеке.
var check = [
    {
        product: 'bread',
        count: '3',
        price: '50'
    },
    {
        product: 'milk',
        count: '2',
        price: '70'
    },
    {
        product: 'cheese',
        count: '2',
        price: '180'
    },
];
function showCheck(arr) {
    console.log(arr);
}
showCheck(check);
function getSum(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        sum += el.count * parseFloat(el.price);
    }
    return sum;
}
console.log(getSum(check));
function maxPurchase(arr) {
    var res = __spreadArrays(arr);
    var maxCost = 0;
    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
        var product = res_1[_i];
        var cost = product.price * product.count;
        if (cost > maxCost) {
            maxCost = cost;
        }
    }
    return maxCost;
}
console.log(maxPurchase(check));
function averagePurchase(arr) {
    var res = __spreadArrays(arr);
    var averagePurch = 0;
    var sum = 0;
    for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
        var product = res_2[_i];
        sum += product.price * product.count;
    }
    return (sum / res.length).toFixed(2);
}
console.log(averagePurchase(check));
// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1 Вывод на экран всех аудиторий.
// 2 Вывод на экран аудиторий для указанного факультета.
// 3 Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
var audience = [
    {
        name: 'yandex',
        count: '20',
        faculty: 'html'
    },
    {
        name: 'mail',
        count: '12',
        faculty: '1c'
    },
    {
        name: 'rambler',
        count: '18',
        faculty: 'mysql'
    }
];
function showAudience(arr) {
    console.log(arr);
}
showAudience(audience);
function showAudienceForFaculty(arr) {
    var faculty = prompt('Введите название факультета');
    var auditories = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var el = arr_2[_i];
        if (el.faculty == faculty) {
            auditories.push(el);
        }
    }
    return auditories;
}
console.log(showAudienceForFaculty(audience));
function showAudienceForGroup(arr) {
    var students = +prompt('Введите количество студентов');
    var group = [];
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var el = arr_3[_i];
        if (el.count > students) {
            group.push(el);
        }
    }
    return group;
}
console.log(showAudienceForGroup(audience));
// 1 Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.
//номер идентификатора символа в строке
var string1 = 'k234jas2s';
function GetCount(arr) {
    var letter = 0;
    var numb = 0;
    var sign = 0;
    for (var _i = 0, string1_1 = string1; _i < string1_1.length; _i++) {
        var el = string1_1[_i];
    }
}
//Создать еще один массив из 5 случайных чисел и написать
// следующие функции. Функция принимает 2 массива и возвращает новый массив, 
// в котором собраны все элементы из двух массивов без повторений.
var arr1 = [1, 1, 2, 3, 5, 8, 7, 9, 10, 7];
var arr2 = [5, 1, 6, 3, 2];
function getUnicArray(a, b) {
    var arr = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var el = a_1[_i];
        if (!arr.includes(el))
            arr.push(el);
    }
    for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
        var el = b_1[_a];
        //for(let i=0;i<arr.lenght;i++)
        //console.log('arr[+i+],arr[i]')
        if (!arr.includes(el))
            arr.push(el);
    }
    return arr;
}
console.log(getUnicArray(arr1, arr2));
for (var _d = 0, _e = ['a', 'b', 'c', 'f', 'g']; _d < _e.length; _d++) {
    var asd = _e[_d];
    if (asd == 'c') {
        console.log('встретили символ "c" и перешли на новую интерацию, игнорирую все следующие строки тела цикла');
        continue;
    }
    if (asd == 'f')
        console.log('встретили символ "f" и вышли из цикла, следующие символы не попадут в переменную char');
    break;
    console.log('asd', asd);
}
//как работает includes в массиве 
var arrIncludes = function (arr, findEl) {
    for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
        var el = arr_4[_i];
        if (el === findEl)
            return true;
    }
    return false;
};
console.log(arrIncludes(arr1, '1'));
//как работает includes в строке 
var strIncludes = function (str, subStr) {
    for (var i = 0; i <= (str.length - subStr.length); i++) {
        if (str.slice(i, i + subStr.length) === subStr)
            return true;
    }
    return false;
};
console.log(strIncludes('strxcsdasd', 'xcs'));
function powRecursive(x, n) {
    // Условие выхода
    if (n == 1) {
        return x;
    }
    else {
        console.log('x =', x, 'n =', n);
        // Рекурсивная функция вызывает сама себя, пока не сработает условие выхода
        return x * powRecursive(x, n - 1); //2 * 2 * 2 
    }
}
console.log(powRecursive(2, 5)); // 8
//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// три варианта решения:
// С использованием цикла. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии. Пример работы вашей функции:
function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumTo(100));
function sumTo2(n) {
    return n == 0 ? n : n + sumTo2(n - 1);
}
function sumTo3(n) {
    return n * (n + 1) / 2;
}
console.log(sumTo(100)); // 5050
