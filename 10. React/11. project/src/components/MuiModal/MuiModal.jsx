import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductDetail from '../ProductDetail/ProductDetail';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #2a9d8f',
    boxShadow: 24,
    // p: 2,
};

export default function MuiModal({ setOpen, open, cardDetails }) {

    console.log(cardDetails);


    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                  <ProductDetail cardDetails={cardDetails}/>
                </Box>
            </Modal>
        </div>
    );
}
