

const greet = (username) => {
    console.log(`Hello, ${username}`);
};

greet("shinjan");

const preprocess = (callback) => {
    let username = "shinjan"
    callback(username);
};

preprocess(greet);
