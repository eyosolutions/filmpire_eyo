import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  appToolbar: {
    height: '70px',
  },
  appContent: {
    flexGrow: 1,
    padding: '2em',
  },
}));
