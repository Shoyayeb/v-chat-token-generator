import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import './Register.css';
const Register = ({ setIsTokenGenerated, setToken }) => {
    const [userData, setUserData] = useState({});
    console.log(userData);

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...userData };
        data[field] = value;
        setUserData(data);
    }

    const handleGenerate = (e) => {
        e.preventDefault();
        console.log(userData);
        const url = `http://localhost:4000/getToken`;
        userData ? axios.post(url, userData).then((data) => {
            setToken(data.data);
            setIsTokenGenerated(true);
            console.log(data.data);
        }) : console.log("no data found");
    }
    const GenerateButton = styled(Button)(({ theme }) => ({
        color: "white",
        textTransform: 'none',
        backgroundColor: "#21978B",
        '&:hover': {
            backgroundColor: "#21978B",
        },
    }));
    return (
        <Box component='form' noValidate onSubmit={handleGenerate} className='formRoot'>
            <TextField
                key="name"
                fullWidth
                required
                name='name'
                id='user-name'
                autoComplete='name'
                onChange={(e) => handleOnChange(e)}
                label="Name"
                size="small"
                color='success'
                value={userData.name}
                sx={{ my: 3, fontFamily: "Inter", borderWidth: 1, border: 1, borderRadius: 1, borderColor: "#11cb5f" }}
                className='input'
                type='text'
            />

            <TextField
                key="mobile"
                fullWidth
                required
                name='mobile'
                id='user-mobile'
                autoComplete='phone'
                onChange={handleOnChange}
                label="Mobile Number"
                size="small"
                color='success'
                value={userData.mobile}
                sx={{ mb: 3, fontFamily: "Inter", borderWidth: 1, border: 1, borderRadius: 1, borderColor: "#11cb5f" }}
                className='input'
                type="tel" />
            <GenerateButton variant="contained" sx={{ display: "flex", flexDirection: "column", fontFamily: "Inter", borderRadius: 10 }} color="success" className='generateButton' type='submit'>
                Generate Token
            </GenerateButton>
        </Box>
    );
};

export default Register;