let a = 0.1;
let b = 0.2;
console.log((a+b).toFixed(1));

let c = +"1";
let d = 2;
console.log(c+d);

let flash = prompt("Сколько гб флешка?")
alert( Math.floor(flash*1024/820) + " Файлов поместится на флешку")

let money = prompt("Сколько грн в кошельке?")
let chocolate = prompt("Сколько грн стоит шоколадка?")
let chocolateCanBuy = Math.floor(money/chocolate)
let shortChenge = money % chocolate;
alert(chocolateCanBuy + " шоколадок можно купить, и останеться " + shortChenge + " грн")

let number = prompt("Введите трехзначное число"), result = 0;
while (number) {
    result *= 10;
    result += number % 10;
    number = Math.floor(number / 10);
}
alert(result + " это число наоборот")

let vklad = prompt("Какую сумму вложить на 2 месяца (под 5% годовых)?")
let percent = vklad/100*5/6
alert("Вы получите " + percent.toFixed(2))

let i = 2 && 0 && 3 //выводит 0
console.log(i);
let j = 2 || 0 || 3 //выводит 2
console.log(j);
let k = 2 && 0 || 3 //выводит 3
console.log(k);