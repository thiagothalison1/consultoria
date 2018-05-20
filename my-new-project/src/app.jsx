import React from 'react'
import SearchAddress from './searchAddress'
import AppointmentList from './appointmentList'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.addNewAddress = this.addNewAddress.bind(this)

    this.state = {
      time: 56,
      appointments: [
      {
        appointment: 'Evita',
        address: 'Rua Pedro Vieira Vial, 128',
        doctorPicture: 'images/doctor.jpg',
        situation: 'Em Atendimento',
        time: '56 minutos'
      },
      {
        appointment: 'Maria da Silva',
        address: 'Madre Maria Vilac, 350',
        doctorPicture: 'images/doctor.jpg',
        situation: 'Finalizado',
        time: ''
      }]
    }
  }

  addNewAddress (event) {
    if (event.key === 'Enter') {

      let newTime = this.state.time + 40

      console.log(newTime)

      let newAppointments = [
        {
          appointment: 'Atendimento 1',
          address: event.target.value,
          doctorPicture: 'images/doctor.jpg',
          situation: 'Agendado',
          time: `${newTime} minutos`
        },
        ...this.state.appointments
      ]

      this.setState({
        time: newTime,
        appointments: newAppointments
      })
    }
  }

  render() {
    return (
      <div style={{"marginTop": "30px"}}>
        <SearchAddress addNewAddress={this.addNewAddress}></SearchAddress>
        <AppointmentList appointments={this.state.appointments} />
      </div>
    )
  }
}
