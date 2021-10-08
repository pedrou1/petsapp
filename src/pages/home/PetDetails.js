import { useParams } from "react-router-dom";
import {
    CardContent,
    Grid,
    Typography,
    CardMedia,
    Box,
    Card
} from '@material-ui/core';
import { useState, useEffect } from "react";
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

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState({ photo: 'https://i.pinimg.com/736x/10/b2/f6/10b2f6d95195994fca386842dae53bb2--parabatai-the-circle.jpg' });
    const classes = useStyles();

    useEffect(() => {
        fetch(
            `https://petsapp-e73b7-default-rtdb.firebaseio.com/pets/${id}.json`
        ).then((response) => {
            return response.json();
        }).then((data) => {
            setPet(data);
        });
    }, []);

    return (
        <Box mt={15}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={pet.photo}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Name: {pet.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                Category: {pet.category}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                Age: {pet.age}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PetDetails;