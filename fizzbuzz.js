//iterating the integers from 1 to qoo using for loop
for(i=1;i<=100;i++){
    if(i%3==0&&i%5==0)//condition to check if the integer is multiples of both 3 & 5
        console.log(i+"FizzBuzz");//displays if integer is multiple by both 3 & 5
        else if(i%3==0)//condition to check if the integer is multiple of 3
            console.log(i+" Fizz");//displays if integer is multiple by 3
            else if(i%5==0)//condition to check if the integer is multiple of 5
                console.log(i+" Buzz");//displays if integer is multiple by 5
                else
                    console.log(i);//displays the output to the console,if all the conditions are failed            
}