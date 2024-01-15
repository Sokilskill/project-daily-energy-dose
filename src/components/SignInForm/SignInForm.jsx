import css from './SignInForm.module.css';

export const SignInForm = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formData = {
      email: form.email.value,
      password: form.password.value,
    };
    if (!formData) {
      alert('Fill in the field, please!');
      return;
    }
    onSubmit(formData);
    form.reset();
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputs}>
          <label className={css.form_label}>
            <input
              className={css.form_input}
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <label className={css.form_label}>
            <input
              className={css.form_input}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
        </div>

        <button type="submit" className={css.form_btn}>
          Sign In
        </button>
      </form>
    </>
  );
};
