import React from 'react'
// import TestUtils from 'react-addons-test-utils'
// import expect from 'expect'
// import expectJSX from 'expect-jsx'

import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import BoardPanel from '../../components/BoardPanel'

// expect.extend(expectJSX)

const wrapper = shallow(<BoardPanel title='Board Panel' />)

describe('Board Panel component', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should render board title', () => {
    expect(wrapper.contains(<span>BOARD - Board Panel</span>)).to.equal(true)
  })
})
