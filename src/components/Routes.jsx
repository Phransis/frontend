import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

function Routes() {
  return (
        <Routes>
            <Route path='/MyForm' element={<MyForm></MyForm>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/inventory' element={<Inventory/>}></Route>
            <Route path='/order' element={<Order/>}></Route>
            <Route path='/customers' element={<Customers/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
        </Routes>
  )
}

export default Routes
