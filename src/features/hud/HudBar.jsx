export default function HudBar({state}) {

    return (
        <div className="hud-bar">
            <h3>HUD</h3>
            <p>Steps left: {state.steps}</p>
            <p>Inventory: {state.inventory.length > 0 ? state.inventory.join(', ') : "Empty" }</p>
            <p>Sanity: {state.sanity}</p>
        </div>
    )

}
