console.log('main.js');
(() => {
    console.log('Here we are!')
    window.addEventListener("load", (event) => {
        const multiplier = document.getElementById( 'multiplier' );
        const multiplicand = document.getElementById( 'multiplicand' );
         const operation = document.getElementById('operation');
        const product = document.getElementById( 'product' );

        const update = () => {
             const num1 = parseFloat(multiplier.value);
            const num2 = parseFloat(multiplicand.value);
            let result;

            switch (operation.value) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
                    break;
                default:
                    result = 'Error';

        multiplier.addEventListener("input", update);
        multiplicand.addEventListener("input", update);
        operation.addEventListener("change", update);
    });      
})();
