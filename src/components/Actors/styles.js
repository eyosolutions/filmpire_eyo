import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    display: 'block',
    maxWidth: '90%',
    borderRadius: '20px',
    boxShadow: '0.5em 0.5em 1em',
    objectFit: 'cover',
    height: '80vh',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '50%',
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      height: 'auto',
      marginBottom: '30px',
    },
  },
}));
