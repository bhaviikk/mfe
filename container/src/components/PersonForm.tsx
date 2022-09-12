import React from "react";
// @ts-ignore
import { PersonForm } from "form/Form";

const PersonFormComp = (props: any) => {
  return <PersonForm cb={props.cb} />;
};
export default PersonFormComp;
