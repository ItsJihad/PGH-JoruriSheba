

# Answer the following questions clearly

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?



```bash
  getElementById is used to grab an element with it's ID name only.
  
```

```bash
  getElementsByClassName is used to grab an element using its class name.

```

```bash
 querySelector is being used to get the fast element that matches the selector. and it returns a single Element.


 whether querySelectorAll is being used to get all the elements that matches the selector.and it returns a node list, not a single element.
 so we cant apply .innerText directly into it.

```

2.How do you create and insert a new element into the DOM?


```bash
  we can create and insert a new element indo DOM by using document.createElement() & then insert it by using appendChild()
  
```

 
3.What is Event Bubbling and how does it work?
```bash
  when we click on an element that moment browser captures the root element that we clicked over. and then the event moves back to the DOM tree from root element to its parent element,and then its parent element until it reaches HTML.
  this movement of phrase is known as event Bubbling.
  we can stop it by stopping event propagation.

```
4.What is Event Delegation in JavaScript? Why is it useful?
```bash
    Event Delegation is when you put one event listener on a parent element instead of on each child element. The parent watches for events that bubble up from its children and reacts to them.
```
5.What is the difference between preventDefault() and stopPropagation() methods?
```bash
    preventDefault() Stops the default action of an element.
    stopPropagation() Stops the event from bubbling up to parent elements.

```