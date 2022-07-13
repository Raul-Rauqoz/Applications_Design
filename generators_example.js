// Example of generators
function* prueba_gen_() {
	let start = 0;
	while (true) {
		let gg = yield start;
		start = gg;

		switch (start) {
			case 'hola':
				console.log('que onda como vas');
				break;
			case 'yes':
				console.log('yes en ingles');
				break;
			case 'nel':
				console.log('nelson mandela');
				break;

			default:
				console.log('eh?', start);
				break;
		}
	}
}

let prueba = prueba_gen_();
// prueba.next();
// console.log(prueba.next('hola'));
// console.log(prueba.next('yes'));
// console.log(prueba.next('yes'));
// console.log(prueba.next('nel'));
//   
