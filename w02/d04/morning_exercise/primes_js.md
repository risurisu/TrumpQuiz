## PRIME TIME

A prime number is a whole number greater than 1, which is only divisible by 1 and itself.

### `isPrime`
Write a function called `isPrime` that accepts one argument, a number. This is the number we want to check as being prime. This function should return `true` or `false` based on whether or not the number is prime.

```js
isPrime(10);
// => false

isPrime(7);
// => true
```

### `printPrimes`
Write a function called `printPrimes` that accepts one argument, a number, which is the number you would like to print to.

How can you use `isPrime` to solve this?

```js
printPrimes(11);
```
```bash
2 <--PRIME!
3 <--PRIME!
4
5 <--PRIME!
6
7 <--PRIME!
8
9
10
11 <--PRIME!
```

### `primeAtPosition`
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

Write a function called `primeAtPosition` that accepts one argument, a number, where the argument is the position number in the list of primes you want to check.

What is the 10,001st prime number?

How can you use `isPrime` to solve this?

```js
primeAtPosition(6);
// => 13
primeAtPosition(10001);
// => 104743
```
