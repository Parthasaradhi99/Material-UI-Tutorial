import { Box, Container, Stack } from "@mui/material";
import { Navbar, SideBar, RightBar, Feed } from "./components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Add from "./components/Add";
import { useState } from "react";
  const theme = createTheme({
  palette:{
    primary:{
      main: "#1760a5",
      light: "skyblue"
    },
    secondary:{
      main: '#15c630',
    },
    otherColor:{
      main:"#999"
    }
  }
})   


function App() {
  const [mode, setMode] = useState("light")
const darkTheme = createTheme({
  palette:{
    mode:mode
  }
})
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={3} justifyContent="space-between">
        <SideBar mode={mode} setMode={setMode} />
        <Add/>
        <Feed />
        <RightBar />
      </Stack>
    </Box>
      </ThemeProvider>
  );
}

export default App;
