import styles from './CalculatorRectButton.module.scss'
import { FunctionComponent } from 'react'

export type Sign = string

type Props = {
  sign: Sign,
  color?: string,
  disabled: boolean,
  click: (sign: Sign) => void
}

const CalculatorRectButton: FunctionComponent<Props> = ({ sign, color, click, disabled }) => {
  return (
    <button
      onClick={() => click(sign)}
      data-sign={sign}
      className={styles.container}
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      <span>{ sign }</span>
    </button>
  )
}

export default CalculatorRectButton