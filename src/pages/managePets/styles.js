import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
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
  topText: {
    marginTop: theme.spacing(3),
  },
  backBtn: {
    marginTop: theme.spacing(11),
  },
  backBtn: {
    marginTop: theme.spacing(12),
    backgroundColor: '#000000',
      '&:hover': {
        backgroundColor: '#565656',
      },
  },

}));

export { useStyles };