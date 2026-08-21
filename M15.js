// function OuterFunction() {
//     let outerVariable = "I am from the outer function";

//     function innerFunction() {
//         console.log(outerVariable); // Accessing outer variable
//     }

//     return innerFunction;
// }

// const closureFunction = OuterFunction();

// closureFunction(); 





function counter() {

    let count = 0;

    return {

        increment: function() {
            count++;
            console.log(count);
        },

        decrement: function() {
            count--;
            console.log(count);
        },

        displayCount: function() {
            let message = `Current count is: ${count}`;
            console.log(message);
            return message;
        }
    }
}

