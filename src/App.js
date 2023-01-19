import { useState } from "react";
import "./App.css";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpenses } from "./components/new-expense/NewExpenses";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (data) => {
    const addedData = [...users];
    addedData.push(data);
    setUsers(addedData);
  };
  users.sort((a, b) => {
    return b.age - a.age;
  });
  return (
    <div className="App">
      <NewExpenses onAddUser={addUser} />
      <Expenses people={users} />
    </div>
  );
}

export default App;
