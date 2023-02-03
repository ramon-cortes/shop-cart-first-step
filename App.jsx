// INSTALAR
// npm install axios
import './App.css';
import Shop from './shop';
import Cart from './cart';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [shopList, setShopList] = useState(null);
  const [cartList, setCartList] = useState([]);

  // --- Formatea el JSON de Strapi     ---
  // a un arreglo de objetos
  // Remueve data.data.attributes
  function formatStrapiData(data) {
    if (data) {
      let formatted = [];
      for (let i = 0; i < data.data.length; i++) {
        formatted.push({});
        for (const [key, value] of Object.entries(data.data[i].attributes)) {
          formatted[i][key] = value;
        }        
      }
      return formatted;
    }    
  }
  // -----------------------------------
  
  // --- Axios GET        ---
  // Obtenido de Postman
  // Nota: Parece que de todas formas lo ejecuta 4 veces
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:1337/api/motorcycles',
      headers: { }
    };
    axios(config)
    .then(function (response) {
      //console.log('Sólo lo debería hacer al inicio');
      setShopList(formatStrapiData(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);  
  // -----------------------

  //const data = shopList;
  let newShopList = null;
  if (shopList) {
    //console.log(JSON.stringify(shopList));
    newShopList = [...shopList];
  }  

  return (
    <div>
      <h3>Motorcycle Shop</h3>
      <div className='wrapper'>
        <Shop 
          shopList={newShopList} 
          setShopList={setShopList}
          cartList={cartList}
          setCartList={setCartList}
        />
        <Cart
          shopList={newShopList} 
          setShopList={setShopList}
          cartList={cartList}
          setCartList={setCartList}
        />
      </div>      
    </div>
  );
}

export default App;
