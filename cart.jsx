import MakeTable from './maketable';

export default function Cart(props) {
  //let newCartList = props.cartList;
  //console.log(newCartList);

  // --- Quita artículos del carrito ---
  function removeFromCart(e) {
    let index = Number(e.currentTarget.id);
    let newCartList = props.cartList;
    let newShopList = props.shopList;

    // Regresa el artículo a la tienda
    //console.log(JSON.stringify(newShopList));
    //console.log(newCartList[index].model);
    for (let i = 0; i < newShopList.length; i++) {
      //console.log(newShopList[i].model);      
      if (newShopList[i].model === newCartList[index].model) {
        newShopList[i].stock++;
      }
    }
    // Quita el artículo del carrito
    if (newCartList[index].stock > 1) {
      newCartList[index].stock--;
    } else {
      newCartList.splice(index, 1);
    }
    props.setCartList([...newCartList]);    
  }  
  // -------------------------------------------------
  
  return (
    <MakeTable
      class='cart'
      title='CART'
      list={props.cartList} 
      setList={props.setCartList}
      handleButton={removeFromCart}
      buttonLabel='Remove'
      count='Amount'
    />
  );
}