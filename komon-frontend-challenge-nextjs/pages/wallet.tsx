import { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Wallet.module.scss'

const Wallet: NextPage = () => {
  const [address, setAddress] = useState<string>('')
  const [chainId, setChainId] = useState<string>('')

  const connectMetamask = async (): Promise<void> => {

    // Asking if metamask is already present or not
    if (window.ethereum) {

      // res[0] for fetching a first wallet
      try {
        const address = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAddress(address)

      } catch (e) {
        alert('Could\'t connect to metamask. See console.')
        console.log(e)
      }

      try {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' })
        setChainId(chainId)

      } catch (e) {
        alert('Could\'t retrieve chainId. See console.')
        console.log(e)
      }
    } else {
      alert('install metamask extension!!')
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={connectMetamask}>conect</button>
      <div>
        <div className={styles['property-wrapper']}>
          address: <span>{ address }</span>
        </div>
        <div className={styles['property-wrapper']}>
          chainId: <span>{ chainId }</span>
        </div>
      </div>
    </div>
  )
}

export default Wallet