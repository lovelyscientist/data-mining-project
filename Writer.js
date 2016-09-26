const fs = require('fs');

class Writer {
  constructor (generatedInfo) {
    this.size = `${generatedInfo.width} ${generatedInfo.height}`;
    this.EPSILON = generatedInfo.EPSILON;
    this.samples = generatedInfo.samples;
    this.write();
  }

  write () {
  	const data= `${this.EPSILON} \n${this.size} \n${this.samples.map(el => el.code).join('\n')}`;

  	fs.writeFile('output.txt', data, (err) => {
	  if (err) throw err;
	  console.log('It\'s saved!');
	});
  }

}

module.exports = Writer;