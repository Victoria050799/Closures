//Переписать функцию создания счётчика из урока так, 
//чтобы при вызове счётчика с числовым аргументом внутреннее значение счётчика не увеличивалось на единицу, 
//а устанавливалось в соответствии с переданным аргументом.

//const counter = createCounter();
//counter(); // 1
//counter(10); // 10
//counter(); // 11

createCounter=() =>{
    let counter = 1;
    return (x) => {
        if(counter[x=0]) return counter [x];
        const result = x+1;
        counter[x]=result;
        return result;
     }
    
};


const counter1 = createCounter();
console.log(counter1());
console.log(counter1(10));
console.log(counter1());


// Я не могу понять как это сделать.
// У меня условия идут на все три значения.
// Не знаю почему при console.log(counter1(10)); не поменялось значение 10+1?
 