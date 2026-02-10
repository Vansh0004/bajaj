require('dotenv').config();
const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/health');
const bfhlRoutes = require('./routes/bfhl');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/health', healthRoutes);
app.use('/', bfhlRoutes);

app.use((req, res) => {
  const email = process.env.OFFICIAL_EMAIL || 'user@chitkara.edu.in';
  res.status(404).json({
    is_success: false,
    official_email: email,
    error: 'Not found'
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  const email = process.env.OFFICIAL_EMAIL || 'user@chitkara.edu.in';
  res.status(500).json({
    is_success: false,
    official_email: email,
    error: 'Server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
