import {Job} from './Job';

export enum ImportTypes {
    word = 'word',
    pdf = 'pdf',
    wattpad = 'wattpad',
    evernote = 'evernote',
}

export class ImportJob extends Job {
    public url: string;

    constructor(bookId: string, type: ImportTypes, url: string) {
        super(bookId, type);
        this.url = url;
    }
}
