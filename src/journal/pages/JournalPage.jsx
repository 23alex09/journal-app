import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* El typografy si acaba traduciendo en un elemento html en este caso el indicado en la propiedad variant, tambien lo podemos especificar en la propiedad component pero este no cambiara su apariencia en pantalla */ }
            {/* <Typography variant='h1'>JournalPage</Typography> */ }
            <NothingSelectedView />
            {/* <NoteView /> */ }
            <IconButton
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
