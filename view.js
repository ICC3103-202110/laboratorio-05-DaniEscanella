const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.cyanBright.bold(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'straight'
                
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {tipPercent} = model
    const {tip} = model
    const {total} = model
    return [{
        'Bill Amount':` $${billAmount}`,
        'Tip (%)': `${tipPercent}%`,
        'Tip': `$${tip}`,
        'Total':`$${total}`
        }]
}

function inputForm(model){
    const{billAmount} = model
    const {tipPercent} = model
    console.log('Choose 0 to quit')
    const message1 = 'Bill Amount?'
    const message2 = 'Tip(%)?'
    return inquirer.prompt([
        { 
            name: 'billAmount',
            type: 'number',
            message: message1,
            default: billAmount,
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Insert a positive number'
                }
            },

        }, {
            name: 'tipPercent',
            type: 'number',
            message: message2,
            default: tipPercent,
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Insert a positive number'
                }
            },  
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports ={
    view,
    inputForm
}