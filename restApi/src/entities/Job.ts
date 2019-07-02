import Utils from '../shared/Utils';

export class Job {
    public bookId: string;
    public type: string;
    public state: string;

    public created_at: number;
    public updated_at: number;

    constructor(bookId: string, type: string) {
        this.bookId = bookId;
        this.type = type;
        this.state = 'pending';

        this.created_at = Date.now();
        this.updated_at = 0;
    }

    public async process() {
        switch (this.type) {
            case 'epub':
                await Utils.Stall(10 * 1000);
                break;
            case 'pdf':
                await Utils.Stall(10 * 1000);
                break;
            default:
                await Utils.Stall(10 * 1000);
                break;
        }

        this.finishProcess();
    }

    public finishProcess() {
        this.updated_at = Date.now();
        this.state = 'finished';
    }

}
