// Immediatly Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`BD CONNECTED TWO ${name}`);
})('Aniket')