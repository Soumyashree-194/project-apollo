import React from 'react';
import { connect } from 'react-redux';
import { Link as RouteLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { changeRoute } from '../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const DrawerList = ({ selectedRoute, changeRoute, toggleDrawer }) => {
  const classes = useStyles();

  const handleListItemClick = (event, index) => {
    changeRoute(index);
  };

  return (
    <div className={classes.root}>
      <List aria-label='main mailbox folders' onClick={toggleDrawer(false)}>
        <ListItem
          button
          selected={selectedRoute === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          component={RouteLink}
          to='/'
        >
          <ListItemText primary='HOME' />
        </ListItem>
        <ListItem
          button
          selected={selectedRoute === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          component={RouteLink}
          to='/skills'
        >
          <ListItemText primary='EVENTS' />
        </ListItem>
        <ListItem
          button
          selected={selectedRoute === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          component={RouteLink}
          to='/projects'
        >
          <ListItemText primary='PROJECTS' />
        </ListItem>
        <ListItem
          button
          selected={selectedRoute === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          component={RouteLink}
          to='/contact'
        >
          <ListItemText primary='TEAM' />
        </ListItem>
      </List>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedRoute: state.selectedRoute };
};

export default connect(mapStateToProps, { changeRoute })(DrawerList);
