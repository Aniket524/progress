import { useState } from "react";
import "./App.css";
import Progress_bar from "./Progress_bar";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctans,setCorrectAns] = useState(0);
  const [discorrectans,setDisCorrectAns] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAns(correctans+1);
    }else{
      setScore(score - 4)
      setDisCorrectAns(discorrectans+1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      <div className="a">
        <div className="sc">
        <h4>Right Ans</h4>
        <Progress_bar bgcolor="green" progress={correctans*25}  height={20}/>
        </div>
        <div className="sc">
        <h4>Points</h4>
        {score}
        </div>
        <div className="sc">
        <h4>Wrong Ans</h4>
        <Progress_bar bgcolor="red" progress={discorrectans*25}  height={20}/>
        </div>
      </div>
      <div className="q">
      {showScore ? (
        <div className="score-section">
          Answer {correctans} / 4
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="point">
            </div>
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
            <p>Note: Right ans is 5 points and Wrong ans leads to -4 points</p>
          </div>
        </>
      )}
      </div>
    </div>
  );
}

export default App;
