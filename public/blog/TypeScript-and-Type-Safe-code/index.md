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
