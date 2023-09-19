import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // overflow: 'auto',
    width: 'min-content',
    [theme.breakpoints.down('md')]: {
      // justifyContent: 'space-evenly',
      flex: '0 0 100%',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));
