import { useState } from "react";
import "../../Items/ItemCounter/Buttons.css";
import { Link } from "react-router-dom";

function ItemCounter({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Limite de Items Alcanzados");
      console.log("Limite Alcanzado");
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("No puedes tener menos de 0 items");
      console.log("Limite negativo alcanzado");
    }
  };

  const addToCart = () => {
    if (stock > 0 && count > 0) {
      onAdd(count);
    }
  };

  return (
    <>
      
        <div className="btn-container">
          <div className="btn-flex">
            <button onClick={decrement} className="btnEffect1">
              -
            </button>
            <p>{count}</p>
            <button onClick={increment} className="btnEffect2">
              +
            </button>
          </div>
          <div className="agregar-carrito">
            <button  onClick={addToCart}>
              Agregar al carrito
            </button>
              <Link to={"/cart"}>
                <button style={{width:"100px",padding:"1px"}}>Finalizar compra</button>
              </Link>
          </div>
        </div>
      
    </>
  );
}

export default ItemCounter;
