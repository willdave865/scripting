

// Code below opens spreadsheet using id and logs the name for it.
// Note that spreadsheet is NOT physically opened on the client side.
// It is opened on the server only (for modification by the script).

function ssName() {
var ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/15rsfmVr4jzqHHTYrG0aTd--hMel-I4jyUY4GwtvuvN8/edit#gid=703124774');
Logger.log(ss.getName());
}