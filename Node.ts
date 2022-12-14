export class Node<T> {
    name: string;
    score: number;
    next: Node<T> | null = null;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    readData(): any | null {
        return this.name + this.score + this.next;
    }
}