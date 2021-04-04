// searchNotes required because Edit>Find doesn't search Notes
// Place cursor in A1 of sheet for output of this script
// Use Chrome Find to search output in A1 


function searchNotes() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cell = sheet.getActiveCell();
  var searchTerm = cell.getValue().toString().toLowerCase();
  var dataRange = sheet.getDataRange();
  var notes = dataRange.getNotes();
  var results = [];
  for (var i = 0; i < notes.length; i++) {
    for (var j = 0; j < notes[0].length; j++) {
      var note = notes[i][j].toLowerCase();
      if (note && note.indexOf(searchTerm) !== -1) {
        results.push(dataRange.offset(i, j, 1, 1).getA1Notation() + ': ' + notes[i][j] + '\n');
      }
    }
  }
  cell.setValue(results.join('') || 'Not found');
}

function onOpen() {
  SpreadsheetApp.getActiveSpreadsheet().addMenu("Custom", [{name: "Search notes",  functionName: "searchNotes"}]);
}
