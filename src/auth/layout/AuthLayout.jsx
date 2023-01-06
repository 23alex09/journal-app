import { Grid, Typography } from "@mui/material"

export const AuthLayout = ( { children, title = '' } ) => {
    return (
        <Grid
            container
            spacing={ 0 }
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={ { minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 } } //Esta propiedad es para trabajar con la propiedad style pero nos deja acceder al theme
        >
            <Grid
                item
                className="box-shadow"
                xs={ 3 } //Esto se refiere al tamaño del dispositivo
                sx={ {
                    width: { sm: 450 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2
                } }
            >
                <Typography variant='h5' sx={ { mb: 1 } }>{ title }</Typography>

                { children }
            </Grid>
        </Grid>
    )
}
