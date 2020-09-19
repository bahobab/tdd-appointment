import React from 'react'
import ReactDOM from 'react-dom'

import {AppointmentsDayView} from './components/Appointment'
import {sampleAppointments} from './sampleData'

ReactDOM.render(
  <AppointmentsDayView appointments={sampleAppointments}/>, document.querySelector('#root'))