// convertJpegToGdoc script converts copies of .jpg to .gdoc files from source dir temp. 
// Run script to OCR gdocs to dir target (both dir Google Drive root)
// Last file converted is removed from source dir temp

// Note: Script will likely timeout with server error cause of long
// run time. Final count of gdocs against original files required. 

let srcFolderId = "1LClRRHikWbMZYaVlyBjgQuAIru4-9foi"; //temp
let dstFolderId = "11Sejh6XG-2WzycpcC-MaEmDQJc78LCFg"; //target


function convertJpegToGdoc() {


var files = DriveApp.getFolderById(srcFolderId).getFilesByType(MimeType.JPEG); 


while (files.hasNext()) { var file = files.next(); 
Drive.Files.insert({title: file.getName(), parents: [{id: dstFolderId}]
}, 
file.getBlob(), {ocr: true}); 
file.getParents().next().removeFile(file);
   
  }
  
}
