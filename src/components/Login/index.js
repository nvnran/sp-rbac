import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnText, setBtnText] = useState('Submit');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>');
    auth.signInWithEmailAndPassword(email, password).then((res) => {
      if (res.user) {
        window.location.replace('/home');
      }
    });
  };

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <>
      <div className='loginContainer'>
        <div className='loginBox'>
          <div className='container-fluid'>
            <div className='row-fluid loginWrap'>
              <div className='col-6 loginImg'></div>
              <div className='col-6 loginFormWrap'>
                <form
                  className='loginForm'
                  id='loginForm'
                  onSubmit={handleSubmit}
                >
                  <h6 className='loginTitle'>Login</h6>
                  <input
                    type='text'
                    className='loginInput'
                    id='email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    className='loginInput'
                    id='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type='submit'
                    className='btn btn-login'
                    id='btn-login'
                    dangerouslySetInnerHTML={{ __html: btnText }}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
