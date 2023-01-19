import { useState } from "react";
import { Input } from "../input/Input";
import "./newExpense.css";

export const NewExpenses = (props) => {
  const [title, setTitle] = useState("");
  const [ageTitle, setAgeTitle] = useState("");

  const titleAgeInputChangeHandler = (event) => {
    setAgeTitle(event.target.value);
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const userData = {
    name: title,
    age: ageTitle,
  };
// console.log(userData);
  const addNewExpense = () => {
    props.onAddUser(userData);

    setTitle("");
    setAgeTitle("");
  };

  return (
    <div className="container">
      <Input
        onChange={titleInputChangeHandler}
        labelName={"Username"}
        id={"username"}
        inputType={"text"}
        value={title}
      />
      <Input
        onChange={titleAgeInputChangeHandler}
        labelName={"Age (Years)"}
        id={"age"}
        inputType={"number"}
        value={ageTitle}
      />
      <button
        onClick={addNewExpense}
        className="btn"
        disabled={!title || !ageTitle}
      >
        Add User
      </button>
    </div>
  );
};
