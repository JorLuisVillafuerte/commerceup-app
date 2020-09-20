import React from 'react'
import { Dialog,DialogContent, DialogTitle } from '@material-ui/core';

export default function Popup(props) {

    const {children, openPopup,handleClose,title} = props;
 
    return (
        <Dialog 
            open={openPopup}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
