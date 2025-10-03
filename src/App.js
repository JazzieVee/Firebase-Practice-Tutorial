import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user)
      }
    })
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'pswd123')
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'pswd123')
    .then(({ user }) => {
      console.log(user);
      setUser(user);
    })
    .catch((error) => {
      // setErrorMessage('The password is invalid or the user does not have a password.')
      console.log(error.message);
    })
  }

  function logout() {
    signOut(auth);
    setUser({});
    console.log('user signed out')
  }

  return (
    <div className="App">


      <nav>
      <div className='nav__container'>
         <figure>
          <img  />
         </figure>
      <button className='nav__btn' onClick={login}>Login</button>
      <button className='nav__btn nav__btn__purple' onClick={register}>Register</button>

      <button className='email__initial' onClick={logout}>Logout</button>
        {loading ? 'loading...' : user.email[0].toUpperCase()}
      </div>
       </nav>

    </div>
  );
}

export default App;
