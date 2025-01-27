//Habit.js (Modelo de Habitos)
//Define a estrutura do hábito:

const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  progress: { type: Number, default: 0 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Habit', habitSchema);

//habits.js (Rotas para Hábitos)
//Rotas de criação, leitura, e exclusão de hábitos:

const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

// Obter todos os hábitos de um usuário
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.query.userId });
    res.json(habits);
  } catch (error) {
    res.status(500).send('Erro ao buscar hábitos.');
  }
});

// Criar um novo hábito
router.post('/', async (req, res) => {
  try {
    const newHabit = new Habit({ ...req.body });
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (error) {
    res.status(500).send('Erro ao criar hábito.');
  }
});

module.exports = router;

