import { Link } from "react-router-dom";
import { 
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%',
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

const PetItem = (props) => {

  const classes = useStyles();

    return (
        <Grid data-aos="zoom-in" item key={props.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={props.photo}
                    title="Image"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography>
                        Age: {props.age}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Link to={`/pet/${props.id}`}  style={{ textDecoration: 'none' }}><Button size="small" variant="outlined" color="primary">
                        View
                    </Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default PetItem;