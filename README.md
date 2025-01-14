# factorial_calculator

## It is a Factorial Calculator based on two methods 
1) Iterative:
              Logic behind iterative calculation of factorial 
```javascript
function factorialIterative(n) {
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
```
Output of Iteratuve calculation :
![Screenshot 2025-01-15 000443](https://github.com/user-attachments/assets/2f773561-2ced-4592-9edb-0cc8698e31f4)

2) Recursive: Logic behind Recursive calculation of factorial
   ```javascript
   function factorialRecursive(n) {
            if (n === 0 || n === 1) return 1;
            return n * factorialRecursive(n - 1);
        }
   ```
   Output of Recursive calculation

   ![Screenshot 2025-01-15 000501](https://github.com/user-attachments/assets/d55fe4e5-ca83-4b8c-a4eb-5405e66149b8)


