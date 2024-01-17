import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  name: Yup.string()
  .matches(
    /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
    'Invalid name format')
    .required('Name is required'),
  email: Yup.string()
  .email('Invalid email address')
  .required('Email is required'),
  sex: Yup.string().required('Choose one of these fields'),
  height: Yup.number()
  .label('Height')
  .min(150, 'Must be a height min 150(sm)')
  .max(230, 'Must be a height max 230(sm)')
  .required('Height is required'),
desiredWeight: Yup.number()
  .label('Desired Weight')
  .min(35, 'Must be a weight min 35(kg)')
  .max(300, 'Must be a number from 35 to 300')
  .required('Desired Weight is required'),
  currentWeight: Yup.number()
  .label('Weight')
  .min(35, 'Must be a weight min 35(kg)')
  .max(300, 'Must be a number from 35 to 300')
  .required('Weight is required'),
  blood: Yup.number().required('Choose one of these fields'),
  levelActivity: Yup.number().required('Choose one of these fields'),
  
});