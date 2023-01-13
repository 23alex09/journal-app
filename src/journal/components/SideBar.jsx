import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice";
import { NoteItem } from "./NoteItem";

export const SideBar = ( { drawerWidth = 240 } ) => {

    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );
    const dispatch = useDispatch()



    return (
        <Box
            component='nav'
            sx={ {
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            } }
        >
            {/* Los Drawer son los sidebars en material ui */ }
            <Drawer
                variant="permanent"// temporary si quisieramos ocultarlo y mostrarlo de manera condicional
                open
                //ModalProps mirar en la docu
                sx={ {
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                } }
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component='div'
                    >
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        notes.map( note => (
                            <NoteItem key={ note.id } { ...note } />
                        ) )
                    }
                </List>
            </Drawer>
        </Box>
    )
}
