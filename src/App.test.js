import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './App'

describe('App.js', () => {
  it('should exist', done => {
    const component = shallow(<App />)
    expect(component).to.not.be.a('null')
    done()
  })
})
