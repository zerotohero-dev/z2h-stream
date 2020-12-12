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

## Curry’s Paradox

[See the list of links for additional reference material to dig in](links.txt)

```text
 If this sentence is true, then aliens aliens will invade Earth before 2021.
    |---------A---------|       |-----B-----------------------------------|
|--------------------------C-----------------------------------------------|
```

## Proving an If->Then Statement

One way to prove `A => B` is true is to assume `A`,
and prove that `B` is true, given `A`.

For example, “If `2 * a = 4`, then `a` is `2`”.

```text
 If 2 * a = 4`, then `a` is `2`.
    |----P---|       |----Q---|
```

Let’s assume `P`. Then we’ll assume `2a = 4`

```text
2a = 4
 a = 4 / 2
 a = 2
```

If `2a = 4` we can mathematically prove that `a` is `2`.
Therefore, the statement `P => Q` also holds true.

## Modus Operandi

Before starting the proof of our clause, we need another 
tool in our logical toolbelt: [“modus operandi”](https://en.wikipedia.org/wiki/Modus_operandi)

Simply it states that if `P` is true and `P => Q` is also true then `Q` must be true.

Or in mathematical form:

```text
P => Q.
P.
∴ Q.
```

For example.

1. If today is Thursday, then I’ll have a boring meeting. (`P => Q.`)
2. Today is Thursday. (`P.`)
3. Then I most certainly will have a boring meeting. (`Q.`)

## Aliens, Aliens Everywhere

Now let’s circle back to our original statement:

```text
 If this sentence is true, then aliens aliens will invade Earth before 2021.
    |---------A---------|       |-----B-----------------------------------|
|--------------------------C-----------------------------------------------|
```

If we’d like to prove `A => B`, similar to the above logic;
we’ll need to assume `A`, and then prove that `B` holds true (given `A`).

Since `A` also means `A => B`, assuming `A` also means `A => B`.

And, due to “modus operandi”, when we assume `A`, we assume `A => B`.
And, since we assume `A => B` and `A`, then we have no choice but to assume `B`.

```text
A => B. // because we are assuming A, we are also assuming A => B.
A.      // we’ve already assumed A.
B.      // Therefore B. (modus operandi)
```

So by simply creating a self-referential if-then statement, we logically prove
the “then” part of the statement, no matter how ridiculous the “then” part is.

## In Math Form Please

Okay, the above was a proof that was more verbal, and less rigorous.

Let’s use more symbols to make our wetwares 🧠 happy:

For that let’s use this truthiness chart of `P => Q`.

```text
P (premise)    Q (implication)  P => Q
true           true             true     (1)
true           false            false    (2)
false          true             true     (3)
false          false            true     (4)
```

(3) and (4) mean that, if the premise is false, anything follows.

Two examples: 

* “*If `2 = 3` then `4 = 9`*” 
  * (`P: false`, `Q: false`) 
  * but, if we assume the premise then `2^2 = 3^2`, therefore `4 = 9`.
  * Thus `P => Q` is true.
* “*If `2 = 3` then `1 = 1`*”
  * (`P: false`, `Q: true`) 
  * yet, if we assume the premise, then `2^0 = 3^0`, therefore `1 = 1`.
  * Thus `P => Q` is true.

You can also express the above logic chart as `!P || Q` (*not `P` OR `Q`*).

With this little segue, we have enough logical tooling in our arsenal to
prove that aliens will invade the planet Earth.

Here’s the text for reference again.

```text
 If this sentence is true, then aliens aliens will invade Earth before 2021.
    |---------A---------|       |-----B-----------------------------------|
|--------------------------C-----------------------------------------------|
```

And, here goes the mathematical proof.

```text
A :: A => B
(“A” and “A then B” are identical. “A” self-references “A then B”)

A => A (identity)

A => (A => B)

(
but since `A` implies `A => B` (1), and since `A => B` is `!A || B` (2)

If `A` is `true` then `A => B` must be `true` (via 1), 
and therefore `B` must be `true` (via 2)

Similarly if `A` is `false`, given `A => B` must be `false` (via 1),
thus `B` must be false also (via 2).

That means, we can reduce `A => B` to just `B`
)

A => (A => B)
∴ A => B

A => B
A. (we are assuming A)
B. (modus operandi)

So, if `A :: A => B` then `B`.

QED.
```






