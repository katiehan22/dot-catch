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

  const handleDemo = (e) => {
    e.preventDefault()
    const demo = {email: 'demo@user.io', password: 'password'}

    dispatch(login(demo))
  }

  return (
    <form className="session-form" onSubmit={handleSubmit}>
      <div className='form-top'>
        <h2>Sign In</h2>
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
      >Sign In
      </button>
      <div id='line-div'>
        <div className="line"><hr></hr></div>
        <div id='or'>or</div>
        <div className="line"><hr></hr></div>
      </div>
      <button className='demo-button' onClick={handleDemo} type='button'>Sign In with Demo</button>
    </form>
  );
}

export default LoginForm;
