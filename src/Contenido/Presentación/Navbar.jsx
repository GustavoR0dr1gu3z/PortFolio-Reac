import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';


const estilos = makeStyles(theme =>({



}))


const Navbar = () => {
    const classes = estilos();

    return (
        <div>
            <AppBar position="fixed">

                <Toolbar>                  
                
                    <Typography variant="h6">
                        Portfolio Gustavo Rodriguez Calzada
                    </Typography>

                    <IconButton 
                        aria-label="menu" 
                        color="inherit"                         
                    >
                        <FaceRoundedIcon/>
                    </IconButton>

                    <Button color="inherit">Login</Button>                    
                      

                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Navbar
