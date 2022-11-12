import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import Axios from "axios";

function App() {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const payHandler = (event) => {
    event.preventDefault();
    Axios.post("https://gavnatmoversandcleaners.com/token", {
      amount,
      phone,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="  mt-10 justify-center items-center  flex flex-col">
      <h1 className="text-2xl">
        Pay with <span className="text-green-600  font-bold">Mpesa</span>
      </h1>
      <form className="flex flex-col space-y-5">
        {" "}
        <input
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className=" bg-slate-100 text-center rounded-xl"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className=" bg-slate-100 text-center rounded-xl"
        />
        <button
          onClick={payHandler}
          className="bg-green-600 text-white px-2 py-1 rounded-2xl"
        >
          Pay Now
        </button>
      </form>
      {/* {data?.map((item,index)=>{
        <p key="index">{item}</p>
      })} */}
      {/* <p>{error}</p> */}
    </div>
  );
}

export default App;
