const transactionMessages = document.querySelector('#tansactionMessages')

function LoadTransactionMessage(){
    contract.on("Transfer", (from, to, amount) => {
        console.log(`from : ${from} \n to : ${to} \n amount : ${amount.toString()}`)
        transactionMessages.innerHTML += `<p> from : ${from} <br> to : ${to} <br> amount : ${amount.toString()} </p>`
    })
}
