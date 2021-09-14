import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'

const App = () => {
  return (
    <div>
      
      <ThemeProvider theme={theme}>

      <h1>jaja</h1>

      </ThemeProvider>

    </div>
  );
}

export default App
