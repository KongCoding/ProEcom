import express from 'express';
const router = express.Router();
import {
  authUser,
  deleteUser,
  forgotUserPassword,
  getUserById,
  getUserProfile,
  getUsers,
  registerUser,
  resetUserPassword,
  updateUser,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);

router.post('/login', authUser);

router.post('/forgot', forgotUserPassword);

router.post('/reset/:resetToken', resetUserPassword);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
