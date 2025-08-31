const btn=document.getElementById("btn");
const colortext=document.getElementById("color");
const wrap=document.getElementById("wrap");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click',changeBG)

function changeBG()
{
    let hexColor='#'
    for(let i=1;o<=6;i++)
    {
        
    }
}
function randHexValue()
{
    let randomIndex=Math.floor(Math.random).value;
    return hex[randomIndex]
}