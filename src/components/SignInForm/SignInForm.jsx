import css from './SignInForm.module.css';
import sprite from '../../assets/sprite.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectisError } from '../../redux/auth/auth-selectors';

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
  const isError = useSelector(selectisError);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        const clear = () => {
          if (isError) {
            setTimeout(resetForm, 3000);
          }
        };
        clear();
      }}
    >
      {(formik) => {
        const { errors, touched } = formik;
        return (
          <>
            <Form className={css.form}>
              <div className={css.inputs}>
                <div className="form-row">
                  <label htmlFor="email"></label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Email"
                    className={
                      !errors.email
                        ? !touched.email
                          ? `${css.form_input}`
                          : `${css.form_input} ${css.success_input}`
                        : `${css.form_input} ${css.error_input}`
                    }
                  />
                  {errors.email && touched.email ? (
                    <div className={css.error_row}>
                      <svg className={css.icon_checkbox_error}>
                        <use href={`${sprite}#checkbox-circle`} />
                      </svg>
                      <ErrorMessage name="email" />
                    </div>
                  ) : null}
                  {!errors.email && touched.email ? (
                    <div className={css.success_row}>
                      <svg className={css.icon_checkbox_succsess}>
                        <use href={`${sprite}#checkbox-circle`} />
                      </svg>
                      <p>Success email</p>
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
                      autoComplete="off"
                      placeholder="Password"
                      className={
                        !errors.password
                          ? !touched.password
                            ? `${css.form_input}`
                            : `${css.form_input} ${css.success_input}`
                          : `${css.form_input} ${css.error_input}`
                      }
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
                      <svg className={css.icon_checkbox_error}>
                        <use href={`${sprite}#checkbox-circle`} />
                      </svg>
                      <ErrorMessage name="password" />
                    </div>
                  ) : null}
                  {!errors.password && touched.password ? (
                    <div className={css.success_row}>
                      <svg className={css.icon_checkbox_succsess}>
                        <use href={`${sprite}#checkbox-circle`} />
                      </svg>
                      <p>Success password</p>
                    </div>
                  ) : null}
                </div>
              </div>

              <button type="submit" className={css.form_btn}>
                Sign In
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};
