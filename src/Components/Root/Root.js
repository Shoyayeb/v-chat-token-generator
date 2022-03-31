import React, { useState } from 'react';
import { Paper } from '@mui/material';
import SideBar from '../SideBar/SideBar';
import Register from '../Register/Register';
import Token from '../Token/Token';

const Root = () => {
    const [isTokenGenerated, setIsTokenGenerated] = useState(false);
    return (
        <div>
            <Paper sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, height: "100vh" }} style={{ background: "#E9E9E9" }}>
                {/* <Box sx={{ display: { md: "flex", xs: "hidden" }, flexDirection: "row", bgcolor: "white", width: { md: 350 } }}>

                </Box> */}
                <SideBar />
                {isTokenGenerated ? <Token /> : <Register setIsTokenGenerated={setIsTokenGenerated} />}
            </Paper>
        </div>
    );
};

export default Root;