import MakeTable from './maketable';

export default function Shop(props) {
  let newShopList = props.shopList;
  let newCartList = props.cartList;

  // --- Reduce el stock de shopList ---
  // --- Y agrega al carrito ---
  function addToCart(e) {
    let index = Number(e.currentTarget.id);
    let stock = newShopList[index].stock;
    if (stock > 0) {
      // Reduce stock
      newShopList[index].stock--;
      props.setShopList(newShopList);
      // Agrega al carrito
      let modelInCart = false;
      // Si ya existe el artículo en el carrito
      // simplemente lo incrementa
      for (let i = 0; i < newCartList.length; i++) {
        if (newCartList[i].model === newShopList[index].model) {          
          modelInCart = true;
          newCartList[i].stock++;
        }        
      }
      // Si no existe el artículo en el carrito
      // lo crea e inicializa en 1
      if (!modelInCart) {
        newCartList.push({});
        newCartList[newCartList.length - 1]['make'] = newShopList[index].make;
        newCartList[newCartList.length - 1]['model'] = newShopList[index].model;
        newCartList[newCartList.length - 1]['stock'] = 1;
      }
      // De todas formas hace render porque los artículos de shop lo forzan, pero de todas formas ↓
      props.setCartList(newCartList);      
    } 
  }
  // --------------------------------------  
  
  return (
    <MakeTable
      class='shop'
      title='SHOP'
      list={props.shopList} 
      setList={props.setShopList}
      handleButton={addToCart}
      buttonLabel='Add to Cart'
      count='Stock'
    />
  );
}