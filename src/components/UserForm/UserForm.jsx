import { Formik, Field, ErrorMessage, Form } from 'formik';
import { ProfileSchema } from './YupSchemas';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  addUserData, getCurrentUser,
} from '../../redux/profileSettings/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectUserProfile } from '../../redux/profileSettings/selectors';

import { ErrorMessageStyled } from './UserForm.styled';
import { useEffect } from 'react';
import BirthdayPicker from '../../helperComponents/DatePicker/DatePicker';
import { RadioInput } from './RadioInput';

export const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const userProfile = useSelector(selectUserProfile);

  useEffect(() => {
    dispatch(getCurrentUser(user))
  }, [dispatch, user]);


  const handleSubmit = (values) => {
    dispatch(addUserData(values));
  };

  const initialValues = {
    name: user.mane || '',
    email: user.email || '',
    height: userProfile.height || '',
    currentWeight: userProfile.currentWeight || '',
    desiredWeight: userProfile.desiredWeight || '',
    birthday: userProfile.birthday || new Date().toISOString(),
    blood: String(userProfile.blood) || '1',
    sex: userProfile.sex || '',
    levelActivity: String(userProfile.levelActivity) || '1',
  };
  




  return (
    <div>
      <Formik
  initialValues={initialValues}
  validationSchema={ProfileSchema}
  onSubmit={handleSubmit}
>
  {({ values,  handleChange, handleBlur}) => (
    <Form onSubmit={handleSubmit}>
      <div >
        <label>
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            placeholder="Name"
            aria-label="Name Input"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage name="name" component={ErrorMessageStyled} />
        </label>
        <label>
          Email
          <input
             type="email"
             id="email"
             name="email"
             placeholder="E-mail"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
          />
          <ErrorMessage name="email" component={ErrorMessageStyled} />
          </label>
       
      </div>
      <div>
      <label>
        Height
          <input
             type="number"
             id="height"
             name="height"
             placeholder="0"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
          />
          <ErrorMessage name="height" component={ErrorMessageStyled} />
          </label>
          <label>
        Current Weight
          <input
             type="number"
             id="currentWeight"
             name="currentWeight"
             placeholder="0"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.currentWeight}
          />
          <ErrorMessage name="currentWeigh" component={ErrorMessageStyled} />
          </label>
          <label>
        Desired Weight
          <input
             type="number"
             id="desiredWeight"
             name="desiredWeight"
             placeholder="0"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.desiredWeight}
          />
          <ErrorMessage name="desiredWeight" component={ErrorMessageStyled} />
          </label>
          <label>
        Date of birth
          
         <Field name="birthday">
         {({ field }) => (
    <BirthdayPicker {...field} />
  )}
             
           
        </Field>
          <ErrorMessage name="height" component={ErrorMessageStyled} />
          </label>
      </div>
<div>
  <RadioInput
  dataBlood={values.blood}
  dataSex={values.sex}
  dataLevelActivity={values.levelActivity}
  />
</div>
    
      <button type="submit">Save</button>
    </Form>
  )}
</Formik>
    </div>
  );
};
