import { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const handleLogin = () => {
    setUser({ name: "Jafor", email: "a@a.com" });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name} </div>
      <div>User email is {user.email}</div>
    </div>
  );
};
