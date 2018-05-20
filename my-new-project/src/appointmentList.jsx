import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Appointment from './appointment'
import Direction from './direction'

class AppointmentList extends React.Component {
    constructor (props) {
        super(props)

        this.createAppointmentsElements = this.createAppointmentsElements.bind(this)
        this.openModal = this.openModal.bind(this)

        let appointments = this.createAppointmentsElements(this.props.appointments)

        this.state = { 
            modalOpen: false,
            appointments
        }
    }

    componentWillReceiveProps (nextProps) {
        let appointmentsList = this.createAppointmentsElements(nextProps.appointments)

        this.setState({ modalOpen: false, appointments: appointmentsList })
    }

    openModal () {
        let newState = {
            appointments: this.state.appointments,
            modalOpen: true
        }

        this.setState(newState)
    }

    createAppointmentsElements (appointments) {
        let appointmentsList = []

        appointments.forEach(appointment => {
            let label = null
            let backGroundColor = null

            if (appointment.situation ===  "Finalizado") {
                label = 'Atendimento finalizado ás: 11:50'
                backGroundColor = "#c3c9cc"
            }
            if (appointment.situation ===  "Em Atendimento") {
                label = 'Hora de Chegada: 12:07'
                backGroundColor = "#8eedc7"
            }
            if (appointment.situation ===  "Agendado") {
                label = `Tempo Estimado para Chegada: ${appointment.time}`
                backGroundColor = "#8eceed"
            }

            let element = <div>
                <Appointment
                    appointment={appointment.appointment}
                    subtitle={appointment.address}
                    avatar={appointment.doctorPicture}
                    situation={appointment.situation}
                    time={appointment.time}
                    backGroundColor={backGroundColor}
                    label={label}
                    openModal={this.openModal}
                />
                <Divider />
                </div>

            appointmentsList.push(<ListItem children={element} />)
        })

        return appointmentsList
    }

    render() {
        return (
            <div>
                <Direction open={this.state.modalOpen}/>
                <List style={{maxHeight: '100%', overflow: 'auto'}}>
                    {this.state.appointments}
                </List>
            </div>
        )
    }
}

export default AppointmentList