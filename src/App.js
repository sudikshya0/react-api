import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const callFxn = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {const allUsers = response?.data;
          const last2Users = allUsers.filter((item)=> item?.id>8)
          setUsers(last2Users);
        })
        .catch((err) => console.log(err));
    };
    callFxn();
  }, []);

  console.log("users", users);
  return (
    <div className="App">
      {users ? (
        users.map((item, index) => <div key={index}>{item.name}</div>)
      ) : (
        <div>loading users</div>
      )}
    </div>
  );
}

export default App;
