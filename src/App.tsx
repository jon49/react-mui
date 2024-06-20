import './App.css';
import { MuiTypography } from './components/MuiTypography'
import { MuiButton } from './components/MuiButton'
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
        <Typography variant='h1' gutterBottom color='maroon'>Button</Typography>
        <MuiButton />
        <Typography variant='h1' gutterBottom color='maroon' marginTop={10}>Typography</Typography>
        <MuiTypography />
    </div>
  );
}

export default App;
