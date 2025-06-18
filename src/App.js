import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';
import TestScreen from './components/TestScreen';
import TheoryScreen from './components/TheoryScreen';
import StatsScreen from './components/StatsScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [user, setUser] = useState({
    name: 'Анна Иванова',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  });
  const [stats, setStats] = useState({
    totalTests: 15,
    correctAnswers: 12,
    progress: 80,
    categories: {
      rules: { total: 5, correct: 4 },
      technique: { total: 6, correct: 5 },
      judging: { total: 4, correct: 3 }
    }
  });

 useEffect(() => {
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    if (tg.initDataUnsafe?.user) {
      setUser({
        name: `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name || ''}`.trim(),
        avatar: tg.initDataUnsafe.user.photo_url || user.avatar
      });
    }
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'tests':
        return <TestScreen onBack={() => setCurrentScreen('home')} stats={stats} setStats={setStats} />;
      case 'theory':
        return <TheoryScreen onBack={() => setCurrentScreen('home')} />;
      case 'stats':
        return <StatsScreen onBack={() => setCurrentScreen('home')} stats={stats} />;
      default:
        return (
          <>
            <Header
              title={user.name}
              avatarUrl={user.avatar}
              onEditProfile={() => alert('Редактировать профиль')}
            />

            <Card>
              <div className="progress-section">
                <h2>📊 Ваш прогресс</h2>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${stats.progress}%` }}
                  ></div>
                </div>
                <p>Правильных ответов: <strong>{stats.correctAnswers} из {stats.totalTests}</strong> ({stats.progress}%)</p>
              </div>
            </Card>

            <Card>
              <h2>🎯 Быстрый старт</h2>
              <div className="button-grid">
                <Button onClick={() => setCurrentScreen('tests')} style={{ marginRight: '10px' }}>
                  📝 Тесты
                </Button>
                <Button onClick={() => setCurrentScreen('theory')} style={{ backgroundColor: '#34C759' }}>
                  📚 Теория
                </Button>
              </div>
            </Card>

            <Card>
              <h2>📈 Статистика</h2>
              <div className="stats-preview">
                <div className="stat-item">
                  <span className="stat-label">Правила:</span>
                  <span className="stat-value">{stats.categories.rules.correct}/{stats.categories.rules.total}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Техника:</span>
                  <span className="stat-value">{stats.categories.technique.correct}/{stats.categories.technique.total}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Судейство:</span>
                  <span className="stat-value">{stats.categories.judging.correct}/{stats.categories.judging.total}</span>
                </div>
              </div>
              <Button 
                onClick={() => setCurrentScreen('stats')} 
                style={{ backgroundColor: '#FF9500', marginTop: '15px' }}
              >
                Подробная статистика
              </Button>
            </Card>
          </>
        );
    }
  };

  return (
    <div className="container">
      {renderScreen()}
    </div>
  );
}

export default App;
