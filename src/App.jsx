import {Route,Routes} from 'react-router-dom';
import Login from './component/Login';
import Jobs from './component/Jobs';
import Home from './component/Home';

const App =()=>(
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/jobs' element={<Jobs/>}></Route>
    <Route path='/login' element={<Login/>}> </Route>
  </Routes>
)
 
  export default App