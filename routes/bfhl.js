const express = require('express');
const { fibonacci, getPrimes, hcf, lcm } = require('../utils/math');
const { callGeminiAI } = require('../utils/ai');
const {
  validateFibonacci,
  validatePrime,
  validateLcm,
  validateHcf,
  validateAI
} = require('../utils/validation');

const router = express.Router();

router.post('/bfhl', async (req, res) => {
  try {
    const { fibonacci: fib, prime, lcm: lcmVal, hcf: hcfVal, AI } = req.body;
    const email = process.env.OFFICIAL_EMAIL || 'user@chitkara.edu.in';

    if (!fib && !prime && !lcmVal && !hcfVal && !AI) {
      return res.status(400).json({
        is_success: false,
        official_email: email,
        error: 'At least one operation required'
      });
    }

    let result;

    if (fib !== undefined) {
      const check = validateFibonacci(fib);
      if (!check.valid) {
        return res.status(400).json({
          is_success: false,
          official_email: email,
          error: check.msg
        });
      }
      result = fibonacci(fib);

    } else if (prime !== undefined) {
      const check = validatePrime(prime);
      if (!check.valid) {
        return res.status(400).json({
          is_success: false,
          official_email: email,
          error: check.msg
        });
      }
      result = getPrimes(prime);

    } else if (lcmVal !== undefined) {
      const check = validateLcm(lcmVal);
      if (!check.valid) {
        return res.status(400).json({
          is_success: false,
          official_email: email,
          error: check.msg
        });
      }
      result = lcm(lcmVal);

    } else if (hcfVal !== undefined) {
      const check = validateHcf(hcfVal);
      if (!check.valid) {
        return res.status(400).json({
          is_success: false,
          official_email: email,
          error: check.msg
        });
      }
      result = hcf(hcfVal);

    } else if (AI !== undefined) {
      const check = validateAI(AI);
      if (!check.valid) {
        return res.status(400).json({
          is_success: false,
          official_email: email,
          error: check.msg
        });
      }
      const apiKey = process.env.GEMINI_API_KEY;
      result = await callGeminiAI(AI, apiKey);
    }

    res.status(200).json({
      is_success: true,
      official_email: email,
      data: result
    });

  } catch (err) {
    console.error('Error:', err);
    const email = process.env.OFFICIAL_EMAIL || 'user@chitkara.edu.in';
    res.status(500).json({
      is_success: false,
      official_email: email,
      error: 'Server error'
    });
  }
});

module.exports = router;
