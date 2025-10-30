export default function HudBar({state}) {

    return (
        <div className="hud-bar">
            <h3>HUD</h3>
            <p>Steps left: {state.steps}</p>
            <p>Inventory: {state.items.length > 0 ? state.items : "Empty" }</p>
            <p>Sanity: {state.sanity}</p>
        </div>
    )

}
