
const rooms =

{
    "Forecastle": {
        "text": "You arrive at the forecastle, you feel this ships holds misteries.",
        "choices": [
            {"label": "Go to Dining Room", "action": "MOVE", "target": "Dining Room"},
            {"label": "Go to Store Room", "action": "MOVE", "target": "Store Room"},
        ]           
    },
    "Dining Room": {
        text: "A ghoulish banquet has been held here aeons ago"
    },
    "Store Room": {
        text: "The store room reeks of stale air and bad memories",
        "choices": [
            {"label": "Go to Engine Room", "action": "MOVE", "target": "Engine Room"},
            {"label": "Pickup the Wrench", "action": "PICKUP", "target": "Wrench",
             "message": "You pick up the Wrench.. It feels heavy, like it could break apart soft wood."},

        ]
    },
    "Engine Room": {
        text: "The hum of the machines, a perfect mix of chaos, steam and steel...",
        "choices": [
            {"label": "Go to Boiler Room", "action": "MOVE", "target": "Boiler Room",
                "conditions": {has:['Wrench']},
                "message": "You used the Wrench to open a passage to the Boiler Room",
            },
        ]
    },
    "Boiler Room": {
        text: "The heart of the ship...",        
    },
}

export default rooms