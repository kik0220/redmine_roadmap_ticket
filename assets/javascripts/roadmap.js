(function($) {
  function find_contents() {
    var root = $('#roadmap');
    if (root) {
      var tickets = $('#roadmap .hascontextmenu');
      tickets.mouseenter(function(){mouse_enter(this);});
      tickets.mouseleave(function(){mouse_leave(this);});
      $(tickets).popover({'trigger': 'manual', 'placement': 'bottom', 'html': true, 'content': function(){return get_content(this);}});
    }
  }

  function mouse_enter(content){
    $(content).popover('show');
  }

  function mouse_leave(content){
    $(content).popover('hide');
  }

  function get_content(content){
    var link;
    try{
      link = content.getElementsByTagName('a')[0].href;
    } catch(e) {return;}
    $.get(link+'.json', function(data){
      var detail = '';
      detail += 'AssignedTo:'+data.issue.assigned_to.name+'<br/>';
      detail += 'Status:'+data.issue.status.name+'<br/>';
      detail += 'Progress:'+data.issue.done_ratio+'%<br/>';
      $('#roadmap_ticket_float').replaceWith(detail);
    });
    return '<span id="roadmap_ticket_float">Loading</span>';
  }
  
  function main() {
    if($('#roadmap') === null){return;}
    find_contents(); 
  }

  $(window).load(main);
})(jQuery);
