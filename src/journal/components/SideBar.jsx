import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = ( { drawerWidth = 240 } ) => {

    const { displayName } = useSelector( state => state.auth );

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
                        [ 'Enero', 'Febrero', 'Marzo', 'Abril' ].map( text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text } />
                                        <ListItemText secondary='Don federico le dijo a su mujer que si se le caia la canica que tenia en la mano el teide iba a erupcionar' />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ) )
                    }
                </List>
            </Drawer>
        </Box>
    )
}
