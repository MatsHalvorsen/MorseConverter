//model
const morseCodeArray = [ 
".-",   // A 
"-...", // B
"-.-.", // C
"-..",  // D
".",    // E
".._.", // F
"--.",  // G
"....", // H
"..",   // I
".---", // J
"-.-",  // K
".-..", // L
"--",   // M
"-.",   // N
"---",  // O
".--.", // P
"--.-", // Q
".-.",  // R
"...",  // S
"-",    // T
"..-",  // U
"...-", // V
".--",  // W
"-..-", // X
"-.--", // Y
"--..", // Z]
".-.-", //Æ
"---. ", //Ø
".--.- ", //Å
];

//const alphab = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, æ, ø, å]

//view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div>
        <h1>Morse Converter</h1>
        <h3>Convert text into morse code</h3>

        <input type="text" placeholder="Enter text" onblur="getVal()">
        <br/>
        <br/>
        
        </div>
    `
}


//controller
function getVal() {
    const val = document.querySelector('input').value;
    //console.log(val)
    
    for (let i = 0; i < val.length; i++) {
        //console.log(val[i])
        const str = val[i].toString();
        console.log(str)
    }
}

/*function showOutput() {

}
*/