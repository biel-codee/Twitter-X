import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../componentes/Header"
import { Seperator } from "../componentes/Separetor"
import { Tweet } from "../componentes/Tweet";

import './Timeline.css'

export function Timeline(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Participar de uma conferência de tecnologia, onde a senha WiFi parece ser o segredo mais criptografado. 😅🔐 #TechConferenceWoes #NeedInternetToLearn',
    'Conquista desbloqueada: fundiu com sucesso todos os conflitos da minha vida tão suavemente quanto um rebase do Git. 💻🙌 #LifeOfAProgrammer #ConflictResolution',
    'Tentei ensinar minha avó sobre armazenamento em nuvem. Ela disse que suas nuvens reais armazenam melhor a chuva. ☁️🌧️ #TechGenerationGap #CloudConfusion'
  ])

  function createNewTweet (event: FormEvent){
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return( 
    <main className='timeline'>
      <Header title="Home"/>
        
        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
          <img src="https://github.com/biel-codee.png" alt="Gabriel Felipe" />
          <textarea 
          id='tweet' 
          placeholder='O que você está pensando?!'
          value={newTweet}
          onKeyDown={handleHotkeySubmit}
          onChange={(event) => {
            setNewTweet (event.target.value)
          }}>
          </textarea>
        </label>

        <button type='submit'>Postar</button>
      </form>

      <Seperator/>

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet}/>
      })}

    </main>
  )
}