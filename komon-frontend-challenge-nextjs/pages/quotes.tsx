import type { NextPage } from 'next'
import Quote from '../components/atoms/Quote'

export async function getServerSideProps() {
  const res = await fetch(`https://zenquotes.io/api/quotes/today`)
  const quotes = await res.json()

  return { props: { quotes } }
}

type QuoteType = {
  q: string,
  a: string,
  c: string,
  h: string
}

type Props = {
  quotes: QuoteType[]
}

const Quotes: NextPage<Props> = ({ quotes }) => {
  return (
    <div>
      {
        quotes.map(quote => (
          <Quote quote={quote.q} author={quote.a}  key={quote.c}/>
        ))
      }
    </div>
  )
}

export default Quotes
