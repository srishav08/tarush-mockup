export function Button({ children, className = '', ...props }) {
    return (
      <button
        className={`bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition font-semibold ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }