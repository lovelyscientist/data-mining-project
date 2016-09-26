const Reader = require('./Reader.js');
const Generator = require('./Generator.js');
const Visualizer = require('./Visualizer.js');
const Writer = require('./Writer.js');

let reader = new Reader(process.argv[2]),
	generator,
	visualizer,
	writer,
	main;

reader.read().then((info) => {
	main(info);
});

main = (info) => {
	generator = new Generator(info);
	writer = new Writer(generator);
	visualizer = new Visualizer(generator);
} 