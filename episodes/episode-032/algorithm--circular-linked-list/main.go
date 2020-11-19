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
	"detect-circular-lists/list"
	"fmt"
)

func shallExitEarly(tortoise, hare *list.Element) bool {
	if tortoise == nil {
		return true
	}

	if hare == nil {
		return true
	}

	if hare.Next() == nil {
		return true
	}

	return false
}

func move(tortoise, hare *list.Element) (*list.Element, *list.Element) {
	return tortoise.Next(), hare.Next().Next()
}

func backtrace(tortoise, hare *list.Element) *list.Element {
	for {
		fmt.Println("backtrace", tortoise.Value, hare.Value)

		if tortoise == hare {
			fmt.Println("Found:", hare.Value)
			return hare
		}

		tortoise = tortoise.Next()
		hare = hare.Next()
	}
}

func detect(items *list.List) *list.Element {
	if items == nil {
		return nil
	}

	head := items.Front()
	tortoise, hare := head, head

	for {
		if shallExitEarly(tortoise, hare) {
			return nil
		}

		tortoise, hare = move(tortoise, hare)

		if tortoise != hare {
			continue
		}

		fmt.Println("Circle found at:", hare.Value)

		tortoise = head
		return backtrace(tortoise, hare)
	}
}

func main() {
	/**
		                                  (90) <- (80)
	                                     |       ^
		                                   |      (70)
		                                   |       ^
		  (10) -> (20) -> (30) -> (40) -> (50) -> (60)

		 **/


	items := list.New()

	items.PushBack(10)
	items.PushBack(20)
	items.PushBack(30)
	items.PushBack(40)
	mid := items.PushBack(50)
	items.PushBack(60)
	items.PushBack(70)
	items.PushBack(80)
	last := items.PushBack(90)

	// This creates a circular structure in the list.
	last.SetNext(mid)

	detect(items)

	fmt.Println(mid.Value, last.Value)

	// fmt.Println(items.Front().Next().Next().Value)
}
