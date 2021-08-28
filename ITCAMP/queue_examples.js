// function queue(el) {
//     items = [1,2,3];
//     items.push(el);
//     console.log(items)                    // enqueue
//     items.shift()                
//     console.log(items);                   // dequeue
//     console.log(items[0])                 // front
//     console.log(items.length)             // size
//     console.log(items.length === 0)       //isEmpty

// }


// queue(4)




function PriorityQueueFactory() {
    const items = [];
  
    function createQueueElement(element, priority) {
        return { element,priority }
    }
  
    function enqueue(element, priority) {
      const newElement = createQueueElement(element, priority);
      let added = false;
      for (let index = 0; index < items.length; index++) {
        const currentElement = items[index];
  
        if (newElement.priority < currentElement.priority) {
          items.splice(index, 0, newElement);
          added = true;
          break;
        }
      }
  
      if (!added) {
        items.push(newElement);
      }
    }
    
    function print() {
      for(const item of items){
        console.log(`element: ${item.element} - priority: ${item.priority}`)
      }
    }

    return {
        enqueue,
        print
      };
    
}
  
var q = PriorityQueueFactory();

q.enqueue('John', 2);
q.enqueue('Olivia', 1);
q.enqueue('Karmen', 3);
q.enqueue('Oliver', 1);

q.print();



