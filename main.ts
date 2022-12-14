import { LinkedList } from "./LinkedList";
import { Node } from "./Node";

let newLinkedList = new LinkedList();

newLinkedList.insertFirst('Hung', 3.2, null)
newLinkedList.insertFirst('Huy', 3.3, null)
newLinkedList.insertFirst('Nam', 4.9, null)

// console.log(newLinkedList.findByName('Hung'))
// console.log(newLinkedList.size)
console.log(newLinkedList.listStudentMaxScore())
// console.log(newLinkedList.totalStudentFail())
