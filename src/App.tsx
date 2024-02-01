import { Box } from '@mui/material';
import './App.css';
import Navbar from './pages/components/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container' style={{ border: '2px solid red', display: 'flex', flexDirection: 'column', justifyItems: 'center', height: '100vh' }}>
        <Box>
          <Navbar/>
        </Box>
        <div style={{ border: '2px solid blue',  height: `calc(100% - 4rem)`}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
