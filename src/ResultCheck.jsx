// import './App.css'

// export default function ResultCheck() {

// function getRandomPercentile() {    
//     const randomUint32Values = new Uint32Array(1);
//     crypto.getRandomValues(randomUint32Values);
//     const u32Max = 0xffffffff;
//     const randomNumber = randomUint32Values[0] / (u32Max + 1);
//     const randomIntegerPercentile = Math.floor(randomNumber*100) + 1
    
//     return randomIntegerPercentile
// }

//   function checkResult(odds) {
//     const target = getRandomPercentile();
//     if (odds > target) {
//         console.log("odds: " + odds + " are greater then result: " + target + " - SUCCESS");
//         return true
//     }
//         console.log("odds: " + odds + " are lower then result :" + target + " - FAIL");
//     return false    
//   }  

//   return (
//     <>
//         <h2>Result Check</h2>
//         <button onClick={()=> checkResult(70)}>TRY YOUR LUCK</button>

//     </>
//   )
// }
