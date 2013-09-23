(function() {
  'use strict';
  function find_contents(){
    var root = document.getElementById('roadmap');
    if(root === null){return;}
    var tickets = root.getElementsByClassName('hascontextmenu');
    for(var i = 0; i < tickets.length; i++){
      var ticket = tickets[i];
      get_content(ticket);
    }
  }

  function get_content(ticket){
    var link;
    try{
      link = ticket.getElementsByTagName('a')[0].href;
    } catch(e) {return;}
    var xhr = new XMLHttpRequest(ticket);
//  xhr.open("GET", link+'.json?key=SET HERE API KEY', true);
    xhr.open("GET", link+'.json', true);
    xhr.onload = function(){
      if(xhr.status !== 200){return;}
      var data = JSON.parse(xhr.responseText);
      var detail = '';
      detail += '<td style="width: 6em;">'+(data.issue.assigned_to !== undefined ? data.issue.assigned_to.name : "")+'</td>';
      detail += '<td style="width: 4em;">'+data.issue.status.name+'</td>';
      detail += '<td style="width: 2em;">'+data.issue.done_ratio+'%</td>';
      ticket.innerHTML += detail;
    };
    setTimeout(xhr.send(), 3000);
  }

  function main() {
    if(document.getElementById('roadmap') === null){return;}
    find_contents();
  }

  document.addEventListener ? window.addEventListener('load', main) : window.attachEvent('onload', main);
})();
