import React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div>
            <Paper sx={{ display: "flex", height: "100vh" }} style={{ background: "#E9E9E9" }}>
                <Box sx={{ display: { md: "flex", xs: "hidden" }, flexDirection: "row", bgcolor: "white", width: { md: 350 } }}>
                    <SideBar />
                </Box>

                <Box>
                    right
                </Box>
            </Paper>
        </div>
    );
};

export default Root;