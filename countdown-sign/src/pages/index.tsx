import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { VMSSign } from "../components/VMSSign";

export default function Home() {
  console.log("STARTING NOW");
  console.time("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkl");
  return (
    <div>
      <VMSSign dest1="Frst Hills" dest2="Oak Grove" time1="4 min" time2="11 min" clock="4:38" scale={1}/> <br></br>
      <VMSSign dest1="Ptbllo Rd" dest2="Sesame St" time1="2 min" time2="43 yrs" clock="11:01" scale={2}/> <br></br>
      <VMSSign text="This is a test. Will    this work, Let us see." scale={3}/> <br></br>
      <VMSSign text="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkl" scale={4}/>
    </div>
  )
}
