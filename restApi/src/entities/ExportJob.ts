import {Job} from './Job';

export enum ExportTypes {
    epub = 'epub',
    pdf = 'pdf',
}

export class ExportJob extends Job {
    constructor(bookId: string, type: ExportTypes) {
        super(bookId, type);
    }
}
