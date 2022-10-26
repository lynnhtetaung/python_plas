$(document).ready(function(){
    //code here...

    var myCodeMirror = CodeMirror(document.body, {
        value: "function myScript(){return 100;}\n",
        mode:  "javascript"
      });

    const codemirrorEditor = CodeMirror.fromTextArea(document.getElementById('codearea'), {
        lineNumbers: true,
        mode: "javascript",
        theme: "base16-dark"
      });
      


});