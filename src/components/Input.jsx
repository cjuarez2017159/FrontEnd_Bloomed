export const Input = ({ field, label, value, onChangeHandler, type, onBlurHandler, showErrorMessage, validationMessage }) => {
    const handleChange = (e) => {
        onChangeHandler(e.target.value, field);
    };

    return (
        <div className={`input-field ${showErrorMessage ? 'error' : ''}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                onBlur={(e) => onBlurHandler(e.target.value, field)}
            />
            {showErrorMessage && <span>{validationMessage}</span>}
        </div>
    );
};