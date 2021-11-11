import React from "react";
import Mesaj from "./Mesaj";

const Kisi = (props) => {
  return (
    <div>
      <Mesaj ad={props.ad} />
      <h2> I'am {props.ad}</h2>
      <img src={props.resim} alt="" />
      <p>Tel: {props.tel}</p>
    </div>
  );
};

export default Kisi;
