/**
 * 
 * @param type of the debug message
 * 
 * @param msg is the debug message
 * 
 */

export function debugMsg(type: string, msg: string) {
    if (type === "err") {
        console.log("%c" + msg, "color: red");
    }else if (type === "warn") {
        console.log("%c" + msg, "color: orange");
    }else if (type === "ok") {
        console.log("%c" + msg, "color:green");
    }else {
        return;
    }
}