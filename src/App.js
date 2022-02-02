import React, { Component } from 'react'
import ClassClick from './ClassClick'
import EventBind from './EventBind'
import FunctionClick from './FunctionClick'

export default class App extends Component {
  render() {
    return (
      <div>
       {/* <FunctionClick/> */}
       {/* <ClassClick/> */}
       <EventBind/>
      </div>
    )
  }
}
