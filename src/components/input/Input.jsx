import "./input.css";

export const Input = ({ id, labelName, inputType, onChange, ...rest }) => {
  return (
    <div className="contain">
      <label className="label" htmlFor={id}>
        {labelName}
      </label>
      <input
        onChange={onChange}
        className="input"
        id={id}
        type={inputType}
        {...rest}
      />
    </div>
  );
};
