
function newTip()


function update(_billAmount,_tipPercent,model){
    return {
        ...model,
        billAmount: _billAmount,
        tipPercent: _tipPercent,
        tip: 0,
        total: 0,

    }
}