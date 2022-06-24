var sourceCodeEditor = CodeMirror.fromTextArea(document.getElementById("sourceCode"), {
    lineNumbers: true,
    indentUnit: 4,
    autoCloseBrackets: true,
    theme: "neat",
    mode: "text/x-java"
});

var testCodeEditor = CodeMirror.fromTextArea(document.getElementById("testCode"), {
    lineNumbers: true,
    readOnly: true,
    theme: "neat",
    mode: "text/x-java"
});

var input = document.getElementById("select");
function selectTheme() {
    var theme = input.options[input.selectedIndex].innerHTML;
    sourceCodeEditor.setOption("theme", theme);
    testCodeEditor.setOption("theme", theme);
}

const spinner = document.getElementById("spinner");
var paths = window.location.href.split("/");
var problemName = paths[paths.length - 1];
var problemNo = problemName.substring(1);

// document.getElementById("studentName").addEventListener('input', function () {
//     document.getElementById('btn-submit').disabled = document.getElementById("studentName").value == ""
// })

window.onload = function () {
    if (document.getElementById("resultField").value == "") {
        document.getElementById("result-table").style.display = "none";
    }

    if (problemNo == 1) {
        document.getElementById('prev').style.display = "none";
    }

    if (problemNo == document.getElementById("totalProblems").value) {
        document.getElementById('next').style.display = "none";
    }
}

function onRouteChange(action) {
    if (action == "Next") {
        problemNo++;
    } else {
        problemNo--;
    }

    paths[paths.length - 1] = "p" + problemNo;
    window.location.href = paths.join("/");
}

function goBackToProblemList() {
    var currentRoute = window.location.href;
    var routeNames = currentRoute.split("/");
    location.href = "/python_programming/" + routeNames[routeNames.length - 2]
}

function onSubmit() {
    sourceCodeEditor.save();
    const postBody = {
        route: window.location.href,
        sourceCode: sourceCodeEditor.getTextArea().value
    }

    spinner.removeAttribute('hidden');
    fetch("/submitPython", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postBody)
    }).then(response => {
        console.log("Response", response);
        return response.json()
    }).then(data => {
        console.log("Data", data);
        spinner.setAttribute('hidden', '');
        document.getElementById("result-table").style.display = "block";
        document.getElementById("submit-result-value").value = data
    })

}