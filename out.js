const log = console.log;

class Node {
	constructor(c, l, v, r) {
		this.c = c;
		this.l = l;
		this.v = v;
		this.r = r;
	}
}

const node = (c, l, v, r) => new Node(c, l, v, r);

function insert(v, n) {
	function helper(n) {
		return (() => {
			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && true && (x => x > v)(Object.values(n)[2]) && true) {
				let c = Object.values(n)[0];
				let l = Object.values(n)[1];
				let x = Object.values(n)[2];
				let r = Object.values(n)[3];
				return bal(node(c, helper(l), x, r));
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && true && (x => x < v)(Object.values(n)[2]) && true) {
				let c = Object.values(n)[0];
				let l = Object.values(n)[1];
				let x = Object.values(n)[2];
				let r = Object.values(n)[3];
				return bal(node(c, l, x, helper(r)));
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && true && (x => x === v)(Object.values(n)[2]) && true) {
				let x = Object.values(n)[2];
				return n;
			}

			if (n === null) {
				return node(0, null, v, null);
			}
		})();
	}
	const root = helper(n);
	return node(1, root.l, root.v, root.r);
}

function bal(n) {
	return (() => {
		if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && Object.values(n)[0] === 2 && Object.values(n)[1] && Object.values(n)[1].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[1]).length && Object.values(Object.values(n)[1])[0] === -1 && Object.values(Object.values(n)[1])[1] && Object.values(Object.values(n)[1])[1].constructor.name === 'Node' && 4 === Object.values(Object.values(Object.values(n)[1])[1]).length && true && true && true && true && true && Object.values(Object.values(n)[1])[3] && Object.values(Object.values(n)[1])[3].constructor.name === 'Node' && 4 === Object.values(Object.values(Object.values(n)[1])[3]).length && true && true && true && true && true && true) {
			let a = Object.values(Object.values(Object.values(n)[1])[1])[1];
			let w = Object.values(Object.values(Object.values(n)[1])[1])[2];
			let b = Object.values(Object.values(Object.values(n)[1])[1])[3];
			let x = Object.values(Object.values(n)[1])[2];
			let c = Object.values(Object.values(Object.values(n)[1])[3])[1];
			let y = Object.values(Object.values(Object.values(n)[1])[3])[2];
			let d = Object.values(Object.values(Object.values(n)[1])[3])[3];
			let z = Object.values(n)[2];
			let e = Object.values(n)[3];
			return node(1, node(1, Node(0, a, w, b), x, c), y, node(1, d, z, e));
		}

		if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && Object.values(n)[0] === 2 && true && true && Object.values(n)[3] && Object.values(n)[3].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[3]).length && Object.values(Object.values(n)[3])[0] === -1 && Object.values(Object.values(n)[3])[1] && Object.values(Object.values(n)[3])[1].constructor.name === 'Node' && 4 === Object.values(Object.values(Object.values(n)[3])[1]).length && true && true && true && true && true && Object.values(Object.values(n)[3])[3] && Object.values(Object.values(n)[3])[3].constructor.name === 'Node' && 4 === Object.values(Object.values(Object.values(n)[3])[3]).length && true && true && true && true) {
			let a = Object.values(n)[1];
			let w = Object.values(n)[2];
			let b = Object.values(Object.values(Object.values(n)[3])[1])[1];
			let x = Object.values(Object.values(Object.values(n)[3])[1])[2];
			let c = Object.values(Object.values(Object.values(n)[3])[1])[3];
			let y = Object.values(Object.values(n)[3])[2];
			let d = Object.values(Object.values(Object.values(n)[3])[3])[1];
			let z = Object.values(Object.values(Object.values(n)[3])[3])[2];
			let e = Object.values(Object.values(Object.values(n)[3])[3])[3];
			return node(1, node(1, node(0, a, w, b), x, c), y, node(1, d, z, e));
		}

		if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && (col => [1, 2].includes(col))(Object.values(n)[0]) && Object.values(n)[1] && Object.values(n)[1].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[1]).length && Object.values(Object.values(n)[1])[0] === 0 && Object.values(Object.values(n)[1])[1] && Object.values(Object.values(n)[1])[1].constructor.name === 'Node' && 4 === Object.values(Object.values(Object.values(n)[1])[1]).length && Object.values(Object.values(Object.values(n)[1])[1])[0] === 0 && true && true && true && true && true && true && true) {
			let col = Object.values(n)[0];
			let a = Object.values(Object.values(Object.values(n)[1])[1])[1];
			let x = Object.values(Object.values(Object.values(n)[1])[1])[2];
			let b = Object.values(Object.values(Object.values(n)[1])[1])[3];
			let y = Object.values(Object.values(n)[1])[2];
			let c = Object.values(Object.values(n)[1])[3];
			let z = Object.values(n)[2];
			let d = Object.values(n)[3];
			return node(col - 1, node(1, a, x, b), y, node(1, c, z, d));
		}

		if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && (col => [1, 2].includes(col))(Object.values(n)[0]) && true && true && Object.values(n)[3] && Object.values(n)[3].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[3]).length && Object.values(Object.values(n)[3])[0] === 0 && true && true && Object.values(Object.values(n)[3])[3] && Object.values(Object.values(n)[3])[3].constructor.name === 'Node' && 4 === Object.values(Object.values(Object.values(n)[3])[3]).length && Object.values(Object.values(Object.values(n)[3])[3])[0] === 0 && true && true && true) {
			let col = Object.values(n)[0];
			let a = Object.values(n)[1];
			let x = Object.values(n)[2];
			let b = Object.values(Object.values(n)[3])[1];
			let y = Object.values(Object.values(n)[3])[2];
			let c = Object.values(Object.values(Object.values(n)[3])[3])[1];
			let z = Object.values(Object.values(Object.values(n)[3])[3])[2];
			let d = Object.values(Object.values(Object.values(n)[3])[3])[3];
			return node(col - 1, node(1, a, x, b), y, node(1, c, z, d));
		}

		if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && (col => [1, 2].includes(col))(Object.values(n)[0]) && true && true && Object.values(n)[3] && Object.values(n)[3].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[3]).length && Object.values(Object.values(n)[3])[0] === 0 && Object.values(Object.values(n)[3])[1] && Object.values(Object.values(n)[3])[1].constructor.name === 'Node' && 4 === Object.values(Object.values(Object.values(n)[3])[1]).length && Object.values(Object.values(Object.values(n)[3])[1])[0] === 0 && true && true && true && true && true) {
			let col = Object.values(n)[0];
			let a = Object.values(n)[1];
			let x = Object.values(n)[2];
			let b = Object.values(Object.values(Object.values(n)[3])[1])[1];
			let y = Object.values(Object.values(Object.values(n)[3])[1])[2];
			let c = Object.values(Object.values(Object.values(n)[3])[1])[3];
			let z = Object.values(Object.values(n)[3])[2];
			let d = Object.values(Object.values(n)[3])[3];
			return node(col - 1, node(1, a, x, b), y, node(1, c, z, d));
		}

		if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && (col => [1, 2].includes(col))(Object.values(n)[0]) && Object.values(n)[1] && Object.values(n)[1].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[1]).length && Object.values(Object.values(n)[1])[0] === 0 && true && true && Object.values(Object.values(n)[1])[3] && Object.values(Object.values(n)[1])[3].constructor.name === 'Node' && 4 === Object.values(Object.values(Object.values(n)[1])[3]).length && Object.values(Object.values(Object.values(n)[1])[3])[0] === 0 && true && true && true && true && true) {
			let col = Object.values(n)[0];
			let a = Object.values(Object.values(n)[1])[1];
			let x = Object.values(Object.values(n)[1])[2];
			let b = Object.values(Object.values(Object.values(n)[1])[3])[1];
			let y = Object.values(Object.values(Object.values(n)[1])[3])[2];
			let c = Object.values(Object.values(Object.values(n)[1])[3])[3];
			let z = Object.values(n)[2];
			let d = Object.values(n)[3];
			return node(col - 1, node(1, a, x, b), y, node(1, c, z, d));
		}

		if (true) {
			return n;
		}
	})();
}

function del(v, n) {
	function helper(v, n) {
		return (() => {
			if (n === null) {
				return null;
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && Object.values(n)[0] === 0 && Object.values(n)[1] === null && (x => x === v)(Object.values(n)[2]) && Object.values(n)[3] === null) {
				let x = Object.values(n)[2];
				return null;
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && Object.values(n)[1] && Object.values(n)[1].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[1]).length && true && true && true && true && (x => x === v)(Object.values(n)[2]) && Object.values(n)[3] === null) {
				let c = Object.values(n)[0];
				let bl = Object.values(Object.values(n)[1])[1];
				let bv = Object.values(Object.values(n)[1])[2];
				let br = Object.values(Object.values(n)[1])[3];
				let x = Object.values(n)[2];
				return node(c, bl, bv, br);
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && Object.values(n)[1] === null && (x => x === v)(Object.values(n)[2]) && Object.values(n)[3] && Object.values(n)[3].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[3]).length && true && true && true && true) {
				let c = Object.values(n)[0];
				let x = Object.values(n)[2];
				let bl = Object.values(Object.values(n)[3])[1];
				let bv = Object.values(Object.values(n)[3])[2];
				let br = Object.values(Object.values(n)[3])[3];
				return node(c, bl, bv, br);
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && Object.values(n)[1] && Object.values(n)[1].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[1]).length && true && true && true && true && (x => x === v)(Object.values(n)[2]) && Object.values(n)[3] && Object.values(n)[3].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[3]).length && true && true && true && true) {
				let c = Object.values(n)[0];
				let x = Object.values(n)[2];
				return bubble(node(c, n.l, min(n.r), helper(min(n.r), n.r)));
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && Object.values(n)[1] && Object.values(n)[1].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[1]).length && Object.values(Object.values(n)[1])[0] === 1 && Object.values(Object.values(n)[1])[1] === null && (x => x === v)(Object.values(Object.values(n)[1])[2]) && Object.values(Object.values(n)[1])[3] === null && true && Object.values(n)[3] && Object.values(n)[3].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[3]).length && true && true && true && true) {
				let c = Object.values(n)[0];
				let x = Object.values(Object.values(n)[1])[2];
				let v = Object.values(n)[2];
				let rl = Object.values(Object.values(n)[3])[1];
				let rv = Object.values(Object.values(n)[3])[2];
				let rr = Object.values(Object.values(n)[3])[3];
				return bubble(node(c + 1, null, v, Node(0, rl, rv, rr)));
			}

			if (n && n.constructor.name === 'Node' && 5 === Object.values(n).length && true && Object.values(n)[1] && Object.values(n)[1].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[1]).length && true && true && true && true && true && Object.values(n)[3] && Object.values(n)[3].constructor.name === 'Node' && 3 === Object.values(Object.values(n)[3]).length && Object.values(Object.values(n)[3])[0] === 1 && Object.values(Object.values(n)[3])[1] === null && (x => x === v)(Object.values(Object.values(n)[3])[2]) && Object.values(n)[4] === null) {
				let c = Object.values(n)[0];
				let ll = Object.values(Object.values(n)[1])[1];
				let lv = Object.values(Object.values(n)[1])[2];
				let lr = Object.values(Object.values(n)[1])[3];
				let v = Object.values(n)[2];
				let x = Object.values(Object.values(n)[3])[2];
				return bubble(node(c + 1, Node(0, ll, lv, lr), v, null));
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && true && (x => x < v)(Object.values(n)[2]) && true) {
				let c = Object.values(n)[0];
				let l = Object.values(n)[1];
				let x = Object.values(n)[2];
				let r = Object.values(n)[3];
				return bubble(node(c, l, x, helper(v, r)));
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && true && (x => x > v)(Object.values(n)[2]) && true) {
				let c = Object.values(n)[0];
				let l = Object.values(n)[1];
				let x = Object.values(n)[2];
				let r = Object.values(n)[3];
				return bubble(node(c, helper(v, l), x, r));
			}

			if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && true && Object.values(n)[1] === null && (x => x === v)(Object.values(n)[2]) && Object.values(n)[3] === null) {
				let x = Object.values(n)[2];
				return null;
			}
		})();
	}
	const root = helper(v, n);
	return root ? node(1, root.l, root.v, root.r) : null;
}

function bubble(n) {
	return (() => {
		if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && (col => [1, 0].includes(col))(Object.values(n)[0]) && Object.values(n)[1] && Object.values(n)[1].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[1]).length && Object.values(Object.values(n)[1])[0] === 2 && true && true && true && true && Object.values(n)[3] && Object.values(n)[3].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[3]).length && true && true && true && true) {
			let col = Object.values(n)[0];
			let ll = Object.values(Object.values(n)[1])[1];
			let lv = Object.values(Object.values(n)[1])[2];
			let lr = Object.values(Object.values(n)[1])[3];
			let v = Object.values(n)[2];
			let rc = Object.values(Object.values(n)[3])[0];
			let rl = Object.values(Object.values(n)[3])[1];
			let rv = Object.values(Object.values(n)[3])[2];
			let rr = Object.values(Object.values(n)[3])[3];
			return bal(node(col + 1, Node(1, ll, lv, lr), v, Node(rc - 1, rl, rv, rr)));
		}

		if (n && n.constructor.name === 'Node' && 4 === Object.values(n).length && (col => [1, 0].includes(col))(Object.values(n)[0]) && Object.values(n)[1] && Object.values(n)[1].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[1]).length && true && true && true && true && true && Object.values(n)[3] && Object.values(n)[3].constructor.name === 'Node' && 4 === Object.values(Object.values(n)[3]).length && Object.values(Object.values(n)[3])[0] === 2 && true && true && true) {
			let col = Object.values(n)[0];
			let lc = Object.values(Object.values(n)[1])[0];
			let ll = Object.values(Object.values(n)[1])[1];
			let lv = Object.values(Object.values(n)[1])[2];
			let lr = Object.values(Object.values(n)[1])[3];
			let v = Object.values(n)[2];
			let rl = Object.values(Object.values(n)[3])[1];
			let rv = Object.values(Object.values(n)[3])[2];
			let rr = Object.values(Object.values(n)[3])[3];
			return bal(node(col + 1, Node(lc - 1, ll, lv, lr), v, Node(1, rl, rv, rr)));
		}

		if (true) {
			return n;
		}
	})();
}

function min(n) {
	if (!n.l) {
		return n.v;
	} else {
		return min(n.l);
	}
}

function printNode(n) {
	if (!n) return '';
	const color = c => {
		let col = null;
		switch (c) {
			case 1:
				col = 'black';
				break;
			case 0:
				col = 'red';
				break;
			case 2:
				col = 'double black';
				break;
			case -1:
				col = 'negative black';
				break;
		}
		return col;
	};
	return [n.v + ' ' + color(n.c), printNode(n.l), printNode(n.r)];
}

const t = [5, 2, 9, 8, 6, 11].reduce((acc, curr) => insert(curr, acc), null);
const t1 = del(8, t);
log(JSON.stringify(t1, null, 4));