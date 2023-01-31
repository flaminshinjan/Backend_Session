let username = "Shinjan";
console.log(`Hello ${username}`);

function addNum(a, b){
return a + b;
};

addNum(3, 2);

const addNum2 = (a, b) => {
    return a + b;
};

d = addNum(5, 3);
c = addNum2(10, 5);
console.log(c);
console.log(d);


let a = [1, "Shinjan", [3,4]];
a[1] = "HEllo";
console.log(a[1]);

let o = {
    name: "Shinjan",
    regno: 3,
    dept: "Cintel",
};

console.log(o["username"]);
o.dept = "CTECH";
console.log(o["dept"]);


let result = ("b" + "a" + + "a" + "a").toLowerCase;
console.log(result);