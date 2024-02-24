import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        const token = res?.data?.data?.token;
        if (token) {
          setNotif("login berhasil");
          setTimeout(() => {
            navigate("/menu");
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <h1>Login</h1>
      {!!notif.length && <h1>{notif}</h1>}

      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};

export default Login;
