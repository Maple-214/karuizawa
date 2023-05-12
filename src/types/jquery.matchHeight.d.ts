declare namespace JQueryMatchHeight {
    interface Options {
        byRow?: boolean;
        property?: string;
        target?: string;
        remove?: boolean;
    }
}

interface JQuery {
    matchHeight(options?: JQueryMatchHeight.Options): JQuery;
}
