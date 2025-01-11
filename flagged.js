var basic = []
var advanced = []
var all = []
var myarr = []
var counter = 0;
var totalCount = 0;


function csvToJson2(csv) {
    const lines = csv.trim().split('\"\"\n');
    index = 0;
    lines.forEach(arr => {
      const values = arr.split('@');
      var type = values[0]
      var topic = values[1]
      var question = values[2]
      var answer = values[3]
      var obj = {}
      obj['id'] = index
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
      index++;
    });
  }

function getCookie() {
    var array = localStorage.getItem("flaggedQuestions");
    if(array == null)
      return [];
    return JSON.parse(array);
  }
  
  function logCookies(){
    var array = localStorage.getItem("flaggedQuestions");
    console.log('Current Array:', array);
  }

  function navigateToIndex() {
    // Replace 'target.html' with your desired HTML file
    window.location.href = 'index.html';
  }
  
  function setFlagQuestions(){
    const flaggedQuestions = getCookie();
    const filteredList = all.filter(item => flaggedQuestions.includes(item.id));
    console.log(filteredList);
    html = ""
    filteredList.forEach(value => {
        text = `    <div class="accordion-item">
              <h2 class="accordion-header" id="flush-${value['id']}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${value['id']}" aria-expanded="false" aria-controls="flush-collapse${value['id']}">
                  ${value['question'].slice(3,-3)}
                </button>
              </h2>
              <div id="flush-collapse${value['id']}" class="accordion-collapse collapse" aria-labelledby="flush-heading${value['id']}" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">${value['answer'].slice(3,-1)}</div>
              </div>
            </div>`;
        html+=text
    });
    const element = document.getElementById("accordionFlush");
    element.innerHTML = html;
  }

  const jsonData = csvToJson2(csvData);
  setFlagQuestions();