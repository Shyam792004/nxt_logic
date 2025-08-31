 /* console.log("hello");
        console.log("happy new year")
        alert("hi"); >*/


        //variables
        // let score=0;
        // score=10;
        // console.log("score is :"+score);

        //example
        // let amt=1000;
        // console.log("your bill amount is Rs."+amt);

        //constant
        /*<const pi=3.14;
        pi=5;
        console.log(pi); >*/

        //var - old version of js
        // var val=10
        // console.log(val);

        //------------------------------------------
        // operator

        // arithmetic operators: + - * ** / % ++ --
            //  ** - square value *** - cube value
        // assignment operators: = += -= *= /= %= **=
        // comparision operators: == === != !== > < >= <= ?
        // logical operators: && || !
        // bitwise operators: & | ~ ^ << >> >>>

        //-------------------------------------------

        //prompt
        //user input
        // let name=prompt("whats your name?");
        // , & + will used to concat
        // console.log("hi",name);//hi shyam , automatic space
        // console.log("hi"+name);//hishyam 
        // let tickets=prompt("how many tickets do you want");
        // console.log("hi",name,"ypou should pay", tickets*20);
        

        // let a=prompt("enter a number");//4
        // console.log(a+10);//410

        // let b=prompt("enter a number");//4
        // console.log(Number(b)+10);//14k

        //-------------------------------------------
        //string- grp of characters

        // let str1="hello world";
        // let str2="js";

        // console.log(str1+str2);
        // str1.concat(str2);
        // console.log(str1+str2);
        
        // console.log(str1.concat("**",str2));
        /*
        partition string

        slice(Start)
        slice(-Start)
        slice(start,end)-->str2.slice(4,10)
        substring(start,end)
        substr(start,length)-->from start to it will print the length i.e from 4 to upto 10 letters
        */

        //str.replace('Strive','Aim');
        //str.trim -->remove teh exgtra spaces
        //str.trimStart()-->remove only the string space
        //str.trimend()--> remove the end space

        //let bill='Rs.10;
        //bill.length;
        //bill.padEnd(7,0); -->add 0 at the end upto to the output become 7 inputs
        //output-->Rs.1000
 
        // str1[1]
        // str1[10]
        // str1.charAt(1)
        // str1.charCodeAt(1)-->display the unicode value

        //str1.indexOf('e')
        //str1.lastIndexOf('e')
        //str1.lastIndexOf('z')
        //str1.search('llo') output 2
        //str1.include('llo') output true
        //str1.startsWith('S') output false
        //str1.startsWith('d') output true

        //--------------------------------------------
        //string literals
        // let fn="shyam"
        // let mn="sundhar"
        // let ln="selvaraj"
        // console.log(fn+" "+mn+" is the son of MR."+ln)

        //backtick
        // let msg=`${fn} ${mn} is the son of MR.${ln}`;
        // console.log(msg);
        
        //example
//         let m="5"
//         let n="$95"
    
//         //backtick
//         let msg=` you have ${m} items in your cart
//  your bill amount is ${n}`;
//         console.log(msg);



//-------------------------------------------------------
        //array
        

//-------------------------------------------------------
  //if else

//-------------------------------------------------------
  //switch




//------------------------------------------------------
//function
// function isPositive(num)
// {
//     return num>0;
// }
// console.log(isPositive(-4));

// function sayHello()
// {
//     console.log('hello');
// }
// sayHello()

// function findProduct(a,b)
// {
//     return a*b;
// }
// console.log(findProduct(4,7));

//--------------------------------------------------
//callback

function greetConsole(name)
{
    console.log('hello',name);
}
function greetheading(name)
{
    const heading=document.querySelector('h1');
    heading.innerHTML='hello'+name;
}
function greet(callback)
{
    console.log(callback);
    callback('ram')
}

// greet(greetConsole)
// greet(greetheading)

greet(naem=>
{
    const heading=document.querySelector('h1');
    heading.innerHTML='hello'+name;
}
)
console.clear();
//For Each

arr=['deepa','suresh','ramya','shyamkk']
arr.forEach(print)
function print(val)
{
    console.log(val);
}