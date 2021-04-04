/**
 * A special function that runs when the spreadsheet is first
 * opened or reloaded. onOpen() is used to add custom menu
 * items to the spreadsheet.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Name-list')
    .addItem('Load Name-list', 'loadNameList')
    .addToUi();
}


/** 
 * Creates a template book list based off of the
 * provided 'codelab-book-list' sheet.
 */
function loadNameList(){
  // Gets the active sheet of bound spreadsheet (Untitled).
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // Gets names from origin spreadsheet on Drive via
  // spreadsheet's URL. 
  var namesSS = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/15rsfmVr4jzqHHTYrG0aTd--hMel-I4jyUY4GwtvuvN8/edit#gid=703124774');



  // Gets the sheet, data range, and values of the
  // spreadsheet stored in namesSS.
  var namesSheet = namesSS.getSheetByName("Names-List");
  var namesRange = namesSheet.getDataRange();
  var namesListValues = namesRange.getValues();

  // Add those values to the active sheet in the current
  // spreadsheet. This overwrites any values that already
  // exist there. 
  sheet.getRange(1, 1, namesRange.getHeight(), namesRange.getWidth()) 
    .setValues(namesListValues);
  
  // Rename the destination sheet and resize the data
  // columns for easier reading.
  sheet.setName("Name-list");
  sheet.autoResizeColumns(1, 3);
}



