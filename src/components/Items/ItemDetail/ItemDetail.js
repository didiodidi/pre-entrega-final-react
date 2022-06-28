import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../Item/Item.css"
import ItemCounter from "../ItemCounter/ItemCounter"



 function ItemDetail({data}) {

  const {img, name, price, description, stock} = data

  return (
    <>

    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="Usuarios"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  >
          {`Nombres: ${name}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Precio: ${price}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Descripcion: ${description}`}
        </Typography>
        <ItemCounter stock={stock} initial={1} />

      </CardContent>
    </Card>
    {/* <div className="div-cart">
      <h6>{`Usuario :${login}`}</h6>
    </div> */}

    </>
  );
}

export default ItemDetail;