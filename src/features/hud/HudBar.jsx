export default function HudBar({state}) {

    return (
        <div className="hud-bar">
            <h3>HUD</h3>
            <div className="stats">
                <p key={state.steps}>Steps left: {state.steps}</p>
                <p key={state.sanity}>Sanity: {state.sanity}</p>
            </div>
            <div className="inventory">
                <p key={state.inventory.length}>Inventory: {state.inventory.length > 0 ? state.inventory.join(', ') : "Empty" }</p>
            </div>
        </div>
    )

}
