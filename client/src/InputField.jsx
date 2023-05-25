const InputField = ({ value, onChange, type, placeholder }) => (
    <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="block w-full rounded-sm p-2 mb-2 border"
    />
);

export default InputField;
