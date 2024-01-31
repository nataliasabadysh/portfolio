---
title: "Why we should use TypeScript Type-Safe code in JS ?"
date: "2024-01-30"
spoiler: "Statically Typed vs Dynamically Typed Languages"
---

## <mark> JavaScript in NOT Statically Typed, JS is Dynamically Typed Language </mark>

```
*** Statically Typed Languages
In statically typed programming languages,
type checking occurs at compile time.

*** Dynamically Typed Languages
Conversely, in dynamically typed languages,
type checking takes place at runtime or execution time.
```

## ✅ Advantages of Dynamic Typing in JavaScript

- Variable Types Are Not Declared
- Flexible Variable Assignments
- Run-Time Type Checking
- Prototypal Inheritance

## ❌ Disadvantages of Dynamic Typing in JavaScript

- Runtime Errors
- No Compile-time Type Checking
- Difficulty in Refactoring
- Less Suitable for Large-scale Applications

## <mark> The most significant impact of TypeScript </mark>

```
Reducing Runtime Errors
```

## <mark> Other Befefits of Typescristusing in JS</mark>

- 1.Static Typing, Early Detection of Type-related Errors
- 2.Type Inference
- 3.Better IDE Support
- 4.Static Null Checking
- 5.Interoperability

## JS + TypeScript Type-Safe Code

Let's examine the basic concepts and examples of how we can use them.

# var

```ts
// Boolean
let isDone: boolean = false;

// String
let color: string = "red";
color = 1; // ❌  Type 'number' is not assignable to type 'string'

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;
```

# Array

```ts
// All elements as a number
let list: number[] = [1, 2, 3];

// or with Generic
let anotherList: Array<number> = [1, 2, 3];
```

# Tuple

```ts
let data: [string, number];

data = ["admin", 29];
```

# Enum (Enumeration) in TypeScript

<p>TypeScript does not create a new object in memory for each instance. 
Instead, an enum</p>

```ts
enum StatusCode {
  OK = 200,
  REDIRECT = 300,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
}

let responseStatus: StatusCode = StatusCode.OK;
```

# Any - same as turn OFF - TypeScript

❌ - not recommended to use

```ts
let item: any = 1;
item = "string";
item = false;
```

# Function in TypeScript

- We need to specify the return type of the function.
- We also need to define the types of parameters it takes.

```ts
/* Case 1: Function that returns nothing */
function initFunction(): void {
  console.log("Hello");
}

/* Case 2: Function that returns a number */
function sum(): number {
  return 1 + 1;
}

/* Case 2: with params */
const show = (msg: string) => {
  console.log(msg);
};

/* Case : destructured parameters and TypeScript Tuple type annotation */
function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1, 2]);

/* Case : Typed result of function */
function add(x: number, y: number): number {
  return x + y;
}
const sum: number = add(1, 2);
```

# undefined, null

```ts
let n1: undefined = undefined;
let n2: null = null;
```

# never in TypeScript

- type of values that never occur.

```ts
let core: never = (() => {
  console.log(true);
  throw new Error("Some Error");
})();

function throwError(message: string): never {
  throw new Error(message);
}
```

# Object in TypeScript

- "object" usless to use as a type in TypeScript.
- better type checking and code descriptive approach and shape of the object.

```ts
let obj: object | null;

obj = null;
obj = {
  n: 1,
};

console.log(obj);
```

## Okay, now let's dive into some more interesting tips and advanced examples of TypeScript usage:

# Type assertions

```ts
let someString: any = "Some string";

let size: number = (<string>someString).length; // I want to treat it as a "string"
// or
let size: number = (someString as string).length;
```

```ts
/* name?: string indicates that the name property is optional. */
type Schema = {
  name?: string;
};
```

```ts
type Schema = { a: string; b?: number };

function init({ a, b = 0 }: Schema = { a: "" }): void {
  console.log(a);
  console.log(b);
}

init({ a: "str" });
```

## <mark> Best Practice: Type signature </mark>

- Clarity and Documentation:
- Compile-Time Type Checking
- Maintainability
- Refactoring Safety:
- Generics and Advanced Typing

```ts
type FType = (baseValue: number, increment: number) => number;

const increase: FType = function (x: number, y: number): number {
  return x + y;
};

const updatedValue: number = increase(3, 1);
```

## Rest JS + Tuple

```ts
function buildLetters(
  firstLetter: string,
  ...restOfLetters: [string, string, string]
) {
  return firstLetter + " " + restOfLetters.join(" ");
}

// or
type customType = string | number;

function buildLetters(firstLetter: string, ...restOfLetters: customType[]) {
  return firstLetter + " " + restOfLetters.join(" ");
}

let letters = buildLetters("a", "b", "c", "d");
```

## Good prictice to set up the Limit

when you want to ensure that the function is not called with a meaningful "this" context.

```ts
const run: (this: void, n: number) => void = function (n) {
  // this.n = n; // Property 'n' does not exist on type 'void'.
  console.log(n);
};

run(1);
```

## <mark> Best Practice: Generics in TypeScript </mark>

- provide flexibility with multiple types.

```ts
/* Case: fun takes any type paramenter */

const returnValueByGeneric = function <T>(arg: T): T {
  return arg;
};
// - <T> as alias
// it is type variable that captures the type passed to the function

const text: string = returnValueByGeneric<string>("str"); // <string> - argument

const n: number = returnValueByGeneric<number>(1);
```

## User-Defined Type Guards "instanceof"

```ts
const idEntityNumber = (val) => val instanceof Number;

const readLength = function <T>(arg: T[]): T[] {
  const n = arg[1];

  if (idEntityNumber(n)) {
    // Guards
    // or in JS typeof n === "number"

    console.log(n.toFixed());
  }
  return arg;
};

readLength<number>([1, 2, 3]);
```

```ts
const getArgument = function <T>(arg: T): T {
  return arg;
};

const anotherFunction: <T>(arg: T) => T = getArgument;
// number as T
const n: number = <number>anotherFunction(1);

// string as T
const text: string = <string>anotherFunction("str");
```

## Generics with two different type variables, T and U.

```ts
const mix = function <T, U>(number1: T, number2: T, text: U): void {
  return `${text}: ${number1}, ${number2}`;
};

const anotherFunction: <T, U>(number1: T, number2: T, text: U) => void = mix;

anotherFunction<number, string>(1, 2, "List");
```
