localStorage.setItem("username", JSON.stringify([1,2,3,4,5]));

let user = JSON.parse(localStorage.getItem("username"))
console.log(user)