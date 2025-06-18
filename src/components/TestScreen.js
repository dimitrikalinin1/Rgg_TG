import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';

const questions = [
  {
    question: "Сколько предметов используется в художественной гимнастике?",
    options: ["3", "4", "5", "6"],
    correct: 2,
    explanation: "В художественной гимнастике используется 5 предметов: скакалка, обруч, мяч, булавы и лента."
  },
  {
    question: "Какова продолжительность упражнения в индивидуальных программах?",
    options: ["60-90 секунд", "75-90 секунд", "90-120 секунд", "120-150 секунд"],
    correct: 1,
    explanation: "Продолжительность индивидуального упражнения составляет 75-90 секунд."
  },
  {
    question: "Что такое 'риск' в художественной гимнастике?",
    options: ["Сложный элемент", "Элемент повышенной трудности", "Ошибка в исполнении", "Потеря предмета"],
    correct: 1,
    explanation: "Риск - это элемент повышенной трудности, который может принести дополнительные баллы."
  },
  {
    question: "Из скольких компонентов состоит оценка в художественной гимнастике?",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "Оценка состоит из 3 компонентов: D (трудность), E (исполнение) и A (артистизм)."
  },
  {
    question: "Какой минимальный вес мяча в художественной гимнастике?",
    options: ["300г", "400г", "500г", "600г"],
    correct: 1,
    explanation: "Минимальный вес мяча составляет 400 граммов."
  }
];

const TestScreen = ({ onBack, stats, setStats }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);

    setTimeout(() => {
      const isCorrect = answerIndex === questions[currentQuestion].correct;
      if (isCorrect) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Тест завершен
        const finalScore = isCorrect ? score + 1 : score;
        const newStats = {
          ...stats,
          totalTests: stats.totalTests + questions.length,
          correctAnswers: stats.correctAnswers + finalScore,
          progress: Math.round(((stats.correctAnswers + finalScore) / (stats.totalTests + questions.length)) * 100)
        };
        setStats(newStats);
        setTestCompleted(true);
      }
    }, 1500);
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setTestCompleted(false);
  };

  if (testCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    let grade = '';
    let emoji = '';

    if (percentage >= 90) {
      grade = 'Отлично!';
      emoji = '🏆';
    } else if (percentage >= 70) {
      grade = 'Хорошо!';
      emoji = '👍';
    } else if (percentage >= 50) {
      grade = 'Удовлетворительно';
      emoji = '👌';
    } else {
      grade = 'Нужно подучить';
      emoji = '📚';
    }

    return (
      <div>
        <Button onClick={onBack} className="back-button">← Назад</Button>
        <Card>
          <div className="result-container">
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>{emoji}</div>
            <h2>Тест завершен!</h2>
            <div className="result-score">{score}/{questions.length}</div>
            <div className="result-grade">{grade}</div>
            <p>Ваш результат: {percentage}%</p>
            <div style={{ marginTop: '30px' }}>
              <Button onClick={restartTest} style={{ marginRight: '10px' }}>
                🔄 Пройти еще раз
              </Button>
              <Button onClick={onBack} style={{ backgroundColor: '#34C759' }}>
                🏠 На главную
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div>
      <Button onClick={onBack} className="back-button">← Назад</Button>
      <Card>
        <div className="question-container">
          <div className="question-number">
            Вопрос {currentQuestion + 1} из {questions.length}
          </div>
          <div className="question-text">{question.question}</div>
          <div className="answer-options">
            {question.options.map((option, index) => {
              let buttonClass = 'answer-button';
              if (selectedAnswer !== null) {
                if (index === question.correct) {
                  buttonClass += ' correct';
                } else if (index === selectedAnswer && index !== question.correct) {
                  buttonClass += ' incorrect';
                }
              }

              return (
                <Button
                  key={index}
                  onClick={() => selectedAnswer === null && handleAnswerSelect(index)}
                  className={buttonClass}
                  style={{
                    backgroundColor: selectedAnswer !== null ? undefined : '#f8f9fa',
                    color: selectedAnswer !== null ? undefined : '#333',
                    cursor: selectedAnswer !== null ? 'default' : 'pointer'
                  }}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </Button>
              );
            })}
          </div>
          {selectedAnswer !== null && (
            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <strong>Объяснение:</strong> {question.explanation}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TestScreen;
