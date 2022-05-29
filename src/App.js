import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [endpoint, setEndpoint] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
    console.log(users);
  }, [endpoint]);

  return (
    <div className="App">
      <h1> User Data from Fakestore Api</h1>
      {users.map((user) => (
        <div>
          <h2>
            1stname, L.name: {user.name.firstname}, {user.name.lastname}
          </h2>
          <h2>Username: {user.username}</h2>
          <p>{user.email}</p>
          <p> Phone: {user.phone}</p>
          <p>City: {user.address.city}</p>
          <p>
            latitude: {user.address.geolocation.lat} and longtitude:{" "}
            {user.address.geolocation.long}
          </p>
          <h2>{user.name.firstname}</h2>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  );
}
