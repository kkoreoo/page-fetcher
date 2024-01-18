const request = require('request');
const fs = require('fs');

let inputs = process.argv.splice(2,);
const url = inputs[0];
const localPath = inputs[1];

const retrieveAndDownloadData = (url, localPath) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log("Failed to downloaded", error);
      return;
    }
    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log(`Failed to write to localPath: ${localPath}`);
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    });
  });
};

if (!url || !localPath) {
  console.log("Two parameters are required!");
} else {
  retrieveAndDownloadData(url, localPath);
}