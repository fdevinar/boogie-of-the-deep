export default function HudBar({state}) {

    return (
        <div className="hud-bar">
            <h3>HUD</h3>
            <div className="stats">
                <p>Steps left: {state.steps}</p>
                <p>Sanity: {state.sanity}</p>
            </div>
            <div className="inventory">
                <p>Inventory: {state.inventory.length > 0 ? state.inventory.join(', ') : "Empty" }</p>
            </div>
        </div>
    )

}
