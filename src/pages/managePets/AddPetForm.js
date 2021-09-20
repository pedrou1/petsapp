import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(4, 'Name should be of minimum 4 characters length')
    .required('Name is required'),
    category: yup.string('Enter your category')
    .min(4, 'Category should be of minimum 4 characters length')
    .required('Category is required'),
    age: yup.number().typeError("Age must be a number")
  .positive("Age can't be negative")
  .integer("Age can't include a decimal point")
  .required('Age is required'),
  photo: yup.string("Enter your Photo").url("Photo must be a url").required('Photo is required'),
  
});
  
const AddPetForm = (props) => {

  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      age: '',
      photo:''

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

    // props.onAddPet(petData);

    const classes = useStyles();

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Pet
          </Typography>
           <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                InputLabelProps={{
                    classes: {
                      root: classes.label
                    }
                  }}
                  name="name"
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
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
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  error={formik.touched.category && Boolean(formik.errors.category)}
                  helperText={formik.touched.category && formik.errors.category}
                />
              </Grid>

              <Grid item xs={12}  xs={4}>
                <TextField
                  variant="outlined"
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
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
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
                  value={formik.values.photo}
                  onChange={formik.handleChange}
                  error={formik.touched.photo && Boolean(formik.errors.photo)}
                  helperText={formik.touched.photo && formik.errors.photo}
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