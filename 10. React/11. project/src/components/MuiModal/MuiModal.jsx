import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ProductDetail from '../ProductDetail/ProductDetail';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 'calc(100% - 24px)', sm: 'calc(100% - 48px)', md: 900 },
    maxHeight: 'calc(100vh - 32px)',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '1px solid rgba(42, 157, 143, 0.25)',
    borderRadius: 3,
    boxShadow: 24,
    // p: 2,
};

export default function MuiModal({ setOpen, open, cardDetails }) {

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
                  <ProductDetail cardDetails={cardDetails} onClose={handleClose} />
                </Box>
            </Modal>
        </div>
    );
}
