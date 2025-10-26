import React from "react";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  CardMedia
} from "@mui/material";
import models from "../../modelData/models";


/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  const formatDateTime = (isoString) => {
    return new Date(isoString).toLocaleString("vi-VN");
  }

  if (photos.length === 0) {
    return <Typography variant="h6">Người dùng hiện chưa có ảnh nào.</Typography>;
  }

  return (
    <div>
      {photos.map((photo) => (
        <Paper key={photo._id}
          elevation={3}
          className="photo-paper"
        >
          <CardMedia
            component="img"
            alt={`Ảnh của người dùng`}
            image={`/images/${photo.file_name}`}
          />
          <Typography variant="caption" color="textSecondary" gutterBottom
          >
            Đăng vào: {formatDateTime(photo.date_time)}
          </Typography>
          <Divider style={{ margin: "16px 0" }} />
          <Typography variant="subtitle1" gutterBottom>
            Bình luận:
          </Typography>
          {!photo.comments || photo.comments.length === 0 ? (
            <Typography variant="body2" color="textSecondary">Không có bình luận nào.</Typography>
          ) : (
            <List>
              {photo.comments.map((comment) => (
                <React.Fragment key={comment._id}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={comment.comment}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component={Link}
                            to={`/users/${comment.user._id}`}
                            color="primary"
                            style={{ textDecoration: 'none', fontWeight: 'bold' }}
                          >
                            {comment.user.first_name} {comment.user.last_name}
                          </Typography>
                          {` — ${formatDateTime(comment.date_time)}`}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          )
          }
        </Paper>
      ))}
    </div>
  );
}

export default UserPhotos;
