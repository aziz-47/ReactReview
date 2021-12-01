import React, {useState,useReducer} from 'react'
import {reducer} from "./reducer";

const ReducerOrnek = () => {
 // const [yukleniyor,SetYukleniyor] = useState(false);
 // const [resim,setResim] = useState("");
 // const [hata,setHata] = useState("");
 


 // ? USEREDUCER Bir çok state'in tek bir elden kontrol edilmesine izin veren bir state yönetim Hook'udur.
  //* - useReducer 2 parametre alır.
  //*     1) Reducer metodu : State'lerin alacağı değerlerin atandığı metot.
  //*     2) State'lerin başlangıç durumları
  //* - 2 adet dönüş değeri vardır.
  //*   State'ler ve bu state'lere ait olan işlemler (action dispatch)

  //* Tüm state'lerin başlangıç durumlarının tanımlanamasi
  const initialState = {
   yukleniyor: false,
   resim:"",
   hata: "",
  };

  const [state, dispatch] = useReducer(reducer,initialState)
  const{resim,yukleniyor,hata} =  state;
  
 

 const getir =() => {
  // setResim("");
  // setHata("");
  // SetYukleniyor(true);

  dispatch({type:"GETIR_BASLA"});

  fetch("https://dog.ceo/api/breeds/image/random").then((res)=>res.json()).then((data)=>{
   // SetYukleniyor(false);
   // setResim(data.message);

   dispatch({type:"GETIR_BASARILI",payload:data.message});

  }).catch(()=>{
   // SetYukleniyor(false);
   // setHata("Hata...Veriler cekilemedi...")

   dispatch({type:"GETIR_HATA",payload:"Hata... Veriler ulasalimadi..."})
  })

   };
 return (
  <div>
   <button onClick={getir} disabled= {yukleniyor}>GETIR</button>

   {resim && (<div>
   <img src={resim} width="500px" alt="resim" />

   
   </div>)}
   {hata && (<p>{hata}</p>)}
   
  </div>
 )
}

export default ReducerOrnek
