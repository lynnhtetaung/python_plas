var express = require('express');
var router = express.Router();
require('javascript-natural-sort');

//Read & Write File
const fs = require('fs');
const naturalSort = require('javascript-natural-sort');
//const { path } = require('../app');
var path = require('path');
const { Script } = require('vm');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render('index', { title: 'Exercise Programming' });
})

router.get("/menu", function (req, res, next) {
  res.render("menu");
});

router.get("/manual", function (req, res, next) {
  
const dirPath = path.join(__dirname, "../public/pdfs");
const files = fs.readdirSync(dirPath).map(name => {
  return {
    name: path.basename(name, ".pdf"),
    url: `/pdfs/${name}`
  };
});
  res.render("manual", {files});
});

//**********************Python Start ********************/

router.get("/python_programming", function (req, res, next) {
  console.log("main python", req);

  res.render("programming/python-programming/main");
});

router.get("/python_programming/:title", function (req, res, next) {

  console.log("aaaaaaaaaaaaaaaaa", req.params.title);
  var directoryPath = path.join(__dirname, `/../addon/test/${req.params.title}/`);
  var resultPath = path.join(__dirname + '/../addon/results/');

  // Read Problem Translation Json File
  let translationRawData = "";
  let translation = null;
  if (fs.existsSync(directoryPath + "/translation.json")) {
    translationRawData = fs.readFileSync(directoryPath + "/translation.json", 'utf8');
    translation = JSON.parse(translationRawData);
  }

  // Filter folders with only 'p' prefix and sort folders
  var problem_folders = getDirectories(directoryPath).filter((folder) => folder.startsWith("p")).sort(naturalSort);
  var problems = new Object();
  var generalProblems = [];
  console.log("qwwwwwwwwwwwwwww");

  problem_folders.forEach(problem_folder => {
    fs.readdirSync(directoryPath + problem_folder).forEach(file => {

      console.log("asdfghhhhhhhhhh");
      if (req.params.title.includes("CWP") || req.params.title.includes("CDP")) {

        console.log("coming");
      // Filter xxx.py file name and regard xxx as problem name
      if (file.split(".")[1] == "py" && !file.includes("Test") && !file.split(".")[0].includes(" ")) {
        problems[file.split(".")[0]] = ""
 
        // sla (result (resultpath >> results folder))
        fs.readdirSync(resultPath).forEach(result => {
          if (result.split("@")[2] == problem_folder && result.split("@")[1] == req.params.title) {
            result = fs.readFileSync(resultPath + result, 'utf8');

            problems[file.split(".")[0]] = result.includes("OK") ? "Finished" : "Trying"
          }
        })
      }
    } else {
      if (file.split(".")[1] == "html") {
        if (translation == null) {
          problems[file.split(".")[0]] = ""
        } else {
          generalProblems.push(translation[file.split(".")[0]]);
        }
      }
    }
    });
  });

  res.render("programming/python-programming/" + req.params.title + "/home", { problems: req.params.title.includes("CWP") || req.params.title.includes("CDP") || translation == null ? problems : generalProblems });
});

// Get all directory list under path
function getDirectories(path) {
  return fs.readdirSync(path).sort().filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}

// Go to respective problem pages
router.get("/python_programming/:title/:p", function (req, res, next) {
  var directoryPath = path.join(__dirname, `/../addon/test/${req.params.title}/${req.params.p}`);
  var resultPath = path.join(__dirname + '/../addon/results/');
  var problemFolderPath = path.join(__dirname, `/../addon/test/${req.params.title}/`);
  
// For CWP Problems
  var p1Source = ""
  var p1Test = ""
  var resultField = ""

// For General Problems
  var question = ""

  fs.readdirSync(directoryPath).forEach(file => {
    // Do whatever you want to do with the file

    if (req.params.title.includes("CWP") || req.params.title.includes("CDP")) {
    if (file.split(".")[1] == "py") {

      if (file.includes("Test")) {
        p1Test = fs.readFileSync(directoryPath + "/" + file, 'utf8');
      } else {
        p1Source = fs.readFileSync(directoryPath + "/" + file, 'utf8');
      }
    }
  } else {
    question = fs.readFileSync(directoryPath + "/" + file, 'utf8');
  }
  });
  
  // sla (resultField)
  if (req.params.title.includes("CWP") || req.params.title.includes("CDP")) {
  fs.readdirSync(resultPath).forEach(file => {
    if (file.split("@")[2] == req.params.p && file.split("@")[1] == req.params.title) {
      resultField = fs.readFileSync(__dirname + '/../addon/results/' + file, 'utf8');   
    }
 });
}

  var problem_folders = getDirectories(problemFolderPath).filter((folder) => folder.startsWith("p")).sort(naturalSort);
  var titles = req.params.title.split("_")
  var title = titles[titles.length - 2] + " " + titles[titles.length - 1].charAt(0).toUpperCase() + titles[titles.length - 1].slice(1)

  var problemNumber = parseInt(req.params.p.split("p")[1]);

  if (req.params.title.includes("CWP") || req.params.title.includes("CDP")) {
    res.render("programming/python-programming/" + req.params.title + "/index", { title: title, p1Source: p1Source, p1Test: p1Test, resultField: resultField, totalProblems: problem_folders.length, problemNumber: problemNumber });
  } else {
    res.render("programming/python-programming/" + req.params.title + "/index", { title: title, question: question, totalProblems: problem_folders.length, problemNumber: problemNumber });
  }
});

// Save files into addon/submits and return data from addon/results
router.post("/submitPython", async (req, res) => {
  var string = req.body.route.split("/");
  //var folder = string[string.length - 2] + '@' + string[string.length - 1];
  var folder1 = string[string.length - 2] + '@' + string[string.length - 1]; // results
  var folder = string[string.length - 1]; //sla (to change the file name)
  var result = ""

  const date = Date.today().toFormat('YYYYMMDD'); 
  let sourceCodeData = req.body.sourceCode;
  //let fileName = '@' + folder + '@' + date + '.subs';
  let fileName =  folder  + 'p.py'; //sla (to change the file name)

  
  fs.writeFile(__dirname + '/../addon/submits/' + fileName, sourceCodeData , function (err) {
    console.log("fileName:" + fileName);

    if (err) return console.log(err);
  
  
  });

//sla (Add js code to run python script)

const { spawn } = require('child_process');
//const ls1 = spawn('python', ['C:\\Users\\Dell\\Downloads\\plas\\plas\\addon\\submits\\StandardIOTest.py']);


const ls12 = spawn('python', [__dirname + '/../addon/submits/SetDataTypeTest.py']);
const ls11 = spawn('python', [__dirname + '/../addon/submits/DictionDataTypeTest.py']);
const ls10 = spawn('python', [__dirname + '/../addon/submits/ListDataTypeTest.py']);
const ls9 = spawn('python', [__dirname + '/../addon/submits/MemberTupleTest.py']);
const ls8 = spawn('python', [__dirname + '/../addon/submits/TupleUsageTest.py']);
const ls7 = spawn('python', [__dirname + '/../addon/submits/concatStringTest.py']);
const ls6 = spawn('python', [__dirname + '/../addon/submits/accessingStringTest.py']);
const ls5 = spawn('python', [__dirname + '/../addon/submits/ifelseTest.py']);
const ls4 = spawn('python', [__dirname + '/../addon/submits/NumericDataTypeTest.py']);
const ls3 = spawn('python', [__dirname + '/../addon/submits/MembershipOperaTest.py']);
const ls2 = spawn('python', [__dirname + '/../addon/submits/ArithmeticOperationTest.py']);
const ls1 = spawn('python', [__dirname + '/../addon/submits/StandardIOTest.py']);


ls1.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls2.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls3.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls4.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls5.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls6.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls7.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls8.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls9.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls10.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls11.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls12.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

let resultFile = '@' + folder1 + '@' + date + '.result';
//sla (change folder name)
//let resultFile = folder + '.result';

  const watcher = fs.watch(__dirname + '/../addon/results/', "utf8", function (event, trigger) {
    console.log(`Result file directory Changed.`);
    while (result == "") {
      try{
      result = fs.readFileSync(__dirname + '/../addon/results/' + resultFile, 'utf8');
      }
      catch(err){
        console.log(``);
      }
    }
    res.json(result)
    watcher.close();
  })
})

router.post("/record", async (req, res) => {
  var resultPath = path.join(__dirname + '/../addon/results/');
  var testNamePath = path.join(__dirname, '/../addon/test/');
  var topic = req.body.topic
  var output = ""
  var topicCount = 0
  var subTopicCount = 0
  // var d = new Date();
  // var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  // var date = new Date(utc + (3600000)).toISOString().replace(/T/, ' ').replace(/\..+/, '');

var d = new Date();
var dd = String(d.getDate()).padStart(2, '0');
var mm = String(d.getMonth() +1).padStart(2, '0');
var yyyy = d.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
var utc = d.toLocaleTimeString();
var date = today + ' ' + utc;

  if (topic != null) {
    output = `${date} ===========================================================`
    output += `\n${date} ${++topicCount}. Preparing to test topic: ${topic}\n`
    output += `${date} ===========================================================`
  }

  fs.readdirSync(resultPath).filter((folder) => folder.split("@")[2]).sort(naturalSort).forEach(result => {
    if (result.split("@")[1] == topic) {
      fs.readdirSync(testNamePath + `${topic}/${result.split("@")[2]}`).forEach(file => {
        if (file.split(".")[1] == "py" && file.includes("Test")) {
          output += `\n\n${date} ---------------${topicCount}.${++subTopicCount}. Start testing : ${topic}/${result.split("@")[2]}/${file.split(".")[0]}---------------\n`
          output += fs.readFileSync(__dirname + '/../addon/results/' + result, 'utf8');
          output += `\n${date} ---------------${topicCount}.${subTopicCount}. End testing : ${topic}/${result.split("@")[2]}/${file.split(".")[0]}---------------\n`
        }
      });
    }
  })
  res.json(output);
})

router.post("/save", async (req, res) => {
  var outputDirectoryPath = path.join(__dirname + '/../addon/output/');
  var sid = req.body.sid
  var output = req.body.output
  var routes = req.body.route.split("/")

  fs.writeFileSync(outputDirectoryPath + `${sid}_${routes[routes.length - 1]}_output.txt`, output, 'utf8')

  res.end()
})

//************************  Python END ***************************/



module.exports = router;
