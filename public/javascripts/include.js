function include(file) {

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = file;

    document.getElementsByTagName('body').item(0).appendChild(script);
}

include("/codemirror/lib/codemirror.js");
include("/codemirror/mode/clike/clike.js");
include("/codemirror/addon/edit/closebrackets.js");