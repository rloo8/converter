const root = document.querySelector("#root");

function Minutes() {
  const [amount, setAmount] = React.useState();
  const [flip, setFlip] = React.useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => {
    setAmount(0);
  };

  const onFlip = () => {
    setFlip((current) => !current);
    setAmount(0);

    const arrow = document.querySelector(".arrow");
    arrow.classList.toggle("flip");
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="converter">
        <div>
          <label htmlFor="minutes">Minutes </label>
          <input
            value={flip ? Math.round(amount * 60) : amount}
            id="minutes"
            placeholder="Minutes"
            type="number"
            onChange={onChange}
            disabled={flip}
          />
        </div>
        <div className="arrow"></div>
        <div>
          <label htmlFor="hours">Hours </label>
          <input
            value={flip ? amount : Math.round((amount / 60) * 100) / 100}
            id="hours"
            placeholder="Hours"
            type="number"
            onChange={onChange}
            disabled={!flip}
          />
        </div>
      </div>

      <div className="btn">
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>↔ Flip</button>
      </div>
    </div>
  );
}
function Inch() {
  const [amount, setAmount] = React.useState();
  const [flip, setFlip] = React.useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onFlip = () => {
    setFlip((current) => !current);
    setAmount(0);

    const arrow = document.querySelector(".arrow");
    arrow.classList.toggle("flip");
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="converter">
        <div>
          <label htmlFor="inch">inch </label>
          <input
            value={flip ? amount / 2.54 : amount}
            onChange={onChange}
            id="inch"
            type="number"
            placeholder="inch"
            disabled={flip}
          />
        </div>
        <div className="arrow"></div>
        <div>
          <label htmlFor="cm">cm </label>
          <input
            value={flip ? amount : amount * 2.54}
            onChange={onChange}
            id="cm"
            type="number"
            placeholder="cm"
            disabled={!flip}
          />
        </div>
      </div>

      <div className="btn">
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>↔ Flip</button>
      </div>
    </div>
  );
}
function Square() {
  const [amount, setAmount] = React.useState();
  const [flip, setFlip] = React.useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onFlip = () => {
    setFlip((current) => !current);
    setAmount(0);

    const arrow = document.querySelector(".arrow");
    arrow.classList.toggle("flip");
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="converter">
        <div>
          <label htmlFor="num1">㎡ </label>
          <input
            value={flip ? (amount / 0.3025).toFixed(2) : amount}
            onChange={onChange}
            id="num1"
            type="number"
            placeholder="㎡"
            disabled={flip}
          />
        </div>
        <div className="arrow"></div>
        <div>
          <label htmlFor="num2">평 </label>
          <input
            value={flip ? amount : (amount * 0.3025).toFixed(2)}
            onChange={onChange}
            id="num2"
            type="number"
            placeholder="평"
            disabled={!flip}
          />
        </div>
      </div>

      <div className="btn">
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>↔ Flip</button>
      </div>
    </div>
  );
}

function App() {
  const [index, setIndex] = React.useState();

  const onSelect = () => {
    const select = document.querySelector(".select");
    select.classList.toggle("toggle");
  };
  const onChange = (event) => {
    setIndex(event.target.value);
    const select = document.querySelector(".select");
    select.classList.remove("toggle");
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
        <div className="title">
          <div className="title_wrap">
            <h1>Super Converter</h1>
          </div>
        </div>

        <div className="wrap">
          <button className="selectBtn" onClick={onSelect}>
            {index === 0
              ? "Minutes ↔ Hours"
              : index === 1
              ? "inch ↔ cm"
              : index === 2
              ? "㎡ ↔ 평"
              : "Please select one"}
          </button>
          <ul className="select">
            <li onClick={onChange} value="0">
              Minutes ↔ Hours
            </li>
            <li onClick={onChange} value="1">
              inch ↔ cm
            </li>
            <li onClick={onChange} value="2">
              ㎡ ↔ 평
            </li>
          </ul>
        </div>

        <div className="wrap">
          {index === 0 ? <Minutes /> : null}
          {index === 1 ? <Inch /> : null}
          {index === 2 ? <Square /> : null}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, root);
