function sayhello(name){
    console.log(`hello ${name}`);
};

const sayhi=(name) => {
    console.log(`hi ${name}`);
};

const findsum=(a,b) => {
    return a+b;
};

const sum=(a,b) => a+b;     // if we use {} than we have to use return keyword.

sayhello("divyansh");
sayhi("divyansh");
console.log(findsum(5, 10));
console.log(sum(5, 10));