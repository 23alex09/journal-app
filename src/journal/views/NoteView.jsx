import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { ImageGallery } from "../components"
import { useForm } from '../../hooks'
import { useEffect, useMemo } from "react"
import { setActiveNote, startUpdatingNote } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );
    const { onInputChange, title, body, date, imageUrls, formState } = useForm( note )

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ] )

    const onSaveNote = () => {
        dispatch( startUpdatingNote() )
    }
    useEffect( () => {
        if ( messageSaved.length > 0 ) {
            Swal.fire( 'Note updated!', messageSaved, 'success' );
        }
    }, [ messageSaved ] )

    useEffect( () => {
        dispatch( setActiveNote( formState ) )
    }, [ formState ] )


    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={ { mb: 1 } }
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
            </Grid>
            <Grid item>
                <Button disabled={ isSaving } onClick={ onSaveNote } color='primary' sx={ { p: 2 } }>
                    <SaveOutlined sx={ { fontSize: 30, mr: 1 } } />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Title"
                    label='title'
                    sx={ { border: 'none', mb: 1 } }
                    name='title'
                    value={ title }
                    onChange={ onInputChange }
                />
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What's up today?"
                    minRows={ 5 }
                    name='body'
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}
