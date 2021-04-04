function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Name-list')
    .addItem('Split Name-list', 'splitNameList')
    .addToUi();
}



/**
 * Reformats Name column to Surname & Personal Name by splitting the *  Name column at the first comma, if present.
 */
function splitNameList(){

var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var nameRange = sheet.getRange('C10:C2019');
nameRange.activate();

var selection = sheet.getSelection();
// Current cell: C10
var currentCell = selection.getCurrentCell();
// Active Range: C10:C2019
var activeRange = selection.getActiveRange();


  // Get the active (currently highlighted) range.
  // var activeRange = SpreadsheetApp.getActiveRange();
  
  var nameRange = activeRange.offset(
   0, 0, activeRange.getHeight(), activeRange.getWidth() + 1);

  // Get range values of Name column cells (column, row,column, row)
  // This is a 2D array.
  var nameValues = nameRange.getValues();

  // Update values where commas are found. Assumes the presence
  // of a comma indicates a "surname, personal names" pattern.
  for (var row = 0; row < nameValues.length; row++){
    var indexOfFirstComma =
        nameValues[row][0].indexOf(", ");

    if(indexOfFirstComma >= 0){
      // Found a comma, so split and update the values in
      // the values array.
      var surnameAndname = nameValues[row][0];
      
      // Update the surname value in the array.
      nameValues[row][0] = surnameAndname.slice(indexOfFirstComma + 2);

      // Update the name value in the array.
      nameValues[row][1] = surnameAndname.slice(0, indexOfFirstComma);
    }
  }

  // Put the updated values back into the spreadsheet.
  nameRange.setValues(nameValues);
}