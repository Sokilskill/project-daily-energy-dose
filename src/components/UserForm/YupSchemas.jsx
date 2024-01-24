import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      'Invalid name format'
    )
    .required('Name is required'),
  email: Yup.string()
    .email('Changing is not allowed')
    .required('Email is required'),
  sex: Yup.string().required('Choose one of these fields'),
  height: Yup.number()
  .label('Height')
  .min(150, 'min height 150(sm)')
  .max(250, 'max height 250(sm)')
  .required('Height is required'),
desiredWeight: Yup.number()
  .label('Desired Weight')
  .min(35, 'min weight 35(kg)')
  .max(300, 'put number from 35 to 300')
  .required('Desired Weight is required'),
  currentWeight: Yup.number()
  .label('Weight')
  .min(35, 'min weight 35(kg)')
  .max(300, 'put number from 35 to 300')
  .required('Weight is required'),
  blood: Yup.number().required('Choose one of these fields'),
  levelActivity: Yup.number().required('Choose one of these fields'),
  birthday: Yup.date()
  .nullable()
  .max(new Date(), 'Birthday cannot be in the future')
  .required('Birthday is required')
  .test('is-adult', 'You must be at least 18 years old', function (value) {
    if (!value) {
      return true;
    }

    const today = new Date();
    const birthDate = new Date(value);
    const age =
      today.getFullYear() -
      birthDate.getFullYear() -
      (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

    return age >= 18;
  }),

});
