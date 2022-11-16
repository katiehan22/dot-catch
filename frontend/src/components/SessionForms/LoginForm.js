import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.css';
import { login, clearSessionErrors } from '../../store/session';
import { hideModal } from '../../store/ui';

function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    const setState = field === 'email' ? setEmail : setPassword;
    return e => setState(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })); 
  }

  return (
    <form className="session-form" onSubmit={handleSubmit}>
      <div className='form-top'>
        <h2>Log in</h2>
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
      <div className="errors">{errors?.email}</div>
      </label>
      <label>
        <input type="password"
          value={password}
          onChange={update('password')}
          placeholder="Password"
        />
      </label>
      <div className="errors">{errors?.password}</div>
      <button
        className='submit-button'
        type="submit"
        value="Log In"
        disabled={!email || !password}
      >Log in
      </button>
    </form>
  );
}

export default LoginForm;
