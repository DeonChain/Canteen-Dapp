import React from 'react'

export default function WalletConnect(props) {
  return (

    <div>
    <div>
      <button class="walletButton" onClick={props.connectWalletHandler}>{props.connButtonText}</button>
    </div>
  </div>
    // <div>
		// 	<button onClick={props.connectWalletHandler}>{props.connButtonText}</button>
    // </div>
  )
}
