clipboard_data = ""
all_data = ""

function copyStuff() {
    //Expand the gallery menu
    document.getElementById("MenuDots").parentElement.parentElement.click();
    //Copy full prompt
    document.getElementById("Code").parentElement.parentElement.click();
}

function runFunction() {
    start = Date.now();
    try {copyStuff();}
    finally {
    try {navigator.clipboard.readText().then( //Try to read the clipboard
        (clipText) => anotherfunction(clipText));}
    finally {}
    }
    end = Date.now();
    if ((end - start) > 500) //Detect the alert popup by checking execution time
    {
        //Detect alert, dump all data to console
        clearInterval(t);
        console.log(all_data);
    }
}

function anotherfunction(cliptext){
    if (clipboard_data != cliptext) { //If the clipboard has changed
        clipboard_data = cliptext; //Save the current data so that it can be checked later
        all_data += cliptext + "\n"; //Append the contents to another variable
        console.log(clipboard_data);
        var node = document.querySelector('[title="Next"]'); //Skip to the next page
        node.click();
    }
}

var t=setInterval(runFunction,1000);