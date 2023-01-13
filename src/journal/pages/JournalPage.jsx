import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {

    const { isSaving, active: note } = useSelector( state => state.journal )
    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch( startNewNote() );
    }

    return (
        <JournalLayout>

            {/* El typografy si acaba traduciendo en un elemento html en este caso el indicado en la propiedad variant, tambien lo podemos especificar en la propiedad component pero este no cambiara su apariencia en pantalla */ }
            {/* <Typography variant='h1'>JournalPage</Typography> */ }

            {
                ( !!note )
                    ? <NoteView />
                    : <NothingSelectedView />
            }

            {/* <NothingSelectedView /> */ }
            {/* <NoteView /> */ }
            <IconButton
                disabled={ isSaving }
                onClick={ onClickNewNote }
                size='large'
                sx={ {
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                } }
            >
                <AddOutlined sx={ { fontSize: 30 } } />
            </IconButton>

        </JournalLayout>
    )
}
