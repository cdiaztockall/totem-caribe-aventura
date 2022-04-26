export class Notify {

    constructor(
        public title: string,
        public message: string,
        public active: boolean
    ) {}

    static mapFromJson(obj: any): Notify {
        return new Notify(
            obj['title'] ? obj['title'] : '',
            obj['message'] ? obj['message'] : '',
            false
        )
    }

    static empyNotify(): Notify {
        return new Notify(
            '',
            '',
            false
        )
    }

    static closeNotify(): Notify {
        return new Notify(
            '',
            '',
            false
        )
    }

}
