import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      {!isLogin && <RegisterForm />}
      {isLogin && <Navigate to="/contacts" />}
    </div>
  );
}

// import { Helmet } from 'react-helmet';
// <div>
//   <Helmet>
//     <title>Registration</title>
//   </Helmet>
//   <RegisterForm />
// </div>;
