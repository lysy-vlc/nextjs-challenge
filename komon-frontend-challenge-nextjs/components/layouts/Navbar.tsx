import { FunctionComponent } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar: FunctionComponent = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/">
          Calculator
        </Link>
      </li>
      <li>
        <Link href="/quotes">
          Quotes
        </Link>
      </li>
      <li>
        <Link href="/wallet">
          Wallet
        </Link>
      </li>
    </ul>
  )
}

export default Navbar