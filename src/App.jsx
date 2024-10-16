import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import { Box } from '@mui/material';

// temat med färgerna
const theme = createTheme({
  palette: {
    primary: {
      main: '#808080',  
    },
    secondary: {
      main: '#808080',  
    },
    accent: {
      main: '#808080',  
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ flexGrow: 1 }}>
          <MainContent />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
