class AppointmentModel {
    constructor (number, address, doctorPicture, situation, time) {
        this.appointment = number
        this.address = address
        this.doctorPicture = doctorPicture
        this.situation = situation
        this.time = time
    }

    getAppointment () {
        return this.appointment
    }

    getAddress () {
        return this.address
    }

    getDoctorAvatar () {
        return this.doctorPicture
    }

    getSituation () {
        return this.situation
    }

    getTime () {
        return this.time
    }
}

export default AppointmentModel
