import { Paper, Typography } from '@mui/material';
import { useState } from "react";
import SideBar from './Components/SideBar/SideBar';
import Register from './Components/Register/Register';
import Token from './Components/Token/Token';
import { Box } from '@mui/system';

function App() {
  const [isTokenGenerated, setIsTokenGenerated] = useState(false);
  const [token, setToken] = useState('');
  return (
    <div>
      <Paper sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, height: "100vh", m: 0 }} style={{ background: "#E9E9E9" }}>
        <SideBar />
        <Box sx={{ my: "auto", ml: { md: 20, xs: 5 }, width: 3 / 4, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography sx={{ fontWeight: 'bold', mx: 3, my: 3, fontFamily: "Inter" }} variant="h4">{isTokenGenerated ? `Token Generated!!` : `Register`}</Typography>
          {isTokenGenerated ? <Token token={token} setToken={setToken} /> : <Register setIsTokenGenerated={setIsTokenGenerated} token={token} setToken={setToken} />}
        </Box>
      </Paper>
    </div>
  );
}

export default App;
