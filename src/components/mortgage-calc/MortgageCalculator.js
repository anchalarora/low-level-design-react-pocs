import "./MortgageCalculator.css";
import { useState, useEffect } from "react";

const MortgageCalculator = () => {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);

  const [emi, setEmi] = useState(0);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    if (id === "principle") {
      setPrinciple(value);
    } else if (id === "interest") {
      setInterest(value);
    } else if (id === "years") {
      setYears(value);
    }
  };

  const calculateNewValueEMI = () => {
    let r = interest;

    if (principle && r && years) {
      r = r / 12 / 100; // per month

      const calcPow = Math.pow(1 + r, years * 12);

      const amount = principle * ((r * calcPow) / (calcPow - 1));

      setEmi(Math.round(amount));
    }
  };

  useEffect(() => {
    calculateNewValueEMI();
  }, [principle, interest, years]);

  return (
    <div className="loan-calc">
      <h1 className="main-heading">Mortgage Calculator</h1>
      <div className="input-boxes">
        <p className="headings">Principle</p>
        <input
          id="principle"
          type="number"
          placeholder="Enter Principle amount"
          onChange={handleChange}
        />
        <p className="headings">Interest</p>
        <input
          onChange={handleChange}
          id="interest"
          type="number"
          placeholder="Enter interest"
        />
        <p className="headings">Years</p>
        <input
          onChange={handleChange}
          id="years"
          type="number"
          placeholder="Enter years"
        />
      </div>

      <div className="output">{`Your Emi is ${emi}`}</div>
    </div>
  );
};

export default MortgageCalculator;
