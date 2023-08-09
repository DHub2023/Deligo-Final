const AmountInput = ({ value, onChange }) => {
    return (
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="border border-gray-300 px-4 py-2 rounded-md"
      />
    );
  };
  
export default AmountInput;
  