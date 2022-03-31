import React, { useState } from 'react';
import { Paper } from '@mui/material';
import SideBar from '../SideBar/SideBar';
import Register from '../Register/Register';
import Token from '../Token/Token';

const Root = () => {
    const [isTokenGenerated, setIsTokenGenerated] = useState(false);
    const [token, setToken] = useState('');
    return (
        <div>
            <Paper sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, height: "100vh" }} style={{ background: "#E9E9E9" }}>
                {/* <Box sx={{ display: { md: "flex", xs: "hidden" }, flexDirection: "row", bgcolor: "white", width: { md: 350 } }}>

                </Box> */}
                <SideBar />
                {isTokenGenerated ? <Token token={token} setToken={setToken} /> : <Register setIsTokenGenerated={setIsTokenGenerated} token={token} setToken={setToken} />}
            </Paper>
        </div>
    );
};

export default Root;