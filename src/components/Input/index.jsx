import React, { useRef } from "react";
import { IMaskInput } from "react-imask";
import "./css/input.css";

const Input = ({ id, v, type, label, placeholder }) => {
  const ref = useRef(null);
  return (
    <div className="form-control__wrapper">
      <div className="form-control">
        <label htmlFor={id} className="label">
          {label}
        </label>
        {id === "phone" ? (
          <IMaskInput
            id={id}
            inputRef={ref}
            mask="+7 (000) 000-00-00"
            definitions={{
              0: /[0-9]/,
            }}
            placeholder={placeholder}
            className="form-input"
            overwrite
          />
        ) : (
          <input
            type={type}
            id={id}
            value={v}
            className="form-input"
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
