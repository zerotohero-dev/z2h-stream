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

package main

import (
	"container/list"
	"fmt"
)

/*
  Given an integer array containing digits from [0, 9],
  print all possible letter combinations that the numbers
  could represent.
    +------+------+------+
    |      | ABC  | DEF  |
    |  1   |  2   |  3   |
    +------+------+------+
    | GHI  | JKL  | MNO  |
    |  4   |  5   |  7   |
    +------+------+------+
    | PQRS | TUV  | WXYZ |
    |  7   |  8   |  9   |
    +------+------+------+
    |  *   |  0   |  #   |
    +-------------+------+
  Example:
    Input: [2, 3]
    Output: ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"]
*/

var lookup = []string{
	"0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz",
}

func dequeue(q list.List) string {
	elm := q.Front()
	q.Remove(elm)

	return elm.Value.(string)
}

func enqueue(q list.List, v string) {
	q.PushBack(v)
}

func combine(numbers []int) []string {
	queue := list.New()

	enqueue(*queue, "")

	var result []string

	for queue.Len() > 0 {
		v := dequeue(*queue)

		found := len(v) == len(numbers)

		if found {
			result = append(result, v)

			continue
		}

		index := len(v)
		digit := numbers[index]
		letters := lookup[digit]

		for i := 0; i < len(letters); i++ {
			letter := string(letters[i])

			enqueue(*queue, v +letter)
		}
	}

	return result
}

func main() {
	numbers := []int{2, 3, 5, 9}

	letters := combine(numbers)

	fmt.Println(letters)
}
