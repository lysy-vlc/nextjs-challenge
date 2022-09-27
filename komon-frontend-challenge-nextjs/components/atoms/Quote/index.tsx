import { FunctionComponent } from 'react'

type Props = {
  quote: string,
  author: string
}

const Quote: FunctionComponent<Props> = ({ quote, author }) => (
  <div>
    <blockquote className="sidekick">
      { quote } <cite> { author }</cite>
    </blockquote>
  </div>
)

export default Quote