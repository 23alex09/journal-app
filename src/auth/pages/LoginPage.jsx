import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( ( state ) => state.auth )
    const dispatch = useDispatch()

    const { email, password, onInputChange, formState } = useForm( formData )

    const isAthenticated = useMemo( () => status === 'checking', [ status ] )

    const onSubmit = ( event ) => {
        event.preventDefault();
        dispatch( startLoginWithEmailPassword( { email, password } ) )
    }

    const onGoogleSignIn = () => {
        console.log( 'Google sign in' );
        dispatch( startGoogleSignIn() )
    }

    return (
        <AuthLayout title='Login'>

            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={ onSubmit }>
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
                    <Grid container sx={ { mt: 2, mb: 1 } } display={ !!errorMessage ? '' : 'none' }>
                        <Grid item xs={ 12 }  >
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        spacing={ 2 }
                        sx={ { mb: 2, mt: 1 } }
                    >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAthenticated }
                                type='submit'
                                variant="contained"
                                fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAthenticated }
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

        </AuthLayout >

    )
}
