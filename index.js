var basic = []
var advanced = []
var all = []
var myarr = []
var counter = 0;
var totalCount = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function csvToJson2(csv) {
    const lines = csv.trim().split('\"\"\n');
    lines.forEach(arr => {
      const values = arr.split('@');
      var type = values[0]
      var topic = values[1]
      var question = values[2]
      var answer = values[3]
      var obj = {}
      obj['question'] = question
      obj['answer'] = answer
      obj['topic'] = topic
      obj['type'] = type
      if (type === 'BASIC'){
        basic.push(obj);
      } else if (type === 'ADVANCED'){
        advanced.push(obj);
      } else {
        console.log(obj);
      }
      all.push(obj);
    });
  }

function setQuestion(index) {
  const tEle = document.getElementById('topic');
  const qEle = document.getElementById('question');
  const aEle = document.getElementById('answer');
  const dEle = document.getElementById('difficulty');
  const showEle = document.getElementById('show-answer');
  const hideEle = document.getElementById('hide-answer');
  aEle.style.display = 'none';
  var arr = myarr;
  tEle.textContent = arr[index]['topic'];
  qEle.textContent = arr[index]['question'].slice(3,-3);
  aEle.textContent = arr[index]['answer'].slice(3,-1);
  dEle.textContent = arr[index]['type'];
  if (arr[index]['type'] == 'BASIC'){
    dEle.style.border="1px solid green";
    dEle.style.color="green";
  } else {
    dEle.style.border="1px solid red";
    dEle.style.color="red";
  }
  showEle.style.display = 'block';
  hideEle.style.display = 'none';
  document.getElementById('currentCount').textContent = index + 1;
}

function showAnswer(){
  const aEle = document.getElementById('answer');
  aEle.style.display = 'block';
  const showEle = document.getElementById('show-answer');
  const hideEle = document.getElementById('hide-answer');
  showEle.style.display = 'none';
  hideEle.style.display = 'block';
}

function hideAnswer(){
  const aEle = document.getElementById('answer');
  aEle.style.display = 'none';
  const showEle = document.getElementById('show-answer');
  const hideEle = document.getElementById('hide-answer');
  showEle.style.display = 'block';
  hideEle.style.display = 'none';
}

function nextQuestion(){
  counter++;
  setQuestion(counter);
}

function changeSubmit(){
  var selectedTopic = document.getElementById('topicSelect').value;
  var selectedDifficulty = document.getElementById('difficultySelect').value;

  if (selectedDifficulty === 'ALL' && selectedTopic === 'ALL'){
    myarr = all;
  } else {
      if (selectedDifficulty === 'BASIC'){
        if (selectedTopic === 'ALL'){
          myarr = basic;
        } else {
          var temp = [];
          all.forEach(ele => {
            if (ele['type'] === 'BASIC' && ele['topic'] === selectedTopic){
              temp.push(ele);
            }
          });
          myarr = temp;
        }
      } else if (selectedDifficulty === 'ADVANCED'){
        if (selectedTopic === 'ALL'){
          myarr = advanced;
        } else {
          var temp = [];
          all.forEach(ele => {
            if (ele['type'] === 'ADVANCED' && ele['topic'] === selectedTopic){
              temp.push(ele);
            }
          });
          myarr = temp;
        }
      } else {
        var temp = [];
          all.forEach(ele => {
            if (ele['topic'] === selectedTopic){
              temp.push(ele);
            }
          });
          myarr = temp;
      }
  }

  totalCount = myarr.length;
  document.getElementById('totalCount').textContent = totalCount;
  shuffleArray(myarr);
  counter = 0;
  setQuestion(0);
}

const jsonData = csvToJson2(csvData);
changeSubmit();
