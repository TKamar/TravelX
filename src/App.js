import React, {
  useEffect,
  Component,
  Fragment,
  useState,
  createContext,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import { Login } from "./containers/Login";
import { SignUp } from "./containers/SignUp";
import { MyProfile } from "./containers/MyProfile";
import { NoMatch } from "./containers/NoMatch";
import NavigationBar from "./components/NavigationBar";
//test NOA
export const LoginContext = createContext();
const App = () => {
  // const loginContext = createContext({ loginState: null });
  const [loggedInState, setLoggedInState] = useState(null);
  // const handleLogin = (loginState) => {
  //   setLoggedInState(loginState);
  // };
  return (
    //set
    <BrowserRouter>
      <LoginContext.Provider value={[loggedInState, setLoggedInState]}>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/myProfile" element={<MyProfile />} />
          <Route element={<NoMatch />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
};

export default App;
