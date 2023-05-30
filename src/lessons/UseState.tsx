import React, { useState, useEffect } from 'react'

type ProfileProps = {
  name?: string
  age?: number
}
export function Profile({ name, age }: ProfileProps) {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  )
}

export function Example1() {
  const [bool, setBool] = useState(false)
  const [count, setCount] = useState(0)

  const [boolOrNum, setBoolOrNum] = useState<boolean | number>()

  return (
    <div>
      <p>Ex1: Primitives</p>
      <button onClick={() => setBool(true)}>Toggle</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button
        onClick={() =>
          setBoolOrNum((c) => {
            if (typeof c === 'number') {
              return c + 1
            }
          })
        }
      >
        Increment
      </button>
    </div>
  )
}

interface Item {
  id: number
  name: string
}

export function Example2() {
  const [data, setData] = useState<Item[]>([])

  const parseData = () => {
    const newData = data.filter((item) => item.id)
  }

  return data.map((item, i) => (
    <div>
      Item {i} is {item.id}
    </div>
  ))

  interface User {
    id: number
    name: string
  }

  function api(): Promise<User> {
    return Promise.resolve({
      id: 1,
      name: 'John'
    })
  }
}

export function Example3() {
  const [data, setData] = useState<User | null>(null)
  useEffect(() => {
    ;(async function () {
      setData(await api())
    })()
  }, [])
  if (data === null) {
    console.log(data)
    return <div>Loading...</div>
  }
  return <div>Name: {data.name}</div>
}

function UseState() {
  return (
    <div>
      <Profile />
    </div>
  )
}

export default UseState
