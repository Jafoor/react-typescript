import { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<null | UserProps>(null);
  const handleLogin = () => {
    setUser({ name: "Jafor", email: "a@a.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
