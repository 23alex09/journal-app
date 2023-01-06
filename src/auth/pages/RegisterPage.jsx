import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
    return (
        <AuthLayout title='Create Account'>

            <form>
                <Grid container>
                    {/* Al igual que en boostrap aqui tenemos 12 posiciones y en el xs indicamos cuantas de esas columnas ocupa el elemento para pantallas pequeñas. mb se usa para pantallas de tamaño mediano */ }
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label='name'
                            type='text'
                            placeholder="Jonh Doe"
                            fullWidth />
                    </Grid>
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label='email'
                            type='email'
                            placeholder="email@gmail.com"
                            fullWidth />
                    </Grid>
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label='password'
                            type='password'
                            placeholder="password"
                            fullWidth />
                    </Grid>

                    <Grid
                        container
                        spacing={ 2 }
                        sx={ { mb: 2, mt: 1, } }
                    >
                        <Grid item xs={ 12 } >
                            <Button
                                variant="contained"
                                fullWidth>
                                Create
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid
                    container
                    direction='row'
                    justifyContent='end'
                >
                    <Typography sx={ { mr: 1 } }> Already have one?</Typography>
                    <Link
                        component={ RouterLink }
                        color='inherit'
                        to='/auth/login'
                    >
                        login
                    </Link>
                </Grid>
            </form>

        </AuthLayout>

    )
}
