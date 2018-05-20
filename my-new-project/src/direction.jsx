import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Iframe from 'react-iframe';

export default class Direction extends React.Component {

 constructor (props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)

    this.state = {
        open: this.props.open,
    }
 }

 componentWillReceiveProps (nextProps) {
    let open = nextProps.open

    this.setState({ open: open })
 }

  handleClose () {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <Dialog
          title="Local do Atendimento"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        > 
          <p>Caro Doutor Pedro,</p>
          <p>Seu próximo atendimento deverá ser realizado no seguinte endereço:</p>
          <p>João Pio Duarte Silva - 576 - Córrego Grande</p>
          <p>Link Maps: https://goo.gl/maps/JGNqZN2kL6K2</p>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.797244947931!2d-48.512721049244966!3d-27.599814982752306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739036feaf4cf%3A0x564c3fee4e4736b9!2sRua+Jo%C3%A3o+Pio+Duarte+Silva%2C+576!5e0!3m2!1sen!2sbr!4v1526772544047"
            width="600"
            height="450"
            style={{border: 0}}
            position="relative"
            allowFullScreen/>
        </Dialog>
      </div>
    );
  }
}