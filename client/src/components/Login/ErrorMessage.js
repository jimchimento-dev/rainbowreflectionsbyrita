import React from 'react';
import { Alert } from '@mui/material';

const ErrorMessage = ({ children }) => {
    return (
        <Alert sx={{ marginTop: 2 }} severity="error" style={{ fontSize: 16 }}>
            <strong>{children}</strong>
        </Alert >
    )
}

export default ErrorMessage; 