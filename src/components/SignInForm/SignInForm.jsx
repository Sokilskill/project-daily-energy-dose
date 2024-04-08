import sprite from '../../assets/sprite.svg';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {
  FormikForm,
  InputsBox,
  FormikInputField,
  PassInputDiv,
  IconEye,
  ErrorRowDiv,
  SuccessRowDiv,
  IconError,
  IconSuccess,
  FormSubmitButton,
} from './SignInForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Is not in correct format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});

export const SignInForm = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);

  function borderProp(lib, field) {
    if (lib.errors[field] && lib.touched[field]) {
      return { red: 'true' };
    }
    if (!lib.errors[field] && lib.values[field]) {
      return { green: 'true' };
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {(formik) => {
        const { errors, touched, values } = formik;

        return (
          <>
            <FormikForm>
              <InputsBox>
                <div className="form-row">
                  <label htmlFor="email"></label>
                  <FormikInputField
                    {...borderProp(formik, 'email')}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <ErrorRowDiv>
                      <IconError>
                        <use href={`${sprite}#checkbox-circle`} />
                      </IconError>
                      <ErrorMessage name="email" />
                    </ErrorRowDiv>
                  ) : null}
                  {!errors.email && values.email ? (
                    <SuccessRowDiv>
                      <IconSuccess>
                        <use href={`${sprite}#checkbox-circle`} />
                      </IconSuccess>
                      <p>Success email</p>
                    </SuccessRowDiv>
                  ) : null}
                </div>

                <div className="form-row">
                  <label htmlFor="password"></label>
                  <PassInputDiv>
                    <FormikInputField
                      {...borderProp(formik, 'password')}
                      type={visible ? 'text' : 'password'}
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Password"
                    />
                    <IconEye onClick={() => setVisible(!visible)}>
                      {visible ? (
                        <use href={`${sprite}#eye`} />
                      ) : (
                        <use href={`${sprite}#eye-off`} />
                      )}
                    </IconEye>
                  </PassInputDiv>
                  {errors.password && touched.password ? (
                    <ErrorRowDiv>
                      <IconError>
                        <use href={`${sprite}#checkbox-circle`} />
                      </IconError>
                      <ErrorMessage name="password" />
                    </ErrorRowDiv>
                  ) : null}
                  {!errors.password && values.password ? (
                    <SuccessRowDiv>
                      <IconSuccess>
                        <use href={`${sprite}#checkbox-circle`} />
                      </IconSuccess>
                      <p>Success password</p>
                    </SuccessRowDiv>
                  ) : null}
                </div>
              </InputsBox>

              <FormSubmitButton type="submit">Sign In</FormSubmitButton>
            </FormikForm>
          </>
        );
      }}
    </Formik>
  );
};
