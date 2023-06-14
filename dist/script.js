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
var news = [
    {
        h1: 'getafe',
        image: 'getafe1.jpg',
        text: '23',
        paragraph: '23',
        tags: ['la-liga']
    }
];
for (var _i = 0, news_1 = news; _i < news_1.length; _i++) {
    var el = news_1[_i];
    el.paragraph = el.text.split('\n')[0];
    document.write('${el.h1}');
    if (el.tags) {
        for (var _b = 0, _c = el.tags; _b < _c.length; _b++) {
            var tag = _c[_b];
            document.write('${tags}');
        }
    }
}
console.log(news);
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
alert(randomInteger(1, 3));
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
for (var _d = 0, _e = "Hello"; _d < _e.length; _d++) {
    var char = _e[_d];
    console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}
//testStr[0] = 'h'; // ошибка, разрешено только чтение
//console.log( testStr[0] ); // не работает
var testStr = 'Hi Alex';
testStr = testStr[0].toLowerCase() + testStr.slice(1, 5) + testStr[5].toUpperCase + testStr.slice(6); //заменяем строку
console.log(testStr);
alert('Interface'.toUpperCase()); // INTERFACE
alert('Interface'.toLowerCase()); // interface
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
