import React from 'react'
import MapDemo1 from './components/MapDemo1'
import Header from './components/Header'
import UseStateDemo1 from './useState/useStateDemo1'
import UseStateDemo2 from './useState/useStateDemo2'
import UseStateDemo3 from './useState/useStateDemo3'
import InputDemo1 from './InputDemo/InputDemo1'
import InputDemo2 from './InputDemo/InputDemo2'
import Footer from './components/Footer'
import { InputDemo3 } from './InputDemo/InputDemo3'

const App = () => {
  return (
    <div>
      <Header/>
      <InputDemo3/>
      <Footer/>

      {/* <MapDemo1/> */}
      {/* <useStateDemo1></useStateDemo1> */}
      {/* <UseStateDemo1/>
      <UseStateDemo2/>
      <UseStateDemo3/> */}
      {/* <InputDemo1/> */}
      {/* <InputDemo2/> */}
    </div>
  )
}

export default App
