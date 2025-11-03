
const rooms =
{
    "Forecastle": {
        "text": "You arrive at the forecastle, you feel this ships holds misteries.",
        "choices": [
            {"label": "Go to Dining Room", "action": "MOVE", "target": "Dining Room"},
            {"label": "Go to Store Room", "action": "MOVE", "target": "Store Room"}
        ]           
    },
    "Dining Room": {
        text: "A ghoulish banquet has been held here aeons ago"
    },
    "Store Room": {
        text: "The store room reeks of stale air and bad memories",
        "choices": [
            {"label": "Pickup the Wrench", "action": "PICKUP", "target": "Wrench"},            
        ]
    },
}

export default rooms