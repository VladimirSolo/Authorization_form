import { Router } from 'express';
import checkEmail from '../controllers/checkEmail';
import validation from '../middleware/validation';

const router = Router();

router.post('/', validation([
  { 
      name     : 'email',
      type     : 'string',
      required : true,
      payload  : 'body',
      validator: (value) => /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/im.test(value)
  },
  { 
      name    : 'number',
      type    : 'string',
      required: false,
      payload : 'body'
  }
]), checkEmail)

export default router;