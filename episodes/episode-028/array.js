/*
 *  \
 *  \\,
 *   \\\,^,.,,.                    “Zero to Hero”
 *   ,;7~((\))`;;,,               <zerotohero.dev>
 *   ,(@') ;)`))\;;',    stay up to date, be curious: learn
 *    )  . ),((  ))\;,
 *   /;`,,/7),)) )) )\,,
 *  (& )`   (,((,((;( ))\,
 */

{
  const numbers = [102, 22, 16, 94, 42];

  const sorted = numbers.sort((a, b) => a - b);

  console.log(sorted);

  numbers.forEach(n => console.log(n));

  const evens = numbers.filter(n => n % 2 === 0);
  const odds = numbers.filter(n => n % 2 !== 0);

  console.log('evens', evens);
  console.log('odds', odds);
}

{
  const words = [
    'May', 'the', 'source', 'be', 'with', 'you'
  ];

  console.log(words);

  const cloned = words.slice(0);

  const cloned2 = [...words];

  console.log(cloned === cloned2);
  console.log('cloned2', cloned2);

  words.sort();

  console.log(words);
}
