const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const email = process.env.OFFICIAL_EMAIL || 'user@chitkara.edu.in';
  res.status(200).json({
    is_success: true,
    official_email: email
  });
});

module.exports = router;
