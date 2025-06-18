import React from 'react';
import Button from './Button';
import Card from './Card';

const TheoryScreen = ({ onBack }) => {
  return (
    <div>
      <Button onClick={onBack} className="back-button">← Назад</Button>
      <Card>
        <div className="theory-content">
          <h2>📚 Теоретические материалы</h2>

          <h3>Основные предметы в художественной гимнастике:</h3>
          <ul>
            <li><strong>🪢 Скакалка</strong> - длина зависит от роста гимнастки</li>
            <li><strong>⭕ Обруч</strong> - диаметр 80-90 см, вес минимум 300г</li>
            <li><strong>⚽ Мяч</strong> - диаметр 18-20 см, вес минимум 400г</li>
            <li><strong>🥢 Булавы</strong> - длина 40-50 см, вес минимум 150г каждая</li>
            <li><strong>🎀 Лента</strong> - длина 6м, ширина 4-6 см</li>
          </ul>

          <h3>Основные группы движений:</h3>
          <ul>
            <li>Равновесия</li>
            <li>Повороты</li>
            <li>Прыжки</li>
            <li>Гибкость и волны</li>
          </ul>

          <h3>Требования к упражнению:</h3>
          <ul>
            <li>Использование всей площадки</li>
            <li>Разнообразие движений</li>
            <li>Связь с музыкой</li>
            <li>Техническая сложность</li>
          </ul>

          <h3>Система оценки:</h3>
          <ul>
            <li><strong>D (Difficulty)</strong> - трудность упражнения</li>
            <li><strong>E (Execution)</strong> - качество исполнения</li>
            <li><strong>A (Artistry)</strong> - артистизм и хореография</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default TheoryScreen;