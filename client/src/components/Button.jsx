const Button = function({
  className = "",
  type,
  onClick,
  children,
  disabled = false
}) {
  return (
    <button
      className={`p-4 rounded-md ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )

};

export default Button;