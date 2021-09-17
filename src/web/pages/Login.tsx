import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useHttpClient from '../hooks/useHttpClient';
import AuthContext from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const httpClient = useHttpClient();
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    onSubmit(data) {
      httpClient.post('/api/auth/login', data)
        .then((payload) => {
          dispatch({ type: 'LOGIN', payload });
          history.push('/admin');
        })
        .catch(() => {});
    },
    validationSchema: Yup.object({
      email: Yup.string().required('The email is required'),
      password: Yup.string().required('The password is required'),
    }),
  });
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          { touched.email && errors.email ? <p>{errors.email}</p> : null }
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          { touched.password && errors.password ? <p>{errors.password}</p> : null }
        </div>
        <div>
          <input type="checkbox" name="rememberMe" id="rememberMe" checked={values.rememberMe} onChange={handleChange} />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
