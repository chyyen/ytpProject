let userWalletAccount = null


// Login 
async function Login() {
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
	.catch((e) => { 
        console.error(e.message) 
        container.innerHTML = "<h1>Please connect to your wallet.</h1>"
    })
	if (!accounts) { return }
	// set account address
	userWalletAccount = accounts[0]
	// Load other information
	LoadInfo()
	LoadTransactionMessage()
}
 
function triggerLogin(){
	if(typeof window.ethereum !== 'undefined'){
		document.addEventListener('DOMContentLoaded',Login())
	}
	else{
		//container.innerHTML = "<h1>Please install a wallet plugin</h1>"
	}
}

triggerLogin()


// listen on status changed
window.ethereum.on('accountsChanged',function(){window.location.reload()})
window.ethereum.on('chainChanged',function(){window.location.reload()})