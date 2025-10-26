import React from "react";
import { Typography, Paper, Button, Divider } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  if (!user) {
    return (
      <Typography variant="h6" color="inherit">Không tìm thấy người dùng</Typography>
    );
  }
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <Divider style={{ marginBottom: "16px" }} />

      <Typography variant="body1" gutterBottom>
        <strong>Địa chỉ: </strong> {user.location}
      </Typography>

      <Typography variant="body1" gutterBottom>
        <strong>Nghề nghiệp: </strong> {user.occupation}
      </Typography>

      <Typography variant="body1" gutterBottom>
        <strong>Mô tả: </strong> {user.description}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/photos/${user._id}`}
        style={{ marginTop: '20px' }}
      >
        Xem Ảnh của {user.first_name}
      </Button>
    </Paper>




  );
}

export default UserDetail;
