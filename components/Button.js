const Button = ({ text, onClick }) => {
    return (
      <button
        className="   text-black font-medium py-2 px-4 rounded-full bg-slate-200 hover:bg-slate-500"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;