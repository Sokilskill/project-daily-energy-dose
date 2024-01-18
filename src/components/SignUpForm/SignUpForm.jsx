import css from './SignUpForm.module.css';
import sprite from '../../assets/sprite.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Is not in correct format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});

export const SignUpForm = ({ onSubmit }) => {
  const [visible, setVisible] = useState(true);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {(formik) => {
        const { errors, touched } = formik;
        return (
          <>
            <Form className={css.form}>
              <div className={css.inputs}>
                <div className="form-row">
                  <label htmlFor="name"></label>

                  <Field
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className={css.form_input}
                  />
                  {errors.name && touched.name ? (
                    <div className={css.error_row}>
                      <svg className={css.icon_checkbox_circle}>
                        <use href={`${sprite}#checkbox-circle`} />
                      </svg>
                      <ErrorMessage name="name" />
                    </div>
                  ) : null}
                </div>

                <div className="form-row">
                  <label htmlFor="email"></label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className={css.form_input}
                  />
                  {errors.email && touched.email ? (
                    <div className={css.error_row}>
                      <svg className={css.icon_checkbox_circle}>
                        <use href={`${sprite}#checkbox-circle`} />
                      </svg>
                      <ErrorMessage name="email" />
                    </div>
                  ) : null}
                </div>

                <div className="form-row">
                  <label htmlFor="password"></label>
                  <div className={css.input_pass_field}>
                    <Field
                      type={visible ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="Password"
                      className={css.form_input}
                    />
                    <svg
                      className={css.icon_eye}
                      onClick={() => setVisible(!visible)}
                    >
                      {visible ? (
                        <use href={`${sprite}#eye`} />
                      ) : (
                        <use href={`${sprite}#eye-off`} />
                      )}
                    </svg>
                  </div>
                  {errors.password && touched.password ? (
                    <div className={css.error_row}>
                      <svg className={css.icon_checkbox_circle}>
                        <use href={`${sprite}#checkbox-circle`} />
                      </svg>
                      <ErrorMessage name="password" />
                    </div>
                  ) : null}
                </div>
              </div>

              <button type="submit" className={css.form_btn}>
                Sign Up
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};
