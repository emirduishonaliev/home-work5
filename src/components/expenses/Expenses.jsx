import { ExpensesItem } from "../expenses-item/ExpensesItem";
import "./expenses.css";

export const Expenses = ({ people }) => {
  // console.log(people);
  return (
    <div className="ul">
      {people.map((user) => {
        return <ExpensesItem name={user.name} age={`(${user.age} years old)`} />;
      })}
    </div>
  );
};
