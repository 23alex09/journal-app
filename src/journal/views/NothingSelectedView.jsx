import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (

        <Grid
            container
            spacing={ 0 }
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={ { minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 } } //Esta propiedad es para trabajar con la propiedad style pero nos deja acceder al theme
        >
            <Grid
                item
                xs={ 12 }
            >
                <StarOutline sx={ { fontSize: 100, color: "white" } } />
            </Grid>
            <Grid
                item
                xs={ 12 }
            >
                <Typography color='white' variant='h5'>Select or create a new note</Typography>
            </Grid>
        </Grid>
    )
}