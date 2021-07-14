import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import styles from '../styles/signIn.module.css'

export default function Home() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const { signIn } = useContext(AuthContext)
  
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = {
      password, 
      email
    }

    await signIn(data)
  }
  
  return (
    <div className={styles.container}>
      <form>
        <input 
          type="email" 
          placeholder='Email'
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <input 
          type="password" 
          placeholder='Password'
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  )
}
