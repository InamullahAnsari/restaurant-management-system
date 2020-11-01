import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  navBar: {'top': AppBar.height}
}

class RestaurantDetails extends Component {
    constructor() {
        super();
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    render() {
        return (
        <MuiThemeProvider>
            <div>
                <AppBar
                    title="Some title"
                    iconElementLeft={<FontIcon onClick={this.handleToggle} className="material-icons">menu</FontIcon>}
                />
                <Drawer
                    open={this.state.open}
                    width={200}
                    containerStyle={styles.navBar}>
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
      </MuiThemeProvider>
    )
    }
}

export default RestaurantDetails
