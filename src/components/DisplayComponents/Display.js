import React,{useState} from "react";

export default function Display(){
  let [value,setValue] = useState(0);
  return <div className="display">{value/* Display any props data here */}</div>;
};
