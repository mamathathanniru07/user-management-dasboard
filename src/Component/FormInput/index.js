import "./index.css";

const FormField = ({ label, value, onChange, name, required, type }) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        id={name}
        className="input-field"
        placeholder={name}
        required={required}
        type={type}
      />
    </div>
  );
};

export default FormField;
