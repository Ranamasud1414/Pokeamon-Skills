import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [move, setMoves] = useState();
  const [weight, setweight] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    async function api() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res);
      setName(res.data.name);
      setMoves(res.data.species.name);
      setweight(res.data.weight);
      setheight(res.data.height);
    }

    api();
  });

  return (
    <div>
      <div className="container mt-5 text-center box">
        <h3> pokeamon id is {num}</h3>
        <h3>
          The name of the pokeamon is <span style={{ color: "orange", fontSize: "35px" }}>{name}</span>
        </h3>
        <h3>
          species of the pokeamon is <span style={{ color: "yellow", fontSize: "35px" }}>{move}</span>
        </h3>
        <h3>
          The weight of the pokeamon is <span style={{ color: "blue", fontSize: "35px" }}>{weight}</span>
        </h3>
        <h3>
          The height of the pokeamon is <span style={{ color: "red", fontSize: "35px" }}>{height}</span>
        </h3>

        <div className="container d-flex justify-content-center">
          <div>
            <select
              value={num}
              onChange={(event) => {
                setNum(event.target.value);
              }}
              className="form-select form-select-lg mb-3 mt-5"
              aria-label=".form-select-lg example"
            >
              <option selected>Open this select menu</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComA;
