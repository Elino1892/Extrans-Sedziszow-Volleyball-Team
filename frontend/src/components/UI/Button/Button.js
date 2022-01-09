const Button = ({ type, onClick, disabled, className, children }) => {
  return <button
    type={type || 'button'}
    className={className ? className : 'button'}
    onClick={onClick}
    disabled={disabled || false}
  >
    {children}
  </button>
}

export default Button;