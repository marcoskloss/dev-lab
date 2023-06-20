import { useState } from "react"

export function Teste() {
  const [url, setUrl] = useState("https://dummyjson.com/todos")
  const [response, setResponse] = useState({})

  const apiCall = () => {
    fetch(url)
      .then(response => response.json())
      .then(setResponse)
      .catch(ex => setResponse({ error: true, ...ex }))
  }

  const clear = () => setResponse({})

  return (
    <div>
      <p>URL atual: {url}</p>

      <input style={{ border: '1px solid black', margin:'8px'}}placeholder="Atualizar URL" onChange={ev => setUrl(ev.target.value)} value={url} />

      <div>
        <button style={{ border: '1px solid black', background: 'lightgray' }} onClick={apiCall}>Fazer requisicao GET</button>
        {' '}
        <button style={{ border: '1px solid black', background: 'lightgray' }} onClick={clear}>Clear</button>
      </div>

      <p>Response:</p>
      <code>
        {JSON.stringify(response, null, 4)}
      </code>
    </div>
  )
}
