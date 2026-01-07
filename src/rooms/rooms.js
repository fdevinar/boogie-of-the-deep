
const rooms =

{
    "Forecastle": {
        text: "You arrive at the ship's forecastle, this ships holds misteries.",    
        comment: "A bulky steel door invites you in.", 
        image: "src/assets/images/forecastle.png",   
        choices: [
            {label: "Go to Windlock Passage", action: "MOVE", target: "Windlock Passage",},
        ]           
    },
    "Windlock Passage": {
        text: "There's only a single metal door leading you on, you have no choice but to move forward.",     
        image: "src/assets/images/windlock-passage.png",   
        choices: [
            {label: "Go to Lobby", action: "MOVE", target: "Lobby",},
        ]           
    },
    // CROSSROADS
    "Lobby": {
        text: "There's a piano in the corner of the room and two major ways forward. You feel like more ways out could be hidden.",
        comment: "The lobby is quiet, maybe too quiet.",
        image: "src/assets/images/lobby.png",
        choices: [
            {label: "Go to Store Room", action: "MOVE", target: "Store Room"},
            
            {label: "Go to Dining Room", action: "MOVE", target: "Dining Room"},
            
            {label: "Go to Captain's Quarters", action: "MOVE", target: "Captains Quarters",
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
        text: "The air reeks of pale ale and bad memories.",
        comment: "Rats and bats abound.",
        image: "src/assets/images/store-room.png",
        choices: [
            {label: "Go to Engine Room", action: "MOVE", target: "Engine Room"},
            {label: "Pickup the Octopus Crest", action: "PICKUP", target: "Octopus Crest",
             message: "You pick up the Octopus Crest."},

        ]
    },
    "Engine Room": {
        text: "The hum of the machines, a perfect mix of chaos, steam and steel.",
        comment: "Temperature rising, sweating bullets, cold dead bullets...",
        image: "src/assets/images/engine-room.png",
        choices: [
            {label: "Go to Boiler Room", action: "MOVE", target: "Boiler Room",            
            conditions: {has:[],hasNot:[],events:['playedPiano'],eventsNot:[]},
            },
        ]
    },
    "Boiler Room": {
        text: "You arrive at the heart of the ship, but your blood is boiling to the max.",
        comment: "You could reach the Command Deck from here, is your blood enough to make the best of this chance?",
        image: "src/assets/images/boiler-room.png",
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
        image: "src/assets/images/dining-room.png",           
        choices: [
            {label: "Go to Nightwatch Gallery", action: "MOVE", target: "Nightwatch Gallery", effect: {sanity: -20},},
        ]
    },
    "Nightwatch Gallery": {
        text: "You arrive at the Nightwatch Gallery",
        comment: "You could use a tool to open a passage",
        image: "src/assets/images/nightwatch-gallery.png",           
        choices: [
            {label: "Go to Command Deck", action: "MOVE", target: "Command Deck",
            conditions: {has:['Wrench'],hasNot:[],events:[],eventsNot:[]},
            message: "You used the wrench to open the passage",
        },
        ]
    },
    // MEMORY PATH
    "Captains Quarters": {
        text: "You're in the captains quarters",
        comment: "There's a slot in the shape of an octopuss in the wall",
        image: "src/assets/images/captains-quarters.png",           
        choices: [
            {label: "Go to Secret Room", action: "MOVE", target: "Secret Room", 
            conditions: {has:['Octopus Crest'],hasNot:[],events:[],eventsNot:[]},
        },
        ]
    },
    "Secret Room": {
        text: "You arrive at the Secret Room",
        comment: "So much dark and gloom",
        image: "src/assets/images/secret-room.png",           
        choices: [
            {label: "Go to Command Deck", action: "MOVE", target: "Command Deck",},
        ]
    },
    // FINAL DESTINATION
    "Command Deck": {
        text: "The command deck, old and twisted, final destination of our trip",
        comment: "This looks like game over",
        image: "src/assets/images/command-deck.png",
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