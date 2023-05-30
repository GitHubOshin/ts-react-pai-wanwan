import React, { useState, useEffect } from 'react'

const api = () => new Promise<string>((resolve, reject) => {})

export async function getData() {
  const result = await fetch('some-url')
  const json = await result.json()
  return json
}

function useData(id: number) {
  const [data, setData] = useState<number>()
  useEffect(() => {
    ;(async function name() {
      setData((await getData()) as number)
    })()
  }, [id])
  return data
}
