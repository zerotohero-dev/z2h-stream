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

import "fmt"

type Node struct {
	Prev  *Node
	Next  *Node
	Value interface{}
}

type List struct {
	Head *Node
	Tail *Node
}

func newNode(l *List, key interface{}) *Node {
	return &Node{
		Next:  l.Head,
		Value: key,
	}
}

func moveHeadToNode(l *List, node *Node) {
	if l.Head != nil {
		l.Head.Prev = node
	}
	l.Head = node
}

func moveTailToEnd(l *List) {
	n := l.Head
	for n.Next != nil {
		n = n.Next
	}
	l.Tail = n
}

func (l *List) Insert(key interface{}) {
	node := newNode(l, key)
	moveHeadToNode(l, node)
	moveTailToEnd(l)
}

func (l *List) String() string {
	res := ""
	node := l.Head

	for node != nil {
		if node == l.Tail {
			res = res + fmt.Sprintf("%+v", node.Value)
		} else {
			res = res + fmt.Sprintf("%+v -> ", node.Value)
		}
		node = node.Next
	}

	return res
}

func main() {
	lst := List{}
	lst.Insert(1)
	lst.Insert(2)
	lst.Insert(3)
	lst.Insert(4)

	fmt.Println(&lst)
}
