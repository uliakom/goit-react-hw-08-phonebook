import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { Container } from './LoginForm.styled';
import { authOperations } from 'redux/auth';

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
    <Container>
      <form onSubmit={handleSubmit}>
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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
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
            type="submit"
          >
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <Link to="/register"> Register</Link>
            </p>
          </div>
        </MDBContainer>
      </form>

      {/* <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <label>
          <input
            placeholder="Email address"
            type="email"
            name="email"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            onChange={handleChange}
            required
          />
        </label>

        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
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
          type="submit"
        >
          Sign in
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <Link to="/register"> Register</Link>
          </p>
        </div>
      </form> */}
    </Container>
  );
}

export default LoginForm;
