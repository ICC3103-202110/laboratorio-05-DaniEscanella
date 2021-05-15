
const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
   
    const {model,currentView} = state
    const{title,table} = currentView

    console.clear()
    console.log(title)
    printTable(table)

    const {billAmount,tipPercent} = await inputForm(model)
    if (billAmount==0) {
        return console.log()
    } else {
        const updateModel = update(billAmount,tipPercent.toFixed(2),model)
        state = {
            ...state,
            model : updateModel,
            currentView : view(updateModel) 
        }
        app(state,update,view)
    }
    
}

module.exports = {
    app
}