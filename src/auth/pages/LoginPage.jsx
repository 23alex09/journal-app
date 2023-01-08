import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import { useDispatch } from 'react-redux'

export const LoginPage = () => {

    const dispatch = useDispatch()

    const { email, password, onInputChange, formState } = useForm( {
        email: 'alejandro@google.com',
        password: '1234'
    } )

    const onSubmit = ( event ) => {
        event.preventDefault();
        dispatch( checkingAuthentication( email, password ) )
    }

    const onGoogleSignIn = () => {
        console.log( 'Google sign in' );
        dispatch( startGoogleSignIn() )
    }

    return (
        <AuthLayout title='Login'>

            <form onSubmit={ onSubmit }>
                <Grid container>
                    {/* Al igual que en boostrap aqui tenemos 12 posiciones y en el xs indicamos cuantas de esas columnas ocupa el elemento para pantallas pequeñas. mb se usa para pantallas de tamaño mediano */ }
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label='email'
                            type='email'
                            placeholder="email@gmail.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange } />
                    </Grid>
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label='password'
                            type='password'
                            placeholder="password"
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange } />
                    </Grid>

                    <Grid
                        container
                        spacing={ 2 }
                        sx={ { mb: 2, mt: 1, } }
                    >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                type='submit'
                                variant="contained"
                                fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={ onGoogleSignIn }>
                                <Google />
                                <Typography sx={ { ml: 1 } }>
                                    Google
                                </Typography>

                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction='row'
                    justifyContent='end'
                >
                    <Link
                        component={ RouterLink }
                        color='inherit'
                        to='/auth/register'
                    >
                        Create an account
                    </Link>
                </Grid>
            </form>

        </AuthLayout>

    )
}
