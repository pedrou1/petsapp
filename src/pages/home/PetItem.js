import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
        <Grid item key={props.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={props.photo}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.category}
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