import { forwardRef } from "react";

const Input = forwardRef(({ input, label, onChange, className }, ref,) => {
  return (
    <div>
      {label && <label htmlFor={input.id}>{label}</label>}
      <input
        onChange={onChange}
        ref={ref}
        className={className ? className : null}
        {...input}>
      </input>
    </div>
  )
});

export default Input;