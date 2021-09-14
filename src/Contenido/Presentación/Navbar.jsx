import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';

const estilos = makeStyles(theme =>({

    claseNav:{
        backgroundColor: '#889EAF'
    }


}))


const Navbar = () => {
    const classes = estilos();

    return (

        <div>
            
            <AppBar 
                position="fixed"
                className={classes.claseNav}
            >

                <Toolbar>                  
                
                    <Typography variant="h6">
                        Portfolio Gustavo Rodriguez Calzada
                    </Typography>

                    <IconButton 
                        aria-label="quienSoy" 
                        color="inherit"                         
                    >
                        <FaceRoundedIcon/>
                        <Typography 
                            variant="h6" 
                            color="initial">
                        
                            ¿Quién soy?
                        </Typography>
                    </IconButton>
                    
                    <IconButton 
                        aria-label="participaciones" 
                        color="inherit"
                    >
                        
                    </IconButton>

                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Navbar
