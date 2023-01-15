import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { ImageGallery } from "../components"
import { useForm } from '../../hooks'
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startDeletingNote, startUpdatingNote, startUploadingFiles } from "../../store/journal"
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

    //Esto lo vamos a hacer para que se lance la seleccion de archivos cuando pulsemos el boton con la forma de upload ya que necesitamos tener una referencia al input que esta escondido. Con esta referencia simularemos un click en el input
    const fileInputRef = useRef();

    const onSaveNote = () => {
        dispatch( startUpdatingNote() )
    }

    const onFileInputChange = ( { target } ) => {
        if ( target.files.length === 0 ) return;

        dispatch( startUploadingFiles( target.files ) );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
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

                <input
                    type='file'
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={ { display: 'none' } }
                />

                <IconButton
                    color='primary'
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

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

            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    sx={ { mt: 2 } }
                    color='error'
                >
                    <DeleteOutline />
                    Delete
                </Button>
            </Grid>

            <ImageGallery />
        </Grid>
    )
}
