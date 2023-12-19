
const genId = (n) => n[0] + n[n.length - 1] + (Date.now().toString().split('').slice(0, 6).reverse().join(''))

let rand = function () {
    return Math.random().toString(36).substr(2); // remove `0.`
};

let token = function () {
    return rand() + rand() + rand() + "-" + rand() + rand() + rand(); // to make it longer
};

module.exports = { token, genId }