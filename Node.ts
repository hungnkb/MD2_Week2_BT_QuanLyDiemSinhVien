export class Node<T> {
    name: string;
    score: number;
    next: Node<T> | null;

    constructor(name: string, score: number, next: Node<T> | null) {
        this.name = name;
        this.score = score;
        this.next = next;
    }

    readData(): any | null {
        return this.name + this.score + this.next;
    }
}