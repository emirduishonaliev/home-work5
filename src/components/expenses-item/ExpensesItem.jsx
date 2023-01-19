import "./expenseItem.css";

export const ExpensesItem = ({ name, age }) => {
  return (
    <li>
      <p className="items">
        {name} {age}
      </p>
    </li>
  );
};
