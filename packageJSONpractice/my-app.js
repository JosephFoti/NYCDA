const fs = require('fs');


fs.readdir('/Users/Joe/Desktop/NYCDA', function(err, files){
   //`files` will now contain string file names in the current directory
   //note that the same existence and permissions rules from read and write apply,
   //meaning the directory must exist and you must have read permissions on it
   console.log(files);
   for (file in files) {
     files[file])
   }
});

// fs.unlink('./aShortlivedfile.js',function(err){
//   if (err) {
//     console.log('Error')
//   } else {
//     console.log('File deleted');
//   }
// })
