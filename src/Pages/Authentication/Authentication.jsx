import React , {useState} from 'react'
import Login from '../../components/Login/Login'
import SignUp from '../../components/SignUp/SignUp'

function Authentication() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {isSignUp ? (
        <SignUp toggleForm={toggleForm} />
      ) : (
        <Login toggleForm={toggleForm} />
      )}
    </div>
  )
}

export default Authentication
