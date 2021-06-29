import React, {Component} from 'react';
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default class RoomJoinPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      roomCode: "",
      error: ""
    };
    this.handleTExtFieldChange = this.handleTExtFieldChange.bind(this);
    this.roomButtonPressed = this.roomButtonPressed.bind(this);
  }

  render(){
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} alignItems="center">
          <Typography variant="h4" component="h4">
            Join a Room
          </Typography>
        </Grid>
        <Grid item xs={12} alignItems="center">
          <TextField error={this.state.error} 
                     label="Code" 
                     placeholder="Enter a Room Code" 
                     value={this.state.roomCode}
                     helperText={this.state.error}
                     variant="outlined" 
                     onChange={this._handleTExtFieldChange}/>
        </Grid>
        <Grid item xs={12} alignItems="center">
          <Button variant="contained" color="primary" onClick={ this.roomButtonPressed }>Enter Room</Button>
        </Grid>
        <Grid item xs={12} alignItems="center">
          <Button variant="contained" color="secondary" to="/" component={Link}>Back</Button>
        </Grid>
      </Grid>
    );
  }

  handleTExtFieldChange(e) {
    this.setState({
      roomCode: e.target.value
    });
  }

  roomButtonPressed() {
    console.log(this.state.roomCode)
  }
}