// 回答状態確認
function statusConfirm() {
    var problem_is_correct = [];

    // Sort by percentage
    var customSort = function (a, b) {
        return Number(a.split("\t").pop()) - Number(b.split("\t").pop())
    }

    Object.keys(localStorage)
        .sort(customSort).forEach(function (key) {

        problem_category = key.split('\t')[0];
        if (!window.location.href.toLowerCase().split('/').includes(problem_category.toLowerCase())) {
            return problem_is_correct;
        }

        problem_id = key.split('\t')[1];
        problem_percentage = key.split('\t').pop();
        
        // Only includes [x]
        if (localStorage.getItem(key).includes("[x]") && !localStorage.getItem(key).includes("[o]")) {
            // 不正解の問題
            if (problem_is_correct[problem_id] == undefined) { // 正解の記録がないを確認
                problem_is_correct[problem_id] = { status: false, percentage: problem_percentage };
            }
        }

        // Check for both [x] and [o]
        if (localStorage.getItem(key).includes("[x]") && localStorage.getItem(key).includes("[o]")) {
            problem_is_correct[problem_id] = {status: false, percentage: problem_percentage};
        }

        // Check for only [o]
        if (!localStorage.getItem(key).includes("[x]") && localStorage.getItem(key).includes("[o]")) {
            // 正解の問題
            problem_is_correct[problem_id] = {status: true, percentage: problem_percentage};
        }
    });
    return problem_is_correct;
}

// 回答状態によるTableの色を更新と「解答済み」を表示する
function distinction() {
    var problem_is_correct = statusConfirm();
    $('.table.table-bordered.table-hover').removeClass('table-striped');
    $('.table.table-bordered.table-hover tr').each(function () {
        var problem_id = $(this.cells[0]).text().trim();
        $(this).removeClass('bg-success');
        $(this).removeClass('bg-warning');
        // $(this).removeClass('bg-danger');
        if (problem_is_correct.map(val => val.status)[problem_id] == true) {
            $(this).addClass('bg-success');
            $(this.cells[2]).text(problem_is_correct.map(val => val.percentage)[problem_id] + '%');
        }
        else if (problem_is_correct.map(val => val.status)[problem_id] == false) {
            $(this).addClass('bg-warning');
            $(this.cells[2]).text(problem_is_correct.map(val => val.percentage)[problem_id] + '%');
        }
        // else{
        //     $(this).addClass('bg-error');
        //     $(this.cells[2]).text('Uncompleted');
        // };
    });
}