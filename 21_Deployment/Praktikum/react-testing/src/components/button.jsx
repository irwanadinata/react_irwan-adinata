export default function Button(props) {
    const { label } = props;
    return (
      <button
        className="mx-auto block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        {...props}
      >
        {label}
      </button>
    );
  }