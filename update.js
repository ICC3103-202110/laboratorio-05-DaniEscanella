
function calculateTip(_billAmount,_tipPercent){
    return (_billAmount*(_tipPercent*0.01)).toFixed(2)
}

function calculateTotal (_billAmount,newTip){
    return _billAmount+newTip
}

function update(_billAmount,_tipPercent,model){
    const newTip = calculateTip(_billAmount,_tipPercent)
    const newTotal = calculateTotal(_billAmount,newTip)
    return {
        ...model,
        billAmount: _billAmount,
        tipPercent: _tipPercent,
        tip: newTip,
        total: newTotal,
    }
}

module.exports = {
    update
}