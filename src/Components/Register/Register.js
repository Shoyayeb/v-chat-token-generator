import styled from '@emotion/styled';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Register.css';
const Register = ({ setIsTokenGenerated }) => {
    const ValidationTextField = styled(TextField)({
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 1,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 1,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 1,
            padding: '4px !important',
        },
    });
    const GenerateButton = styled(Button)(({ theme }) => ({
        color: "white",
        textTransform: 'none',
        backgroundColor: "#21978B",
        '&:hover': {
            backgroundColor: "#21978B",
        },
    }));
    const handleGenerate = (e) => {
        e.preventDefault();
        console.log(e.target);
        setIsTokenGenerated(true);
    }
    return (
        <Container sx={{ my: "auto" }}>
            <Typography sx={{ fontWeight: 'bold', mx: 3, fontFamily: "Inter" }} variant="h4">Register</Typography>
            <Box component="form" noValidates onSubmit={handleGenerate} className='formRoot'>
                <ValidationTextField label="Name" name="name" id="name" size="small" autoFocus color='success' sx={{ width: 3 / 4, my: 3, fontFamily: "Inter" }} className='input' type='text' />
                <ValidationTextField label="Mobile Number" name="mobile" id="mobile" size="small" autoFocus color='success' sx={{ width: 3 / 4, mb: 3, fontFamily: "Inter" }} className='input' type='number' />
                <GenerateButton variant="contained" sx={{ display: "flex", flexDirection: "column", fontFamily: "Inter" }} color="success" className='generateButton' type='submit'>
                    Generate Token
                </GenerateButton>
            </Box>
        </Container>
    );
};

export default Register;