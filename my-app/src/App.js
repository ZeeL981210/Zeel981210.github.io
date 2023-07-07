import './App.css';
import Navbar from "./Components/NavBar";
import theme from "./styles/theme";
import {ThemeProvider} from "@mui/material";
import '@fontsource-variable/quicksand';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="App">
              <Navbar />
          </div>
      </ThemeProvider>

  );
}

export default App;
