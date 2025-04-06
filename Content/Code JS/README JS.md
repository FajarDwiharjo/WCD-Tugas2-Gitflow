# Features - JavaScript

This document outlines the utility functions implemented in **JavaScript**, with descriptions, example inputs, and expected outputs.

---

## 1. Fahrenheit to Celsius Conversion
**Description:**
Write a program that takes a temperature in Fahrenheit as input and converts it to Celsius.

```js
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
```

**Example:**
```
Input: 100
Output: 37.77777777777778
```

---

## 2. Centimeter to Kilometer (Vice Versa) Conversion
**Description:**
Write a code to convert centimeter to kilometer or vice versa.

```js
function convertLength(value) {
    return value >= 100000 ? `${value}-1 km` : `${value * 100000}-1 cm`;
}
```

**Example:**
```
Input: 100000
Output: 100000-1 km

Input: 1
Output: 100000-1 cm
```

---

## 3. Check If a Number is Even or Odd
**Description:**
Write a function that takes an integer n as input and returns true if n is even and false if n is odd.

```js
function isEven(n) {
    return n % 2 === 0;
}
```

**Example:**
```
Input: 1000
Output: true

Input: 1001
Output: false
```

---

## 4. Remove First Occurrence of a Substring
**Description:**
Write a code to remove the first occurrence of a given search string from a string.

```js
function removeFirstOccurrence(str, searchStr) {
    return str.replace(searchStr, "");
}
```

**Example:**
```
Input: string = "Hello world", search string = "ell"
Output: "Ho world"
```

---

## 5. Palindrome Checker
**Description:**
Write a code to check whether a string is a palindrome or not.

```js
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
```

**Example:**
```
Input: "madam"
Output: true (palindrome)

Input: "hello"
Output: false (not a palindrome)
```

