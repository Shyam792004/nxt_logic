const button=document.querySelector("button")
//event listener
button.addEventListener('click',displayStats)
let resultdiv=document.createElement('div')
resultdiv.id='result'//for css stye
document.getElementById('wrapper').appendChild(resultdiv)

function displayStats()
{
    console.log("Clicked")
    const input=document.getElementById("input")
    const city=input.options[input.selectedIndex].value;
    console.log(city);
    let population=0,language=0,literacy='';

    switch(city)
    {
        case 'bangaluru':
            population=100
            literacy=93
            language='kananda'
            break;
        case 'Chennai':
            population=98
            literacy=93
            language='Tamil'
            break;
        case 'Coimbatore':
            population=95
            literacy=93
            language='Tamil'
            break;
        default :
            population=97
            literacy=93
            language='telugu'
            break;
        
    }
    let text=`The information was shown for the city =${city}
    1.which has a population of ${population}
    2.they spoke ${language} language
    3.their literacy rate is ${literacy}%`;
    console.log(text);
    
    document.getElementById('result').innerHTML=text;
} 