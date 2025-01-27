import React, { useState } from 'react';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit) {
      setHabits([...habits, { name: newHabit, progress: 0 }]);
      setNewHabit('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Rastreamento de Hábitos</h2>
      <div className="flex space-x-4 mt-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Novo hábito"
          className="border p-2 rounded"
        />
        <button onClick={addHabit} className="bg-green-500 text-white px-4 py-2 rounded">
          Adicionar
        </button>
      </div>
      <ul className="mt-4">
        {habits.map((habit, index) => (
          <li key={index} className="flex justify-between bg-gray-100 p-2 my-2 rounded">
            <span>{habit.name}</span>
            <span>Progresso: {habit.progress}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
