import { Box, Container, TextField, Typography } from '@mui/material';
import React from 'react';

const Token = ({ token }) => {
    return (
        <Container sx={{ my: "auto" }}>
            <Typography sx={{ fontWeight: 'bold', mx: 3, my: 3, fontFamily: "Inter" }} variant="h4">Token Generated!!</Typography>
            <Box >
                <TextField
                    sx={{ width: 3 / 4, backgroundColor: "#ffff", border: 1, borderRadius: 1, borderColor: "#11cb5f" }}
                    defaultValue={token}
                    size="small"
                    variant='outlined'
                    aria-readonly
                    color="success"
                />
            </Box>
        </Container>
    );
};

export default Token;