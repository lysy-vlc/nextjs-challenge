import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Calculator from '../components/organisms/Calculator'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Calculator/>
    </div>
  )
}

export default Home
