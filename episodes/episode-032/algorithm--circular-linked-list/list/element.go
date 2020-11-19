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

package list

type Element struct {
	next *Element
	prev *Element
	list *List
	Value interface{}
}

func (e *Element) SetNext(el *Element) {
	e.next = el
}

func (e *Element) Next() *Element {
	if e.list == nil {
		return nil
	}

	if e.next == &e.list.sentinel {
		return nil
	}

	return e.next
}

func (e *Element) Prev() *Element {
	if e.list == nil {
		return nil
	}

	if e.prev == &e.list.sentinel {
		return nil
	}

	return e.prev
}
