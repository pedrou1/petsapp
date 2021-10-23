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
    const [pet, setPet] = useState({ photo: 'https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-10.jpg' });
    const classes = useStyles();

    useEffect(() => {
        fetch(
            ``
        ).then((response) => {
            return response.json();
        }).then((data) => {
            setPet(data);
        });
    }, []);

    return (
        <Box data-aos="zoom-in" mt={15}>
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