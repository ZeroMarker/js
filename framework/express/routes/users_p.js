// routes/users.js
const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
