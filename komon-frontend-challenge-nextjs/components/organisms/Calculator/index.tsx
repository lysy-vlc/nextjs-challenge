import { FunctionComponent, useState } from 'react'
import DigitsPanel from '../../molecules/Calculator/DigitsPanel'
import FunctionalPanel from '../../molecules/Calculator/FunctionalPanel'
import styles from './Calculator.module.scss'
import CalculatorRectButton, { Sign } from '../../atoms/CalculatorRectButton'

const Calculator: FunctionComponent = () => {
  const [ varA, setVarA ] = useState<string>('')
  const [ varB, setVarB ] = useState<string>('')
  const [ operationType, setOperationType ] = useState<string>('')
  const [ result, setResult ] = useState<number | null>(null)
  const [ equation, setEquation ] = useState<string>('')

  const handleDigitsPanel = (sign: Sign): void => {
    const lastCharacter = equation.trim().charAt(equation.trim().length - 1)

    if (lastCharacter === '.') return

    setEquation(equation + sign)

    if (operationType) {
      setVarB(varB + sign)
      return
    }

    setVarA(varA + sign)
  }

  const handleFunctionalPanel = (sign: string):void => {
    const lastCharacter = equation.trim().charAt(equation.trim().length - 1)
    const functionalCharacters = ['-', '+', 'x', '/']

    if (sign === '-' && !varA && varA[0] !== '-' && lastCharacter !== ' -') {
      handleDigitsPanel('-')
      return
    }

    if (varA && functionalCharacters.includes(lastCharacter) && operationType) {
      setEquation(equation.substring(0, equation.length - 3) + ' ' + sign + ' ')
      setOperationType(sign)
    }

    if (varA && !functionalCharacters.includes(lastCharacter) && !operationType) {
      setEquation(equation + ' ' + sign + ' ')
      setOperationType(sign)
    }
  }

  const calc = (): void => {
    const varAAsNumber = Number(varA)
    const varBAsNumber = Number(varB)

    switch(operationType) {
      case 'x':
        setResult(varAAsNumber * varBAsNumber)
        break;
      case '/':
        setResult(varAAsNumber / varBAsNumber)
        break;
      case '+':
        setResult(varAAsNumber + varBAsNumber)
        break;
      case '-':
        setResult(varAAsNumber - varBAsNumber)
        break;
    }
  }

  const clear = (): void => {
    setVarA('')
    setVarB('')
    setOperationType('')
    setResult(null)
    setEquation('')
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.result}>
          { result !== null ? result : equation }
        </div>

        <div className={styles['digits-panel']}>
          <DigitsPanel click={ handleDigitsPanel } disabled={!!result || result === 0}/>
        </div>

        <div className={styles['functional-panel']}>
          <FunctionalPanel click={ handleFunctionalPanel } disabled={!!result || result === 0}/>
        </div>

        <div className={styles['equal-button']}>
          <CalculatorRectButton sign={'='} color={'orange'} click={ calc } disabled={!!result || result === 0 || !operationType}/>
        </div>

        <div className={styles.clear}>
          <CalculatorRectButton sign={'clear'} color={'black'} click={ clear } disabled={false}/>
        </div>
      </div>
    </div>
  )
}

export default Calculator