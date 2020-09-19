import React, {useState} from 'react'

export const Appointment = (props) => {
  // console.log('props', props)
  const {customer, startsAt} = props
  return (
    <div>
      <h3 className="appointment-title">Today 's appointment at {new Date(startsAt).toLocaleTimeString()}
      </h3>
      <p>
        Customer: {customer.firstName
}
      </p>
      <p>
        Service: {customer.service
}
      </p>
      <p>Stylist : {customer.stylist
}
      </p>
      <p>Notes : {customer.notes
}
      </p>
      {/* Bineta */}
    </div>
  )
}
export const AppointmentsDayView = ({appointments}) => { //   const appt = appointments.length === 0     ? <p>There are no appointments
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