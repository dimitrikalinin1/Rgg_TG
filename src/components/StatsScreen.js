import React from 'react';
import Button from './Button';
import Card from './Card';

const StatsScreen = ({ onBack, stats }) => {
  const categoryNames = {
    rules: 'Правила',
    technique: 'Техника', 
    judging: 'Судейство'
  };

  return (
    <div>
      <Button onClick={onBack} className="back-button">← Назад</Button>

      <Card>
        <h2>📊 Подробная статистика</h2>

        <div style={{ marginBottom: '30px' }}>
          <h3>🎯 Общие результаты</h3>
          <div className="stat-item">
            <span className="stat-label">Всего вопросов:</span>
            <span className="stat-value">{stats.totalTests}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Правильных ответов:</span>
            <span className="stat-value">{stats.correctAnswers}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Общий процент:</span>
            <span className="stat-value">{stats.progress}%</span>
          </div>
        </div>

        <div>
          <h3>📋 По категориям</h3>
          {Object.entries(stats.categories).map(([category, data]) => {
            const percentage = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            return (
              <div key={category} style={{ marginBottom: '15px' }}>
                <div className="stat-item">
                  <span className="stat-label">{categoryNames[category]}:</span>
                  <span className="stat-value">{data.correct}/{data.total} ({percentage}%)</span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '6px', 
                  backgroundColor: '#e0e0e0', 
                  borderRadius: '3px',
                  overflow: 'hidden',
                  marginTop: '5px'
                }}>
                  <div style={{
                    width: `${percentage}%`,
                    height: '100%',
                    backgroundColor: percentage >= 80 ? '#34C759' : percentage >= 60 ? '#FF9500' : '#FF3B30',
                    borderRadius: '3px',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default StatsScreen;