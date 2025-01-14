        function calculateFactorial(method) {
            const numInput = document.getElementById('number');
            const output = document.getElementById('output');
            const n = parseInt(numInput.value);

            if (isNaN(n) || n < 0) {
                output.textContent = 'Please enter a valid positive integer.';
                return;
            }

            let result;
            if (method === 'iterative') {
                result = factorialIterative(n);
                output.textContent = `Iterative: The factorial of ${n} is ${result}.`;
            } else if (method === 'recursive') {
                result = factorialRecursive(n);
                output.textContent = `Recursive: The factorial of ${n} is ${result}.`;
            }
        }

        function factorialIterative(n) {
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }

        function factorialRecursive(n) {
            if (n === 0 || n === 1) return 1;
            return n * factorialRecursive(n - 1);
        }
    
