import React from 'react'
import ReactDOM from 'react-dom'

import Appointment from '../src/components/Appointment'

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