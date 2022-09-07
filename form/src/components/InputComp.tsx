import React from "react";

type Props = {
  name: string;
  onChange: (e: any) => void;
  id: string;
  className?: string;
  label: string;
  placeholder: string;
  readOnly?: boolean;
  disabled?: boolean;
  type?: string;
  errMsg?: string;
  value?: string;
  pattern?: string;
};

const InputComp = (props: Props) => {
  const {
    name,
    onChange,
    id,
    className,
    label,
    placeholder,
    readOnly,
    disabled,
    type,
    errMsg,
    value,
    pattern,
  } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        onChange={onChange}
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        value={value}
        pattern={pattern}
        style={{
          height: "40px",
          borderRadius: "4px",
          padding: "4px 8px",
          width: "200px",
          border: "none",
          borderColor: errMsg?.length ? "red" : "none",
          outline: "none",
          background: "#DCDCDC",
        }}
      />
      {!!errMsg?.length && (
        <span style={{ color: "red", maxWidth: "200px", fontSize: "12px" }}>
          {errMsg}
        </span>
      )}
    </div>
  );
};

export default InputComp;
