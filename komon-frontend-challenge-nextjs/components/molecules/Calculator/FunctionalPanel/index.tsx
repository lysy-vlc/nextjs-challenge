import { FunctionComponent } from 'react'
import styles from './FunctionalPanel.module.scss'
import CalculatorRectButton, { Sign } from '../../../atoms/CalculatorRectButton'

interface Button {
  sign: string,
  function: string
}

const buttons: Button[] = [
  {
    sign: 'x',
    function: 'multiply'
  },
  {
    sign: '/',
    function: 'divide'
  },
  {
    sign: '+',
    function: 'add'
  },
  {
    sign: '-',
    function: 'subtract'
  }
]

type Props = {
  click: (sign: Sign) => void,
  disabled: boolean
}

const FunctionalPanel: FunctionComponent<Props> = ({ click, disabled }) => {
  return (
    <div className={styles.container}>
      {
        buttons.map(b => (
          <div className={styles[`cell-${b}.function`]} key={b.sign}>
            <CalculatorRectButton sign={b.sign} color={'orange'} click={click} disabled={disabled}/>
          </div>
        ))
      }
    </div>
  )
}

export default FunctionalPanel