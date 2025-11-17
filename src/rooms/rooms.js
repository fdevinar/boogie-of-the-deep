
const rooms =

{
    "Forecastle": {
        text: "You arrive at the forecastle, you feel this ships holds misteries.",     
        image: "src/assets/forecastle.png",   
        choices: [
            {label: "Go to Dining Room", action: "MOVE", target: "Dining Room",},
            {label: "Go to Store Room", action: "MOVE", target: "Store Room"},
        ]           
    },
    "Dining Room": {
        text: "A ghoulish banquet has been held here aeons ago",
        comment: "You're not sure moving to the next room is a good thing.",
        image: "src/assets/dining-room.png",           
        choices: [
            {label: "Go to Lobby", action: "MOVE", target: "Lobby", effect: {sanity: -20},},
        ]
    },
    "Lobby": {
        text: "The lobby is quiet, maybe too quiet",
        comment: "You start to doubt yourself",
        image: "src/assets/lobby.png",
        choices: [
            {label: "Play the piano", action: "EVENT", target: "playedPiano", 
            effect: {sanity: 10}, message: "You hear an inspiring tune, a passage has opened" },
            {label: "Use the passage", action: "MOVE", target: "Command Deck", conditions: {has:['playedPiano']}}
        ]
    },
    "Command Deck": {
        text: "The command deck, old and twisted, final destination of our trip",
        comment: "You see a stack of papers, you can try reading them",
        image: "src/assets/command-deck.png",
        choices: [
            {label: "Try to read the papers", action: "DICE", target: 30,}
        ]
    },
    "Store Room": {
        text: "The store room reeks of stale air and bad memories",
        image: "src/assets/store-room.png",
        choices: [
            {label: "Go to Engine Room", action: "MOVE", target: "Engine Room"},
            {label: "Pickup the Wrench", action: "PICKUP", target: "Wrench",
             message: "You pick up the Wrench.. It feels heavy, like it could break apart soft wood."},

        ]
    },
    "Engine Room": {
        text: "The hum of the machines, a perfect mix of chaos, steam and steel...",
        image: "src/assets/engine-room.png",
        comment: "You could use a tool to open a passage to another room",
        choices: [
            {label: "Go to Boiler Room", action: "MOVE", target: "Boiler Room",
                conditions: {has:['Wrench']},
                message: "You used the Wrench to open a passage to the Boiler Room",
            },
        ]
    },
    "Boiler Room": {
        text: "The heart of the ship...",
        image: "src/assets/boiler-room.png",   
    },
}

export default rooms