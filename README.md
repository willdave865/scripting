Scripts written to perform operations on files in Google Drive, Google Sheets and file/dir operations between Google Drive and Google Cloud platforms.

Script storage for .gs scripts 
Scripts that work on files (converting jpeg to gdocs, deleting files etc) are stored Drive>Gscripts>GitHub CON Project file scripts
Scripts that work on sheets (creating sheet, outputting sheet notes etc) are *bound scripts* the spreadsheet the script is bound to is known as the script *container* 
  sheet scripts appear under the 'Custom' button when clicked on. For example searchNotes.gs appears in the Working.gsheet
  selecting Tools>Script Editor in this sheet gives access to all script files that have been bound to this sheet

When using Google Apps Script GitHub Assistant (Chrome Extention) note the following when either updating .gs scripts that are either in standalone location or bound:
  In Aps Script tab the GitHub Assistant occupies the next 5 sub-tabs after 'Execution Log'
  Tabs 3 & 4 are respecively: down arrow (pull) up arrow (push)
  Please be careful when reviewing diff that only the code set that has been changed is pushed - the Assistant can delete files from GitHub scripting repository 
