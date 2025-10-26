// src/App.js

import React from "react";
import { Grid, Box, Toolbar } from "@mui/material"; // Thêm Box và Toolbar
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Import các components của bạn
import TopBar from "./components/TopBar";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import UserPhotos from "./components/UserPhotos";

// Import file CSS (chúng ta sẽ tạo ở bước 2)
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Container chính của ứng dụng.
        Dùng flex-column để xếp TopBar LÊN TRÊN phần nội dung.
        height: 100vh (100% chiều cao màn hình).
      */}
      <Box display="flex" flexDirection="column" height="100vh">

        {/* TopBar ở trên cùng */}
        <TopBar />

        {/* Container cho phần thân (Sidebar + Nội dung chính)
          flexGrow: 1 (Lấp đầy không gian còn lại)
          overflow: hidden (Ngăn container này tự cuộn)
        */}
        <Grid container className="main-body-container">

          {/* THANH BÊN (Sidebar) */}
          <Grid
            item
            sm={3}
            className="sidebar-container"
          >
            <UserList />
          </Grid>

          {/* NỘI DUNG CHÍNH (Content) */}
          <Grid
            item
            sm={9}
            className="content-container"
          >
            {/* Toolbar rỗng để tạo khoảng trống bên trên nội dung */}
            <Toolbar />

            <Routes>
              <Route path="/users/:userId" element={<UserDetail />} />
              <Route path="/photos/:userId" element={<UserPhotos />} />
              <Route path="/users" element={<UserList />} />
              {/* Thêm các Route khác nếu cần */}
            </Routes>
          </Grid>

        </Grid>
      </Box>
    </BrowserRouter>
  );
}

export default App;