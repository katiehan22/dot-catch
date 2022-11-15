import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.css';
import { signup, clearSessionErrors } from '../../store/session';
import { hideModal } from '../../store/ui';

function SignupForm () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = field => {
    let setState;

    switch (field) {
      case 'email':
        setState = setEmail;
        break;
      case 'name':
        setState = setName;
        break;
      case 'password':
        setState = setPassword;
        break;
      case 'password2':
        setState = setPassword2;
        break;
      default:
        throw Error('Unknown field in Signup Form');
    }

    return e => setState(e.currentTarget.value);
  }

  const usernameSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      name,
      password
    };

    dispatch(signup(user)); 
  }

  return (
    <form className="session-form" onSubmit={usernameSubmit}>
      <div className='form-top'>
        <h2>Create account</h2>
        <button className='close'
          type='button'
          onClick={() => dispatch(hideModal())}
        >X
        </button>
      </div>
      <label>
        <input type="email"
          value={email}
          onChange={update('email')}
          placeholder="Email"
        />
      </label>
      <div className="errors">{errors?.email}</div>
      <label>
        <input type="text"
          value={name}
          onChange={update('name')}
          placeholder="First name"
        />
      </label>
      <div className="errors">{errors?.username}</div>
      <label>
        <input type="password"
          className='bottom-flat'
          value={password}
          onChange={update('password')}
          placeholder="Password"
        />
      </label>
      <div className="errors">{errors?.password}</div>
      <label>
        <input type="password"
          value={password2}
          onChange={update('password2')}
          placeholder="Confirm password"
        />
      <div className="errors">
        {password !== password2 && 'Confirm password field must match'}
      </div>
      </label>
        <button
          className='submit-button'
          type="submit"
          disabled={!email || !name || !password || password !== password2}
        >Sign up
        </button>
    </form>
  );
}

export default SignupForm;
