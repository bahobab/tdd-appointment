import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'

import {Appointment, AppointmentsDayView} from '../src/components/Appointment'

describe("Appointment", () => {
  let component
  let container
  let customer

  beforeEach(() => {
    container = document.createElement('div')
  })

  const render = component => ReactDOM.render(component, container)

  it("renders the customer's first name", () => {
    customer = {
      firstName: 'Bineta'
    }
    component = <Appointment customer={customer}/>

    // document   .body   .appendChild(container)

    render(component)

    expect(container.textContent).toMatch('Bineta')
  })

  it("renders another customer's first name", () => {
    customer = {
      firstName: 'Mamadou'
    }
    component = <Appointment customer={customer}/>

    // document   .body   .appendChild(container)

    render(component)

    expect(container.textContent).toMatch('Mamadou')
  })
})

describe("AppointmensDayView", () => {
  let container
  let component

  const today = new Date()
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      customer: {
        firstName: 'Bineta'
      }
    }, {
      startsAt: today.setHours(13, 0),
      customer: {
        firstName: 'Mamadou'
      }
    }
  ]

  beforeEach(() => {
    container = document.createElement('div')
  })

  const render = component => ReactDOM.render(component, container)

  it("renders a div element with the right id", () => {
    component = <AppointmentsDayView appointments={[]}/>
    render(component)
    expect(container.querySelector('div#appointmentsDayView'))
      .not
      .toBeNull()
  })

  it("renders multiple appointments in an ol element", () => {

    component = <AppointmentsDayView appointments={appointments}/>
    render(component)
    expect(container.querySelector('ol'))
      .not
      .toBeNull()
    expect(container.querySelector('ol').children).toHaveLength(2)
  })

  it("renders each appointment in an li element", () => {

    component = <AppointmentsDayView appointments={appointments}/>
    render(component)
    expect(container.querySelectorAll('li')).toHaveLength(2)
    expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00')
    expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00')
  })

  it("initially shows a message saying that there are no appointments for today", () => {
    component = <AppointmentsDayView appointments={[]}/>
    render(component)
    expect(container.querySelectorAll('li')).toHaveLength(0)
    // console.log('>>container', container.innerHTML)
    expect(container.textContent).toMatch('There are no appointments scheduled for today')
  })

  it('selects the first customer by default', () => {
    component = <AppointmentsDayView appointments={appointments}/>
    render(component)
    expect(container.textContent).toMatch('Bineta')
  })

  it("has a button in each li element", () => {
    component = <AppointmentsDayView appointments={appointments}/>
    render(component)
    expect(container.querySelectorAll('li > button')).toHaveLength(2)
    expect(container.querySelectorAll('li > button')[0].type).toEqual('button')
    expect(container.querySelectorAll('li > button')[1].type).toEqual('button')
  })

  it("renders another appointment when selected", () => {
    component = <AppointmentsDayView appointments={appointments}/>
    render(component)
    const button = container.querySelectorAll('li > button')[1]
    ReactTestUtils
      .Simulate
      .click(button)
    expect(container.textContent).toMatch('Mamadou')
  })
})