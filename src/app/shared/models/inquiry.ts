export class Inquiry {
    constructor(
        public dateInquired: string,
        public name: string,
        public email: string,
        public categories: number[],
        public respondedTo: number,
        public done: number,
        public description?: string
    ) {}
}