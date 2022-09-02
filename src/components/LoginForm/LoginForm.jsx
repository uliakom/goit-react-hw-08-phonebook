import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { Container } from './LoginForm.styled';
import { authOperations } from 'redux/auth';
import AnimatedPage from 'components/AnimatedPage';

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <AnimatedPage>
      <Container>
        <MDBContainer
          className="p-5 my-5 d-flex flex-column w-50"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '10px',
          }}
        >
          <h2>Sign in</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
          </div>

          <MDBBtn
            className="mb-4"
            style={{ backgroundColor: '#00223E' }}
            type="button"
            onClick={handleSubmit}
          >
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <Link to="/register"> Register</Link>
            </p>
          </div>
        </MDBContainer>
      </Container>
    </AnimatedPage>
  );
}

export default LoginForm;
