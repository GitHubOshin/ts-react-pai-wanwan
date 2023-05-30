// enum Colours {
// Red = 'red',
// Blue = 'blue',
// Green = 'green',
// White = 'white'
// }

const Colours = {
  Red: 'red',
  Blue: 'blue',
  White: 'white'
} as const

type Colours = (typeof Colours)[keyof typeof Colours] // get value

type Props = {
  colour: Colours
}

export function Example({ colour }: Props) {
  if (colour === Colours.White) {
    return <div>White</div>
  }
  return <div>You pick colour: {colour}</div>
}

export function App() {
  return <Example colour={Colours.Blue} />
}
