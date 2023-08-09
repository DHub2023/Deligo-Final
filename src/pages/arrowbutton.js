const ArrowButton = ({ onClick }) => {
    return (
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        →
      </button>
    );
  };
  
  export default ArrowButton;
  