// Function from tablesorter.com; sort-table1 and sort-table2
// on dashboard page

$(function() {
  $('#sort-table').tablesorter({
    sortList:[[0,0], [1,0]]
  });
});

$(function() {
  $('#sort-table1').tablesorter({
	  sortList:[[0,0], [1,0]]
  });
});


$(function() {
  $('#sort-table2').tablesorter({
	  sortList:[[0,0], [1,0]]
  });
});

// Function for search form to filter results
      
var $rows = $('table tr');
$('.search-form').keyup(function() {
  var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
  $rows.show().filter(function() {
    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
    return !~text.indexOf(val);
  }).hide();
});
