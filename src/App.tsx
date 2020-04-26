import React from 'react';

const App: React.FC = () => {

const handleSubmit =( e: any) => {

}

  return(
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <div>
          <label  htmlFor="email">Email:</label>
          <input autoComplete="off" type="text" name='email'/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input  autoComplete="off" type="text" name='password'/>
        </div>
        <button type='submit'>Submit</button>
        <button>Reset</button>
      </form>
    </div>
  )
}

export default App;
