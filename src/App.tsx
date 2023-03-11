import { ThemeProvider } from '@mui/material';
import {
  Contact,
  Portfolio,
  LandingImage,
  CustomCursor,
} from './components/index';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CustomCursor />
        <LandingImage />
        <Portfolio />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
