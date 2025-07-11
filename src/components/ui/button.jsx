export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`bg-red-600 hover:bg-red-700 transition-colors font-bold text-white ${className}`}
    >
      {children}
    </button>
  );
}