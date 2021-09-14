import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'
import Navbar from './Contenido/Presentación/Navbar.jsx'

const App = () => {
  return (
        
    <div>

      <ThemeProvider theme={theme}>
      
      <Navbar/>

      </ThemeProvider>

    </div>
  );
}

export default App
