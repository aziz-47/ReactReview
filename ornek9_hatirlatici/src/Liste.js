import React from "react";

function Liste(props) {
  const { kisiler } = props;

  // const { isim, yas, resim } = kisiler[0];

  return (
    <div>
      {kisiler.map((k) => {
        const { isim, resim, yas } = k;
        return (
          <div>
            <img src={resim} alt="" />;<h2>{isim}</h2>
            <h2>{yas}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Liste;
