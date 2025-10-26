import React from "react";
import { Divider, List, ListItem, ListItemText } from "@mui/material";

import "./styles.css";
import { Link } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const user = models.userListModel();

  return (
    <div>
      <List component="nav">
        {user.map((item) => (
          <React.Fragment key={item._id}>
            <ListItem component={Link} to={`/users/${item._id}`}>
              <ListItemText primary={`${item.first_name} ${item.last_name}`} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;
