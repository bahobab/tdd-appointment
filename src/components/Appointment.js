import React, {useState} from 'react'

export const Appointment = ({customer}) => {
  // console.log('props', props)
  return (
    <div>
      {customer.firstName}
      {/* Bineta */}
    </div>
  )
}

export const AppointmentsDayView = ({appointments}) => {

  //   const appt = appointments.length === 0     ? <p>There are no appointments
  // scheduled for today</p>     : <ol>       {appointments.map((appointment) =>
  // <li
  // key={appointment.startsAt}>{appointmentTimeOfDay(appointment.startsAt)}</li
  // >) }     </ol>

  const [selectedAppointment,
    setSelectedAppointment] = useState(0)

  return (
    <div id="appointmentsDayView">
      {/* {appt} */}
      <ol>
        {appointments.map((appointment, index) => <li key={appointment.startsAt}>
          <button onClick={() => setSelectedAppointment(index)} type="button">{appointmentTimeOfDay(appointment.startsAt)}
          </button>
        </li >)
}
      </ol>
      {appointments.length === 0
        ? <p>There are no appointments scheduled for today</p>
        : <Appointment { ...appointments[selectedAppointment] }/>
}
    </div>
  )
}

function appointmentTimeOfDay(time) {
  const [hour,
    minutes] = new Date(time)
    .toTimeString()
    .split(":")
  // console.log('hour, minutes', hour, minutes)
  return `${hour}:${minutes}`
}