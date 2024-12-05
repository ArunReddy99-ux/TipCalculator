import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
//children prop usage work
function TipCalculator() {
  const [amount, setamount] = useState("");
  const [amt, setamt] = useState(0);
  const [frndamt, setfrndamt] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  function handleClick() {
    setamount("");
    setamt(0);
    setfrndamt(0);
    setisOpen(false);
  }
  return (
    <div>
      <Bill amount={amount} setamount={setamount} setOpen={setisOpen} />
      <Selectpercent amt={amt} onSelect={setamt}>
        How would like the servive?
      </Selectpercent>
      <Selectpercent amt={frndamt} onSelect={setfrndamt}>
        How would friend like the servive?
      </Selectpercent>
      <Ttl at={amount} fa={frndamt} mat={amt} onOpen={isOpen} />
      <Reset onClick={handleClick} onOpen={isOpen} />
    </div>
  );
}
function Bill({ amount, setamount, setOpen }) {
  function handleChange(e) {
    setamount(e);
    setOpen(true);
  }
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={amount}
        placeholder="Bill value"
        onChange={(e) => handleChange(Number(e.target.value))}
      />
    </div>
  );
}
function Selectpercent({ amt, onSelect, children }) {
  function handleselection1(e) {
    onSelect(e);
  }
  return (
    <div>
      <div>
        <label>{children}</label>
        <select
          value={amt}
          onChange={(e) => handleselection1(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was Okay (5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely Amazing(20%)</option>
        </select>
      </div>
    </div>
  );
}
function Ttl({ at, fa, mat, onOpen }) {
  let tip = (at * ((fa + mat) / 2)) / 100;
  return (
    <div>
      {onOpen ? (
        <b>
          <p>
            You Should Pay {at + (at * ((fa + mat) / 2)) / 100}(
            {`${at}+ $${tip} tip`})
          </p>
        </b>
      ) : (
        ""
      )}
    </div>
  );
}
function Reset({ onClick, onOpen }) {
  return <div>{onOpen ? <button onClick={onClick}>RESET</button> : ""}</div>;
}
