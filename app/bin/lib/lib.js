// console.log( "\u001b[1;31m Red message\u001b[0m" );
// console.log( "\u001b[1;32m Green message" );
// console.log( "\u001b[1;33m Yellow message" );
// console.log( "\u001b[1;34m Blue message" );
// console.log( "\u001b[1;35m Purple message" );
// console.log( "\u001b[1;36m Cyan message" );

function logWithColor(message, priority) {
    let colorCode;
    switch (priority) {
        case    "high": colorCode = "\u001b[1;31m"; break; //red
        case  "medium": colorCode = "\u001b[1;33m"; break; //yellow
        case     "low": colorCode = "\u001b[1;30m"; break; //blue
        case "success": colorCode = "\u001b[1;32m"; break; //green
        case  "notice": colorCode = "\u001b[1;36m"; break; //green
        default: colorCode = "\u001b[1;37m"; //white
    }
    console.log(colorCode + message + "\u001b[0m");
}

module.exports = logWithColor;
