import logo from './logo.svg';
import './App.css';
import FormikContainer from './formikContainer';
import LoginForm from './loginForm';
import RegistrationForm from "./registrationForm"

function App() {
  return (
    <div className="App">
      <FormikContainer/>
      {/* <LoginForm/> */}
      <RegistrationForm/>
    </div>
  );
}

export default App;
