import React, {useState} from 'react';

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const App: React.FC = () => {
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');
const [emailIsTouched, setEmailIsTouched] = useState(false);

const [password, setPassword] = useState('');
const [passwordError, setPasswordError] = useState('');
const [passwordTouched, setPasswordIsTouched] = useState(false);

const submitIsDisabled = !!emailError || !!passwordError || !emailIsTouched || !passwordTouched;

const handleSubmit =( event: any) => {
  event.preventDefault();
  console.log(`email: ${email} password: ${password}`);
}

const handleEmailChange = (event: any) => {
  const input = event.target.value;
  setEmail(input)
}

const handleEmailBlur = () => {
  if (!email.length) {
    setEmailError('This field is required!');
  }else if (!emailRegex.test(email)) {
    setEmailError('Most be a valid email!')
  } else {
    setEmailError('')
  }
  setEmailIsTouched(true)
}

const handlePasswordChange = (event: any) => {
  const input = event.target.value;
  setPassword(input)
}

const handlePasswordBlur = () => {
  if (!password.length) {
    setPasswordError('This field is required!');
  }else if (password.length < 8) {
    setPasswordError('Password must be at least 8 characters!')
  } else {
    setPasswordError('')
  }
  setPasswordIsTouched(true)
}

const handleReset = () => {
  setEmail('')
  setPassword('')
  setEmailError('')
  setPasswordError('')
  setEmailIsTouched(false)
  setPasswordIsTouched(false)
}

  return(
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <div>
          <label  htmlFor="email">Email:</label>
          <input autoComplete="off" onBlur={handleEmailBlur} onChange={handleEmailChange} type="text" name='email' value={email}/>
          <span>{emailError}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input  autoComplete="off" onBlur={handlePasswordBlur} onChange={handlePasswordChange} type="text" name='password' value={password}/>
          <span>{passwordError}</span>
        </div>
        <button disabled={submitIsDisabled} type='submit'>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}

export default App;
