import {AppBar, Button, IconButton, Typography} from "@mui/material";
import {Box} from "@mui/material";
import {Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from '@mui/icons-material/GitHub';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from "@mui/material/Divider";
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState, Fragment} from "react";
export default function NavBar() {

    const drawerCategory = {
        "PROJECTS": {
            "Web": ["Interactive database", "Online code run&test platform", "Recommendation system"],
            "AI": ["OCR based on neural network", "Car image recognition"],
            "Mobile": ["Maze solver"]
        },
        "BLOG": {
            "Dev Notes": ["Notes1", "Notes2", "Notes3"],
            "Story": ["Story1", "Story2"]
        }
    }


    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : '');
    };

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>

                    {/* Menu button */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, textAlign: 'left'}}>
                        BLOG
                    </Typography>
                    <Button href='/' color='secondary' sx={{ borderRadius: 8}}>
                        {"About me"}
                    </Button>
                    {/* Theme controller */}
                    {/* TODO: integrate control function*/}
                    <IconButton>
                        <Brightness4Icon/>
                    </IconButton>
                    {/* Git link */}
                    <IconButton href='https://github.com/ZeeL981210/Zeel981210.github.io/tree/master' target='_blank'>
                        <GitHubIcon/>
                    </IconButton>

                </Toolbar>
            </AppBar>
            {/* Drawer/Side bar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    {Object.entries(drawerCategory).map(([category, subCategories], index) => (
                        <Fragment key={category}>
                            {index > 0 && <Divider variant="middle" light/>}
                            <Typography sx={{ padding: 1.5, textAlign:' left', fontWeight: 'bold' }} color='grey'>
                                {category}
                            </Typography>
                            {Object.entries(subCategories).map(([subCategory, items]) => (
                                <Accordion key={subCategory} expanded={expanded === subCategory} onChange={handleChange(subCategory)} disableGutters={true} sx={{ px: 2 }} >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${subCategory}-content`} id={`${subCategory}-header`}>
                                        <Typography variant="h6">{subCategory}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List disablePadding>
                                            {items.map((item, index) => (
                                                <ListItem key={index} disablePadding>
                                                    <ListItemButton>
                                                        <ListItemText primary={item} />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Fragment>
                    ))}
                </Box>

            </Drawer>
        </Box>
    )
}