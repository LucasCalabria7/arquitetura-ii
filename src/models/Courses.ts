export class Course {
    constructor(
        private id: string,
        private name: number,
        private lessons: string,
    ) {}
    public getLessons(): string {
        return this.lessons;
    }
    public setLessons(value: string): void {
        this.lessons = value;
    }
    public getName(): number {
        return this.name;
    }
    public setName(value: number): void {
        this.name = value;
    }
    public getId(): string {
        return this.id;
    }
    public setId(value: string): void {
        this.id = value;
    }
}