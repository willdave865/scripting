// Script moves files between folders by extension type
// Note: Moving large number of files not easy in Google Drive
// unless you can move entire folder & rename

// folder Ids got from end of URL of opened folder
// let source = "1LClRRHikWbMZYaVlyBjgQuAIru4-9foi"; // temp 
// let target = "1sKMzgN_IOo-5KK-KWZEzq1XwvS8ZdZ6k"; // temp-temp

// Check your folders & MIME type required (GOOGLE_DOCS, PDF etc)

//folder Ids got from end of URL of opened folder
let source = "1LClRRHikWbMZYaVlyBjgQuAIru4-9foi"; // temp 
let target = "1sKMzgN_IOo-5KK-KWZEzq1XwvS8ZdZ6k"; // temp-temp


function moveFilesByType() {

  var files = DriveApp.getFolderById(source).getFilesByType(MimeType.PDF);
  var tfolder = DriveApp.getFolderById(target);

  
  while (files.hasNext()) {
    var file = files.next();
    tfolder.addFile(file);  
    file.getParents().next().removeFile(file);
  }
}