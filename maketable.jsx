export default function MakeTable(props) {

  let newList = props.list;
  
  // Inicializa trs con un <tr> en blanco para evitar warning
  // Creo que sería el equivalente a: document.createElement('tr')
  let trs = Array(1).fill(0).map(() => (<tr key={1}></tr>));
    
  // --- Crea los renglones de la Tabla     ---
  // Con el contenido de la tienda/carrito
  if (newList) {
    trs = newList.map((e, i) => {
      //console.log(`${e.attributes.make} ${e.attributes.model} ${e.attributes.stock}`);
      return (
        <tr key={i}>
          <td>{e.make}</td>
          <td>{e.model}</td>
          <td>{e.stock}</td>
          <td><button id={i} onClick={props.handleButton}>{props.buttonLabel} </button></td>
        </tr>
      );
    });
  }
  // -------------------------------------------------

  return (
    <div className={props.class} >
      {props.title}
      <br />
      <table><tbody>
          <tr><th>Make</th><th>Model</th><th>{props.count}</th><th>&nbsp;</th></tr>
          {trs}
      </tbody></table>
    </div>
  );
}