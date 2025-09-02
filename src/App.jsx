// import { useState } from 'react'
import './App.css'
import InventoryViews from './InventoryViews'

function App() {


  const inventory = ['Book','Candle','Wrench'];

  return (
    <>
      <h1>BOOGIE OF THE DEEP - development environment</h1>
      <ol>
        <li>Inventory Views – One items[] → list, grid, summary (no duplicate state).</li>
        <li>Derived Sanity – Calculate from events[]; never setSanity directly.</li>
        <li>Reducer Run Loop – All game changes via dispatch(action).</li>
        <li>Seeded Glitches – Stable “random” UI tied to runId.</li>
        <li>Save & Load – LocalStorage persistence at the edges; UI stays pure.</li>
      </ol>
      
      <InventoryViews inventory={inventory}></InventoryViews>
    
    </>
  )
}

export default App
