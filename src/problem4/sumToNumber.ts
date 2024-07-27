class CalculationFunction {

    // Iterative method
    sum_to_n_a(n: number): number {
        let sum: number = 0;
        for (let i: number = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    // Time complexity: O(n)

    // Recursive method
    sum_to_n_b(n: number): number {
        if (n === 0) {
            return 0;
        }
        return n + this.sum_to_n_b(n - 1);
    }
    // Time complexity: O(n)

    // Using Array.from and reduce
    sum_to_n_c(n: number): number {
        const arr_from_n = Array.from({ length: n }, (_, i) => i + 1); // [1, 2, 3, 4, 5, ... , n]
        return arr_from_n.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
    // Time complexity: O(n) for Array.from and O(n) for reduce, overall O(n)
}

// Function to measure the execution time
function measure_execution_time(func: (n: number) => number, n: number): void {
    const start = performance.now();
    const result = func(n);
    const end = performance.now();
    console.log(`Result: ${result}, Time: ${end - start} ms`);
}

// Example usage
const calc = new CalculationFunction();
const n = 8000; // Example value

console.log("sum_to_n_a:");
measure_execution_time(calc.sum_to_n_a.bind(calc), n);

console.log("sum_to_n_b:");
measure_execution_time(calc.sum_to_n_b.bind(calc), n);

console.log("sum_to_n_c:");
measure_execution_time(calc.sum_to_n_c.bind(calc), n);

// EVALUATION
// The iterative method (sum_to_n_a) is just simple loop => reduce time creation => The best method in term of time complexity. 
// The array and reduce method (sum_to_n_c) also runs in O(n) but includes array creation. 
// The recursive method (sum_to_n_b) has O(n) complexity but increase overhead from recursive calls.


