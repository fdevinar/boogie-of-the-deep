
const rooms =

{
    "Forecastle": {
        text: "You arrive at the forecastle, you feel this ships holds misteries.",     
        image: "src/assets/forecastle.png",   
        choices: [
            {label: "Go to Windlock Passage", action: "MOVE", target: "Windlock Passage",},
        ]           
    },
    "Windlock Passage": {
        text: "You arrive at the windlock passage.",     
        image: "src/assets/windlock-passage.png",   
        choices: [
            {label: "Go to Lobby", action: "MOVE", target: "Lobby",},
        ]           
    },
    // CROSSROADS
    "Lobby": {
        text: "The lobby is quiet, maybe too quiet",
        comment: "You start to doubt yourself",
        image: "src/assets/lobby.png",
        choices: [
            {label: "Go to Store Room", action: "MOVE", target: "Store Room"},
            
            {label: "Go to Dining Room", action: "MOVE", target: "Dining Room"},
            
            {label: "Go to Captain's Quarters", action: "MOVE", target: "Captain's Quarters",
            conditions: {has:['Octopus Crest'],hasNot:[],events:[],eventsNot:[]}},
            
            {label: "Play the piano", action: "EVENT", target: "playedPiano", 
            effect: {sanity: 10}, message: "You hear an inspiring tune, something moved in the ship" },
        ]
    },
        // choices: [
        //     {label: "Use the passage", action: "MOVE", target: "Command Deck", 
        //     conditions: {has:[],hasNot:[],events:['playedPiano'],eventsNot:[]}},
        // ]},

    // MECHANICAL PATH
    "Store Room": {
        text: "The store room reeks of stale air and bad memories",
        image: "src/assets/store-room.png",
        choices: [
            {label: "Go to Engine Room", action: "MOVE", target: "Engine Room"},
            {label: "Pickup the Octopus Crest", action: "PICKUP", target: "Octopus Crest",
             message: "You pick up the Octopus Crest."},

        ]
    },
    "Engine Room": {
        text: "The hum of the machines, a perfect mix of chaos, steam and steel...",
        image: "src/assets/engine-room.png",
        comment: "This room is so hot...",
        choices: [
            {label: "Go to Boiler Room", action: "MOVE", target: "Boiler Room",
            // message: "You used the Wrench to open a passage to the Boiler Room",
            conditions: {has:[],hasNot:[],events:['playedPiano'],eventsNot:[]},
            },
        ]
    },
    "Boiler Room": {
        text: "The heart of the ship...",
        image: "src/assets/boiler-room.png",
        choices: [
            {label: "Go to Command Deck", action: "MOVE", target: "Command Deck",},
            {label: "Pickup the Wrench", action: "PICKUP", target: "Wrench",
             message: "You pick up the Wrench."},

        ]   
    },
    // REVELATION PATH
    "Dining Room": {
        text: "A ghoulish banquet has been held here aeons ago",
        comment: "You're not sure moving to the next room is a good thing.",
        image: "src/assets/dining-room.png",           
        choices: [
            {label: "Go to Nightwatch Gallery", action: "MOVE", target: "Nightwatch Gallery", effect: {sanity: -20},},
        ]
    },
    "Nightwatch Gallery": {
        text: "You arrive at the Nightwatch Gallery",
        comment: "You could use a tool to open a passage",
        image: "src/assets/nightwatch-gallery.png",           
        choices: [
            {label: "Go to Command Deck", action: "MOVE", target: "Command Deck",
            conditions: {has:['Wrench'],hasNot:[],events:[],eventsNot:[]},
            message: "You used the wrench to open the passage",
        },
        ]
    },
    // MEMORY PATH
    "Captain's Quarters": {
        text: "Cap'n Quarters",
        comment: "You are in the captains quarters",
        image: "src/assets/captains-quarters.png",           
        choices: [
            {label: "Go to Secret Room", action: "MOVE", target: "Secret Room", 
            conditions: {has:['Octopus Crest'],hasNot:[],events:[],eventsNot:[]},
        },
        ]
    },
    "Secret Room": {
        text: "You arrive at the Secret Room",
        comment: "So much dark and gloom",
        image: "src/assets/secret-room.png",           
        choices: [
            {label: "Go to Command Deck", action: "MOVE", target: "Command Deck",},
        ]
    },
    // FINAL DESTINATION
    "Command Deck": {
        text: "The command deck, old and twisted, final destination of our trip",
        comment: "This looks like game over",
        image: "src/assets/command-deck.png",
        choices: [
            {label: "Jump in the water", action: "MOVE", target: "Forecastle"},
            // {label: "Try to read the papers", action: "DICE", target: 70,
            // success: { message: "You were able to read", effect: {sanity: 20}, event: 'readPapers'},  
            // fail: { message: "You weren't able to read", effect: {sanity: -20}, event: 'notReadPapers'}
            // conditions: {has:[],hasNot:[],events:[],eventsNot:['readPapers']},},
        ]
    },
}

export default rooms