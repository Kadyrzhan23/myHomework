//Задания-1
function infoString(str){
    let summNumber = str.match(/\d/g);
    let summDigit = str.match(/[a-zA-ZА-Яа-я]/g);
    let otherSigns = str.match(/[^\wА-Яа-я]/g);
     return `Колл букв: ${summDigit.length} 
             Колл цыфр: ${summNumber.length}
             Колл других знаков:${otherSigns.length}`
 }
 // console.log(infoString('1hbbhh33524523blblkhорм///////./.,.,.,.,./.,оhghgghg'))
 //-----------------------------------------------------------------------------
 //Задания-2
 let num1 = [
     {num:11,stri:'Одинадцать'},
     {num:12,stri:'Двинадцать'},
     {num:13,stri:'Тринадцать'},
     {num:14,stri:'Четырнадцать'},
     {num:15,stri:'Пятьтнадцать'},
     {num:16,stri:'Шестнадцать'},
     {num:17,stri:'Семьнадцать'},
     {num:18,stri:'Восемнадцать'},
     {num:19,stri:'Девятьнадцать'},
 ]
 let num2 = [
     {num:1,stri:' '},
     {num:2,stri:'Двадцать'},
     {num:3,stri:'Тридцать'},
     {num:4,stri:'Сорок'},
     {num:5,stri:'Пятьдесят'},
     {num:6,stri:'Шестдесят'},
     {num:7,stri:'Семьдесят'},
     {num:8,stri:'Восемдесят'},
     {num:9,stri:'Девяноста'},
 ]
 let num3 = [
     {num:0,stri:''},
     {num:1,stri:'Один'},
     {num:2,stri:'Два'},
     {num:3,stri:'Три'},
     {num:4,stri:'Четыри'},
     {num:5,stri:'Пятьт'},
     {num:6,stri:'Шест'},
     {num:7,stri:'Семь'},
     {num:8,stri:'Восем'},
     {num:9,stri:'Девять'},
 ]
 function reformationNumber(num){
     let n1 = ''
     let n2 = ''
     let result
     // Если число меньше 20
     if(num > 10 && num < 20){
         for(let i = 0;i < num1.length;i++){
             if(num === num1[i].num){
                 console.log(num1[i].stri)
             }
         }
     }else{
         let number = [] ;
         number = numberToArray(num)
         console.log(number)
         //Определения первый цифры
         for(let i = 0;i < num2.length;i++){
             if(number[0] === num2[i].num){
                 n1 = num2[i].stri
             }
         } 
         //Определения второй цифры
         for(let i = 0;i < num3.length;i++){
             if(number[1] === num3[i].num){
                 n2 = num3[i].stri
             }
         } 
     }
     return result = `${n1} ${n2}`
 }
 // console.log(reformationNumber(89))
 //-----------------------------------------------------------------------------
 //Задания-3
 function replaceLetter(item) {
     let newLetter = [];
     let numReg = /\b\d+\b/
     let letter = item.toUpperCase().split('');
     for (let i = 0; i < letter.length; i++) {
       if(letter[i] == item[i])
         letter[i] = letter[i].toLowerCase();
     }
     for(let i = 0;i < letter.length;i++){
         newLetter.push(letter[i].replace(numReg,'_'))
     }
     return newLetter.join('')
   }
 //   console.log(replaceLetter('Привет Меня Зовуд ... Мне 23 год'));
 //-----------------------------------------------------------------------------
 //Задания-4
 function textCamelCase(str) {
       return str.replace(/-(\w)/g, (s, l) => l.toUpperCase());
   }
 //   console.log(textCamelCase('font-size'))
 //-----------------------------------------------------------------------------
 //Задания-5
 function abbreviation(str){
     let regexp = /\b[а-яА-Яa-zA-Z]/gi;
     let result = str.match(regexp)
     return result.join('').toUpperCase()
 }
 // console.log(abbreviation('cascading style sheets'))
 // console.log(abbreviation('hin viv sip'))
 // console.log(abbreviation('object oriented programming'))
 //-----------------------------------------------------------------------------
 //Задания-6
 function concatOfStrings(...strings) {
     
     let n = strings.length;
     let newText = "";
     for (let i = 0; i < n; i++) {
         let text = strings[i];
         newText += text + ' ';
     }
     return newText;
 }
 // console.log(concatOfStrings('Привет','как','дела' ))
 //-----------------------------------------------------------------------------
 //Задания-7
 function calculator(str){
     let operator = str.match(/[\/,\+,\*,\-]/)
     let num1 = str.match(/\d+/g)
     let newNum1 = Number(num1[0])
     let newNum2 = Number(num1[1])
     let result;
     if(operator[0] === '+') result = newNum1 + newNum2
     else if(operator[0] === '-') result = newNum1 - newNum2
     else if(operator[0] === '*') result = newNum1 * newNum2
     else if(operator[0] === '/') result = newNum1 / newNum2
     return result
 }
 // console.log(calculator('23+23'))
 //-----------------------------------------------------------------------------
 //Задания-8
 function infoUrl(str){
     let url = new URL(str);
     console.log("url.protocol: " + url.protocol); // Протокол с двоеточием в конце
     console.log("url.domen: " + url.host); // Имя хоста + порт
     console.log("url.origin: " + url.origin); // Базовый URL (Протокол + Имя хоста + порт)
     console.log("url.pathname: " + url.pathname); // первый слэш + Строка пути после хоста до знака вопроса
 }
 // infoUrl('https://mystat.itstep.org/ua/about')
 
 //-----------------------------------------------------------------------------
 //Задания-9
 function splitRows(str,separator){
     let result = []
     let a = ''
     for(let i = 0;i < str.length;i++){
         if(str[i] !== separator) a += str[i]
         if(str[i] === separator){
             result.push(a)
             a = ''
         } 
     }
     result.push(a)
     return result.join()
 }
 // console.log(splitRows('“10/08/2020”','/'))
 //-----------------------------------------------------------------------------
 //Задания-10
 //Не поняль задачу
 //-----------------------------------------------------------------------------
 
 
 
 
 
 function numberToArray(number) {
       let array = number.toString().split("");//stringify the number, then make each digit an item in an array
       return array.map(x => parseInt(x));//convert all the items back into numbers
 }
 ;
 