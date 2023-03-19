import './App.css';
import {Container} from '@material-ui/core'
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import useStyles from './appStyles'

const App = ()=> {

  const classes = useStyles()

  return (
    <BrowserRouter >
      <Container maxWidth="100%" className={classes.container}>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<Navigate to="/posts"/>}/>
          <Route path='/posts' exact element={<Home/>}/>
          <Route path='/posts/search' exact element={<Home />}/>
          <Route path='/posts/search/:id' exact element={<PostDetails />}/>
          <Route path='/posts/:id' exact element={<PostDetails />}/>
          <Route path='/auth' exact element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
