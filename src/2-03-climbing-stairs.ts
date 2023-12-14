// https://leetcode.com/problems/climbing-stairs/

var memory = new Map<number, number>();
var result: number;
function climbStairs(n: number): number {
    // This is optional, but for optimal speed
    if (n <= 3) {
        return n;
    }

    if (memory.has(n)) {
        return memory.get(n) as number;
    }

    /* This is for optimal speed and memory
        result = f(n-2) + f(n-1)
        but f(n-1) = f(n-2) + f(n-3)
        so f(n-2) + f(n-1) = 2 * f(n-2) + f(n-3)
        (we know n > 3 here)
    */
    result = climbStairs(n - 3) + 2 * climbStairs(n - 2);
    memory.set(n, result);

    return result;
}
