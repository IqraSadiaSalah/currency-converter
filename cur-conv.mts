#! /usr/bin/env node
// import chalk from 'chalk';
import inquirer from 'inquirer';
 import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';



const sleep = () =>{ 
    return new Promise((resolve) => {
    setTimeout(resolve,2000);
})

};

async function invitation(){
    let rainbowText = chalkAnimation.rainbow(
        "--------- Word Converter ---------");

    await sleep();
rainbowText.stop();
}


async function Converter(){
       let convert = await inquirer.prompt([{
                 name: "currencyForm",
                 type: "list",
                 choices: ["CNY","KRW","JPY","MYR","PKR"],
                 message: chalk.rgb(220,20,60)("Select from which country you want to convert")
       },
       {
       name: "currencyTo",
       type: "list",
       choices: ["CNY","KRW","JPY","MYR","PKR"],
       message: chalk.rgb(220,20,60)("Select to which country you want to convert")
       },
       {
        name: "Amount",
        type: "number",
        message: chalk.rgb(220,20,60)("Enter:")
        }
    ])

    switch(convert.currencyForm){
        case "CNY":
            if(convert.currencyTo === "KRW")
{
    let amount = convert.Amount * 183.36
    console.log(amount)
}
else if(convert.currencyTo === "JPY"){
    let amount = convert.Amount * 19.32 
    console.log(amount)
}   
else if(convert.currencyTo === "MYR"){
    let amount = convert.Amount * 0.64 
    console.log(amount)
} 
else if(convert.currencyTo === "PKR"){
    let amount = convert.Amount * 33.23
    console.log(amount)
}
else{
  console.log(convert.Amount);
}
break;

case "KRW":
    if(convert.currencyTo === "CNY")
{
let amount = convert.Amount * 0.0055
console.log(amount)
}
else if(convert.currencyTo === "JPY"){
let amount = convert.Amount * 0.11  
console.log(amount)
}   
else if(convert.currencyTo === "MYR"){
let amount = convert.Amount * 0.0035 
console.log(amount)
} 
else if(convert.currencyTo === "PKR"){
let amount = convert.Amount * 0.18
console.log(amount)
}
else{
console.log(convert.Amount);
}
break;

case "JPY":
    if(convert.currencyTo === "CNY")
{
let amount = convert.Amount * 0.052 
console.log(amount)
}
else if(convert.currencyTo === "KRW"){
let amount = convert.Amount * 9.49
console.log(amount)
}   
else if(convert.currencyTo === "MYR"){
let amount = convert.Amount * 0.033
console.log(amount)
} 
else if(convert.currencyTo === "PKR"){
let amount = convert.Amount * 1.72
console.log(amount)
}
else{
console.log(convert.Amount);
}
break;

case "MYR":
    if(convert.currencyTo === "CNY")
{
let amount = convert.Amount * 1.55
console.log(amount)
}
else if(convert.currencyTo === "KRW"){
let amount = convert.Amount * 284.75
console.log(amount)
}   
else if(convert.currencyTo === "JPY"){
let amount = convert.Amount * 30.48
console.log(amount)
} 
else if(convert.currencyTo === "PKR"){
let amount = convert.Amount * 51.61
console.log(amount)
}
else{
console.log(convert.Amount);
}
break;

case "PKR":
    if(convert.currencyTo === "CNY")
{
let amount = convert.Amount * 0.030
console.log(amount)
}
else if(convert.currencyTo === "KRW"){
let amount = convert.Amount * 5.49
console.log(amount)
}   
else if(convert.currencyTo === "JPY"){
let amount = convert.Amount * 0.58
console.log(amount)
} 
else if(convert.currencyTo === "MYR"){
let amount = convert.Amount * 0.019
console.log(amount)
}
else{
console.log(convert.Amount);
}

}

}

async function repeat() {
    do{
        await Converter();
     var again = await inquirer.prompt({
        name: 'restart',
        type: 'input',
        message: chalk.rgb(185, 144, 208)("Do you want to continue?"),
     })
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'YES' || again.restart == 'yes')
    }

await invitation();
await repeat();