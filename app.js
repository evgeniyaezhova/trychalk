const chalk = require('chalk')

function helloBlue(){
  console.log(chalk.blue("Hello world!"))
}

// helloBlue()

function helloRed(){
  console.log(chalk.red("Hello world!"))
}

// helloRed()

function stringToColor(str, color){
  console.log(chalk[color](str))
}

// stringToColor("hello", "red")


function evensBlueOddsYellow(str){

}

function angryText(str){
  console.log(chalk.red.underline.bold(str.toUpperCase()))
}

// angryText("hellooOoOOooo")
