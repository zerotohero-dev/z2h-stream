```text
 \
 \\,
  \\\,^,.,,.                    “Zero to Hero”
  ,;7~((\))`;;,,               <zerotohero.dev>
  ,(@') ;)`))\;;',    stay up to date, be curious: learn
   )  . ),((  ))\;,
  /;`,,/7),)) )) )\,,
 (& )`   (,((,((;( ))\,
```

## Function Composition

Here’s a **JavaScript** function that we can use to **compose** functions.

```javascript
const compose = (...fns) => fns.reduce(
  (acc, curr) => ((...args) => acc(curr(...args)))
);
```

[There’s a usage example for it in the former episode](../episode-036/function-composition/index.js).
In this article, we’ll look at **how** the above function works the way it works instead.

## A Quick Introduction to Array Reduction

[Array.prototype.reduce()][reduce-mdn] passes through all the elements of an
array, applies the reducer function `fn(acc, curr)` to each element.
Where 
* `curr` (*a mnemonic for “the current value”*) is the current element of the array,
* and, `acc` (*a mnemonic for “accumulator”*) is the return value of the reducer function in the previous step. 

[reduce-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "Array.prototype.reduce (MDN)"

For example, given the following `sum()` function:

```javascript
const sum = (acc, cur) => acc + cur;
```

And, the following array:

```javascript
const numbers = [1,2,3,4,5,6];
```

The reduction `numbers.reduce(sum)` will work as follows:

curr  |acc  |sum(acc, cur)  |notes      |
------|-----|---------------|-----------|
   `2`|  `1`|            `3`|`sum(2,1)` |
   `3`|  `3`|            `6`|`sum(3,3)` |
   `4`|  `6`|           `10`|`sum(4,6)` |
   `5`| `10`|           `15`|`sum(5,10)`|
   `6`| `15`|           `21`|`sum(6,15)`|


Therefore, `numbers.reduce(sum)` will be equal to `21`.

## Beta Reduction

**Beta reduction** is a [lambda calculus][lambda-calculus] concept that 
essentially says that applying an argument to a higher-order lambda function
is equivalent to applying the same argument to the wrapped function inside
the lambda expression.

> **Aside**
>
> **Beta reduction** has **nothing** in common with the `Array.prototype.recude()` that
> we’ve covered above.

[lambda-calculus]: https://plato.stanford.edu/entries/lambda-calculus/ "Lambda Calculus"

In lambda form:

```text 
(\x -> f x) y ==== f y
```

Or if you want a **JavaScript** equivalent:

```javascript 
((x) => f(x))(y) ==== f(y)
```

We just place `y`, in place of `x` in `f(x)` and that’s all about it.

## Dissecting the `compose()` Function

Let’s paste the `compose()` function here for reference:

```javascript
const compose = (...fns) => fns.reduce(
  (acc, curr) => ((...args) => acc(curr(...args)))
);
```

Now, assume we are calling `compose(a1, c1, c2, c3, c4)`.

This will be equivalent to the following:

```
[a1,c1,c2,c3,c4].reduce(
  (acc, curr) => ((...args) => acc(curr(...args)))
)
```

Let’s do a similar table that we did for the reducer example above:

curr  |  acc| reduction                  |alias|
------|-----|----------------------------|-----|
  `c1`| `a1`| `(...a) => acc(curr(...a))`|     |
   "" |     | `(...a) => a1(c1(...a))`   |`a2` |
  `c2`| `a2`| `(...a) => acc(curr(...a))`|     |
   "" |     | `(...a) => a2(c2(...a))`   |     |

But, what is `a2(c2(...a))` ?

Since `a2` is `(...x) => acc(curr(...x))`

That expression is `((...x) => a1(c1(...x)))(c2(...a))`

Assume `c2(...a)` is `c2a`, `a1(c1(...x))` is `a1c1(x)`

Then the above expression will become `((...x) => a1c1(...x))(c2a)`.

Or in even simpler form: `((x) => a1c1(x))(c2a)`

which is equivalent to `a1c1(c2a)` when we do a beta reduction of `c2a`.

Which is equivalent to `a1(c1(c2a))`.

Which is equivalent to `a1(c1(c2(...a)))`

With that little segue, let’s re-paste the above table:

curr  |acc  | reduction                   |alias|
------|  ---|-----------------------------|-----|
  `c1`| `a1`| `(...a) => acc(curr(...a))` |     |
   "" |     | `(...a) => a1(c1(...a))`    |`a2` |
  `c2`| `a2`| `(...a) => acc(curr(...a))` |     |
   "" |     | `(...a) => a2(c2(...a))`    |     |
   "" |     | `(...a) => a1(c1(c2(...a)))`|`a3` |
 
We can apply the same reasoning to the next steps of our reduction too:

curr  |acc  | reduction                                          |alias|
------|-----|----------------------------------------------------|-----|
  `c1`| `a1`| `(...a) => acc(curr(...a))`                        |     |
   "" |     | `(...a) => a1(c1(...a))`                           |`a2` |
  `c2`| `a2`| `(...a) => acc(curr(...a))`                        |     |
   "" |     | `(...a) => a2(c2(...a))`                           |     |
   "" |     | `(...a) => a1(c1(c2(...a)))`                       |`a3` |
  `c3`| `a3`| `(...a) => acc(curr(...a))`                        |     |
   "" |     | `(...a) => a3(c3(...a))`                           |     |
   "" |     | `(...a) => ((...x) => a1(c1(c2(...x))))(c3(...a))` |     |
   "" |     | `(...a) => a1(c1(c2(c3(...a))))`                   |`a4` |

Let’s simplify the intermediate steps for brevity:

curr  |acc  | reduction                                          |alias  |
------|-----|----------------------------------------------------|-------|
  `c1`| `a1`| `(...a) => a1(c1(...a))`                           |`a2`   |
  `c2`| `a2`| `(...a) => a1(c1(c2(...a)))`                       |`a3`   |
  `c3`| `a3`| `(...a) => a1(c1(c2(c3(...a))))`                   |`a4`   |

And follow the trend for `c4` too:

curr  |  acc| reduction                                          |alias  |
------|-----|----------------------------------------------------|-------|
  `c1`| `a1`| `(...a) => a1(c1(...a))`                           |`a2`   |
  `c2`| `a2`| `(...a) => a1(c1(c2(...a)))`                       |`a3`   |
  `c3`| `a3`| `(...a) => a1(c1(c2(c3(...a))))`                   |`a4`   |
  `c3`| `a3`| `(...a) => a1(c1(c2(c3(c4(...a)))))`               |`a4`   |

That will show that `compose(a1, c1, c2, c3, c4)` will be equivalent to
`(...a) => a1(c1(c2(c3(c4(...a)`.
