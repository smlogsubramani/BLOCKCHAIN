//DETECTION OF THE METAMASK AND ACCOUNT ADDRESS WILL BE DISPLAYED


import {useState} from 'react'
function App() {

  //properties

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount()
  {
    console.log('requesting account')


    //check if the metamask is working 

    if(window.ethereum){
      console.log('detected')

      try{
        const accounts = await window.ethereum.request({
          method:"eth_requestAccounts",
       
        });
      setWalletAddress(accounts[0]);
      }catch(error){
        console.log('error connecting metamask....')
      }

    }else{
      console.log('not detected')
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestAccount}>
          

          connect wallet
        </button>
        <h3> wallet address:{walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
