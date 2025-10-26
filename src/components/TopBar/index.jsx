import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useMatch, Link } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";
/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const yourName = "Nguyễn Thái Bảo - B22DCAT032";

  let contextText = "Photo Sharing";

  const photoMatch = useMatch("/photos/:userId");
  const userMatch = useMatch("/users/:userId");

  if (photoMatch) {
    const userId = photoMatch.params.userId;
    const user = models.userModel(userId);
    if (user) {
      contextText = `Ảnh của ${user.first_name} ${user.last_name}`;
    }
  } else if (userMatch) {
    const userId = userMatch.params.userId;
    const user = models.userModel(userId);
    if (user) {
      contextText = `Chi tiết của ${user.first_name} ${user.last_name}`;
    }
  }

  return (

    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div">
            {yourName}
          </Typography>
        </Link>

        <div style={{ flexGrow: 1 }} />

        <Typography variant="h6" component="div">
          {contextText}
        </Typography>

      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
