function onGoProblem(number) {
    let currentRoute = window.location.href;
    let routeNames = currentRoute.split("/");
    location.href = routeNames[routeNames.length - 1] + '/p' + number;
}

function onGoProblemEFPRecom (number) {
    let currentRoute = window.location.href;
    let routeNames = currentRoute.split("/");
    location.href = routeNames[routeNames.length - 1] + '/page' + number;
}

function Save() {
    if (document.getElementById("student_ID").value == "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Fill your student ID.',

            showConfirmButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                window.stop();
            }
        });

        return
    }

    if (document.getElementById("show_result").value == "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Get your record.',

            showConfirmButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                window.stop();
            }
        });

        return
    }

    var postBody = {
        route: window.location.href,
        sid: document.getElementById("student_ID").value,
        output: document.getElementById("show_result").value
    }
    fetch("/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postBody)
    }).then(response => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'File saved under output directory.',

            showConfirmButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                window.stop();
            }
        });
    })
}

function showRecord() {
    var currentRoute = window.location.href;
    var routeNames = currentRoute.split("/");
    var postBody = {
        topic: routeNames[routeNames.length - 1],
    }

    fetch("/record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postBody)
    }).then(response => {
        console.log("Response", response);
        return response.json()
    }).then(data => {
        console.log("Data", data);
        document.getElementById("show_result").value = data
    })
}