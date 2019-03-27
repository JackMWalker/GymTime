export function leadingZeros(str, num) {
    let s = String(str);
    while (s.length < (num || 2)) { s = "0" + s; }
    return s;
} 