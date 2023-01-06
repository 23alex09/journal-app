import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"

export const JournalPage = () => {
    return (
        <>
            {/* El typografy si acaba traduciendo en un elemento html en este caso el indicado en la propiedad variant, tambien lo podemos especificar en la propiedad component pero este no cambiara su apariencia en pantalla */ }
            <Typography variant='h1'>JournalPage</Typography>
            {/* Los iconos se utilizan como functional component
             */}
            <MailOutline />
        </>
    )
}
