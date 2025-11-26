const express = require('express');
const dashboarController = require('./controllers/dashboar-controller');
const authController = require('./controllers/auth-controller');
const {authMiddleware, ensureUserIsAdmin} = require('./middlewares/auth-middleware');

const router = express.Router();

router.get('/', authController.index);
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);
router.get('/auth/logout' ,authMiddleware ,authController.logout);

router.get('/dashboard' ,authMiddleware ,dashboarController.dashboard);
router.get('/dashboard/users' ,authMiddleware ,ensureUserIsAdmin, dashboarController.users);



module.exports = router;