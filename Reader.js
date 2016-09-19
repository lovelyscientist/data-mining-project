const fs = require('fs');
const readline = require('readline');

class Reader {
  constructor (fileName) {
    this.fileName = fileName;
  }

  read () {
  	return new Promise((resolve, reject) => {
	  	let counter = 0,
	  		lineInfo;

		const rl = readline.createInterface({
		   input: fs.createReadStream(this.fileName)
		});

		rl.on('line', (line) =>  {
			counter++;
			lineInfo = line.split(' ')
			if (counter === 1) {
				this.generatedInfo = {width: Number(lineInfo[0]), height: Number(lineInfo[1]), codes: []};
			} else {
				this.generatedInfo.codes.push({code: lineInfo[0], symbol: lineInfo[1], numberOfSamples: Number(lineInfo[2])});
			}
		});

		rl.on('close', (line) =>  {
			resolve(this.generatedInfo);
		});
	});
  }
}

module.exports = Reader;