import React, { Component } from 'react'

export default class ErrorHandling extends Component {
    constructor(props) {
      super(props)
      this.state = {
         hasError : false
      }
    }

    static getDerivedStateFromError(){
       return{
        hasError : true
    } 
 }
    
  render() {
    if(this.state.hasError){
            return<h1>SomeThing went wrong with this product</h1>
        }
        else{
            return<h1>{this.props.children}</h1>
        }
    }
  }

