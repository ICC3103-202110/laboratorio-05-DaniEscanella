
const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    const {model,currentView} = state
    const{title,table} = currentView

    console.clear()
    console.log(title)
    printTable(table)

    const {billAmount,tipPercent} = await inputForm(model)
    
    console.log(billAmount,tipPercent)
}

module.exports = {
    app
}