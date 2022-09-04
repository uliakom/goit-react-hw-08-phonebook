import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { authOperations } from 'redux/auth';
import { Link } from 'react-router-dom';
import { Container } from './RegisterForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <MDBCol>
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <MDBRow>
                <h2>Sign up now</h2>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Name"
                    id="form1"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form3"
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
                id="form4"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                title="Minimum eight characters, at least one letter and one number"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required
              />
              <div className="text-center" style={{ marginBottom: '20px' }}>
                <p>
                  Already registered?
                  <Link to="/login"> Login</Link>
                </p>
              </div>

              <MDBBtn
                className="w-100 mb-4"
                size="md"
                type="submit"
                autoComplete="off"
                style={{ backgroundColor: '#00223E' }}
              >
                sign up
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </form>
    </Container>
  );
}

export default RegisterForm;
