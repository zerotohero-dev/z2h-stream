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

type List struct {
	sentinel Element
	len      int
}

func (l *List) init() *List {
	l.sentinel.next = &l.sentinel
	l.sentinel.prev = &l.sentinel
	l.len = 0
	return l
}

func (l *List) Front() *Element {
	if l.len == 0 {
		return nil
	}

	return l.sentinel.next
}

func (l *List) PushBack(v interface{}) *Element {
	if l.sentinel.next == nil {
		l.init()
	}

	e := &Element{Value: v}
	tail := l.sentinel.prev
	e.prev = tail
	e.next = &l.sentinel
	l.sentinel.prev = e
	e.prev.next = e

	e.list = l

	l.len++

	return e
}

func New() *List {
	return (&List{}).init()
}
