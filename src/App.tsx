import { ThemeProvider } from '@mui/material';
import { CustomCursor, LandingImage } from './components/index';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CustomCursor />
        <LandingImage />
      </div>
    </ThemeProvider>
  );
}

export default App;
