export default function Button({ className, onClick, children, type }) {
  return (
    <button
      className={className}
      type={type ? type : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
