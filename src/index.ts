import { Bookmark } from "./classes";
import { Bookmarkelement } from "./classes";


let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
if (myButton == null) {
    alert("Button not found.");
} else {
    
    myButton.onclick = function () {
        if(myButton == undefined) return;
        let bookmark = new Bookmark("Bookmark1", "something");
        let element = new Bookmarkelement(bookmark);
        element.createURL("BookmarkContainer")
        bookmark.favourite = true;
    }
}