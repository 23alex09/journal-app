import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";


const drawerWidth = 280;

export const JournalLayout = ( { children } ) => {
    return (
        // El Box es como un div
        <Box sx={ { display: 'flex' } }>
            {/* navbar */ }
            <NavBar drawerWidth={ drawerWidth } />
            {/* sidebar */ }
            <SideBar drawerWidth={ drawerWidth } />
            <Box
                component='main'
                sx={ { flexGrow: 1, p: 3 } }
            >
                {/* toolbar */ }
                <Toolbar />
                { children }
            </Box>
        </Box >
    )
}
