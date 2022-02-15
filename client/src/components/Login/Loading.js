import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = ({ size = 80 }) => {

    return (
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            width: "100%",
            height: "100%"
        }}>
            <CircularProgress
                style={{
                    width: size,
                    height: size
                }}
                color="secondary" />
        </div>

    )
}

export default Loading;