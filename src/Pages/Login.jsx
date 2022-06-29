import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginAPI } from "../Redux/AuthReducer/authaction";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const commingFrom = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("INSIDE LOGIN FUN");
    if (email && password) {
      dispatch(loginAPI({ email, password }));
      //   .then((res) => {
      //     if (res.type === "GET_LOGIN_SUCCESS") {
      //       navigate(commingFrom, { replace: true });
      //     }
      //   });
    }
  };

  if (isAuth) {
    navigate(commingFrom, { replace: true });
  }
  return (
    <LoginWrapper>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-item: center;
  margin: auto;
`;
