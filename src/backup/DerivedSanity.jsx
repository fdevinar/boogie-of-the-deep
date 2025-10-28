import './App.css'

export default function DerivedSanity() {
    
    const events = [
        {name: 'foundCorpse', visited: true,  sanityValue: 30},
        {name: 'foundCandle', visited: true,  sanityValue: -20},
        {name: 'pressedPianoKey', visited: true,  sanityValue: 10},
    ]
    const visitedEvents = events.filter((ev) => ev.visited === true);    
    const sanity = visitedEvents.reduce((accum, currVal) => {
        return accum + currVal.sanityValue;
    }, 50);

    return (
        <>
        <h2>Derived Sanity</h2>
        <p>Sanity: {sanity}</p>            
        </>
    )
}