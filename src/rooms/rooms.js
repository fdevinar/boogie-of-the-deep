
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
        text: "A ghoulish banquet has been held here aeons ago",
        comment: "You're not sure moving to the next room is a good thing, you can't see where it leads.",
        "choices": [
            {"label": "Go to next room", "action": "MOVE", "target": "Lobby", "effect": {sanity: -20},},
        ]
    },
    "Lobby": {
        text: "The lobby is quiet, maybe too quiet",
        comment: "You start to doubt yourself",
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
        comment: "You could use a tool to open a passage to another room",
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