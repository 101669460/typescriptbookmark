export class Bookmark {
    title: string;
    icon: string;
    favourite: boolean = false;

//===========================================================

    constructor(pTitle: string, picon: string){
        this.title = pTitle;
        this.icon = picon;
    }

}

export class Bookmarkelement{
    bookmark: Bookmark;
    element: HTMLElement | undefined;

//===========================================================

    constructor(pbookmark: Bookmark){
        this.bookmark = pbookmark;

    }

//===========================================================

    createURL(name: string){
        this.element = document.createElement("div");
        this.element.appendChild(document.createTextNode(this.bookmark.title));
        this.element.appendChild(document.createTextNode(this.bookmark.favourite ? "Favourite" : ""));
        document.getElementById(name)?.appendChild(this.element);

    }
}