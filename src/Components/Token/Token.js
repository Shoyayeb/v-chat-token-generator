import { TextField } from '@mui/material';
import React from 'react';

const Token = ({ token }) => {
    return (
                <TextField
                    sx={{ width: 3 / 4, backgroundColor: "#ffff", border: 1, borderRadius: 1, borderColor: "#11cb5f" }}
            defaultValue={token || ''}
                    size="small"
                    variant='outlined'
                    aria-readonly
                    color="success"
        />
    );
};

export default Token;