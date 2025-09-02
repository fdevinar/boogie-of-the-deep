import './App.css'

export default function InventoryViews({inventory}) {



  return (
    <>
      <h2>Inventory Views</h2>
      {/* SIMPLE LIST */}
      <ul>
        {inventory.map(
            (item, idx) => <li key={idx}>{item}</li>
        )}
      </ul>
      {/* CARDS */}
      <div className="card-wrapper">
        {inventory.map(
            (item) => <div className="card">{item}</div>
        )}
      </div>
      {/* SUMMARY */}
      <p>
        {inventory.length} items: {inventory.join(", ")}
      </p>            
    </>
  )
}


