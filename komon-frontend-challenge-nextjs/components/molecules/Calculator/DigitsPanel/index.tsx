import { FunctionComponent } from 'react'
import CalculatorRectButton, { Sign } from '../../../atoms/CalculatorRectButton'
import styles from './DigitsPanel.module.scss'

type Props = {
  click: (sign: Sign) => void,
  disabled: boolean
}

const DigitsPanel: FunctionComponent<Props> = ({ click, disabled }) => {
  const digits = Array.from(Array(10).keys()).map(d => String(d))

  return (
    <div className={styles.container}>
      {
        digits.map(d => (
          <div className={styles[`cell-${d}`]} key={d}>
            <CalculatorRectButton sign={d} click={click} disabled={disabled}/>
          </div>
        ))
      }
      <CalculatorRectButton sign={'.'} click={click} disabled={disabled}/>
    </div>
  )
}

export default DigitsPanel