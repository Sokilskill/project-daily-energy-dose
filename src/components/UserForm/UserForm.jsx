import { Formik, Field, Form, ErrorMessage } from 'formik';

import { ProfileSchema } from './YupSchemas';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  addUserData,
  getUserProfile,
  updateUserName,
} from '../../redux/profileSettings/operations';
import { useEffect } from 'react';
import {
  selectProfileEmail,
  selectProfileName,
  selectUserProfile,
} from '../../redux/profileSettings/selectors';

// import 'react-toastify/dist/ReactToastify.css';

// import { addUserData } from '../../redux/profileSettings/operations';
// import { selectUserProfile } from '../../redux/profileSettings/selectors';

// import {
//   CalendarField,
//   CurrentWeightInput,
//   DesiredWeightInput,
//   ErrorMessageStyled,
//   HeightInput,
//   Label,
//   MainContainer,
//   MainFormContainer,
//   ProfileCalendarWrapper,
//   ProfileContainer,
//   ProfileWrapper,
//   SaveButton,
//   UserContainer,
//   UserInput,
//   DesiredWeight,
// } from './UserForm.styled';

// // import { useEffect } from 'react';
// import { RadioInput } from './RadioInput';
// // import { DaySwitch } from '../DaySwitch/DaySwitch';
// import BirthdayPicker from '../../helperComponents/DatePicker/DatePicker';
// import { selectUser } from '../../redux/auth/auth-selectors';
// // import { refreshThunk } from '../../redux/auth/auth-operations';

// export const UserForm = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);
//   const userProfile = useSelector(selectUserProfile);

//   // useEffect(() => {
//   //   dispatch(refreshThunk(user));
//   // }, [dispatch, user]);

//   const handleSubmitttt = async ({ onSubmit }) => {
//     try {
//       console.log('FORMA');
//       // setIsSubmitted(true);
//       // await dispatch(addUserData(values));
//       toast.success('Profile updated successfully');
//     } catch (error) {
//       toast.error('An error occurred while updating the profile');
//       console.error('Error updating profile:', error);
//     }
//   };

// const initialValues = {
//   name: user.mane || '',
//   email: user.email || '',
//   height: userProfile.height || '',
//   currentWeight: userProfile.currentWeight || '',
//   desiredWeight: userProfile.desiredWeight || '',
//   birthday: userProfile.birthday || new Date().toISOString(),
//   blood: String(userProfile.blood) || '1',
//   sex: userProfile.sex || '',
//   levelActivity: String(userProfile.levelActivity) || '1',
// };

//   return (
//     <MainContainer>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={ProfileSchema}
//         // onSubmit={handleSubmit}
//         //   onSubmit={(values, { resetForm }) => {
//         //     onSubmit(values);
//         //     resetForm();
//         //   }}
//         // >
//         //   {({ values, handleChange, handleBlur })

//         onSubmit={(values, { setSubmitting }) => {
//           console.log('values', values);
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
//           <MainFormContainer autoComplete="off" onSubmit={handleSubmit}>
//             <UserContainer>
//               <div>
//                 <Label>Name </Label>
//                 <UserInput
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={values.name}
//                   placeholder="Name"
//                   aria-label="Name Input"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <ErrorMessage name="name" component={ErrorMessageStyled} />
//               </div>

//               <div>
//                 <Label>Email</Label>
//                 <UserInput
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="E-mail"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                 />
//                 <ErrorMessage name="email" component={ErrorMessageStyled} />
//               </div>
//             </UserContainer>
//             <ProfileContainer>
//               <ProfileWrapper>
//                 <div>
//                   <Label>Height</Label>
//                   <HeightInput
//                     type="number"
//                     id="height"
//                     name="height"
//                     placeholder="0"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.height}
//                     required
//                   />
//                   <ErrorMessage name="height" component={ErrorMessageStyled} />
//                 </div>
//                 <div>
//                   <Label>Current Weight</Label>
//                   <CurrentWeightInput
//                     type="number"
//                     id="currentWeight"
//                     name="currentWeight"
//                     placeholder="0"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.currentWeight}
//                     required
//                   />
//                   <ErrorMessage
//                     name="currentWeigh"
//                     component={ErrorMessageStyled}
//                   />
//                 </div>
//               </ProfileWrapper>
//               <ProfileCalendarWrapper>
//                 <DesiredWeight>
//                   <Label>Desired Weight</Label>
//                   <DesiredWeightInput
//                     type="number"
//                     id="desiredWeight"
//                     name="desiredWeight"
//                     placeholder="0"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.desiredWeight}
//                     required
//                   />
//                   <ErrorMessage
//                     name="desiredWeight"
//                     component={ErrorMessageStyled}
//                   />
//                 </DesiredWeight>

//                 <div>
//                   <Label>Date of birth </Label>

//                   <CalendarField name="birthday">
//                     {({ field }) => (
//                       <div>
//                         <BirthdayPicker {...field} />
//                         <ErrorMessage
//                           name="birthday"
//                           component={ErrorMessageStyled}
//                         />
//                       </div>
//                     )}
//                   </CalendarField>
//                 </div>
//               </ProfileCalendarWrapper>
//             </ProfileContainer>

//             <div>
//               <RadioInput
//                 dataBlood={values.blood}
//                 dataSex={values.sex}
//                 dataLevelActivity={values.levelActivity}
//               />
//             </div>

//             {/* <SaveButton type="submit" onSubmit={handleSubmit}> */}
//             <SaveButton type="submit" disabled={isSubmitting}>
//               Save
//             </SaveButton>
//           </MainFormContainer>
//         )}
//       </Formik>
//     </MainContainer>
//   );
// };

// Define validation schema using Yup

//================== Radio Button ==================

// ================ id - для ключа(можна використовувати індекс)
// ================ value - значення радіокнопки
// ================ label - назва кнопки

//---------- група крові ----------

const bloodsValue = [
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  },
];

//---------- стать ----------
const sexValue = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

//---------- рівень активного тренування ----------
const levelActivityValue = [
  {
    id: 1,
    label: 'Sedentary lifestyle (little or no physical activity)',
    value: 1,
  },
  {
    id: 2,
    label: 'Light activity (light exercises/sports 1-3 days per week)',
    value: 2,
  },
  {
    id: 3,
    label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
    value: 3,
  },
  {
    id: 4,
    label: 'Very active (intense exercises/sports 6-7 days per week)',
    value: 4,
  },
  {
    id: 5,
    label:
      'Extremely active (very strenuous exercises/sports and physical work)',
    value: 5,
  },
];

export const UserForm = () => {
  const dispatch = useDispatch();

  const {
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  } = useSelector(selectUserProfile);
  const userName = useSelector(selectProfileName);
  const userEmail = useSelector(selectProfileEmail);

  useEffect(() => {
    // const fetchData = () => {
    //   dispatch(getUserProfile());
    // };
    // fetchData();
    dispatch(getUserProfile());

    // console.log('userData', userData);
  }, [dispatch]);

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required('Name is required'),
  //   email: Yup.string().required('email is required'),
  //   height: Yup.number().required('height is required'),
  //   currentWeight: Yup.number().required('currentWeight is required'),
  //   desiredWeight: Yup.number().required('desiredWeight is required'),
  //   birthday: Yup.number().required('birthday is required'),
  //   blood: Yup.number().required('blood is required'),
  //   sex: Yup.string().required('gender is required'),
  //   levelActivity: Yup.number().required('levelActivity is required'),
  // });

  const initialValues = {
    name: userName || '',
    email: userEmail || '',
    height: height || '',
    currentWeight: currentWeight || '',
    desiredWeight: desiredWeight || '',
    birthday: birthday || 0,
    blood: blood || 0,
    sex: sex || '',
    levelActivity: levelActivity || 1,
  };

  // console.log('initialValues', initialValues);

  const handleSubmit = async (data) => {
    try {
      console.log('DATA', data);
      const { name, email, ...profileData } = data;
      const updateNameResult = await dispatch(updateUserName({ name }));
      console.log('PROFILEDATA]', profileData);
      const updateProfileDataResult = await dispatch(addUserData(profileData));

      // console.log('updateNameResult', updateNameResult);
      // console.log('updateProfileDataResult', updateProfileDataResult);

      if (
        updateNameResult.meta.requestStatus === 'fulfilled' &&
        updateProfileDataResult.meta.requestStatus === 'fulfilled'
      ) {
        toast.success('Дані оброблюються, створюється план тренувань');
      } else {
        console.log('Помилка оновлення даних');
      }
    } catch (error) {
      toast.error('An error occurred while updating the profile');
      console.error('Error updating profile:', error);
    }
  };

  return (
    userName &&
    userEmail && (
      <Formik
        initialValues={initialValues}
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" value={values.name} />
              <ErrorMessage name="name" component="div" />
            </div>

            {/* email зробити не активним */}
            <div>
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="height">Height</label>
              <Field type="number" id="height" name="height" />
              <ErrorMessage name="height" component="div" />
            </div>

            <div>
              <label htmlFor="currentWeight">currentWeight</label>
              <Field type="number" id="currentWeight" name="currentWeight" />
              <ErrorMessage name="currentWeight" component="div" />
            </div>

            <div>
              <label htmlFor="desiredWeight">desiredWeight</label>
              <Field type="number" id="desiredWeight" name="desiredWeight" />
              <ErrorMessage name="desiredWeight" component="div" />
            </div>

            <div>
              <label htmlFor="birthday">Birthday</label>
              <input type="number" id="birthday" name="birthday" />
              <ErrorMessage name="birthday" component="div" />
            </div>

            <div>
              <label>Blood</label>
              {bloodsValue.map((blood, index) => (
                <label key={index}>
                  <Field
                    type="radio"
                    name="blood"
                    value={blood.value}
                    checked={values.blood === blood.value}
                    onChange={() => setFieldValue('blood', blood.value)}
                  />
                  {blood.label}
                </label>
              ))}
              <ErrorMessage name="blood" component="div" />
            </div>

            <div>
              {sexValue.map((option, index) => (
                <label key={index}>
                  <Field type="radio" name="sex" value={option.value} />
                  {option.label}
                </label>
              ))}
              <ErrorMessage name="sex" component="div" />
            </div>

            <div>
              {levelActivityValue.map((option) => (
                <label key={option.id}>
                  <Field
                    type="radio"
                    name="levelActivity"
                    value={option.value}
                    checked={values.levelActivity === option.value}
                    onChange={() =>
                      setFieldValue('levelActivity', option.value)
                    }
                  />
                  {option.label}
                </label>
              ))}
              <ErrorMessage name="levelActivity" component="div" />
            </div>

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    )
  );
};

/* <div>
            <label htmlFor="blood">blood</label>
            <input type="number" id="blood" name="blood" />
            <ErrorMessage name="blood" component="div" />
          </div> */

/* <div>
            <label htmlFor="levelActivity">levelActivity</label>
            <input type="number" id="levelActivity" name="levelActivity" />
            <ErrorMessage name="levelActivity" component="div" />
          </div> */
