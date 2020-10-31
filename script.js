//Вывод введенных символов 
function input (exp){
    document.querySelector('.textview').value = document.querySelector('.textview').value + exp;
}
//Очистка input (кнопка "С")
function clean(){
    document.querySelector('.textview').value = '';
}
//удаление последнего символа
function back(){
    let exp = document.querySelector('.textview').value;
    document.querySelector('.textview').value = exp.substring(0,exp.length-1);
}
//Выполнить расчет кнопка "="
function equal(){
    exp = document.querySelector('.textview').value;
    if(exp){
        document.querySelector('.textview').value = eval(exp);
    }   
}
//Корень квадратный
function sqrt(){
    document.querySelector('.textview').value = Math.sqrt(eval(document.querySelector('.textview').value)) 
}
//Функция для вычисления процентов
function percent(){

    let exp = document.querySelector('.textview').value.split('');
    
    let regExp = /\d/;
    
    let percents = [];
    
    let operator = ''; 
    
    let result = '';
//Цикл проходит от конца масива exp и до первого оператора (*,/,+,-)
    for (let i = exp.length-1; i >= 0; i--){
//С помощью регулярного выражения если условие верно получаем число процентов 
//и записываем полученные данные в масив percents, а из массива exp удаляем полученые элементы
        if(exp[i].match(regExp) || exp[i]==='.' ){

            percents.push(exp[i]);
            delete exp[i];

        }else{
//если условие не верно значит это оператор, записываем его 
//в переменную operator и удаляем из массива exp, после прерываем цикл
            operator+=exp[i];
            delete exp[i];
            break;
        }
    }
// Что бы работать с числом процентов нужно перевернуть массив и разделить на 100 (10% = 0.1)
    percents = percents.reverse().join('')/'100';
// Оставшийся массив через join превращаем в строковое значение
// что бы удобно было работать с данными
    exp = eval(exp.join(''));
//Проверяем полученый оператор и выполняем нужные действия
    if(operator === '*'){
        result = exp * percents;
    }
    else if(operator === '-'){
      result = exp - (exp*percents);
    }else if(operator === '+'){
        result = exp + (exp*percents);

    }else if(operator === '/'){
        result = exp / percents;
    }
    //выводим результат в input 
    document.querySelector('.textview').value = result;
}
