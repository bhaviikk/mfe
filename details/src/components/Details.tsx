import React from "react";
import "../index.css";

type obj = {
  id: string;
  height: string;
  weight: string;
};

type Props = {
  data: obj;
};

export const View = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Id</td>
            <td>{data?.id || "-"}</td>
          </tr>
          <tr>
            <td>Height (in cms)</td>
            <td>{data?.height || "-"}</td>
          </tr>
          <tr>
            <td>Weight (in kgs)</td>
            <td>{data?.weight || "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
