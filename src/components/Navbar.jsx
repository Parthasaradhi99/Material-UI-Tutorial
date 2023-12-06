import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Fade,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FeedIcon from "@mui/icons-material/Feed";
import styled from "@emotion/styled";
import { Mail, Notifications } from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();

  const [open,setOpen] = useState(false)

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: 7,
    width: "40%",
    padding: "0 10px",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    cursor:"pointer",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const User = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  const handleClick = () => {
    setOpen(true);
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Fairy Tale
        </Typography>
        <FeedIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            sx={{ width: "35px", height: "35px", cursor: "pointer" }}
            onClick={handleClick}
          />
        </Icons>
        <User>
          <Typography variant="span">John</Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            sx={{ width: "35px", height: "35px", cursor: "pointer" }}
            onClick={handleClick}
          />
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </User>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
// sx={{display:{xs:"block",sm:"none"}}}

// sx={{display:{xs:"none",sm:" block"}}}
