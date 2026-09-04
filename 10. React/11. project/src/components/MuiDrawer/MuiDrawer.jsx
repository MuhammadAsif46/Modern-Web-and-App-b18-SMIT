import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiList from '../MuiList/MuiList';

export default function MuiDrawer({ open, setOpen, cartDetails }) {

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    return (
        <div>
            <React.Fragment>
                <Drawer
                    className='relative'
                    anchor={"right"}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <MuiList cartDetails={cartDetails} />
                    <div className='absolute bottom-5 left-20'>
                        <Button variant="outlined" className='detail-btn w-50'>Check Out</Button>
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}