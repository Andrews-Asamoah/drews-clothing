import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      //rendering our label
      //If we need a label we'll generate one else there is no need for it
      label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          }  form-input-label`}
        >
          {label}
        </label>
      ) : null
    }
  </div>
);

export default FormInput;
