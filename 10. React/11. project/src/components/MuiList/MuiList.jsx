import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function MuiList({ cartDetails }) {
    console.log(cartDetails);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {cartDetails?.map((item, idx) => {
                return (
                    <div key={idx}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                {/* <Avatar alt="Remy Sharp" src={item.image} /> */}
                                <img src={item.image} alt="image" style={{width: 70, height: 70, objectFit:"contain", paddingRight: 10}}/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            $ {item.price}
                                        </Typography>
                                        {` — Qty: ${item.qty}`}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                )
            })}

        </List>
    );
}
