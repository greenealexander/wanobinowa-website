import { Image } from '../../../shared/models/image';

export class Section {
    constructor(
        public name: string,
        public images?: Image[]
    ) {}
}