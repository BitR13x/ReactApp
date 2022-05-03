import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  return res.render('index', { title: 'Express' });
});

export { router as Router }
