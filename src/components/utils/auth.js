export const signup = (email, password, name) => {
  const Response = {
    id: "user-12345",
    email: email,
    name: name,
    password: password,
  };

  localStorage.setItem("user", JSON.stringify(Response));
  return Promise.resolve(Response);
};

export const signin = (email, password) => {
  const Response = {
    token: "fake-jwt-token-12345",
    email: email,
    password: password,
  };

  localStorage.setItem("jwt", Response.token);
  return Promise.resolve(Response);
};

export const authorize = (identifier, password) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    (identifier === storedUser.email || identifier === storedUser.name) &&
    password === storedUser.password
  ) {
    return Promise.resolve({ token: "fake-jwt-token-12345" });
  } else {
    return Promise.reject(new Error("Invalid credentials"));
  }
};

export const validateToken = () => {
  const UserData = {
    name: "Test User",
    email: "test@example.com",
  };

  return Promise.resolve(UserData);
};

export default { signup, signin, authorize, validateToken };
