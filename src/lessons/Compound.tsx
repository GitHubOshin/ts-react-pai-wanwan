import React from 'react'

// interface Grid {
//   ({ children }: React.PropsWithChildren<{}>): React.ReactNode
// }

// const Grid: Grid = () => {
//   return (
//     <div/>
//   )
// }

const Grid = ({ children }: React.PropsWithChildren<{}>) => {
  return <div>{children}</div>
}
const Row = ({ children }: React.PropsWithChildren<{}>) => {
  return <div>{children}</div>
}
const Column = ({ children }: React.PropsWithChildren<{}>) => {
  return <div>{children}</div>
}

Grid.Row = Row
Grid.Column = Column

function App() {
  return (
    <Grid.Row>
      <Grid.Column>
        <div>Content 1</div>
      </Grid.Column>
      <Grid.Column>
        <div>Content 2</div>
      </Grid.Column>
    </Grid.Row>
  )
}
