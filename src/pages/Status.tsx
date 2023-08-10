import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../componentes/Header";
import { Seperator } from "../componentes/Separetor";
import { Tweet } from "../componentes/Tweet";

import './Status.css';
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    '"Eu juro, quebrar a senha WiFi nessas conferências deve ser um desafio hackathon em si! 😂 Só espero que nossas habilidades de rede sejam tão fortes quanto nossas habilidades de codificação. 💪🌐 #WiFiAdventure #GeekyQuest',
    'Hackerman 👨‍💻',
  ])

  function createNewAnswer (event: FormEvent){
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers ([newAnswer, ...answers])
      setNewAnswer ('')
    }
  }

  return (
    <main className="satatus">
      <Header title="Tweet" />
    
      <Tweet content="Participar de uma conferência de tecnologia, onde a senha WiFi parece ser o segredo mais criptografado. 😅🔐 #TechConferenceWoes #NeedInternetToLearn" />

      <Seperator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/biel-codee.png" alt="Gabriel Felipe" />
          <textarea
            id="tweet"
            placeholder="Tweet sua resposta"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
                setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight/>
          <span>Resposta</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
