import React, { useState, useRef, useEffect } from "react";
import InputComp from "./InputComp";
import ButtonComp from "./ButtonComp";

export const PersonForm = ({ cb }) => {
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");
  const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState("");
  const [height, setHeight] = useState("");
  const [heightError, setHeightError] = useState("");
  const isFormOk = useRef(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!height) {
      setHeightError("Height is required !");
      isFormOk.current = false;
    }
    if (!weight) {
      setWeightError("Weight is required !");
      isFormOk.current = false;
    }
    if (!id) {
      setIdError("Id is required !");
      isFormOk.current = false;
    }
    if (isFormOk.current) {
      cb({ id, height, weight });
      setHeight("");
      setWeight("");
      setId("");
    }
  };

  const handleIdChange = (e: any) => {
    const { value } = e.target;
    if (value === "") {
      setId(value);
      setIdError("Id is required !");
      return;
    }
    if (value.length > 13 || isNaN(value)) return;
    if (value.length !== 13) {
      setIdError("Id should be 13 Digits");
    } else {
      setIdError("");
    }
    setId(value);
  };

  const handleHeightChange = (e: any) => {
    const { value } = e.target;
    if (value.length >= 4 || isNaN(value)) return;
    if (value === "") {
      setHeight(value);
      setHeightError("Weight is required !");
      return;
    }
    if (value >= 100 && value <= 250) {
      setHeight(value);
      setHeightError("");
    } else {
      setHeight(value);
      setHeightError("please enter the height between 100 and 250");
    }
  };
  const handleWeightChange = (e: any) => {
    const { value } = e.target;
    if (value.length >= 4 || isNaN(value)) return;
    if (value === "") {
      setWeight(value);
      setWeightError("Weight is required !");
      return;
    }
    if (value >= 40 && value <= 300) {
      setWeight(value);
      setWeightError("");
    } else {
      setWeight(value);
      setWeightError("please enter the height between 100 and 250");
    }
  };

  useEffect(() => {
    if (!heightError || !weightError || !idError) {
      isFormOk.current = true;
    }
  }, [height, weight, id]);

  return (
    <form
      onSubmit={(e: any) => handleSubmit(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "50vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputComp
        name="idNumber"
        id="idNumber"
        label="Id Number"
        placeholder="Id Number"
        errMsg={idError}
        value={id}
        onChange={handleIdChange}
      />
      <InputComp
        errMsg={heightError}
        id="height"
        name="height"
        onChange={handleHeightChange}
        label="Height"
        placeholder="Height in cms"
        value={height}
      />
      <InputComp
        name="weight"
        id="weight"
        label="Weight"
        placeholder="Weight in kgs"
        errMsg={weightError}
        value={weight}
        onChange={handleWeightChange}
      />
      <div style={{ alignSelf: "center" }}>
        <ButtonComp type="submit" name="Submit" />
      </div>
    </form>
  );
};
