import { LinkedList } from "./LinkedList";
import { Node } from "./Node";

let newLinkedList = new LinkedList();

newLinkedList.insertFirst('Hung', 3.2)
newLinkedList.insertFirst('Huy', 3.3)
newLinkedList.insertFirst('Nam', 4.9)
newLinkedList.insertFirst('Nm', 4.9)
newLinkedList.insertFirst('Na', 4.9)

// console.log(newLinkedList.findByName('Hung'))
// console.log(newLinkedList.size)
console.log(newLinkedList.listStudentMaxScore())
// console.log(newLinkedList.totalStudentFail())
