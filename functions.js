// const person={
//     name:"shyam",
//     age:21,
// };

// function printName(name)
// {
//     console.log(person.name);
//     console.log(name);
// }

// printName();

// printName("sundhar");
// printName(person.age);


// //passing the object as parameter

// function printPerson2(person) 
// {
//     console.log(person.name);
//     console.log(person.age);
// }

// printPerson2(person);
// //default value
// function printPerson3(person={name:"Default name",age:0}) 
// {
//     console.log(person.name);
//     console.log(person.age);
// }

// printPerson3();

// //passing any array
// function printPerson4(...arg) 
// {
//     console.log(arg);
// }

// printPerson4(person.name,person.age,'Sam');
//------------------------------------------------------------
//how to return the value
// const man={
//     firstname:'makesh',
//     lastname:'makesh',
//     age:12
// }

// function man1(man)
// {
//    const name=man.firstname+' '+man.lastname;
//    const name2=[man.firstname,man.lastname];
//    return name2;
// //    return name;
// //    console.log(name);
// }

// const name=man1(man);
// console.log(name);
// const name2=man1(man);
// console.log(name2);

//-------------------------------------------------
// inner function
// function getFullName(firstName,lastName)
// {
//   function joint(name1,name2)
//   {
//     const name=name1+' '+name2;
//     return name;
//   }
//   const fullName=joint(firstName,lastName)
//   return fullName;

// }
// let fullName=getFullName('hello','world');

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//anonymous function

// const entirename=function(firstName,lastName)
// {
//     return firstName+" "+lastName;
// }
// let Namefull=entirename('sundhar','shyam');
// console.log(Namefull);

//-------------------------------------------------
//arrow function
// const entirename=(firstName,lastName)=>
    // {
//     return firstName+" "+lastName;
// }
// let Namefull=entirename('sundhar','shyam');
// console.log(Namefull);
//-------------------------------------------------

//callback-code io
// function operation(op,a,b)
// {
//     return op(a,b);
// }

// let add=(a,b) =>a+b;

// function sub(a,b)
// {
//     return a-b;
// }

// console.log(operation(sub,a,b));

//------------------------------------------
// closure - logic first tamil

let a=100;
function outer(name)
{
    let outervar='bread';
    function inner()
    {
        let innervar='butter';
        console.log('innervariable '+innervar);
        console.log('outervariable '+outervar);
        console.log('a is ',a);
        console.log('hi '+name);
    }
    return inner;
}

let call1=outer('shyam');
call1();

let call2=outer('john');
call2();
call1();

function makeAddr(x)
{
     return function(y)
     {
        return x+y;
     }
}
let add5=makeAddr(5);
console.log(add5(10));