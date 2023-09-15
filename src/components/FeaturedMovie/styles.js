import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBottom: '25px',
    display: 'flex',
    justifyContent: 'center',
    height: '490px',
    textDecoration: 'none',
  },
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  cardRoot: {
    position: 'relative',
  },
  cardMedia: {
    top: 0,
    right: 0,
    position: 'absolute',
    height: '100%',
    // width: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.575)',
    // backgroundBlendMode: 'darken',
    filter: 'brightness(0.5)',
  },
  // cardImage: {
  //   display: 'block',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center center',
  // },
  cardContent: {
    color: '#fff',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardContentRoot: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
}));
