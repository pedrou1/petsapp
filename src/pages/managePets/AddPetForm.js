import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useRef } from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    label: {
        backgroundColor: "#fafafa",
        paddingLeft: 6,
        paddingRight: 8
      },
  }));
  
const AddPetForm = (props) => {
    
    const nameRef = useRef();
    const categoryRef = useRef();
    const ageRef = useRef();
    const photoRef = useRef();

    function submitHandler(e) {
     e.preventDefault(); // prevent reload

        const petData = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            category: categoryRef.current.value,
            photo: photoRef.current.value
        };

        props.onAddPet(petData);
    }

    const classes = useStyles();

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Pet
          </Typography>
           <form className={classes.form} onSubmit={submitHandler}> {/* noValidate */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                inputRef={nameRef}
                InputLabelProps={{
                    classes: {
                      root: classes.label
                    }
                  }}
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 inputRef={categoryRef}
                  variant="outlined"
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  autoComplete="lcategory"
                  InputLabelProps={{
                    classes: {
                      root: classes.label
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12}  xs={4}>
                <TextField
                 inputRef={ageRef}
                  variant="outlined"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="age"
                  InputLabelProps={{
                    classes: {
                      root: classes.label
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                 inputRef={photoRef}
                  variant="outlined"
                  required
                  fullWidth
                  id="photo"
                  label="Photo"
                  name="photo"
                  autoComplete="photo"
                  InputLabelProps={{
                    classes: {
                      root: classes.label
                    }
                  }}
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add
            </Button>
          </form>
        </div>
      </Container>
    );
}
 
export default AddPetForm;