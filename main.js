const Reader = require('./Reader.js');
const Generator = require('./Generator.js');
const Visualizer = require('./Visualizer.js');

let reader = new Reader('sample.txt'),
	generator,
	visualizer,
	main;

reader.read().then((info) => {
	main(info);
});

main = (info) => {
	generator = new Generator(info);
	visualizer = new Visualizer(generator);
} 