import Navbar from './Navbar'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const DefaultLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout