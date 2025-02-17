import React, {useState} from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data";
//Import your array data to from the provided data file


const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator,setOperator] = useState(operators);
  return (
    <div className="operators_group">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operator.map((operatorss,index) => <OperatorButton key={index} operator={operatorss} />)}
    </div>
  );
};
export default Operators;