import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
    return (
        <Grid
            container
            spacing={ 0 }
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={ { minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 } } //Esta propiedad es para trabajar con la propiedad style pero nos deja acceder al theme
        >
            <Grid container direction='row' justifyContent='center'>
                <CircularProgress color='warning' />
            </Grid>
        </Grid>
    )
}
