import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, removefromcart } from "../action/action";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 140,
  },
});

export default function ItemsCard({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="col-lg-4 d-flex  justify-content-around mt-5">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={"http://localhost:4000/images/" + item.pic}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button onClick={() => dispatch(addtocart(item))}>Increment</button>
          <button onClick={() => dispatch(removefromcart(item.name))}>
            Decrement
          </button>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
