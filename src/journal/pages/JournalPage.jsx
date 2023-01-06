import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* El typografy si acaba traduciendo en un elemento html en este caso el indicado en la propiedad variant, tambien lo podemos especificar en la propiedad component pero este no cambiara su apariencia en pantalla */ }
            {/* <Typography variant='h1'>JournalPage</Typography> */ }
            {/* <NothingSelectedView/> */ }
            <NoteView />
        </JournalLayout>
    )
}
