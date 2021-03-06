import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";


//Components
import "../ItemListContainer/ItemListContainer.css";
import ItemCard from "../../Items/Item/ItemCard";
import { getByCategory, getProductos } from "../../../data/data";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  let {categoria} = useParams();
  // console.log(genero)
  

  useEffect(() => {
    // axios("https://rickandmortyapi.com/api/character").then((res)=>
    // setItems(res.data.results))
    if(categoria === undefined){
      setItems(getProductos())
    }else{
      setItems(getByCategory(categoria))
    }
    
  
    

      // setUsers: le paso a users toda la data de la API
  }, [categoria]);

  // console.log(items);


  
  //if (items == null ) return <p>CARGANDO....</p>  //ACA VA EL SPINNER

  return (
    <>
    
      {/* <ItemList data = {items} /> */}
      <div className="container">


       <Grid container>
        { items.length === 0 ? <p>Cargando............</p>  : items.map((item) => {
          return (
            <Grid key={item.id} item xs={2} sm={4} md= {4}>
              <Box margin={3}>
                <Link
                  to={`/item/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ItemCard data={item} />
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid> 
      </div>
    </>
  );
};

export default ItemListContainer;
