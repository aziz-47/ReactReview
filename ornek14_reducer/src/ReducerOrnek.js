import React, {useState} from 'react'

const ReducerOrnek = () => {
 const [yukleniyor,SetYukleniyor] = useState(false);
 const [resim,SetResim] = useState("");
 const [hata,SetHata] = useState("");
 

 const getir =() => {};
 return (
  <div>
   <button onClick={getir} disable= {yukleniyor}>GETIR</button>
   
  </div>
 )
}

export default ReducerOrnek
