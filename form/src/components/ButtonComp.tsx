import React from "react";

type Props = {
  name: string;
  onClick?: (e: any) => void;
  type?: "button" | "submit" | "reset" | undefined;
};

const ButtonComp = (props: Props) => {
  const { name, onClick, type } = props;
  return (
    <button
      style={{
        background: "#483D8B",
        color: "#FFFFFF",
        borderRadius: "4px",
        height: "40px",
        width: "80px",
        cursor: "pointer",
        outline: "none",
      }}
      onClick={onClick}
      type={type}
    >
      {name}
    </button>
  );
};

export default ButtonComp;
