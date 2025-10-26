
import React from "react";
import "./App.css";
import { Grid, Typography, Toolbar } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import UserPhotos from "./components/UserPhotos";
import TopBar from "./components/TopBar";

function App() {
  return (
    <Router>
      <div>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <TopBar />
          </Grid>

          <Toolbar />
          <div className="main-container">
            <Grid item sm={3} className="main-sidebar">
              <UserList />
            </Grid>
            <Grid item sm={9} className="main-content">
              <Routes>
                <Route path="/users/:userId" element={<UserDetail />} />
                <Route path="/photos/:userId" element={<UserPhotos />} />
                <Route
                  path="/users"
                  element={<Typography variant="h5">Vui lòng chọn một người dùng</Typography>}
                />
                <Route
                  path="/"
                  element={<Typography variant="h5">Chào mừng đến với ứng dụng chia sẻ ảnh!</Typography>}
                />
              </Routes>
            </Grid>
          </div>
        </Grid>
      </div>
    </Router>
  );
}

export default App;