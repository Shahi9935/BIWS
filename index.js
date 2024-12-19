var basic = []
var advanced = []
var all = []
var counter = 0;

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
      if (type === 'BASIC'){
        basic.push(obj);
      } else {
        advanced.push(obj);
      }
      all.push(obj);
    });
  }

function setQuestion(index) {
  const tEle = document.getElementById('topic');
  const qEle = document.getElementById('question');
  const aEle = document.getElementById('answer');
  const showEle = document.getElementById('show-answer');
  const hideEle = document.getElementById('hide-answer');
  aEle.style.display = 'none';
  tEle.textContent = basic[index]['topic'];
  qEle.textContent = basic[index]['question'].slice(3,-3);
  aEle.textContent = basic[index]['answer'].slice(3,-1);
  showEle.style.display = 'block';
  hideEle.style.display = 'none';
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

  const jsonData = csvToJson2(csvData);

  shuffleArray(advanced);
  shuffleArray(basic);
  shuffleArray(all);

  setQuestion(0);

