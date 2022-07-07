import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function ButtonPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        title="Welcome"
        description="Click the below button to view the list of countries"
      />
      <button onClick={() => navigate("/countries")}> View Countries</button>
    </div>
  );
}
export default ButtonPage;
