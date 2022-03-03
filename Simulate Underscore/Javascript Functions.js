// homework
// element index list
// el = valor del elemento en objeto
// i = el nombre del atributo
// list = objeto
const rauqoz_underscore_ = () => {
	function each_rauqoz_(arr, callback_) {
		let c_callback = callback_.length;
		let check = Array.isArray(arr);
		let arr_keys = [];
		let arr_values = [];

		if (!check) {
			arr_keys = Object.keys(arr);
			arr_values = Object.values(arr);
		} else {
			arr_values = arr;
		}

		for (let index = 0; index < arr_values.length; index++) {
			switch (c_callback) {
				case 1:
					callback_(arr_values[index]);
					break;
				case 2:
					if (!check) {
						callback_(arr_values[index], arr_keys[index]);
					} else {
						callback_(arr_values[index], index);
					}
					break;
				case 3:
					if (!check) {
						callback_(arr_values[index], arr_keys[index], arr);
					} else {
						callback_(arr_values[index], index, arr);
					}
					break;

				default:
					throw 'fail';
			}
		}
	}

	function map_rauqoz_(arr, callback_) {
		let c_callback = callback_.length;
		let check = Array.isArray(arr);
		let arr_keys = [];
		let arr_values = [];
		let arr_new = [];

		if (!check) {
			arr_keys = Object.keys(arr);
			arr_values = Object.values(arr);
		} else {
			arr_values = arr;
		}

		for (let index = 0; index < arr_values.length; index++) {
			switch (c_callback) {
				case 1:
					arr_new.push(callback_(arr_values[index]));
					break;
				case 2:
					if (!check) {
						arr_new.push(callback_(arr_values[index], arr_keys[index]));
					} else {
						arr_new.push(callback_(arr_values[index], index));
					}
					break;
				case 3:
					if (!check) {
						arr_new.push(callback_(arr_values[index], arr_keys[index], arr));
					} else {
						arr_new.push(callback_(arr_values[index], index, arr));
					}
					break;

				default:
					throw 'fail';
			}
		}

		return arr_new;
	}

	function map_each_rauqoz_(arr, callback_) {
		let arr_new = [];
		each_rauqoz_(arr, (a, b, c) => {
			arr_new.push(callback_(a, b, c));
		});
		return arr_new;
	}

	function filter_rauqoz_(arr, callback_) {
		let c_callback = callback_.length;
		let check = Array.isArray(arr);
		let arr_keys = [];
		let arr_values = [];
		let arr_new = [];

		if (!check) {
			arr_keys = Object.keys(arr);
			arr_values = Object.values(arr);
		} else {
			arr_values = arr;
		}

		for (let index = 0; index < arr_values.length; index++) {
			switch (c_callback) {
				case 1:
					if (callback_(arr_values[index])) {
						arr_new.push(arr_values[index]);
					}
					break;
				case 2:
					if (!check) {
						if (callback_(arr_values[index], arr_keys[index])) {
							arr_new.push(arr_values[index]);
						}
					} else {
						if (callback_(arr_values[index], index)) {
							arr_new.push(arr_values[index]);
						}
					}
					break;
				case 3:
					if (!check) {
						if (callback_(arr_values[index], arr_keys[index], arr)) {
							arr_new.push(arr_values[index]);
						}
					} else {
						if (callback_(arr_values[index], index, arr)) {
							arr_new.push(arr_values[index]);
						}
					}
					break;

				default:
					throw 'fail';
			}
		}

		return arr_new;
	}

	function filter_each_rauqoz_(arr, callback_) {
		let arr_new = [];
		each_rauqoz_(arr, (a, b, c) => {
			if (callback_(a, b, c)) {
				arr_new.push(a);
			}
		});
		return arr_new;
	}

	function from_rauqoz_(arr, callback_) {
		let c_callback = callback_ ? callback_.length : 0;
		let check = Array.isArray(arr);
		let arr_values = [];
		let arr_val = 0;
		let arr_new = [];

		if (!check && typeof arr == 'string') {
			arr_values = arr.split('');
		} else {
			arr_values = arr;
		}

		if (c_callback != 0) {
			for (let index = 0; index < arr_values.length; index++) {
				switch (c_callback) {
					case 1:
						arr_new.push(callback_(arr_values[index]));
						break;
					case 2:
						arr_new.push(callback_(arr_val, arr_values[index]));
						arr_val = arr_values[index];
						break;

					default:
						throw 'fail';
				}
			}
		}

		return callback_ ? arr_new : arr_values;
	}

	function reduce_rauqoz_(arr, callback_, start) {
		let c_callback = callback_.length;
		let check = Array.isArray(arr);
		let arr_values = [];
		let arr_new = start;

		if (!check) {
			arr_values = Object.values(arr);
		} else {
			arr_values = arr;
		}

		for (let index = 0; index < arr_values.length; index++) {
			switch (c_callback) {
				case 2:
					arr_new = callback_(arr_new, arr_values[index]);
					break;

				default:
					throw 'fail';
			}
		}

		return arr_new;
	}

	return {
		each_rauqoz_,
		map_rauqoz_,
		map_each_rauqoz_,
		filter_rauqoz_,
		filter_each_rauqoz_,
		from_rauqoz_,
		reduce_rauqoz_
	};
};

const homework = rauqoz_underscore_();

// beta arrays
let arr_pure = [ 1, 2, 3, 4 ];
let arr_obj = { one: 1, two: 2, three: 3 };

// beta functions
function test_(el, i, a) {
	console.log(el, i, a);
}

function test_2_(el, i, a) {
	return { el, i, a };
}

function test_3_(el, i, a) {
	return el <= 3;
}

function test_4_(a, b) {
	return a + b;
}

function test_4_(a, b) {
	return a + b;
}

function test_5_(a) {
	return a + 10;
}
// outputs

// each
// homework.each_rauqoz_(arr_pure, test_);
// homework.each_rauqoz_(arr_obj, test_);

// map
// console.log(homework.map_rauqoz_(arr_pure, test_2_));
// console.log(homework.map_rauqoz_(arr_obj, test_2_));

// map making use of each
// console.log(homework.map_each_rauqoz_(arr_pure, test_2_));
// console.log(homework.map_each_rauqoz_(arr_obj, test_2_));

// filter
// console.log(homework.filter_rauqoz_(arr_pure, test_3_));
// console.log(homework.filter_rauqoz_(arr_obj, test_3_));

// filter making use of each
// console.log(homework.filter_each_rauqoz_(arr_pure, test_3_));
// console.log(homework.filter_each_rauqoz_(arr_obj, test_3_));

// from
// console.log(homework.from_rauqoz_(arr_pure));

// reduce
// console.log(homework.reduce_rauqoz_(arr_pure, test_4_, 10));
// console.log(homework.reduce_rauqoz_(arr_obj, test_4_, 10));
