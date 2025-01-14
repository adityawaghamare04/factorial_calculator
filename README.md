# factorial_calculator

## It is a Factorial Calculator based on two methods 
1)Iterative: Logic behind iterative calculation of factorial 
```javascipt
function factorialIterative(n) {
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
```
2)Recursive
