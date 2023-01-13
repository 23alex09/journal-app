import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    //En la primera posicion ponemos la funcion que va a validar el campo y en la segunda el mensaje de error
    email: [ ( value ) => value.includes( '@' ), 'email must be a valid email' ],
    password: [ ( value ) => value.length >= 6, 'password must has 6 or more characters' ],
    displayName: [ ( value ) => value.length >= 1, 'name is mandatory' ],
}

export const RegisterPage = () => {

    const [ formSubmitted, setFormSubmitted ] = useState( false );
    const dispatch = useDispatch();

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] );

    const {
        displayName, email, password, onInputChange, formState,
        isFormValid, emailValid, passwordValid, displayNameValid
    } = useForm( formData, formValidations );

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted( true );
        if ( !isFormValid ) return;
        dispatch( startCreatingUserWithEmailPassword( formState ) );
    }

    return (
        <AuthLayout title='Create Account'>

            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={ onSubmit }>
                <Grid container>
                    {/* Al igual que en boostrap aqui tenemos 12 posiciones y en el xs indicamos cuantas de esas columnas ocupa el elemento para pantallas pequeñas. mb se usa para pantallas de tamaño mediano */ }
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label='name'
                            type='text'
                            placeholder="Jonh Doe"
                            fullWidth
                            value={ displayName }
                            name='displayName'
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid } />
                    </Grid>
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label='email'
                            type='email'
                            placeholder="email@gmail.com"
                            fullWidth
                            value={ email }
                            name='email'
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid } />
                    </Grid>
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label='password'
                            type='password'
                            placeholder="password"
                            fullWidth
                            value={ password }
                            name='password'
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid } />
                    </Grid>

                    <Grid
                        container
                        spacing={ 2 }
                        sx={ { mb: 2, mt: 1, } }
                    >
                        <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>
                        <Grid item xs={ 12 } >
                            <Button
                                disabled={ isCheckingAuthentication }
                                type='submit'
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
                    <Typography sx={ { mr: 1 } }> Already have an account?</Typography>
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
