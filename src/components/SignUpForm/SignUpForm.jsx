import css from './SignUpForm.module.css';

export const SignUpForm = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formData = {
      name: form.name.value,
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
      <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
        <div className={css.inputs}>
          <label className={css.form_label}>
            <input
              className={css.form_input}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </label>
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
          Sign Up
        </button>
      </form>
    </>
  );
};
