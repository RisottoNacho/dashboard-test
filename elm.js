(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.bj.al === region.bC.al)
	{
		return 'on line ' + region.bj.al;
	}
	return 'on lines ' + region.bj.al + ' through ' + region.bC.al;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.r,
		impl.A,
		impl.v,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		E: func(record.E),
		bk: record.bk,
		ba: record.ba
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.E;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bk;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.ba) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.r,
		impl.A,
		impl.v,
		function(sendToApp, initialModel) {
			var view = impl.q;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.r,
		impl.A,
		impl.v,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.bc && impl.bc(sendToApp)
			var view = impl.q;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.aS);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.ci) && (_VirtualDom_doc.title = title = doc.ci);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.c2;
	var onUrlRequest = impl.c3;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		bc: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.b0 === next.b0
							&& curr.bI === next.bI
							&& curr.bX.a === next.bX.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		r: function(flags)
		{
			return A3(impl.r, flags, _Browser_getUrl(), key);
		},
		q: impl.q,
		A: impl.A,
		v: impl.v
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { cT: 'hidden', cB: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { cT: 'mozHidden', cB: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { cT: 'msHidden', cB: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { cT: 'webkitHidden', cB: 'webkitvisibilitychange' }
		: { cT: 'hidden', cB: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		b7: _Browser_getScene(),
		cn: {
			cp: _Browser_window.pageXOffset,
			cq: _Browser_window.pageYOffset,
			co: _Browser_doc.documentElement.clientWidth,
			bG: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		co: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		bG: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			b7: {
				co: node.scrollWidth,
				bG: node.scrollHeight
			},
			cn: {
				cp: node.scrollLeft,
				cq: node.scrollTop,
				co: node.clientWidth,
				bG: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			b7: _Browser_getScene(),
			cn: {
				cp: x,
				cq: y,
				co: _Browser_doc.documentElement.clientWidth,
				bG: _Browser_doc.documentElement.clientHeight
			},
			cM: {
				cp: x + rect.left,
				cq: y + rect.top,
				co: rect.width,
				bG: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.aU.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.aU.b, xhr)); });
		$elm$core$Maybe$isJust(request.bo) && _Http_track(router, xhr, request.bo.a);

		try {
			xhr.open(request.a5, request.bp, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.bp));
		}

		_Http_configureRequest(xhr, request);

		request.aS.a && xhr.setRequestHeader('Content-Type', request.aS.a);
		xhr.send(request.aS.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.aX; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.bn.a || 0;
	xhr.responseType = request.aU.d;
	xhr.withCredentials = request.cu;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		bp: xhr.responseURL,
		dj: xhr.status,
		dk: xhr.statusText,
		aX: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			di: event.loaded,
			cc: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			c9: event.loaded,
			cc: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}



// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $author$project$Main$ChangedUrl = function (a) {
	return {$: 0, a: a};
};
var $author$project$Main$ClickedLink = function (a) {
	return {$: 1, a: a};
};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.d) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.f),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.f);
		} else {
			var treeLen = builder.d * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.g) : builder.g;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.d);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.f) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.f);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{g: nodeList, d: (len / $elm$core$Array$branchFactor) | 0, f: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {aW: fragment, bI: host, aH: path, bX: port_, b0: protocol, c7: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$application = _Browser_application;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$GetConfig = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $author$project$Main$Model = F4(
	function (url, key, shared, page) {
		return {x: key, c5: page, l: shared, bp: url};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $elm$core$Tuple$mapBoth = F3(
	function (funcA, funcB, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			funcA(x),
			funcB(y));
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $ryannhg$elm_spa$ElmSpa$Request$query = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Dict$empty;
	} else {
		var decode = function (val) {
			return A2(
				$elm$core$Maybe$withDefault,
				val,
				$elm$url$Url$percentDecode(val));
		};
		return $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				A2($elm$core$Tuple$mapBoth, decode, decode),
				A2(
					$elm$core$List$filterMap,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$String$split('='),
						function (eq) {
							return A3(
								$elm$core$Maybe$map2,
								$elm$core$Tuple$pair,
								$elm$core$List$head(eq),
								$elm$core$Maybe$Just(
									A2(
										$elm$core$Maybe$withDefault,
										'',
										$elm$core$List$head(
											A2($elm$core$List$drop, 1, eq)))));
						}),
					A2($elm$core$String$split, '&', str))));
	}
};
var $ryannhg$elm_spa$ElmSpa$Request$create = F4(
	function (route, params, url, key) {
		return {
			x: key,
			ao: params,
			c7: A2(
				$elm$core$Maybe$withDefault,
				$elm$core$Dict$empty,
				A2($elm$core$Maybe$map, $ryannhg$elm_spa$ElmSpa$Request$query, url.c7)),
			de: route,
			bp: url
		};
	});
var $author$project$Gen$Route$NotFound = {$: 8};
var $elm$url$Url$Parser$Parser = $elm$core$Basics$identity;
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$url$Url$Parser$oneOf = function (parsers) {
	return function (state) {
		return A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var parser = _v0;
				return parser(state);
			},
			parsers);
	};
};
var $elm$url$Url$Parser$State = F5(
	function (visited, unvisited, params, frag, value) {
		return {J: frag, ao: params, G: unvisited, aP: value, Q: visited};
	});
var $elm$url$Url$Parser$getFirstMatch = function (states) {
	getFirstMatch:
	while (true) {
		if (!states.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var state = states.a;
			var rest = states.b;
			var _v1 = state.G;
			if (!_v1.b) {
				return $elm$core$Maybe$Just(state.aP);
			} else {
				if ((_v1.a === '') && (!_v1.b.b)) {
					return $elm$core$Maybe$Just(state.aP);
				} else {
					var $temp$states = rest;
					states = $temp$states;
					continue getFirstMatch;
				}
			}
		}
	}
};
var $elm$url$Url$Parser$removeFinalEmpty = function (segments) {
	if (!segments.b) {
		return _List_Nil;
	} else {
		if ((segments.a === '') && (!segments.b.b)) {
			return _List_Nil;
		} else {
			var segment = segments.a;
			var rest = segments.b;
			return A2(
				$elm$core$List$cons,
				segment,
				$elm$url$Url$Parser$removeFinalEmpty(rest));
		}
	}
};
var $elm$url$Url$Parser$preparePath = function (path) {
	var _v0 = A2($elm$core$String$split, '/', path);
	if (_v0.b && (_v0.a === '')) {
		var segments = _v0.b;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	} else {
		var segments = _v0;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	}
};
var $elm$url$Url$Parser$addToParametersHelp = F2(
	function (value, maybeList) {
		if (maybeList.$ === 1) {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[value]));
		} else {
			var list = maybeList.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$List$cons, value, list));
		}
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$url$Url$Parser$addParam = F2(
	function (segment, dict) {
		var _v0 = A2($elm$core$String$split, '=', segment);
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var rawKey = _v0.a;
			var _v1 = _v0.b;
			var rawValue = _v1.a;
			var _v2 = $elm$url$Url$percentDecode(rawKey);
			if (_v2.$ === 1) {
				return dict;
			} else {
				var key = _v2.a;
				var _v3 = $elm$url$Url$percentDecode(rawValue);
				if (_v3.$ === 1) {
					return dict;
				} else {
					var value = _v3.a;
					return A3(
						$elm$core$Dict$update,
						key,
						$elm$url$Url$Parser$addToParametersHelp(value),
						dict);
				}
			}
		} else {
			return dict;
		}
	});
var $elm$url$Url$Parser$prepareQuery = function (maybeQuery) {
	if (maybeQuery.$ === 1) {
		return $elm$core$Dict$empty;
	} else {
		var qry = maybeQuery.a;
		return A3(
			$elm$core$List$foldr,
			$elm$url$Url$Parser$addParam,
			$elm$core$Dict$empty,
			A2($elm$core$String$split, '&', qry));
	}
};
var $elm$url$Url$Parser$parse = F2(
	function (_v0, url) {
		var parser = _v0;
		return $elm$url$Url$Parser$getFirstMatch(
			parser(
				A5(
					$elm$url$Url$Parser$State,
					_List_Nil,
					$elm$url$Url$Parser$preparePath(url.aH),
					$elm$url$Url$Parser$prepareQuery(url.c7),
					url.aW,
					$elm$core$Basics$identity)));
	});
var $author$project$Gen$Route$Custom = {$: 0};
var $author$project$Gen$Route$Dashboard = {$: 1};
var $author$project$Gen$Route$Detail__Schema___Instance_ = function (a) {
	return {$: 4, a: a};
};
var $author$project$Gen$Route$Edit__Schema___Instance_ = function (a) {
	return {$: 5, a: a};
};
var $author$project$Gen$Route$Home_ = {$: 2};
var $author$project$Gen$Route$List__Schema_ = function (a) {
	return {$: 6, a: a};
};
var $author$project$Gen$Route$New__Schema_ = function (a) {
	return {$: 7, a: a};
};
var $author$project$Gen$Route$Themes = {$: 3};
var $elm$url$Url$Parser$mapState = F2(
	function (func, _v0) {
		var visited = _v0.Q;
		var unvisited = _v0.G;
		var params = _v0.ao;
		var frag = _v0.J;
		var value = _v0.aP;
		return A5(
			$elm$url$Url$Parser$State,
			visited,
			unvisited,
			params,
			frag,
			func(value));
	});
var $elm$url$Url$Parser$map = F2(
	function (subValue, _v0) {
		var parseArg = _v0;
		return function (_v1) {
			var visited = _v1.Q;
			var unvisited = _v1.G;
			var params = _v1.ao;
			var frag = _v1.J;
			var value = _v1.aP;
			return A2(
				$elm$core$List$map,
				$elm$url$Url$Parser$mapState(value),
				parseArg(
					A5($elm$url$Url$Parser$State, visited, unvisited, params, frag, subValue)));
		};
	});
var $elm$url$Url$Parser$s = function (str) {
	return function (_v0) {
		var visited = _v0.Q;
		var unvisited = _v0.G;
		var params = _v0.ao;
		var frag = _v0.J;
		var value = _v0.aP;
		if (!unvisited.b) {
			return _List_Nil;
		} else {
			var next = unvisited.a;
			var rest = unvisited.b;
			return _Utils_eq(next, str) ? _List_fromArray(
				[
					A5(
					$elm$url$Url$Parser$State,
					A2($elm$core$List$cons, next, visited),
					rest,
					params,
					frag,
					value)
				]) : _List_Nil;
		}
	};
};
var $author$project$Gen$Params$Custom$parser = $elm$url$Url$Parser$s('custom');
var $author$project$Gen$Params$Dashboard$parser = $elm$url$Url$Parser$s('dashboard');
var $author$project$Gen$Params$Detail$Schema_$Instance_$Params = F2(
	function (schema, instance) {
		return {aB: instance, y: schema};
	});
var $elm$url$Url$Parser$slash = F2(
	function (_v0, _v1) {
		var parseBefore = _v0;
		var parseAfter = _v1;
		return function (state) {
			return A2(
				$elm$core$List$concatMap,
				parseAfter,
				parseBefore(state));
		};
	});
var $elm$url$Url$Parser$custom = F2(
	function (tipe, stringToSomething) {
		return function (_v0) {
			var visited = _v0.Q;
			var unvisited = _v0.G;
			var params = _v0.ao;
			var frag = _v0.J;
			var value = _v0.aP;
			if (!unvisited.b) {
				return _List_Nil;
			} else {
				var next = unvisited.a;
				var rest = unvisited.b;
				var _v2 = stringToSomething(next);
				if (!_v2.$) {
					var nextValue = _v2.a;
					return _List_fromArray(
						[
							A5(
							$elm$url$Url$Parser$State,
							A2($elm$core$List$cons, next, visited),
							rest,
							params,
							frag,
							value(nextValue))
						]);
				} else {
					return _List_Nil;
				}
			}
		};
	});
var $elm$url$Url$Parser$string = A2($elm$url$Url$Parser$custom, 'STRING', $elm$core$Maybe$Just);
var $author$project$Gen$Params$Detail$Schema_$Instance_$parser = A2(
	$elm$url$Url$Parser$map,
	$author$project$Gen$Params$Detail$Schema_$Instance_$Params,
	A2(
		$elm$url$Url$Parser$slash,
		$elm$url$Url$Parser$s('detail'),
		A2($elm$url$Url$Parser$slash, $elm$url$Url$Parser$string, $elm$url$Url$Parser$string)));
var $author$project$Gen$Params$Edit$Schema_$Instance_$Params = F2(
	function (schema, instance) {
		return {aB: instance, y: schema};
	});
var $author$project$Gen$Params$Edit$Schema_$Instance_$parser = A2(
	$elm$url$Url$Parser$map,
	$author$project$Gen$Params$Edit$Schema_$Instance_$Params,
	A2(
		$elm$url$Url$Parser$slash,
		$elm$url$Url$Parser$s('edit'),
		A2($elm$url$Url$Parser$slash, $elm$url$Url$Parser$string, $elm$url$Url$Parser$string)));
var $elm$url$Url$Parser$top = function (state) {
	return _List_fromArray(
		[state]);
};
var $author$project$Gen$Params$Home_$parser = $elm$url$Url$Parser$top;
var $author$project$Gen$Params$List$Schema_$Params = function (schema) {
	return {y: schema};
};
var $author$project$Gen$Params$List$Schema_$parser = A2(
	$elm$url$Url$Parser$map,
	$author$project$Gen$Params$List$Schema_$Params,
	A2(
		$elm$url$Url$Parser$slash,
		$elm$url$Url$Parser$s('list'),
		$elm$url$Url$Parser$string));
var $author$project$Gen$Params$New$Schema_$Params = function (schema) {
	return {y: schema};
};
var $author$project$Gen$Params$New$Schema_$parser = A2(
	$elm$url$Url$Parser$map,
	$author$project$Gen$Params$New$Schema_$Params,
	A2(
		$elm$url$Url$Parser$slash,
		$elm$url$Url$Parser$s('new'),
		$elm$url$Url$Parser$string));
var $author$project$Gen$Params$NotFound$parser = $elm$url$Url$Parser$s('not-found');
var $author$project$Gen$Params$Themes$parser = $elm$url$Url$Parser$s('themes');
var $author$project$Gen$Route$routes = _List_fromArray(
	[
		A2($elm$url$Url$Parser$map, $author$project$Gen$Route$Home_, $author$project$Gen$Params$Home_$parser),
		A2($elm$url$Url$Parser$map, $author$project$Gen$Route$Custom, $author$project$Gen$Params$Custom$parser),
		A2($elm$url$Url$Parser$map, $author$project$Gen$Route$Dashboard, $author$project$Gen$Params$Dashboard$parser),
		A2($elm$url$Url$Parser$map, $author$project$Gen$Route$Themes, $author$project$Gen$Params$Themes$parser),
		A2($elm$url$Url$Parser$map, $author$project$Gen$Route$NotFound, $author$project$Gen$Params$NotFound$parser),
		A2($elm$url$Url$Parser$map, $author$project$Gen$Route$List__Schema_, $author$project$Gen$Params$List$Schema_$parser),
		A2($elm$url$Url$Parser$map, $author$project$Gen$Route$New__Schema_, $author$project$Gen$Params$New$Schema_$parser),
		A2($elm$url$Url$Parser$map, $author$project$Gen$Route$Detail__Schema___Instance_, $author$project$Gen$Params$Detail$Schema_$Instance_$parser),
		A2($elm$url$Url$Parser$map, $author$project$Gen$Route$Edit__Schema___Instance_, $author$project$Gen$Params$Edit$Schema_$Instance_$parser)
	]);
var $author$project$Gen$Route$fromUrl = A2(
	$elm$core$Basics$composeR,
	$elm$url$Url$Parser$parse(
		$elm$url$Url$Parser$oneOf($author$project$Gen$Route$routes)),
	$elm$core$Maybe$withDefault($author$project$Gen$Route$NotFound));
var $author$project$Request$create = F3(
	function (params, url, key) {
		return A4(
			$ryannhg$elm_spa$ElmSpa$Request$create,
			$author$project$Gen$Route$fromUrl(url),
			params,
			url,
			key);
	});
var $author$project$Main$fragmentAsPath = function (url) {
	var _v0 = url.aW;
	if (!_v0.$) {
		var fragment = _v0.a;
		if (A2($elm$core$String$startsWith, '/', fragment)) {
			var _v1 = A2($elm$core$String$split, '?', fragment);
			if ((_v1.b && _v1.b.b) && (!_v1.b.b.b)) {
				var path = _v1.a;
				var _v2 = _v1.b;
				var query = _v2.a;
				return _Utils_update(
					url,
					{
						aW: $elm$core$Maybe$Nothing,
						aH: path,
						c7: $elm$core$Maybe$Just(query)
					});
			} else {
				return _Utils_update(
					url,
					{aW: $elm$core$Maybe$Nothing, aH: fragment});
			}
		} else {
			return url;
		}
	} else {
		return url;
	}
};
var $author$project$Domain$Config$Config = F4(
	function (api_server, title, sections, pages) {
		return {bs: api_server, a8: pages, b9: sections, ci: title};
	});
var $elm_community$json_extra$Json$Decode$Extra$andMap = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm_community$json_extra$Json$Decode$Extra$optionalField = F2(
	function (fieldName, decoder) {
		var finishDecoding = function (json) {
			var _v0 = A2(
				$elm$json$Json$Decode$decodeValue,
				A2($elm$json$Json$Decode$field, fieldName, $elm$json$Json$Decode$value),
				json);
			if (!_v0.$) {
				var val = _v0.a;
				return A2(
					$elm$json$Json$Decode$map,
					$elm$core$Maybe$Just,
					A2($elm$json$Json$Decode$field, fieldName, decoder));
			} else {
				return $elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing);
			}
		};
		return A2($elm$json$Json$Decode$andThen, finishDecoding, $elm$json$Json$Decode$value);
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Domain$Config$CustomPage = 4;
var $author$project$Domain$Config$DetailPage = 1;
var $author$project$Domain$Config$EditPage = 2;
var $author$project$Domain$Config$LinkExternal = 6;
var $author$project$Domain$Config$ListPage = 0;
var $author$project$Domain$Config$NewPage = 3;
var $author$project$Domain$Config$ThemesPage = 5;
var $author$project$Domain$Config$Unknown = 7;
var $author$project$Domain$Config$stringToPageType = function (str) {
	switch (str) {
		case 'list':
			return 0;
		case 'detail':
			return 1;
		case 'edit':
			return 2;
		case 'new':
			return 3;
		case 'custom':
			return 4;
		case 'themes':
			return 5;
		case 'link':
			return 6;
		default:
			return 7;
	}
};
var $author$project$Domain$Config$decodePage = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'icon', $elm$json$Json$Decode$string),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'url', $elm$json$Json$Decode$string),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, 'view', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'instance', $elm$json$Json$Decode$string),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm$json$Json$Decode$field, 'schema', $elm$json$Json$Decode$string),
					A2(
						$elm_community$json_extra$Json$Decode$Extra$andMap,
						A2($elm$json$Json$Decode$field, 'display_name', $elm$json$Json$Decode$string),
						A2(
							$elm_community$json_extra$Json$Decode$Extra$andMap,
							A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
							$elm$json$Json$Decode$succeed(
								F7(
									function (name, display_name, schema, instance, page_type, url, icon) {
										return {
											ay: display_name,
											az: icon,
											aB: instance,
											bR: name,
											a7: $author$project$Domain$Config$stringToPageType(page_type),
											y: schema,
											bp: url
										};
									})))))))));
var $author$project$Domain$Config$Section = F4(
	function (name, display_name, icon, pages) {
		return {ay: display_name, az: icon, bR: name, a8: pages};
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $author$project$Domain$Config$decodeSection = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2(
		$elm$json$Json$Decode$field,
		'pages',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'icon', $elm$json$Json$Decode$string),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, 'display_name', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
				$elm$json$Json$Decode$succeed($author$project$Domain$Config$Section)))));
var $author$project$Domain$Config$decodeConfig = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2(
		$elm$json$Json$Decode$field,
		'pages',
		$elm$json$Json$Decode$list($author$project$Domain$Config$decodePage)),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2(
			$elm$json$Json$Decode$field,
			'sections',
			$elm$json$Json$Decode$list($author$project$Domain$Config$decodeSection)),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, 'api', $elm$json$Json$Decode$string),
				$elm$json$Json$Decode$succeed($author$project$Domain$Config$Config)))));
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 2};
var $elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Timeout_ = {$: 1};
var $elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$NetworkError = {$: 2};
var $elm$http$Http$Timeout = {$: 1};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 1:
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 2:
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.dj));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $author$project$Api$Failure = function (a) {
	return {$: 2, a: a};
};
var $author$project$Api$Success = function (a) {
	return {$: 3, a: a};
};
var $author$project$Api$fromResult = function (result) {
	if (result.$ === 1) {
		var errValue = result.a;
		return $author$project$Api$Failure(errValue);
	} else {
		var x = result.a;
		return $author$project$Api$Success(x);
	}
};
var $elm$http$Http$Header = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$header = $elm$http$Http$Header;
var $elm$http$Http$Request = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {b2: reqs, cf: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (!cmd.$) {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 1) {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.bo;
							if (_v4.$ === 1) {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.b2));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.cf)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (!cmd.$) {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					cu: r.cu,
					aS: r.aS,
					aU: A2(_Http_mapExpect, func, r.aU),
					aX: r.aX,
					a5: r.a5,
					bn: r.bn,
					bo: r.bo,
					bp: r.bp
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{cu: false, aS: r.aS, aU: r.aU, aX: r.aX, a5: r.a5, bn: r.bn, bo: r.bo, bp: r.bp}));
};
var $author$project$Endpoint$unwrap = function (_v0) {
	var str = _v0;
	return str;
};
var $author$project$Endpoint$request = function (config) {
	return $elm$http$Http$request(
		{
			aS: config.aS,
			aU: config.aU,
			aX: config.aX,
			a5: config.a5,
			bn: config.bn,
			bo: $elm$core$Maybe$Nothing,
			bp: $author$project$Endpoint$unwrap(config.bp)
		});
};
var $author$project$Api$get = F2(
	function (url, decoder) {
		return $author$project$Endpoint$request(
			{
				aS: $elm$http$Http$emptyBody,
				aU: A2($elm$http$Http$expectJson, $author$project$Api$fromResult, decoder),
				aX: _List_fromArray(
					[
						A2($elm$http$Http$header, 'accept', 'application/json')
					]),
				a5: 'GET',
				bn: $elm$core$Maybe$Nothing,
				bo: false,
				bp: url
			});
	});
var $author$project$Endpoint$Endpoint = $elm$core$Basics$identity;
var $elm$url$Url$Builder$toQueryPair = function (_v0) {
	var key = _v0.a;
	var value = _v0.b;
	return key + ('=' + value);
};
var $elm$url$Url$Builder$toQuery = function (parameters) {
	if (!parameters.b) {
		return '';
	} else {
		return '?' + A2(
			$elm$core$String$join,
			'&',
			A2($elm$core$List$map, $elm$url$Url$Builder$toQueryPair, parameters));
	}
};
var $elm$url$Url$Builder$crossOrigin = F3(
	function (prePath, pathSegments, parameters) {
		return prePath + ('/' + (A2($elm$core$String$join, '/', pathSegments) + $elm$url$Url$Builder$toQuery(parameters)));
	});
var $author$project$Endpoint$url = F3(
	function (apiServer, paths, queryParams) {
		return A3($elm$url$Url$Builder$crossOrigin, apiServer, paths, queryParams);
	});
var $author$project$Endpoint$uiConfig = function (apiServer) {
	return A3(
		$author$project$Endpoint$url,
		apiServer,
		_List_fromArray(
			['config']),
		_List_Nil);
};
var $author$project$Api$getConfig = function (apiUrl) {
	return A2(
		$author$project$Api$get,
		$author$project$Endpoint$uiConfig(apiUrl),
		$author$project$Domain$Config$decodeConfig);
};
var $author$project$Gen$Model$Custom = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Gen$Msg$Custom = function (a) {
	return {$: 0, a: a};
};
var $author$project$Gen$Model$Dashboard = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Gen$Msg$Dashboard = function (a) {
	return {$: 1, a: a};
};
var $author$project$Gen$Model$Detail__Schema___Instance_ = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $author$project$Gen$Msg$Detail__Schema___Instance_ = function (a) {
	return {$: 4, a: a};
};
var $author$project$Gen$Model$Edit__Schema___Instance_ = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $author$project$Gen$Msg$Edit__Schema___Instance_ = function (a) {
	return {$: 5, a: a};
};
var $author$project$Gen$Model$Home_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Gen$Msg$Home_ = function (a) {
	return {$: 2, a: a};
};
var $author$project$Gen$Model$List__Schema_ = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $author$project$Gen$Msg$List__Schema_ = function (a) {
	return {$: 6, a: a};
};
var $author$project$Gen$Model$New__Schema_ = F2(
	function (a, b) {
		return {$: 8, a: a, b: b};
	});
var $author$project$Gen$Msg$New__Schema_ = function (a) {
	return {$: 7, a: a};
};
var $author$project$Gen$Model$NotFound = function (a) {
	return {$: 9, a: a};
};
var $author$project$Gen$Model$Themes = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $author$project$Gen$Msg$Themes = function (a) {
	return {$: 3, a: a};
};
var $author$project$Gen$Model$Redirecting_ = {$: 0};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$Navigation$replaceUrl = _Browser_replaceUrl;
var $ryannhg$elm_spa$ElmSpa$Page$toResult = F3(
	function (toPage, shared, req) {
		var _v0 = A2(toPage, shared, req);
		var toResult_ = _v0;
		return A2(
			toResult_,
			shared,
			A4($ryannhg$elm_spa$ElmSpa$Request$create, req.de, 0, req.bp, req.x));
	});
var $ryannhg$elm_spa$ElmSpa$Page$bundle = function (_v0) {
	var redirecting = _v0.da;
	var toRoute = _v0.dx;
	var toUrl = _v0.dy;
	var fromCmd = _v0.cR;
	var mapEffect = _v0.cX;
	var mapView = _v0.cY;
	var page = _v0.c5;
	var toModel = _v0.dt;
	var toMsg = _v0.dw;
	return {
		r: F4(
			function (params, shared, url, key) {
				var req = A4(
					$ryannhg$elm_spa$ElmSpa$Request$create,
					toRoute(url),
					params,
					url,
					key);
				var _v1 = A3($ryannhg$elm_spa$ElmSpa$Page$toResult, page, shared, req);
				if (!_v1.$) {
					var record = _v1.a;
					return A3(
						$elm$core$Tuple$mapBoth,
						toModel(req.ao),
						mapEffect,
						record.r(0));
				} else {
					var route = _v1.a;
					return _Utils_Tuple2(
						redirecting.c1,
						fromCmd(
							A2(
								$elm$browser$Browser$Navigation$replaceUrl,
								req.x,
								toUrl(route))));
				}
			}),
		v: F5(
			function (params, model, shared, url, key) {
				var req = A4(
					$ryannhg$elm_spa$ElmSpa$Request$create,
					toRoute(url),
					params,
					url,
					key);
				var _v2 = A3($ryannhg$elm_spa$ElmSpa$Page$toResult, page, shared, req);
				if (!_v2.$) {
					var record = _v2.a;
					return A2(
						$elm$core$Platform$Sub$map,
						toMsg,
						record.v(model));
				} else {
					return $elm$core$Platform$Sub$none;
				}
			}),
		A: F6(
			function (params, msg, model, shared, url, key) {
				var req = A4(
					$ryannhg$elm_spa$ElmSpa$Request$create,
					toRoute(url),
					params,
					url,
					key);
				var _v3 = A3($ryannhg$elm_spa$ElmSpa$Page$toResult, page, shared, req);
				if (!_v3.$) {
					var record = _v3.a;
					return A3(
						$elm$core$Tuple$mapBoth,
						toModel(req.ao),
						mapEffect,
						A2(record.A, msg, model));
				} else {
					var route = _v3.a;
					return _Utils_Tuple2(
						redirecting.c1,
						fromCmd(
							A2(
								$elm$browser$Browser$Navigation$replaceUrl,
								req.x,
								toUrl(route))));
				}
			}),
		q: F5(
			function (params, model, shared, url, key) {
				var req = A4(
					$ryannhg$elm_spa$ElmSpa$Request$create,
					toRoute(url),
					params,
					url,
					key);
				var _v4 = A3($ryannhg$elm_spa$ElmSpa$Page$toResult, page, shared, req);
				if (!_v4.$) {
					var record = _v4.a;
					return mapView(
						record.q(model));
				} else {
					return redirecting.q;
				}
			})
	};
};
var $author$project$Effect$Cmd = function (a) {
	return {$: 1, a: a};
};
var $author$project$Effect$fromCmd = $author$project$Effect$Cmd;
var $author$project$Effect$Batch = function (a) {
	return {$: 3, a: a};
};
var $author$project$Effect$None = {$: 0};
var $author$project$Effect$Shared = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$Effect$map = F2(
	function (fn, effect) {
		switch (effect.$) {
			case 0:
				return $author$project$Effect$None;
			case 1:
				var cmd = effect.a;
				return $author$project$Effect$Cmd(
					A2($elm$core$Platform$Cmd$map, fn, cmd));
			case 2:
				var msg = effect.a;
				return $author$project$Effect$Shared(msg);
			default:
				var list = effect.a;
				return $author$project$Effect$Batch(
					A2(
						$elm$core$List$map,
						$author$project$Effect$map(fn),
						list));
		}
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $author$project$View$map = F2(
	function (fn, view) {
		return {
			aS: A2(
				$elm$core$List$map,
				$elm$html$Html$map(fn),
				view.aS),
			ci: view.ci
		};
	});
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$View$placeholder = function (str) {
	return {
		aS: _List_fromArray(
			[
				$elm$html$Html$text(str)
			]),
		ci: str
	};
};
var $author$project$View$none = $author$project$View$placeholder('');
var $author$project$Gen$Route$toHref = function (route) {
	var joinAsHref = function (segments) {
		return '#/' + A2($elm$core$String$join, '/', segments);
	};
	switch (route.$) {
		case 0:
			return joinAsHref(
				_List_fromArray(
					['custom']));
		case 1:
			return joinAsHref(
				_List_fromArray(
					['dashboard']));
		case 2:
			return joinAsHref(_List_Nil);
		case 3:
			return joinAsHref(
				_List_fromArray(
					['themes']));
		case 4:
			var params = route.a;
			return joinAsHref(
				_List_fromArray(
					['detail', params.y, params.aB]));
		case 5:
			var params = route.a;
			return joinAsHref(
				_List_fromArray(
					['edit', params.y, params.aB]));
		case 6:
			var params = route.a;
			return joinAsHref(
				_List_fromArray(
					['list', params.y]));
		case 7:
			var params = route.a;
			return joinAsHref(
				_List_fromArray(
					['new', params.y]));
		default:
			return joinAsHref(
				_List_fromArray(
					['not-found']));
	}
};
var $author$project$Gen$Pages$bundle = F3(
	function (page, toModel, toMsg) {
		return $ryannhg$elm_spa$ElmSpa$Page$bundle(
			{
				cR: $author$project$Effect$fromCmd,
				cX: $author$project$Effect$map(toMsg),
				cY: $author$project$View$map(toMsg),
				c5: page,
				da: {c1: $author$project$Gen$Model$Redirecting_, q: $author$project$View$none},
				dt: toModel,
				dw: toMsg,
				dx: $author$project$Gen$Route$fromUrl,
				dy: $author$project$Gen$Route$toHref
			});
	});
var $ryannhg$elm_spa$ElmSpa$Page$Page = $elm$core$Basics$identity;
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $ryannhg$elm_spa$ElmSpa$Page$adapters = {
	au: function (page) {
		return {
			r: $elm$core$Basics$always(page.r),
			v: page.v,
			A: page.A,
			q: page.q
		};
	},
	cM: F2(
		function (fromCmd, page) {
			return {
				r: function (_v0) {
					return A2($elm$core$Tuple$mapSecond, fromCmd, page.r);
				},
				v: page.v,
				A: F2(
					function (msg, model) {
						return A2(
							$elm$core$Tuple$mapSecond,
							fromCmd,
							A2(page.A, msg, model));
					}),
				q: page.q
			};
		}),
	aJ: F2(
		function (none, page) {
			return {
				r: function (_v1) {
					return _Utils_Tuple2(page.r, none);
				},
				v: function (_v2) {
					return $elm$core$Platform$Sub$none;
				},
				A: F2(
					function (msg, model) {
						return _Utils_Tuple2(
							A2(page.A, msg, model),
							none);
					}),
				q: page.q
			};
		}),
	aM: F2(
		function (none, page) {
			return {
				r: function (_v3) {
					return _Utils_Tuple2(0, none);
				},
				v: function (_v4) {
					return $elm$core$Platform$Sub$none;
				},
				A: F2(
					function (_v5, _v6) {
						return _Utils_Tuple2(0, none);
					}),
				q: function (_v7) {
					return page.q;
				}
			};
		})
};
var $ryannhg$elm_spa$ElmSpa$Page$advanced = function (page) {
	return F2(
		function (_v0, _v1) {
			return $elm$core$Result$Ok(
				$ryannhg$elm_spa$ElmSpa$Page$adapters.au(page));
		});
};
var $author$project$Page$advanced = $ryannhg$elm_spa$ElmSpa$Page$advanced;
var $author$project$Effect$none = $author$project$Effect$None;
var $author$project$Pages$Custom$init = F2(
	function (shared, req) {
		return _Utils_Tuple2(
			{cP: 'String'},
			$author$project$Effect$none);
	});
var $author$project$Pages$Custom$subscriptions = function (model) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Pages$Custom$update = F4(
	function (shared, req, msg, model) {
		return _Utils_Tuple2(model, $author$project$Effect$none);
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm_community$maybe_extra$Maybe$Extra$unwrap = F3(
	function (_default, f, m) {
		if (m.$ === 1) {
			return _default;
		} else {
			var a = m.a;
			return f(a);
		}
	});
var $author$project$Shared$getStyles = F2(
	function (model, key) {
		var styles = function () {
			var _v0 = model.ct;
			if (!_v0.$) {
				var theme = _v0.a;
				return A3(
					$elm_community$maybe_extra$Maybe$Extra$unwrap,
					'',
					$elm$core$Basics$identity,
					A2($elm$core$Dict$get, key, model.aw.aN)) + (' ' + A3(
					$elm_community$maybe_extra$Maybe$Extra$unwrap,
					'',
					$elm$core$Basics$identity,
					A2($elm$core$Dict$get, key, theme.aN)));
			} else {
				return A3(
					$elm_community$maybe_extra$Maybe$Extra$unwrap,
					'',
					$elm$core$Basics$identity,
					A2($elm$core$Dict$get, key, model.aw.aN));
			}
		}();
		return styles;
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $author$project$View$Headers$sectionHeaderString = F2(
	function (shared, content) {
		return A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'headers.section'))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(content)
				]));
	});
var $author$project$Pages$Custom$content = F2(
	function (shared, model) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('content'),
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'content'))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'content.inner'))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									A2($author$project$Shared$getStyles, shared, 'content.inner.cols'))
								]),
							_List_fromArray(
								[
									A2($author$project$View$Headers$sectionHeaderString, shared, 'Custom Page')
								]))
						]))
				]));
	});
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $author$project$Pages$Custom$view = F3(
	function (shared, req, model) {
		return {
			aS: _List_fromArray(
				[
					A3(
					$elm$html$Html$node,
					'main',
					_List_Nil,
					_List_fromArray(
						[
							A2($author$project$Pages$Custom$content, shared, model)
						]))
				]),
			ci: 'Custom'
		};
	});
var $author$project$Pages$Custom$page = F2(
	function (shared, req_) {
		var req = req_;
		return $author$project$Page$advanced(
			{
				r: A2($author$project$Pages$Custom$init, shared, req),
				v: $author$project$Pages$Custom$subscriptions,
				A: A2($author$project$Pages$Custom$update, shared, req),
				q: A2($author$project$Pages$Custom$view, shared, req)
			});
	});
var $author$project$Pages$Dashboard$DashboardOpened = function (a) {
	return {$: 0, a: a};
};
var $author$project$Ports$loadDashboard = _Platform_outgoingPort('loadDashboard', $elm$json$Json$Encode$string);
var $author$project$Pages$Dashboard$init = function () {
	var defaultModel = {aE: 'dash-node'};
	return _Utils_Tuple2(
		defaultModel,
		$author$project$Effect$fromCmd(
			A2(
				$elm$core$Platform$Cmd$map,
				$author$project$Pages$Dashboard$DashboardOpened,
				$author$project$Ports$loadDashboard(defaultModel.aE))));
}();
var $author$project$Pages$Dashboard$DashMsg = function (a) {
	return {$: 1, a: a};
};
var $author$project$Ports$onDashboardMsg = _Platform_incomingPort('onDashboardMsg', $elm$json$Json$Decode$value);
var $author$project$Pages$Dashboard$subscriptions = function (_v0) {
	return $author$project$Ports$onDashboardMsg($author$project$Pages$Dashboard$DashMsg);
};
var $author$project$Pages$Dashboard$update = F2(
	function (msg, model) {
		if (!msg.$) {
			return _Utils_Tuple2(model, $author$project$Effect$none);
		} else {
			return _Utils_Tuple2(model, $author$project$Effect$none);
		}
	});
var $author$project$Pages$Dashboard$view = function (model) {
	return {
		aS: _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('justify-center top-12 left-0 absolute w-full h-full pl-52 px-4 overflow-y-auto scrollbar-hidden z-0    bg-gray-600  bg-gradient-to-b from-gray-800 to-gray-600')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$id(model.aE)
							]),
						_List_Nil)
					]))
			]),
		ci: 'Dashboard'
	};
};
var $author$project$Pages$Dashboard$page = F2(
	function (shared, req) {
		return $author$project$Page$advanced(
			{r: $author$project$Pages$Dashboard$init, v: $author$project$Pages$Dashboard$subscriptions, A: $author$project$Pages$Dashboard$update, q: $author$project$Pages$Dashboard$view});
	});
var $author$project$Pages$Detail$Schema_$Instance_$DealerMsg = function (a) {
	return {$: 3, a: a};
};
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $author$project$Dealer$getInstanceFromPaginatedDict = F2(
	function (instanceId, paginatedInstances) {
		return A2($elm$core$Dict$get, instanceId, paginatedInstances.a3);
	});
var $author$project$View$Tabs$TabId = $elm$core$Basics$identity;
var $author$project$View$Tabs$idFromString = function (str) {
	return str;
};
var $author$project$Pages$Detail$Schema_$Instance_$instanceDetailTabID = $author$project$View$Tabs$idFromString('instanceDetailTabID');
var $author$project$Dealer$InstanceReceived = function (a) {
	return {$: 2, a: a};
};
var $author$project$Dealer$SchemaLoaded = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Domain$Instance$Instance = F8(
	function (id, schema, properties, components, tags, created_at, changed_at, telemetry) {
		return {bw: changed_at, ax: components, by: created_at, aY: id, ap: properties, y: schema, bl: tags, bm: telemetry};
	});
var $author$project$Domain$Instance$Components = $elm$core$Basics$identity;
var $author$project$Domain$Instance$InstanceComponent = F4(
	function (schema, properties, components, tags) {
		return {ax: components, ap: properties, y: schema, bl: tags};
	});
var $author$project$Domain$Schema$Bool = function (a) {
	return {$: 1, a: a};
};
var $author$project$Domain$Schema$Float = function (a) {
	return {$: 3, a: a};
};
var $author$project$Domain$Schema$Int = function (a) {
	return {$: 2, a: a};
};
var $author$project$Domain$Schema$String = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $elm_community$json_extra$Json$Decode$Extra$withDefault = F2(
	function (fallback, decoder) {
		return A2(
			$elm$json$Json$Decode$map,
			$elm$core$Maybe$withDefault(fallback),
			$elm$json$Json$Decode$maybe(decoder));
	});
var $author$project$Domain$Instance$decodeInstanceProperty = A2(
	$elm_community$json_extra$Json$Decode$Extra$withDefault,
	$author$project$Domain$Schema$String($elm$core$Maybe$Nothing),
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Schema$String),
				$elm$json$Json$Decode$string),
				A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Schema$Bool),
				$elm$json$Json$Decode$bool),
				A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Schema$Int),
				$elm$json$Json$Decode$int),
				A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Schema$Float),
				$elm$json$Json$Decode$float)
			])));
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		$elm$json$Json$Decode$andThen,
		thunk,
		$elm$json$Json$Decode$succeed(0));
};
function $author$project$Domain$Instance$cyclic$decodeInstanceComponent() {
	return A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2(
			$elm_community$json_extra$Json$Decode$Extra$optionalField,
			'tags',
			$elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2(
				$elm_community$json_extra$Json$Decode$Extra$optionalField,
				'components',
				$elm$json$Json$Decode$list(
					$author$project$Domain$Instance$cyclic$decodeComponentsList())),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2(
					$elm_community$json_extra$Json$Decode$Extra$optionalField,
					'properties',
					$elm$json$Json$Decode$dict($author$project$Domain$Instance$decodeInstanceProperty)),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'schema', $elm$json$Json$Decode$string),
					$elm$json$Json$Decode$succeed($author$project$Domain$Instance$InstanceComponent)))));
}
function $author$project$Domain$Instance$cyclic$decodeComponentsList() {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Basics$identity,
		$elm$json$Json$Decode$list(
			$elm$json$Json$Decode$lazy(
				function (_v0) {
					return $author$project$Domain$Instance$cyclic$decodeInstanceComponent();
				})));
}
var $author$project$Domain$Instance$decodeInstanceComponent = $author$project$Domain$Instance$cyclic$decodeInstanceComponent();
$author$project$Domain$Instance$cyclic$decodeInstanceComponent = function () {
	return $author$project$Domain$Instance$decodeInstanceComponent;
};
var $author$project$Domain$Instance$decodeComponentsList = $author$project$Domain$Instance$cyclic$decodeComponentsList();
$author$project$Domain$Instance$cyclic$decodeComponentsList = function () {
	return $author$project$Domain$Instance$decodeComponentsList;
};
var $author$project$Domain$Telemetry$Bool = function (a) {
	return {$: 1, a: a};
};
var $author$project$Domain$Telemetry$Float = function (a) {
	return {$: 3, a: a};
};
var $author$project$Domain$Telemetry$Int = function (a) {
	return {$: 2, a: a};
};
var $author$project$Domain$Telemetry$String = function (a) {
	return {$: 0, a: a};
};
var $author$project$Domain$Telemetry$decodeTelemetryInstanceProperty = A2(
	$elm_community$json_extra$Json$Decode$Extra$withDefault,
	$author$project$Domain$Telemetry$String($elm$core$Maybe$Nothing),
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Telemetry$String),
				$elm$json$Json$Decode$string),
				A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Telemetry$Bool),
				$elm$json$Json$Decode$bool),
				A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Telemetry$Int),
				$elm$json$Json$Decode$int),
				A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Telemetry$Float),
				$elm$json$Json$Decode$float)
			])));
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {bx: col, cG: contextStack, bZ: problem, b6: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.b6, s.bx, x, s.b));
	});
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.a),
			s.bU) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.bU, offset) < 0,
					0,
					{bx: col, b: s0.b, c: s0.c, bU: offset, b6: row, a: s0.a});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.bU, s.b6, s.bx, s);
	};
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.bU, s1.bU, s0.a),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $elm$core$Basics$round = _Basics_round;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $elm$core$String$toFloat = _String_toFloat;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$fractionsOfASecondInMs = A2(
	$elm$parser$Parser$andThen,
	function (str) {
		if ($elm$core$String$length(str) <= 9) {
			var _v0 = $elm$core$String$toFloat('0.' + str);
			if (!_v0.$) {
				var floatVal = _v0.a;
				return $elm$parser$Parser$succeed(
					$elm$core$Basics$round(floatVal * 1000));
			} else {
				return $elm$parser$Parser$problem('Invalid float: \"' + (str + '\"'));
			}
		} else {
			return $elm$parser$Parser$problem(
				'Expected at most 9 digits, but got ' + $elm$core$String$fromInt(
					$elm$core$String$length(str)));
		}
	},
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompWhile($elm$core$Char$isDigit)));
var $rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts = F6(
	function (monthYearDayMs, hour, minute, second, ms, utcOffsetMinutes) {
		return $elm$time$Time$millisToPosix((((monthYearDayMs + (((hour * 60) * 60) * 1000)) + (((minute - utcOffsetMinutes) * 60) * 1000)) + (second * 1000)) + ms);
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$core$String$append = _String_append;
var $elm$parser$Parser$UnexpectedChar = {$: 11};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.bU, s.a);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bx: 1, b: s.b, c: s.c, bU: s.bU + 1, b6: s.b6 + 1, a: s.a}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bx: s.bx + 1, b: s.b, c: s.c, bU: newOffset, b6: s.b6, a: s.a}));
		};
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (!step.$) {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt = function (quantity) {
	var helper = function (str) {
		if (_Utils_eq(
			$elm$core$String$length(str),
			quantity)) {
			var _v0 = $elm$core$String$toInt(str);
			if (!_v0.$) {
				var intVal = _v0.a;
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$Done,
					$elm$parser$Parser$succeed(intVal));
			} else {
				return $elm$parser$Parser$problem('Invalid integer: \"' + (str + '\"'));
			}
		} else {
			return A2(
				$elm$parser$Parser$map,
				function (nextChar) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$String$append, str, nextChar));
				},
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
		}
	};
	return A2($elm$parser$Parser$loop, '', helper);
};
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.bU, s.b6, s.bx, s.a);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{bx: newCol, b: s.b, c: s.c, bU: newOffset, b6: newRow, a: s.a});
	};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear = 1970;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay = function (day) {
	return $elm$parser$Parser$problem(
		'Invalid day: ' + $elm$core$String$fromInt(day));
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$core$Basics$neq = _Utils_notEqual;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear = function (year) {
	return (!A2($elm$core$Basics$modBy, 4, year)) && ((!(!A2($elm$core$Basics$modBy, 100, year))) || (!A2($elm$core$Basics$modBy, 400, year)));
};
var $rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore = function (y1) {
	var y = y1 - 1;
	return (((y / 4) | 0) - ((y / 100) | 0)) + ((y / 400) | 0);
};
var $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerDay = 86400000;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerYear = 31536000000;
var $rtfeldman$elm_iso8601_date_strings$Iso8601$yearMonthDay = function (_v0) {
	var year = _v0.a;
	var month = _v0.b;
	var dayInMonth = _v0.c;
	if (dayInMonth < 0) {
		return $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth);
	} else {
		var succeedWith = function (extraMs) {
			var yearMs = $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerYear * (year - $rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear);
			var days = ((month < 3) || (!$rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear(year))) ? (dayInMonth - 1) : dayInMonth;
			var dayMs = $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerDay * (days + ($rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore(year) - $rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore($rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear)));
			return $elm$parser$Parser$succeed((extraMs + yearMs) + dayMs);
		};
		switch (month) {
			case 1:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(0);
			case 2:
				return ((dayInMonth > 29) || ((dayInMonth === 29) && (!$rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear(year)))) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(2678400000);
			case 3:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(5097600000);
			case 4:
				return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(7776000000);
			case 5:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(10368000000);
			case 6:
				return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(13046400000);
			case 7:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(15638400000);
			case 8:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(18316800000);
			case 9:
				return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(20995200000);
			case 10:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(23587200000);
			case 11:
				return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(26265600000);
			case 12:
				return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(28857600000);
			default:
				return $elm$parser$Parser$problem(
					'Invalid month: \"' + ($elm$core$String$fromInt(month) + '\"'));
		}
	}
};
var $rtfeldman$elm_iso8601_date_strings$Iso8601$monthYearDayInMs = A2(
	$elm$parser$Parser$andThen,
	$rtfeldman$elm_iso8601_date_strings$Iso8601$yearMonthDay,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F3(
						function (year, month, day) {
							return _Utils_Tuple3(year, month, day);
						})),
				$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(4)),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed($elm$core$Basics$identity),
							$elm$parser$Parser$symbol('-')),
						$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
						$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
					]))),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$symbol('-')),
					$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
					$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
				]))));
var $rtfeldman$elm_iso8601_date_strings$Iso8601$utcOffsetInMinutes = function () {
	var utcOffsetMinutesFromParts = F3(
		function (multiplier, hours, minutes) {
			return (multiplier * (hours * 60)) + minutes;
		});
	return A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return 0;
					},
					$elm$parser$Parser$symbol('Z')),
					A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed(utcOffsetMinutesFromParts),
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$map,
										function (_v1) {
											return 1;
										},
										$elm$parser$Parser$symbol('+')),
										A2(
										$elm$parser$Parser$map,
										function (_v2) {
											return -1;
										},
										$elm$parser$Parser$symbol('-'))
									]))),
						$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$keeper,
								A2(
									$elm$parser$Parser$ignorer,
									$elm$parser$Parser$succeed($elm$core$Basics$identity),
									$elm$parser$Parser$symbol(':')),
								$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
								$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
								$elm$parser$Parser$succeed(0)
							]))),
					A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(0),
					$elm$parser$Parser$end)
				])));
}();
var $rtfeldman$elm_iso8601_date_strings$Iso8601$iso8601 = A2(
	$elm$parser$Parser$andThen,
	function (datePart) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$keeper,
								A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed(
											$rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts(datePart)),
										$elm$parser$Parser$symbol('T')),
									$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
								$elm$parser$Parser$oneOf(
									_List_fromArray(
										[
											A2(
											$elm$parser$Parser$keeper,
											A2(
												$elm$parser$Parser$ignorer,
												$elm$parser$Parser$succeed($elm$core$Basics$identity),
												$elm$parser$Parser$symbol(':')),
											$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
											$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
										]))),
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$keeper,
										A2(
											$elm$parser$Parser$ignorer,
											$elm$parser$Parser$succeed($elm$core$Basics$identity),
											$elm$parser$Parser$symbol(':')),
										$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
										$rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
										$elm$parser$Parser$succeed(0)
									]))),
						$elm$parser$Parser$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$ignorer,
										$elm$parser$Parser$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$symbol('.')),
									$rtfeldman$elm_iso8601_date_strings$Iso8601$fractionsOfASecondInMs),
									$elm$parser$Parser$succeed(0)
								]))),
					A2($elm$parser$Parser$ignorer, $rtfeldman$elm_iso8601_date_strings$Iso8601$utcOffsetInMinutes, $elm$parser$Parser$end)),
					A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						A6($rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts, datePart, 0, 0, 0, 0, 0)),
					$elm$parser$Parser$end)
				]));
	},
	$rtfeldman$elm_iso8601_date_strings$Iso8601$monthYearDayInMs);
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {bx: col, bZ: problem, b6: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.b6, p.bx, p.bZ);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{bx: 1, b: _List_Nil, c: 1, bU: 0, b6: 1, a: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $rtfeldman$elm_iso8601_date_strings$Iso8601$toTime = function (str) {
	return A2($elm$parser$Parser$run, $rtfeldman$elm_iso8601_date_strings$Iso8601$iso8601, str);
};
var $author$project$Utils$posixParser = function (date) {
	var _v0 = $rtfeldman$elm_iso8601_date_strings$Iso8601$toTime(date);
	if (!_v0.$) {
		var val = _v0.a;
		return val;
	} else {
		return $elm$time$Time$millisToPosix(0);
	}
};
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
	return millis;
};
var $author$project$Utils$stringPosixToMillis = function (time) {
	return $elm$time$Time$posixToMillis(
		$author$project$Utils$posixParser(time));
};
var $author$project$Domain$Telemetry$decodeTelemetryItem = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm$json$Json$Decode$field, 'value', $author$project$Domain$Telemetry$decodeTelemetryInstanceProperty),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, 'updated', $elm$json$Json$Decode$string),
		$elm$json$Json$Decode$succeed(
			F2(
				function (updated, value) {
					return {
						cl: $author$project$Utils$stringPosixToMillis(updated),
						aP: value
					};
				}))));
var $author$project$Domain$Instance$decodeInstance = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2(
		$elm_community$json_extra$Json$Decode$Extra$optionalField,
		'telemetry',
		$elm$json$Json$Decode$dict($author$project$Domain$Telemetry$decodeTelemetryItem)),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2(
			$elm_community$json_extra$Json$Decode$Extra$optionalField,
			'changed_at',
			A2($elm$json$Json$Decode$map, $author$project$Utils$stringPosixToMillis, $elm$json$Json$Decode$string)),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2(
				$elm$json$Json$Decode$map,
				$author$project$Utils$stringPosixToMillis,
				A2($elm$json$Json$Decode$field, 'created_at', $elm$json$Json$Decode$string)),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2(
					$elm_community$json_extra$Json$Decode$Extra$optionalField,
					'tags',
					$elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2(
						$elm_community$json_extra$Json$Decode$Extra$optionalField,
						'components',
						$elm$json$Json$Decode$dict($author$project$Domain$Instance$decodeInstanceComponent)),
					A2(
						$elm_community$json_extra$Json$Decode$Extra$andMap,
						A2(
							$elm_community$json_extra$Json$Decode$Extra$optionalField,
							'properties',
							$elm$json$Json$Decode$dict($author$project$Domain$Instance$decodeInstanceProperty)),
						A2(
							$elm_community$json_extra$Json$Decode$Extra$andMap,
							A2($elm$json$Json$Decode$field, 'schema', $elm$json$Json$Decode$string),
							A2(
								$elm_community$json_extra$Json$Decode$Extra$andMap,
								A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
								$elm$json$Json$Decode$succeed($author$project$Domain$Instance$Instance)))))))));
var $author$project$Endpoint$instance = F2(
	function (apiServer, instanceId) {
		return A3(
			$author$project$Endpoint$url,
			apiServer,
			_List_fromArray(
				['instances', instanceId]),
			_List_Nil);
	});
var $author$project$Api$getInstance = F2(
	function (apiUrl, instanceId) {
		return A2(
			$author$project$Api$get,
			A2($author$project$Endpoint$instance, apiUrl, instanceId),
			$author$project$Domain$Instance$decodeInstance);
	});
var $author$project$Domain$Schema$Schema = F7(
	function (id, display_name, description, properties, components, tags, telemetry) {
		return {ax: components, S: description, ay: display_name, aY: id, ap: properties, bl: tags, bm: telemetry};
	});
var $author$project$Domain$Schema$Component = F6(
	function (name, display_name, description, schema, embed, valid_schemas) {
		return {S: description, ay: display_name, cN: embed, bR: name, y: schema, dD: valid_schemas};
	});
var $author$project$Domain$Schema$ComponentSchema = $elm$core$Basics$identity;
var $author$project$Domain$Schema$defaultSchema = function (schemaId) {
	return {ax: $elm$core$Maybe$Nothing, S: $elm$core$Maybe$Nothing, ay: '', aY: schemaId, ap: $elm$core$Maybe$Nothing, bl: $elm$core$Maybe$Nothing, bm: $elm$core$Maybe$Nothing};
};
var $author$project$Domain$Schema$decodeComponent = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2(
		$elm_community$json_extra$Json$Decode$Extra$optionalField,
		'valid_schemas',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2(
			$elm_community$json_extra$Json$Decode$Extra$withDefault,
			true,
			A2($elm$json$Json$Decode$field, 'embed', $elm$json$Json$Decode$bool)),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2(
				$elm$json$Json$Decode$field,
				'schema',
				A2($elm$json$Json$Decode$map, $author$project$Domain$Schema$defaultSchema, $elm$json$Json$Decode$string)),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'description', $elm$json$Json$Decode$string),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm$json$Json$Decode$field, 'display_name', $elm$json$Json$Decode$string),
					A2(
						$elm_community$json_extra$Json$Decode$Extra$andMap,
						A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
						$elm$json$Json$Decode$succeed($author$project$Domain$Schema$Component)))))));
var $author$project$Domain$Schema$Property = function (name) {
	return function (display_name) {
		return function (description) {
			return function (unit) {
				return function (value) {
					return function (auto) {
						return function (read_only) {
							return function (required) {
								return function (hidden) {
									return function (regexp) {
										return function (max_length) {
											return function (min_length) {
												return function (max) {
													return function (min) {
														return {bt: auto, S: description, ay: display_name, cT: hidden, cZ: max, c_: max_length, c$: min, c0: min_length, bR: name, c8: read_only, db: regexp, dc: required, dC: unit, aP: value};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $author$project$Domain$Schema$Enum = function (a) {
	return {$: 4, a: a};
};
var $author$project$Domain$Schema$IntEnum = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Domain$Schema$StringEnum = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Domain$Schema$IntEnumItem = F4(
	function (name, display_name, description, value) {
		return {S: description, ay: display_name, bR: name, aP: value};
	});
var $author$project$Domain$Schema$commonEnumDecoder = function (rest) {
	return A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'description', $elm$json$Json$Decode$string),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, 'display_name', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
				rest)));
};
var $author$project$Domain$Schema$intEnumItemDecoder = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$int),
	$author$project$Domain$Schema$commonEnumDecoder(
		$elm$json$Json$Decode$succeed($author$project$Domain$Schema$IntEnumItem)));
var $author$project$Domain$Schema$StringEnumItem = F4(
	function (name, display_name, description, value) {
		return {S: description, ay: display_name, bR: name, aP: value};
	});
var $author$project$Domain$Schema$stringEnumItemDecoder = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$string),
	$author$project$Domain$Schema$commonEnumDecoder(
		$elm$json$Json$Decode$succeed($author$project$Domain$Schema$StringEnumItem)));
var $author$project$Domain$Schema$stringToEnumType = function (prop) {
	switch (prop) {
		case 'string':
			return A2($author$project$Domain$Schema$StringEnum, $elm$core$Maybe$Nothing, $elm$core$Dict$empty);
		case 'integer':
			return A2($author$project$Domain$Schema$IntEnum, $elm$core$Maybe$Nothing, $elm$core$Dict$empty);
		default:
			return A2($author$project$Domain$Schema$StringEnum, $elm$core$Maybe$Nothing, $elm$core$Dict$empty);
	}
};
var $author$project$Domain$Schema$enumDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (enumType) {
		return A2(
			$elm$json$Json$Decode$map,
			$elm$core$Maybe$withDefault(enumType),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$optionalField,
				'items',
				function () {
					if (!enumType.$) {
						return A2(
							$elm$json$Json$Decode$map,
							$author$project$Domain$Schema$StringEnum($elm$core$Maybe$Nothing),
							A2(
								$elm$json$Json$Decode$map,
								$elm$core$Dict$fromList,
								$elm$json$Json$Decode$list(
									A2(
										$elm$json$Json$Decode$map,
										function (strItem) {
											return _Utils_Tuple2(strItem.aP, strItem);
										},
										$author$project$Domain$Schema$stringEnumItemDecoder))));
					} else {
						return A2(
							$elm$json$Json$Decode$map,
							$author$project$Domain$Schema$IntEnum($elm$core$Maybe$Nothing),
							A2(
								$elm$json$Json$Decode$map,
								$elm$core$Dict$fromList,
								$elm$json$Json$Decode$list(
									A2(
										$elm$json$Json$Decode$map,
										function (strItem) {
											return _Utils_Tuple2(strItem.aP, strItem);
										},
										$author$project$Domain$Schema$intEnumItemDecoder))));
					}
				}()));
	},
	A2(
		$elm$json$Json$Decode$field,
		'item_type',
		A2($elm$json$Json$Decode$map, $author$project$Domain$Schema$stringToEnumType, $elm$json$Json$Decode$string)));
var $author$project$Domain$Schema$stringToPropertyValue = function (prop) {
	switch (prop) {
		case 'string':
			return $author$project$Domain$Schema$String($elm$core$Maybe$Nothing);
		case 'bool':
			return $author$project$Domain$Schema$Bool($elm$core$Maybe$Nothing);
		case 'integer':
			return $author$project$Domain$Schema$Int($elm$core$Maybe$Nothing);
		case 'float':
			return $author$project$Domain$Schema$Float($elm$core$Maybe$Nothing);
		case 'enum':
			return $author$project$Domain$Schema$Enum($elm$core$Maybe$Nothing);
		default:
			return $author$project$Domain$Schema$String($elm$core$Maybe$Nothing);
	}
};
var $author$project$Domain$Schema$schemaValueDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (propertyValue) {
		if (propertyValue.$ === 4) {
			return A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Schema$Enum),
				$author$project$Domain$Schema$enumDecoder);
		} else {
			return $elm$json$Json$Decode$succeed(propertyValue);
		}
	},
	A2(
		$elm$json$Json$Decode$andThen,
		function (propertyValue) {
			return A2(
				$elm$json$Json$Decode$map,
				$elm$core$Maybe$withDefault(propertyValue),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$optionalField,
					'value',
					function () {
						switch (propertyValue.$) {
							case 0:
								return A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Schema$String),
									$elm$json$Json$Decode$string);
							case 1:
								return A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Schema$Bool),
									$elm$json$Json$Decode$bool);
							case 2:
								return A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Schema$Int),
									$elm$json$Json$Decode$int);
							case 3:
								return A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Schema$Float),
									$elm$json$Json$Decode$float);
							default:
								return $elm$json$Json$Decode$succeed(propertyValue);
						}
					}()));
		},
		A2(
			$elm$json$Json$Decode$field,
			'type',
			A2($elm$json$Json$Decode$map, $author$project$Domain$Schema$stringToPropertyValue, $elm$json$Json$Decode$string))));
var $author$project$Domain$Schema$decodeProperty = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'min', $elm$json$Json$Decode$float),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'max', $elm$json$Json$Decode$float),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'min_length', $elm$json$Json$Decode$int),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'max_length', $elm$json$Json$Decode$int),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'regexp', $elm$json$Json$Decode$string),
					A2(
						$elm_community$json_extra$Json$Decode$Extra$andMap,
						A2(
							$elm_community$json_extra$Json$Decode$Extra$withDefault,
							false,
							A2($elm$json$Json$Decode$field, 'hidden', $elm$json$Json$Decode$bool)),
						A2(
							$elm_community$json_extra$Json$Decode$Extra$andMap,
							A2(
								$elm_community$json_extra$Json$Decode$Extra$withDefault,
								false,
								A2($elm$json$Json$Decode$field, 'required', $elm$json$Json$Decode$bool)),
							A2(
								$elm_community$json_extra$Json$Decode$Extra$andMap,
								A2(
									$elm_community$json_extra$Json$Decode$Extra$withDefault,
									false,
									A2($elm$json$Json$Decode$field, 'read_only', $elm$json$Json$Decode$bool)),
								A2(
									$elm_community$json_extra$Json$Decode$Extra$andMap,
									A2(
										$elm_community$json_extra$Json$Decode$Extra$withDefault,
										false,
										A2($elm$json$Json$Decode$field, 'auto', $elm$json$Json$Decode$bool)),
									A2(
										$elm_community$json_extra$Json$Decode$Extra$andMap,
										$author$project$Domain$Schema$schemaValueDecoder,
										A2(
											$elm_community$json_extra$Json$Decode$Extra$andMap,
											A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'unit', $elm$json$Json$Decode$string),
											A2(
												$elm_community$json_extra$Json$Decode$Extra$andMap,
												A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'description', $elm$json$Json$Decode$string),
												A2(
													$elm_community$json_extra$Json$Decode$Extra$andMap,
													A2($elm$json$Json$Decode$field, 'display_name', $elm$json$Json$Decode$string),
													A2(
														$elm_community$json_extra$Json$Decode$Extra$andMap,
														A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
														$elm$json$Json$Decode$succeed($author$project$Domain$Schema$Property)))))))))))))));
var $author$project$Domain$Schema$Tag = F2(
	function (name, value) {
		return {bR: name, aP: value};
	});
var $author$project$Domain$Schema$decodeTag = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$string),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
		$elm$json$Json$Decode$succeed($author$project$Domain$Schema$Tag)));
var $author$project$Domain$Telemetry$Enum = function (a) {
	return {$: 4, a: a};
};
var $author$project$Domain$Telemetry$IntEnum = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Domain$Telemetry$StringEnum = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Domain$Telemetry$IntEnumItem = F4(
	function (name, display_name, description, value) {
		return {S: description, ay: display_name, bR: name, aP: value};
	});
var $author$project$Domain$Telemetry$commonEnumDecoder = function (rest) {
	return A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'description', $elm$json$Json$Decode$string),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, 'display_name', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
				rest)));
};
var $author$project$Domain$Telemetry$intEnumItemDecoder = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$int),
	$author$project$Domain$Telemetry$commonEnumDecoder(
		$elm$json$Json$Decode$succeed($author$project$Domain$Telemetry$IntEnumItem)));
var $author$project$Domain$Telemetry$StringEnumItem = F4(
	function (name, display_name, description, value) {
		return {S: description, ay: display_name, bR: name, aP: value};
	});
var $author$project$Domain$Telemetry$stringEnumItemDecoder = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$string),
	$author$project$Domain$Telemetry$commonEnumDecoder(
		$elm$json$Json$Decode$succeed($author$project$Domain$Telemetry$StringEnumItem)));
var $author$project$Domain$Telemetry$stringToEnumType = function (prop) {
	switch (prop) {
		case 'string':
			return A2($author$project$Domain$Telemetry$StringEnum, $elm$core$Maybe$Nothing, $elm$core$Dict$empty);
		case 'integer':
			return A2($author$project$Domain$Telemetry$IntEnum, $elm$core$Maybe$Nothing, $elm$core$Dict$empty);
		default:
			return A2($author$project$Domain$Telemetry$StringEnum, $elm$core$Maybe$Nothing, $elm$core$Dict$empty);
	}
};
var $author$project$Domain$Telemetry$enumDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (enumType) {
		return A2(
			$elm$json$Json$Decode$map,
			$elm$core$Maybe$withDefault(enumType),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$optionalField,
				'items',
				function () {
					if (!enumType.$) {
						return A2(
							$elm$json$Json$Decode$map,
							$author$project$Domain$Telemetry$StringEnum($elm$core$Maybe$Nothing),
							A2(
								$elm$json$Json$Decode$map,
								$elm$core$Dict$fromList,
								$elm$json$Json$Decode$list(
									A2(
										$elm$json$Json$Decode$map,
										function (strItem) {
											return _Utils_Tuple2(strItem.aP, strItem);
										},
										$author$project$Domain$Telemetry$stringEnumItemDecoder))));
					} else {
						return A2(
							$elm$json$Json$Decode$map,
							$author$project$Domain$Telemetry$IntEnum($elm$core$Maybe$Nothing),
							A2(
								$elm$json$Json$Decode$map,
								$elm$core$Dict$fromList,
								$elm$json$Json$Decode$list(
									A2(
										$elm$json$Json$Decode$map,
										function (strItem) {
											return _Utils_Tuple2(strItem.aP, strItem);
										},
										$author$project$Domain$Telemetry$intEnumItemDecoder))));
					}
				}()));
	},
	A2(
		$elm$json$Json$Decode$field,
		'item_type',
		A2($elm$json$Json$Decode$map, $author$project$Domain$Telemetry$stringToEnumType, $elm$json$Json$Decode$string)));
var $author$project$Domain$Telemetry$stringToPropertyValue = function (prop) {
	switch (prop) {
		case 'string':
			return $author$project$Domain$Telemetry$String($elm$core$Maybe$Nothing);
		case 'bool':
			return $author$project$Domain$Telemetry$Bool($elm$core$Maybe$Nothing);
		case 'integer':
			return $author$project$Domain$Telemetry$Int($elm$core$Maybe$Nothing);
		case 'float':
			return $author$project$Domain$Telemetry$Float($elm$core$Maybe$Nothing);
		case 'enum':
			return $author$project$Domain$Telemetry$Enum($elm$core$Maybe$Nothing);
		default:
			return $author$project$Domain$Telemetry$String($elm$core$Maybe$Nothing);
	}
};
var $author$project$Domain$Telemetry$schemaValueDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (propertyValue) {
		if (propertyValue.$ === 4) {
			return A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Telemetry$Enum),
				$author$project$Domain$Telemetry$enumDecoder);
		} else {
			return $elm$json$Json$Decode$succeed(propertyValue);
		}
	},
	A2(
		$elm$json$Json$Decode$andThen,
		function (propertyValue) {
			return A2(
				$elm$json$Json$Decode$map,
				$elm$core$Maybe$withDefault(propertyValue),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$optionalField,
					'value',
					function () {
						switch (propertyValue.$) {
							case 0:
								return A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Telemetry$String),
									$elm$json$Json$Decode$string);
							case 1:
								return A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Telemetry$Bool),
									$elm$json$Json$Decode$bool);
							case 2:
								return A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Telemetry$Int),
									$elm$json$Json$Decode$int);
							case 3:
								return A2(
									$elm$json$Json$Decode$map,
									A2($elm$core$Basics$composeR, $elm$core$Maybe$Just, $author$project$Domain$Telemetry$Float),
									$elm$json$Json$Decode$float);
							default:
								return $elm$json$Json$Decode$succeed(propertyValue);
						}
					}()));
		},
		A2(
			$elm$json$Json$Decode$field,
			'type',
			A2($elm$json$Json$Decode$map, $author$project$Domain$Telemetry$stringToPropertyValue, $elm$json$Json$Decode$string))));
var $author$project$Domain$Telemetry$decodeTelemetryProperty = A2(
	$elm$json$Json$Decode$map,
	function (property) {
		return _Utils_Tuple2(property.bR, property);
	},
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		$author$project$Domain$Telemetry$schemaValueDecoder,
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'updated', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, 'display_name', $elm$json$Json$Decode$string),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
					$elm$json$Json$Decode$succeed(
						F4(
							function (name, display_name, updated, value) {
								return {
									ay: display_name,
									bR: name,
									cl: $author$project$Utils$stringPosixToMillis(
										A3($elm_community$maybe_extra$Maybe$Extra$unwrap, '', $elm$core$Basics$identity, updated)),
									aP: value
								};
							})))))));
var $author$project$Domain$Schema$decodeSchema = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2(
		$elm_community$json_extra$Json$Decode$Extra$optionalField,
		'telemetry',
		A2(
			$elm$json$Json$Decode$map,
			$elm$core$Dict$fromList,
			$elm$json$Json$Decode$list($author$project$Domain$Telemetry$decodeTelemetryProperty))),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2(
			$elm_community$json_extra$Json$Decode$Extra$optionalField,
			'tags',
			$elm$json$Json$Decode$list($author$project$Domain$Schema$decodeTag)),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2(
				$elm_community$json_extra$Json$Decode$Extra$optionalField,
				'components',
				$elm$json$Json$Decode$list($author$project$Domain$Schema$decodeComponent)),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2(
					$elm_community$json_extra$Json$Decode$Extra$optionalField,
					'properties',
					$elm$json$Json$Decode$list($author$project$Domain$Schema$decodeProperty)),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'description', $elm$json$Json$Decode$string),
					A2(
						$elm_community$json_extra$Json$Decode$Extra$andMap,
						A2($elm$json$Json$Decode$field, 'display_name', $elm$json$Json$Decode$string),
						A2(
							$elm_community$json_extra$Json$Decode$Extra$andMap,
							A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
							$elm$json$Json$Decode$succeed($author$project$Domain$Schema$Schema))))))));
var $author$project$Endpoint$schema = F2(
	function (apiServer, schemaId) {
		return A3(
			$author$project$Endpoint$url,
			apiServer,
			_List_fromArray(
				['schemas', schemaId]),
			_List_Nil);
	});
var $author$project$Api$getSchema = F2(
	function (apiUrl, schemaId) {
		return A2(
			$author$project$Api$get,
			A2($author$project$Endpoint$schema, apiUrl, schemaId),
			$author$project$Domain$Schema$decodeSchema);
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Domain$Schema$getComponentSchema = function (_v0) {
	var schema = _v0;
	return schema;
};
var $author$project$Domain$Telemetry$getTelemetryItemPropertyUpdated = function (item) {
	if (!item.$) {
		var val = item.a;
		return $elm$core$Maybe$Just(val.cl);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Domain$Telemetry$getTelemetryItemPropertyValue = function (item) {
	if (!item.$) {
		var val = item.a;
		return $elm$core$Maybe$Just(val.aP);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $author$project$Shared$loadComponentSchema = F2(
	function (schemas, component) {
		var schema = $author$project$Domain$Schema$getComponentSchema(component.y);
		return _Utils_update(
			component,
			{
				y: A2(
					$elm$core$Maybe$withDefault,
					schema,
					A2($elm$core$Dict$get, schema.aY, schemas))
			});
	});
var $author$project$Shared$updateSchemaComponents = F2(
	function (schemas, schema) {
		return _Utils_update(
			schema,
			{
				ax: A2(
					$elm$core$Maybe$map,
					function (components) {
						return A2(
							$elm$core$List$map,
							$author$project$Shared$loadComponentSchema(schemas),
							components);
					},
					schema.ax)
			});
	});
var $author$project$Dealer$loadSchemaPropertiesAndComponents = F3(
	function (instance_, shared, schemaToUpdate) {
		var updatedTelemetryProperties = F2(
			function (sch, insTelemetryProps) {
				return A2(
					$elm$core$Maybe$map,
					function (telemetry) {
						return A2(
							$elm$core$Dict$map,
							F2(
								function (k, v) {
									var prop = A2($elm$core$Dict$get, k, insTelemetryProps);
									return _Utils_update(
										v,
										{
											cl: A2(
												$elm$core$Maybe$withDefault,
												v.cl,
												$author$project$Domain$Telemetry$getTelemetryItemPropertyUpdated(prop)),
											aP: A2(
												$elm$core$Maybe$withDefault,
												v.aP,
												$author$project$Domain$Telemetry$getTelemetryItemPropertyValue(prop))
										});
								}),
							telemetry);
					},
					sch.bm);
			});
		var updatedProperties = F2(
			function (sch, insProps) {
				return A2(
					$elm$core$Maybe$map,
					function (props) {
						return A2(
							$elm$core$List$map,
							function (property) {
								return _Utils_update(
									property,
									{
										aP: A2(
											$elm$core$Maybe$withDefault,
											property.aP,
											A2($elm$core$Dict$get, property.bR, insProps))
									});
							},
							props);
					},
					sch.ap);
			});
		var updatedComponentProperties = F2(
			function (sch, instanceComponents) {
				return A2(
					$elm$core$Maybe$map,
					function (comps) {
						return A2(
							$elm$core$List$map,
							function (schemaComponent) {
								return _Utils_update(
									schemaComponent,
									{
										y: function () {
											var instanceComponent = A2($elm$core$Dict$get, schemaComponent.bR, instanceComponents);
											var componentSchema = $author$project$Domain$Schema$getComponentSchema(schemaComponent.y);
											return _Utils_update(
												componentSchema,
												{
													ap: A2(
														$elm$core$Maybe$andThen,
														updatedProperties(componentSchema),
														A2(
															$elm$core$Maybe$andThen,
															function ($) {
																return $.ap;
															},
															instanceComponent))
												});
										}()
									});
							},
							comps);
					},
					sch.ax);
			});
		return function (schema) {
			return A2(
				$elm$core$Maybe$withDefault,
				schemaToUpdate,
				A2(
					$elm$core$Maybe$map,
					function (instance) {
						return _Utils_update(
							schema,
							{
								ax: A2(
									$elm$core$Maybe$andThen,
									updatedComponentProperties(schema),
									instance.ax),
								ap: A2(
									$elm$core$Maybe$andThen,
									updatedProperties(schema),
									instance.ap),
								bm: A2(
									$elm$core$Maybe$andThen,
									updatedTelemetryProperties(schema),
									instance.bm)
							});
					},
					instance_));
		}(
			A2($author$project$Shared$updateSchemaComponents, shared.aL, schemaToUpdate));
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$Utils$catMaybes = function (list) {
	return A2(
		$elm$core$List$concatMap,
		A2(
			$elm$core$Basics$composeL,
			$elm$core$Maybe$withDefault(_List_Nil),
			$elm$core$Maybe$map(
				function (x) {
					return _List_fromArray(
						[x]);
				})),
		list);
};
var $author$project$Domain$Schema$propertyValueAsEnum = F2(
	function (propertyValue, _enum) {
		var enumFromString = function (str) {
			if (!_enum.$) {
				var values = _enum.b;
				return A2(
					$author$project$Domain$Schema$StringEnum,
					A2($elm$core$Dict$get, str, values),
					values);
			} else {
				return _enum;
			}
		};
		var enumFromInt = function (i) {
			if (_enum.$ === 1) {
				var values = _enum.b;
				return A2(
					$author$project$Domain$Schema$IntEnum,
					A2($elm$core$Dict$get, i, values),
					values);
			} else {
				return _enum;
			}
		};
		return A2(
			$elm$core$Maybe$withDefault,
			_enum,
			function () {
				switch (propertyValue.$) {
					case 0:
						var val = propertyValue.a;
						return A2(
							$elm$core$Maybe$map,
							function (str) {
								return enumFromString(str);
							},
							val);
					case 2:
						var val = propertyValue.a;
						return A2(
							$elm$core$Maybe$map,
							function (i) {
								return enumFromInt(i);
							},
							val);
					default:
						return $elm$core$Maybe$Just(_enum);
				}
			}());
	});
var $author$project$Domain$Instance$parsePropertyEnums = F2(
	function (schemaProperties, instanceProperties) {
		return $elm$core$Dict$fromList(
			$author$project$Utils$catMaybes(
				A2(
					$elm$core$List$map,
					function (property) {
						return A2(
							$elm$core$Maybe$map,
							function (instancePropertiy) {
								var _v0 = property.aP;
								if (_v0.$ === 4) {
									var val = _v0.a;
									return _Utils_Tuple2(
										property.bR,
										$author$project$Domain$Schema$Enum(
											A2(
												$elm$core$Maybe$map,
												function (_enum) {
													return A2($author$project$Domain$Schema$propertyValueAsEnum, instancePropertiy, _enum);
												},
												val)));
								} else {
									return _Utils_Tuple2(property.bR, instancePropertiy);
								}
							},
							A2($elm$core$Dict$get, property.bR, instanceProperties));
					},
					schemaProperties)));
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $author$project$Domain$Instance$parseInstanceEnums = F2(
	function (schema, instance) {
		return _Utils_update(
			instance,
			{
				ax: A3(
					$elm$core$Maybe$map2,
					F2(
						function (schemaComponents, instanceComponents) {
							return A3(
								$elm$core$List$foldl,
								$elm$core$Dict$union,
								$elm$core$Dict$empty,
								A2(
									$elm$core$List$map,
									function (schemaComponent) {
										return A3(
											$elm$core$Dict$update,
											schemaComponent.bR,
											function (instanceComponent) {
												return A2(
													$elm$core$Maybe$map,
													function (instanceComponent_) {
														return _Utils_update(
															instanceComponent_,
															{
																ap: A3(
																	$elm$core$Maybe$map2,
																	F2(
																		function (schemaProperties, instanceProperties) {
																			return A2($author$project$Domain$Instance$parsePropertyEnums, schemaProperties, instanceProperties);
																		}),
																	$author$project$Domain$Schema$getComponentSchema(schemaComponent.y).ap,
																	instanceComponent_.ap)
															});
													},
													instanceComponent);
											},
											instanceComponents);
									},
									schemaComponents));
						}),
					schema.ax,
					instance.ax),
				ap: A3(
					$elm$core$Maybe$map2,
					F2(
						function (schemaProperties, instanceProperties) {
							return A2($author$project$Domain$Instance$parsePropertyEnums, schemaProperties, instanceProperties);
						}),
					schema.ap,
					instance.ap)
			});
	});
var $author$project$Dealer$updateSchemaAndInstance = F4(
	function (schema, instance, shared, model) {
		var parsedInstance = A2($author$project$Domain$Instance$parseInstanceEnums, schema, instance);
		return _Utils_update(
			model,
			{
				aB: $elm$core$Maybe$Just(parsedInstance),
				y: $elm$core$Maybe$Just(
					A3(
						$author$project$Dealer$loadSchemaPropertiesAndComponents,
						$elm$core$Maybe$Just(parsedInstance),
						shared,
						schema))
			});
	});
var $author$project$Dealer$loadInstanceAndSchema = F4(
	function (instanceId, schemaId, model, shared) {
		var instance = model.aB;
		var schema = model.y;
		if (!instance.$) {
			var ins = instance.a;
			if (!schema.$) {
				var sch = schema.a;
				return _Utils_Tuple2(
					A4($author$project$Dealer$updateSchemaAndInstance, sch, ins, shared, model),
					$elm$core$Platform$Cmd$none);
			} else {
				return _Utils_Tuple2(
					model,
					A2(
						$elm$core$Platform$Cmd$map,
						$author$project$Dealer$SchemaLoaded(
							$elm$core$Maybe$Just(ins)),
						A2($author$project$Api$getSchema, shared.ac, schemaId)));
			}
		} else {
			return _Utils_Tuple2(
				model,
				A2(
					$elm$core$Platform$Cmd$map,
					$author$project$Dealer$InstanceReceived,
					A2($author$project$Api$getInstance, shared.ac, instanceId)));
		}
	});
var $author$project$Pages$Detail$Schema_$Instance_$init = F2(
	function (shared, req) {
		var schemaId = req.ao.y;
		var schema = A2($elm$core$Dict$get, schemaId, shared.aL);
		var instanceId = req.ao.aB;
		var instance = A2($author$project$Dealer$getInstanceFromPaginatedDict, instanceId, shared.a9);
		var _v0 = A4(
			$author$project$Dealer$loadInstanceAndSchema,
			instanceId,
			schemaId,
			{H: $author$project$Pages$Detail$Schema_$Instance_$instanceDetailTabID, cP: '', I: $elm$core$Set$empty, aB: instance, aG: $elm$core$Maybe$Nothing, y: schema},
			shared);
		var model = _v0.a;
		var msg = _v0.b;
		return _Utils_Tuple2(
			model,
			$author$project$Effect$fromCmd(
				A2($elm$core$Platform$Cmd$map, $author$project$Pages$Detail$Schema_$Instance_$DealerMsg, msg)));
	});
var $author$project$Pages$Detail$Schema_$Instance_$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Shared$ModelUpdated = function (a) {
	return {$: 9, a: a};
};
var $author$project$Effect$batch = $author$project$Effect$Batch;
var $author$project$Effect$fromShared = $author$project$Effect$Shared;
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$remove, key, dict);
	});
var $author$project$Dealer$SchemaComponentsLoaded = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$url$Url$Builder$QueryParameter = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $elm$url$Url$Builder$string = F2(
	function (key, value) {
		return A2(
			$elm$url$Url$Builder$QueryParameter,
			$elm$url$Url$percentEncode(key),
			$elm$url$Url$percentEncode(value));
	});
var $author$project$Endpoint$schemas = F2(
	function (apiServer, ids) {
		return A3(
			$author$project$Endpoint$url,
			apiServer,
			_List_fromArray(
				['schemas']),
			_List_fromArray(
				[
					A2($elm$url$Url$Builder$string, 'id', ids),
					A2($elm$url$Url$Builder$string, 'full', 'true')
				]));
	});
var $author$project$Api$getSchemas = F2(
	function (apiUrl, schemaIds) {
		var ids = A2(
			$elm$core$String$dropRight,
			1,
			A3(
				$elm$core$List$foldr,
				F2(
					function (id1, id2) {
						return id1 + (',' + id2);
					}),
				'',
				schemaIds));
		return A2(
			$author$project$Api$get,
			A2($author$project$Endpoint$schemas, apiUrl, ids),
			A2(
				$elm$json$Json$Decode$field,
				'items',
				$elm$json$Json$Decode$list($author$project$Domain$Schema$decodeSchema)));
	});
var $author$project$Dealer$insertInstance = F2(
	function (instance, paginatedInstances) {
		return _Utils_update(
			paginatedInstances,
			{
				a3: A3($elm$core$Dict$insert, instance.aY, instance, paginatedInstances.a3)
			});
	});
var $author$project$Shared$updateSchemasDictComponents = F3(
	function (schema, schemas, model) {
		var newSchemas = A2(
			$elm$core$Dict$union,
			$elm$core$Dict$fromList(
				A2(
					$elm$core$List$map,
					function (s) {
						return _Utils_Tuple2(s.aY, s);
					},
					schemas)),
			model.aL);
		var updatedSchema = A2($author$project$Shared$updateSchemaComponents, newSchemas, schema);
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					aL: A3(
						$elm$core$Dict$update,
						schema.aY,
						function (_v0) {
							return $elm$core$Maybe$Just(updatedSchema);
						},
						newSchemas)
				}),
			updatedSchema);
	});
var $author$project$Dealer$update = F3(
	function (model, msg, shared) {
		switch (msg.$) {
			case 0:
				var instance = msg.a;
				var res = msg.b;
				switch (res.$) {
					case 3:
						var schema = res.a;
						var updatedSchemasModel = _Utils_update(
							shared,
							{
								a9: A2(
									$elm$core$Maybe$withDefault,
									shared.a9,
									A2(
										$elm$core$Maybe$map,
										function (ins) {
											return A2($author$project$Dealer$insertInstance, ins, shared.a9);
										},
										instance)),
								aL: A3($elm$core$Dict$insert, schema.aY, schema, shared.aL)
							});
						var newModel = _Utils_update(
							model,
							{aB: instance});
						var componentSchemas = A2(
							$elm$core$Maybe$map,
							$elm$core$List$map(
								function (comp) {
									return $author$project$Domain$Schema$getComponentSchema(comp.y).aY;
								}),
							schema.ax);
						if (!componentSchemas.$) {
							var schemaIds = componentSchemas.a;
							return _Utils_Tuple3(
								newModel,
								A2(
									$elm$core$Platform$Cmd$map,
									$author$project$Dealer$SchemaComponentsLoaded(schema),
									A2($author$project$Api$getSchemas, shared.ac, schemaIds)),
								updatedSchemasModel);
						} else {
							return _Utils_Tuple3(
								_Utils_update(
									newModel,
									{
										y: $elm$core$Maybe$Just(schema)
									}),
								$elm$core$Platform$Cmd$none,
								updatedSchemasModel);
						}
					case 2:
						return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, shared);
					default:
						return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, shared);
				}
			case 2:
				var res = msg.a;
				switch (res.$) {
					case 3:
						var instance = res.a;
						var _v4 = A2($elm$core$Dict$get, instance.y, shared.aL);
						if (!_v4.$) {
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{
										aB: $elm$core$Maybe$Just(instance)
									}),
								$elm$core$Platform$Cmd$none,
								shared);
						} else {
							return _Utils_Tuple3(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									$author$project$Dealer$SchemaLoaded(
										$elm$core$Maybe$Just(instance)),
									A2($author$project$Api$getSchema, shared.ac, instance.y)),
								shared);
						}
					case 2:
						return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, shared);
					default:
						return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, shared);
				}
			default:
				var schema = msg.a;
				var res = msg.b;
				switch (res.$) {
					case 3:
						var schemas = res.a;
						var _v6 = A3($author$project$Shared$updateSchemasDictComponents, schema, schemas, shared);
						var newShared = _v6.a;
						var updatedSchema = _v6.b;
						return _Utils_Tuple3(
							_Utils_update(
								model,
								{
									y: $elm$core$Maybe$Just(updatedSchema)
								}),
							$elm$core$Platform$Cmd$none,
							newShared);
					case 2:
						return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, shared);
					default:
						return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, shared);
				}
		}
	});
var $author$project$Pages$Detail$Schema_$Instance_$update = F4(
	function (shared, req, msg, model) {
		switch (msg.$) {
			case 0:
				var instanceId = msg.a;
				var editInstanceUrl = $author$project$Gen$Route$toHref(
					$author$project$Gen$Route$Edit__Schema___Instance_(
						{aB: instanceId, y: req.ao.y}));
				return _Utils_Tuple2(
					model,
					$author$project$Effect$fromCmd(
						A2($elm$browser$Browser$Navigation$pushUrl, req.x, editInstanceUrl)));
			case 1:
				var tabId = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{H: tabId}),
					$author$project$Effect$none);
			case 2:
				var id = msg.a;
				var newFieldsetAccordionStatus = A2($elm$core$Set$member, id, model.I) ? A2($elm$core$Set$remove, id, model.I) : A2($elm$core$Set$insert, id, model.I);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{I: newFieldsetAccordionStatus}),
					$author$project$Effect$none);
			case 3:
				var dealerMsg = msg.a;
				var _v1 = A3($author$project$Dealer$update, model, dealerMsg, shared);
				var updatedModel = _v1.a;
				var cmd = _v1.b;
				var newShared = _v1.c;
				var newModel = A3(
					$elm$core$Maybe$map2,
					F2(
						function (schema, instance) {
							return A4($author$project$Dealer$updateSchemaAndInstance, schema, instance, newShared, updatedModel);
						}),
					updatedModel.y,
					updatedModel.aB);
				return _Utils_Tuple2(
					A2($elm$core$Maybe$withDefault, updatedModel, newModel),
					$author$project$Effect$batch(
						_List_fromArray(
							[
								$author$project$Effect$fromCmd(
								A2($elm$core$Platform$Cmd$map, $author$project$Pages$Detail$Schema_$Instance_$DealerMsg, cmd)),
								$author$project$Effect$fromShared(
								$author$project$Shared$ModelUpdated(newShared))
							])));
			default:
				var now = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							aG: $elm$core$Maybe$Just(now)
						}),
					$author$project$Effect$none);
		}
	});
var $author$project$Pages$Detail$Schema_$Instance_$SetActiveTab = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $author$project$Domain$Instance$defaultInstance = {bw: $elm$core$Maybe$Nothing, ax: $elm$core$Maybe$Nothing, by: 0, aY: '', ap: $elm$core$Maybe$Nothing, y: '', bl: $elm$core$Maybe$Nothing, bm: $elm$core$Maybe$Nothing};
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $author$project$Pages$Detail$Schema_$Instance_$InstanceEdit = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Pages$Detail$Schema_$Instance_$FieldsetAccordionToggle = function (a) {
	return {$: 2, a: a};
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $elm$html$Html$fieldset = _VirtualDom_node('fieldset');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $author$project$View$Icons$icon24 = function (content) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('w-full h-full')
			]),
		_List_fromArray(
			[
				A2(
				$elm$svg$Svg$svg,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$viewBox('0 0 24 24'),
						$elm$svg$Svg$Attributes$fill('currentColor'),
						$elm$svg$Svg$Attributes$stroke('currentColor'),
						$elm$svg$Svg$Attributes$class('w-full h-full')
					]),
				content)
			]));
};
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $author$project$View$Icons$add = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $author$project$View$Icons$apexchart = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$apikeys = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$assets = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M20.6,5.9L13,1.6c-0.6-0.4-1.4-0.4-2.1,0L3.4,5.9c-0.6,0.4-1,1-1,1.8v8.7c0,0.7,0.4,1.4,1,1.8l7.5,4.4 c0.6,0.4,1.4,0.4,2.1,0l7.5-4.4c0.6-0.4,1-1,1-1.8V7.7C21.6,7,21.2,6.3,20.6,5.9z M5.1,16V9.7l5.5,3.2v6.3C10.6,19.2,5.1,16,5.1,16z M12,10.5L6.5,7.3L12,4.2l5.5,3.2C17.5,7.3,12,10.5,12,10.5z M13.4,19.2v-6.3l5.5-3.2V16L13.4,19.2z'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$chat = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$circularWaveform = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M9.928.287h.15l.144.032.129.055.11.07.093.08.08.087.07.092.061.096.057.101.051.106.048.112.045.117.042.122.04.135.037.132.035.138.032.142.03.147.027.15.026.155.024.158.022.16.02.162.018.164.016.165.014.166.013.166.01.165.01.164.008.162.007.16.005.157.005.153.003.15.002.119.011-.018.001-.001.075-.124.001-.002.08-.13.08-.131.085-.135.087-.135.089-.137.09-.138.094-.138.094-.137.096-.136.097-.135.098-.132.1-.13.099-.128.1-.124.1-.12.1-.115.1-.111.1-.107.1-.1.093-.09.098-.09.097-.083.097-.077.098-.07.098-.065.1-.057.103-.05.108-.042.115-.031.123-.018h.134l.14.026.139.055.125.083.102.103.077.114.054.117.036.115.022.115.012.114.003.115-.004.116-.01.118-.016.122-.02.124-.027.128-.033.138-.036.134-.04.137-.045.14-.048.143-.053.145-.055.147-.06.15-.062.149-.064.15-.067.152-.07.15-.07.151-.073.15-.073.148-.074.146-.074.143-.074.141-.074.138-.071.132-.002.002-.07.129v.002l-.038.068.053-.03h.002l.128-.071.002-.001.134-.073.138-.074.14-.074.144-.074.147-.074.148-.074.15-.072.15-.071.151-.07.152-.067.151-.065.15-.063.15-.06.148-.056.146-.053.144-.049.142-.045.138-.04.136-.037.125-.03.128-.027.125-.022.122-.017.119-.01.116-.005.115.003.114.01.115.021.115.035.117.051.114.074.105.1.086.122.059.138.028.14.003.135-.016.125-.03.116-.04.108-.05.104-.056.1-.063.098-.07.098-.076.097-.083.097-.088.098-.1.103-.099.098-.105.099-.11.099-.114.1-.12.1-.122.099-.127.099-.13.098-.132.098-.134.097-.136.096-.136.095-.138.092-.137.091-.137.09-.136.086-.134.084-.132.082-.127.078-.002.001-.124.076h-.002l-.032.02.104.002.15.003.154.004.157.006.16.006.162.008.164.01.165.01.166.013.166.014.166.016.165.018.163.02.16.022.159.023.155.026.152.028.148.03.144.032.14.035.134.037.122.037.123.042.117.044.112.047.107.052.102.055.097.061.092.07.087.078.081.091.072.108.057.126.032.134.008.114-.015.14-.043.137-.064.12-.076.1-.083.087-.089.075-.094.066-.098.059-.104.054-.109.05-.114.046-.12.043-.125.04-.136.04-.135.036-.14.033-.145.031-.148.029-.153.027-.156.025-.159.023-.161.02-.163.02-.165.016-.165.016-.166.013-.165.012-.165.01-.163.009-.161.007-.156.006h-.003l-.155.005-.15.004h-.002l-.146.003h-.002l-.049.001.08.048.127.077.13.08.133.084.135.085.137.088.137.09.138.092.138.093.136.096.136.096.134.098.131.098.129.1.126.1.122.1.118.1.113.1.109.1.104.1.098.098.088.093.086.098.08.097.074.098.068.097.06.099.054.101.046.105.037.111.026.12.01.128-.012.137-.04.141-.068.133-.094.115-.11.09-.115.066-.117.045-.115.029-.114.017-.114.007h-.116l-.117-.007-.12-.013-.123-.018-.126-.024-.13-.029-.138-.035-.136-.038-.138-.042-.142-.047-.144-.05-.146-.054-.148-.058-.15-.06-.15-.064-.15-.065-.152-.069-.15-.07-.15-.071-.15-.073-.146-.073-.145-.075-.143-.074-.14-.074-.136-.073-.13-.07-.002-.002-.126-.07h-.002l-.007-.005.064.117.072.132.073.136.074.14.075.142.074.145.074.147.073.149.072.15.07.151.069.151.066.152.064.15.061.15.058.15.055.147.05.145.048.143.043.14.039.137.034.134.028.124.024.126.02.124.014.12.008.118v.115l-.005.114-.016.115-.027.114-.042.117-.062.116-.085.11-.111.098-.132.074-.14.044-.138.015-.13-.007-.121-.023-.112-.036-.106-.044-.102-.053-.099-.06-.098-.066-.097-.073-.097-.08-.098-.085-.103-.096-.098-.096-.098-.103-.099-.107-.1-.112-.099-.117-.1-.121-.099-.125-.099-.128-.098-.13-.098-.134-.096-.135-.095-.136-.094-.137-.092-.138-.09-.137-.088-.136-.085-.135-.084-.133-.079-.129-.001-.002-.077-.126-.001-.002-.059-.097V15.3l-.003.145v.002l-.004.152-.005.155-.006.159-.007.16-.008.164-.01.165-.012.165-.013.166-.015.166-.017.165-.019.164-.02.162-.023.16-.025.157-.027.154-.029.15-.031.146-.033.142-.036.137-.036.125-.04.126-.043.12-.046.115-.05.11-.052.104-.058.1-.065.094-.073.09-.084.084-.1.078-.116.066-.135.047-.147.02-.15-.01-.14-.04-.122-.06-.104-.075-.09-.083-.075-.088-.067-.093-.06-.098-.055-.102-.05-.108-.047-.113-.044-.12-.04-.123-.041-.136-.036-.135-.034-.139-.03-.143-.03-.148-.027-.152-.026-.156-.023-.158-.02-.161-.02-.163-.018-.165-.015-.165-.014-.166-.012-.165-.01-.165-.01-.163-.007-.162-.006-.159-.005-.156-.004-.15v-.002l-.004-.147v-.002l-.001-.072-.034.057-.001.002-.076.125-.002.002-.08.13-.082.133-.085.135-.088.136-.09.137-.09.138-.094.137-.095.137-.096.136-.098.134-.098.132-.1.13-.1.126-.1.122-.1.119-.1.114-.1.11-.1.104-.098.1-.094.088-.097.087-.098.082-.097.074-.097.069-.099.062-.1.055-.105.047-.11.039-.117.027-.128.013-.136-.008-.14-.034-.136-.064-.118-.091-.094-.108-.07-.115-.047-.117-.032-.115-.018-.114-.01-.114v-.115l.006-.117.012-.12.017-.122.023-.126.028-.129.035-.138.037-.135.042-.138.045-.141.05-.144.054-.146.056-.148.06-.149.063-.15.066-.15.068-.152.07-.15.07-.15.073-.15.074-.147.074-.146.074-.143.074-.14.074-.136.07-.131.002-.002.07-.127v-.002l.016-.028-.094.052-.002.001-.132.072-.135.073-.139.074-.142.075-.144.074-.147.074-.149.073-.15.072-.15.07-.152.07-.152.066-.15.065-.15.061-.15.059-.147.055-.146.052-.143.047-.14.044-.138.04-.135.035-.124.028-.127.026-.124.02-.12.015-.119.008-.116.003-.114-.005-.114-.014-.115-.025-.116-.04-.116-.057-.113-.082-.1-.107-.078-.129-.048-.14-.02-.139.004-.132.02-.122.034-.113.044-.107.051-.102.059-.1.065-.098.072-.097.078-.097.085-.097.095-.103.096-.098.101-.098.107-.1.111-.099.116-.1.12-.099.125-.1.127-.098.13-.099.134-.097.134-.097.136-.095.138-.094.137-.092.137-.09.137-.09.135-.085.134-.084.13-.08.127-.078.002-.001.117-.07h-.005l-.144-.004h-.002l-.151-.003-.155-.005-.158-.006-.16-.007-.164-.008-.164-.01-.166-.011-.166-.013-.166-.015-.165-.017-.164-.018-.163-.02-.16-.023-.157-.024-.155-.027-.15-.028-.147-.031-.143-.033-.137-.035-.126-.036-.127-.04-.121-.042-.116-.046-.11-.048-.106-.053-.1-.057-.095-.063-.09-.072-.086-.082-.079-.097-.068-.113-.05-.132-.026-.147.006-.15.035-.142.058-.125.073-.107.081-.091.088-.078.092-.068.097-.061.102-.056.107-.05.112-.048.118-.044.124-.042.135-.04.133-.037.138-.034.143-.031.148-.03.151-.027.155-.026.158-.023.16-.022.164-.02.164-.017.165-.016.166-.014.165-.012.165-.011.164-.01.162-.007.16-.007.156-.005.153-.004.146-.003h.003l.095-.002-.039-.024-.126-.076-.13-.08-.132-.082-.135-.085-.136-.087-.137-.089-.138-.091-.137-.093-.137-.095-.136-.096-.135-.098-.132-.098-.13-.099-.127-.1-.123-.1-.12-.1-.114-.1-.11-.1-.106-.1-.1-.099-.09-.093-.088-.098-.082-.097-.076-.097-.07-.098-.062-.098-.056-.1-.049-.104-.04-.11-.03-.115-.015-.126.004-.135.03-.14.06-.138.087-.121.105-.098.115-.073.116-.051.116-.034.114-.02.114-.01.115-.003.117.005.119.011.122.017.125.022.128.027.138.034.135.036.137.041.141.046.143.049.146.053.147.056.15.06.15.062.15.065.151.068.151.069.15.071.15.073.147.073.146.074.143.074.14.074.138.074.134.072.13.071.047.027-.042-.076-.072-.13-.072-.135-.074-.139-.074-.141-.075-.144-.074-.147-.073-.148-.072-.15-.071-.15-.07-.152-.067-.152-.064-.15-.062-.151-.06-.15-.055-.147-.052-.146-.049-.144-.044-.14-.04-.139-.036-.135-.03-.125-.026-.127-.02-.125-.016-.121-.01-.118-.004-.117.004-.114.012-.114.023-.115.037-.116.055-.116.078-.113.103-.103.126-.082.138-.054.14-.024h.134l.123.02.115.031.107.042.103.05.1.058.098.064.098.071.097.077.097.084.098.09.103.099.098.1.099.106.1.11.099.116.1.12.099.124.099.127.098.13.098.132.097.135.096.135.094.137.092.138.09.137.09.137.086.135.084.134.081.132.079.129.076.125.007.012.002-.128.004-.15.005-.154.005-.158.007-.16.008-.163.01-.164.01-.165.013-.166.015-.166.016-.166.018-.164.02-.163.022-.16.025-.159.026-.155.028-.151.03-.147.033-.143.035-.139.037-.133.038-.121.042-.123.044-.116L9.128 1 9.18.895l.057-.1.062-.097.07-.09.08-.087.094-.08.111-.07.13-.054.144-.03zM10 1.508l-.024.063-.031.09-.031.1-.03.107-.029.115-.027.121-.027.128-.024.133-.024.138-.021.143-.02.146-.019.15-.016.152-.016.153-.013.156-.012.156-.01.156-.01.155-.007.153v.004l-.007.149v.003l-.005.148v.003l-.004.145v.003l-.004.143v.002l-.003.14v.001l-.002.136V4.9l-.001.132-.002.128-.001.122-.001.117V5.4l-.002.11v.002l-.002.106-.003.1-.003.095-.005.09-.006.079-.01.08-.011.082-.02.084-.03.097-.062.12-.127.14-.216.103-.23-.006-.163-.066-.101-.072-.07-.067-.057-.063-.05-.064-.048-.067-.05-.075-.048-.074-.05-.08-.052-.085-.055-.091-.057-.096-.19-.32-.067-.114v-.001l-.07-.117-.002-.002-.072-.12-.002-.002-.075-.123-.079-.127-.08-.128-.083-.13-.084-.13-.086-.13-.087-.13-.089-.129-.09-.127-.09-.125-.09-.123-.09-.119-.091-.116-.09-.111-.09-.107-.087-.102-.086-.096-.084-.09-.082-.083-.079-.077-.075-.068-.071-.061-.036-.029v.004l.015.088.02.096.024.103.03.11.033.115.038.12.043.125.046.129.05.132.053.135.057.138.06.139.062.14.064.14.066.142.068.14.07.14.07.14.07.137.072.135.07.133.07.128.001.002.068.125.001.002.067.12.001.002.066.118.064.114.062.11.06.106.057.102.053.096.05.091.047.087.044.083.04.08.032.07.032.075.029.077.025.086.018.107-.001.148-.062.197-.164.18-.202.082-.158.01-.114-.017-.09-.024-.078-.028-.075-.031-.08-.038-.076-.037-.08-.042-.084-.045-.09-.05-.092-.05-.002-.001-.098-.056-.327-.184-.118-.066h-.002l-.12-.067-.002-.001-.123-.068-.003-.001-.127-.07-.132-.07-.135-.071-.137-.07-.138-.071-.14-.07-.141-.068-.141-.067-.141-.065-.14-.062-.14-.06-.138-.058-.135-.054-.133-.05-.13-.048-.125-.043-.122-.039-.116-.034-.111-.03-.105-.026-.097-.02-.09-.016-.02-.003.016.022.06.07.067.074.075.079.082.08.088.084.095.086.1.088.107.088.11.09.115.09.119.091.122.09.125.091.127.09.128.088.13.088.13.086.13.085.13.083.128.081.127.079.124.076.002.001.12.073.002.001.118.07.001.002.115.068h.001l.219.13.102.06.1.06.093.055.087.054.083.051.078.05.073.049.061.044.065.05.063.054.066.066.071.094.07.147.025.22-.083.229-.14.145-.125.07-.1.036-.087.021-.081.014L6 9.556l-.09.007-.085.005-.092.004-.097.002-.1.002h-.003l-.108.002h-.002l-.115.001-.121.002-.26.003-.134.002H4.79l-.139.002H4.65l-.142.004h-.002l-.145.004h-.003L4.21 9.6h-.004l-.149.006h-.004l-.152.008-.155.008-.156.01-.156.012-.156.013-.154.015-.152.016-.15.019-.147.02-.144.02-.139.024-.134.024-.129.026-.123.027-.116.029-.109.03-.1.03-.093.031-.08.03.049.02.089.03.098.031.106.03.113.03.12.027.128.027.132.025.137.023.142.022.146.02.149.02.151.016.154.015.155.014.156.012.156.011.156.01.156.007.15.007h.004l.147.005h.004l.145.005h.003l.143.004H4.6l.14.002h.002l.136.003h.002l.132.001.252.003.12.001.112.002.107.002.101.002.096.004.09.005.08.005.081.009.08.011.085.018.094.029.115.055.14.113.114.204.012.236-.062.174-.073.11-.067.073-.064.058-.064.05-.066.049-.074.05-.074.048-.079.05-.084.051-.088.053-.002.001-.095.056-.317.188-.114.068h-.001l-.117.07-.002.002-.12.072-.001.001-.122.074-.002.002-.124.076-.003.002-.125.078-.003.002-.126.08-.004.003-.128.083-.13.085-.13.088-.129.088-.127.09-.126.09-.123.09-.12.09-.116.091-.113.09-.107.09-.103.087-.097.087-.09.084-.085.082-.078.08-.07.075-.062.072-.038.047.077-.012.095-.02.102-.023.109-.028.114-.033.12-.038.124-.041.129-.046.131-.05.135-.052.137-.056.139-.06.14-.061.14-.064.142-.066.14-.068.14-.07.14-.07.136-.07.003-.001.132-.07h.003l.13-.07.003-.002.128-.068.002-.002.125-.068.002-.001.122-.067.001-.001.118-.066h.001l.115-.065.11-.062.208-.117h.001l.097-.055.092-.05.088-.048.084-.044.08-.04.07-.034.075-.032.076-.03.085-.025.102-.02.14-.003.19.048.192.149.097.203.017.167-.013.12-.024.091-.027.08-.03.075-.038.081-.037.075-.04.08-.045.083-.049.088-.05.092-.002.002-.054.097-.059.104-.124.221-.066.117v.002L7 14.37l-.001.001-.068.123-.001.003-.069.126v.002l-.07.13-.002.002-.069.131-.001.003-.07.135-.07.139-.07.14-.07.14-.066.141-.065.141-.063.14-.06.14-.059.138-.054.136-.052.133-.047.13-.044.127-.04.122-.035.117-.03.112-.027.105-.021.1-.017.09-.005.035.011-.009.07-.058.074-.066.077-.073.08-.081.084-.088.086-.093.087-.1.089-.105.09-.11.09-.115.09-.118.09-.121.09-.124.09-.127.09-.128.087-.13.087-.13.085-.13.082-.128.002-.003.08-.126.001-.003.078-.125.001-.002.076-.123.001-.002.074-.121v-.002l.072-.118v-.002l.07-.116.066-.111.064-.109.061-.103.059-.098v-.002l.057-.094.054-.089.051-.083.05-.078.05-.074.043-.063.05-.065.053-.063.064-.065.087-.07.136-.072.21-.037.236.066.16.137.08.13.04.103.022.088.014.082.01.08.008.09.005.084.003.09.003.097.002.103.002.108.002.114.002.246.002.132.002.135v.001l.002.138v.002l.003.142v.002l.004.145v.003l.005.147v.003l.006.149v.003l.008.153.008.155.01.156.011.156.013.155.015.155.016.152.018.15.02.148.02.144.023.14.024.135.026.13.027.124.029.117.03.11.03.102.03.094.032.085.004.01.014-.036.031-.088.03-.096.03-.105.03-.113.028-.119.027-.126.025-.131.024-.137.022-.141.02-.145.02-.149.017-.151.015-.153.014-.152.013-.159.01-.156.01-.156.008-.155.007-.152v-.003l.006-.148v-.003l.005-.147v-.002l.003-.144v-.002l.003-.14v-.003l.002-.136v-.002l.002-.134.003-.253.001-.12.002-.11v-.003l.002-.108.002-.102.004-.097.004-.091.006-.088.008-.074.01-.08.017-.084.026-.091.05-.112.1-.136.19-.126.24-.029.186.056.117.073.078.068.06.064.051.064.048.065.051.074.047.073.05.078.05.084.055.089.056.094.121.205.065.11.067.113.001.001.07.116v.002l.072.119.001.002.075.121v.003l.077.123.002.003.078.125.002.003.08.126.002.003.082.129.086.13.087.13.088.129.09.128.09.125.09.124.09.12.09.117.091.113.09.109.087.103.087.098.085.092.083.085.08.08.076.07.072.064.058.047-.01-.063-.018-.093-.023-.101-.027-.108-.033-.113-.036-.12-.041-.123-.045-.128-.049-.13-.052-.135-.056-.137-.059-.138-.061-.14-.064-.14-.066-.142-.067-.141-.07-.14-.069-.14-.07-.136-.002-.003-.069-.133-.001-.003-.07-.13-.001-.003-.069-.128-.001-.003-.069-.125v-.002l-.068-.122-.001-.002-.066-.118v-.001l-.128-.227-.118-.21-.054-.096-.001-.002-.051-.093-.048-.088-.045-.084-.04-.081-.035-.071-.033-.075-.03-.076-.026-.082-.021-.099-.008-.132.037-.184.132-.198.202-.115.175-.025.126.01.095.023.08.027.076.03.075.034.081.039.079.04.082.044.088.048.093.051.097.055.103.058.107.06.112.063.117.066.12.066.002.001.123.068.002.001.125.069h.003l.128.07.003.002.13.069.004.001.133.07.14.071.14.07.14.068.14.068.142.065.14.064.14.06.139.059.136.055.134.052.13.048.127.044.123.04.118.037.113.031.106.027.1.022.093.018.049.007-.057-.07-.065-.072-.073-.077-.08-.08-.086-.083-.093-.086-.099-.087-.104-.088-.11-.09-.113-.09-.117-.09-.121-.09-.124-.091-.126-.09-.129-.09-.129-.087-.13-.087-.13-.085-.128-.083-.003-.002-.126-.08-.003-.001-.125-.078-.003-.002-.123-.076h-.002l-.121-.075h-.002l-.119-.072-.001-.001-.116-.07h-.001l-.113-.066-.109-.065-.104-.062-.099-.058-.001-.001-.095-.057-.09-.054-.084-.052-.079-.05-.075-.05-.063-.044-.065-.048-.064-.052-.064-.062-.07-.083-.072-.126-.047-.198.047-.24.133-.175.133-.09.107-.043.09-.025.082-.015.08-.01.09-.008.084-.006.09-.004.095-.003.098-.002h.003l.106-.002h.002l.112-.001.12-.001.125-.002.131-.001.134-.002h.002l.137-.002h.002l.141-.003h.002l.144-.004h.003l.147-.005h.003l.149-.006h.003l.152-.007.155-.008.156-.01.156-.011.159-.013.151-.014.154-.016.15-.018.148-.019.145-.02.14-.023.136-.024.131-.026.125-.027.118-.028.111-.03.104-.03.095-.03.086-.031.023-.01-.077-.029-.091-.03-.101-.031-.109-.03-.116-.028-.122-.028-.129-.026-.134-.024-.139-.023-.143-.022-.147-.02-.15-.018-.152-.016-.154-.015-.155-.013-.156-.012-.156-.01-.156-.01-.152-.007h-.004l-.149-.006h-.003l-.148-.005h-.003l-.145-.004h-.002l-.142-.004h-.002l-.14-.002h-.001l-.135-.002h-.001l-.131-.002-.128-.001-.121-.001-.116-.002h-.001l-.111-.001-.105-.003-.1-.002-.094-.004-.09-.005-.077-.007-.08-.009-.081-.013-.087-.02-.1-.035-.123-.069-.14-.14-.088-.227.02-.223.07-.15.071-.095.066-.068.064-.055.064-.049.073-.052.07-.046.075-.048.08-.05.087-.053.09-.054.002-.001.096-.057.322-.191.115-.068.001-.001.118-.07.002-.002.12-.073h.002l.122-.076.003-.001.124-.078.003-.001.126-.08.003-.001.128-.082.13-.085.13-.086.13-.088.128-.088.127-.09.125-.09.122-.09.119-.091.115-.09.11-.09.107-.09.1-.087.096-.086.089-.084.082-.08.075-.08.068-.074.06-.07.02-.025-.018.002-.09.016-.096.02-.105.026-.11.03-.116.034-.122.038-.125.043-.13.047-.132.05-.136.055-.137.057-.14.06-.14.062-.141.065-.141.067-.141.068-.14.07-.139.07-.135.07-.003.002-.132.069-.003.001-.129.07h-.003l-.126.07h-.002l-.124.069h-.002l-.12.068h-.002l-.117.066h-.001l-.223.126-.104.058-.1.056-.001.001-.096.053-.09.05-.087.046-.082.043-.08.04-.069.031-.074.032-.079.028-.088.024-.112.017-.156-.008-.201-.077-.168-.177-.066-.198-.003-.15.018-.109.024-.087.029-.077.032-.075.038-.08.038-.077.042-.08.046-.085.05-.09.052-.094v-.001l.056-.1.06-.105.125-.224.001-.001.066-.117V5.71l.067-.12.001-.003.068-.124.002-.002.068-.127.002-.003.069-.13.002-.002.069-.132.002-.004.07-.135.07-.139.069-.14.068-.14.067-.142.064-.14.062-.141.06-.14.057-.137.053-.135.05-.132.047-.13.042-.124.039-.12.034-.116.029-.11.024-.104.02-.096.016-.089v-.007l-.032.026-.071.06-.075.07-.079.075-.082.083-.084.09-.086.096-.088.101-.088.107-.09.111-.09.116-.091.119-.09.122-.091.125-.09.128-.088.128-.088.13-.086.13-.084.13-.082.128-.002.003-.079.126-.001.003-.077.124-.002.002-.075.123v.002l-.073.12-.001.001-.07.118h-.001l-.069.116-.065.11-.124.209-.057.097-.001.001-.056.093-.053.087-.05.082-.05.076-.045.067-.048.067-.05.064-.056.063-.07.067-.1.072-.158.067-.229.01-.219-.098-.13-.141-.064-.121-.032-.098-.02-.085-.012-.08-.009-.081-.007-.09-.004-.087-.004-.092-.003-.098-.002-.102v-.003l-.001-.109v-.001l-.003-.238-.001-.128-.002-.132v-.001l-.002-.136v-.002l-.002-.139v-.002l-.004-.142v-.003l-.004-.145v-.003l-.005-.148v-.003l-.007-.15V4.03l-.008-.153-.009-.156-.01-.155-.012-.156-.013-.156-.015-.154-.017-.152-.018-.15-.02-.146-.022-.142-.023-.139-.025-.133-.026-.128-.028-.122-.028-.115-.03-.108-.03-.1-.032-.09L10 1.508z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$config = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$copy = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$dashboard = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$delete = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $author$project$View$Icons$devicegroups = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('8'),
					$elm$svg$Svg$Attributes$cy('14'),
					$elm$svg$Svg$Attributes$r('2'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('12'),
					$elm$svg$Svg$Attributes$cy('8'),
					$elm$svg$Svg$Attributes$r('2'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('16'),
					$elm$svg$Svg$Attributes$cy('14'),
					$elm$svg$Svg$Attributes$r('2'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$devices = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$downArrow = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M7 10l5 5 5-5H7z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$edit = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$exitFullScreen = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$folder = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$folderAdd = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$folderDelete = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M16.5,10V9h-2v1H12v1.5h1v4c0,0.83,0.67,1.5,1.5,1.5h2c0.83,0,1.5-0.67,1.5-1.5v-4h1V10H16.5z M16.5,15.5h-2v-4h2V15.5z M20,6h-8l-2-2H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V8C22,6.89,21.11,6,20,6z M20,18H4V6h5.17 l2,2H20V18z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$folderUp = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18L4,18V6h5.17 l2,2H20V18z M9.41,14.42L11,12.84V17h2v-4.16l1.59,1.59L16,13.01L12.01,9L8,13.01L9.41,14.42z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$fullScreen = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$help = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$home = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$iframe = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$Attributes$fillRule = _VirtualDom_attribute('fill-rule');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$Attributes$opacity = _VirtualDom_attribute('opacity');
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $author$project$View$Icons$image = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$fillRule('evenodd'),
					$elm$svg$Svg$Attributes$d('M21 4H3V20H21V4Z M2 3V21H22V3H2Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$rect,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x('9'),
					$elm$svg$Svg$Attributes$y('7'),
					$elm$svg$Svg$Attributes$width('6'),
					$elm$svg$Svg$Attributes$height('6'),
					$elm$svg$Svg$Attributes$fill('currentColor'),
					$elm$svg$Svg$Attributes$opacity('0.5'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('8'),
					$elm$svg$Svg$Attributes$cy('14'),
					$elm$svg$Svg$Attributes$r('3'),
					$elm$svg$Svg$Attributes$fill('currentColor'),
					$elm$svg$Svg$Attributes$opacity('0.75'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('0.75'),
					$elm$svg$Svg$Attributes$d('M15.5 9L12 15L19 15L15.5 9Z'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$importDashboard = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$location = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$cx('12'),
					$elm$svg$Svg$Attributes$cy('9'),
					$elm$svg$Svg$Attributes$r('2.5')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$longWaveform = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M4 0V17H5V0H4ZM12 0V17H13V0H12ZM2 4V12H3V4H2ZM6 4V13H7V4H6ZM10 4V13H11V4H10ZM14 4V13H15V4H14ZM0 7V10H1V7H0ZM8 7V10H9V7H8ZM16 7V10H17V7H16Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$mimic = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M8.5 0C6.24566 0 4.08365 0.895533 2.48959 2.48959C0.895533 4.08365 2.65216e-08 6.24566 0 8.5C0.00102202 9.94162 0.368689 11.3593 1.06843 12.6197C1.76816 13.8801 2.77698 14.9419 4 15.7051V17H1V19H16V17H13V15.6992C14.4188 14.8115 15.544 13.5246 16.2344 12H18V5H16.2363C15.5637 3.51127 14.4762 2.24793 13.1042 1.36118C11.7321 0.474436 10.1336 0.00185296 8.5 0ZM8.5 7.19141C8.67188 7.19129 8.8421 7.22505 9.00092 7.29078C9.15974 7.3565 9.30404 7.45288 9.42558 7.57442C9.54712 7.69596 9.6435 7.84026 9.70922 7.99908C9.77495 8.1579 9.80871 8.32812 9.80859 8.5C9.80871 8.67188 9.77495 8.8421 9.70922 9.00092C9.6435 9.15974 9.54712 9.30404 9.42558 9.42558C9.30404 9.54712 9.15974 9.6435 9.00092 9.70922C8.8421 9.77495 8.67188 9.80871 8.5 9.80859C8.32812 9.80871 8.1579 9.77495 7.99908 9.70922C7.84026 9.6435 7.69596 9.54712 7.57442 9.42558C7.45288 9.30404 7.3565 9.15974 7.29078 9.00092C7.22505 8.8421 7.19129 8.67188 7.19141 8.5C7.19129 8.32812 7.22505 8.1579 7.29078 7.99908C7.3565 7.84026 7.45288 7.69596 7.57442 7.57442C7.69596 7.45288 7.84026 7.3565 7.99908 7.29078C8.1579 7.22505 8.32812 7.19129 8.5 7.19141Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$nowidget = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$onlineValue = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('m 10,4 0,0.5 0,15.5 5,0 0,-16 z m 1,1 3,0 0,14 -3,0 z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('m 6.5,12 0,4 3,-1.999999 z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$rect,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width('5'),
					$elm$svg$Svg$Attributes$height('5.5'),
					$elm$svg$Svg$Attributes$x('10'),
					$elm$svg$Svg$Attributes$y('4.5'),
					$elm$svg$Svg$Attributes$opacity('0.5'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$rect,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width('5'),
					$elm$svg$Svg$Attributes$height('4'),
					$elm$svg$Svg$Attributes$x('10'),
					$elm$svg$Svg$Attributes$y('10'),
					$elm$svg$Svg$Attributes$opacity('0.25'),
					$elm$svg$Svg$Attributes$strokeWidth('0')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$orbit = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M 7.9960938 4.015625 C 7.4497314 4.015625 6.9960938 4.4692626 6.9960938 5.015625 C 6.9960938 5.5619874 7.4497314 6.015625 7.9960938 6.015625 C 8.4866269 6.015625 8.8849918 5.6439643 8.9648438 5.1738281 C 9.6147886 5.0396256 10.306902 5.0090466 11.025391 5.0976562 C 12.800477 5.3165733 14.690447 6.2216974 16.242188 7.7734375 C 17.793927 9.325178 18.699052 11.215149 18.917969 12.990234 C 19.136886 14.765321 18.681943 16.405947 17.535156 17.552734 C 16.388369 18.699521 14.749697 19.152512 12.974609 18.933594 C 11.199524 18.714677 9.3075999 17.809553 7.7558594 16.257812 C 6.2041192 14.706072 5.3009483 12.816102 5.0820312 11.041016 C 4.9390596 9.8817342 5.0890407 8.7836639 5.5253906 7.8398438 L 4.7832031 7.0976562 C 4.1364846 8.3000881 3.9117637 9.7201041 4.0898438 11.164062 C 4.3389583 13.183998 5.3479684 15.263984 7.0488281 16.964844 C 8.7496873 18.665703 10.831627 19.676667 12.851562 19.925781 C 14.871498 20.174896 16.850567 19.651387 18.242188 18.259766 C 19.633809 16.868145 20.159271 14.889077 19.910156 12.869141 C 19.661042 10.849206 18.650078 8.767265 16.949219 7.0664062 C 15.248359 5.3655467 13.166419 4.3545833 11.146484 4.1054688 C 10.893992 4.0743295 10.642717 4.0556109 10.392578 4.0488281 C 9.7754696 4.0320946 9.1728045 4.0999747 8.59375 4.2382812 C 8.4245455 4.1072725 8.2233631 4.015625 7.9960938 4.015625 z ')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$organization = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$parameters = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M0 0V3H3V0H0ZM4 0V3H8V0H4ZM9 0V3H13V0H9ZM14 0V3H18V0H14ZM0 4V7H3V4H0ZM0 8V11H3V8H0ZM0 12V15H3V12H0Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('0.5'),
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M4 4V7H8V4H4ZM9 4V7H13V4H9ZM14 4V7H18V4H14ZM4 8V11H8V8H4ZM9 8V11H13V8H9ZM14 8V11H18V8H14ZM4 12V15H8V12H4ZM9 12V15H13V12H9ZM14 12V15H18V12H14Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$phaseDiagram = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('m 13,12 a 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 1,1 0 0 1 1,1 z M 14.950355,2.4320637 14.268986,4.30411 15.206007,4.6534691 15.890048,2.7740839 Z M 2.7740839,8.1099523 2.4320637,9.0496449 4.311449,9.7336852 C 4.35726,9.5732756 4.4087894,9.4145546 4.4659411,9.2578268 4.525379,9.1018321 4.590376,8.948013 4.6608109,8.7966647 Z M 19.69589,14.268986 c -0.04582,0.160408 -0.09734,0.319131 -0.15449,0.475859 -0.05944,0.155995 -0.124437,0.309813 -0.194869,0.461162 l 1.879385,0.684041 0.34202,-0.939693 z m -10.8992253,5.070203 -0.6867124,1.886727 0.9396926,0.34202 0.6840403,-1.879385 C 9.5732773,19.642735 9.4145543,19.591212 9.2578261,19.534061 9.1018315,19.474623 8.948013,19.409624 8.7966637,19.339192 Z M 12,4.5 c -4.1362133,0 -7.5,3.3637867 -7.5,7.5 0,4.136213 3.3637867,7.5 7.5,7.5 4.136213,0 7.5,-3.363787 7.5,-7.5 0,-4.1362133 -3.363787,-7.5 -7.5,-7.5 z m 0,1 c 3.595773,0 6.5,2.9042268 6.5,6.5 0,3.595773 -2.904227,6.5 -6.5,6.5 C 8.4042268,18.5 5.5,15.595773 5.5,12 5.5,8.4042268 8.4042268,5.5 12,5.5 Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$plotlychart = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M9.81814 6.54547C10.4206 6.54547 10.9091 6.05705 10.9091 5.45456C10.9091 4.85206 10.4206 4.36365 9.81814 4.36365C9.21565 4.36365 8.72723 4.85206 8.72723 5.45456C8.72723 6.05705 9.21565 6.54547 9.81814 6.54547Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M14.1818 2.18182C14.7843 2.18182 15.2727 1.6934 15.2727 1.09091C15.2727 0.488417 14.7843 0 14.1818 0C13.5793 0 13.0909 0.488417 13.0909 1.09091C13.0909 1.6934 13.5793 2.18182 14.1818 2.18182Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M9.81814 2.18182C10.4206 2.18182 10.9091 1.6934 10.9091 1.09091C10.9091 0.488417 10.4206 0 9.81814 0C9.21565 0 8.72723 0.488417 8.72723 1.09091C8.72723 1.6934 9.21565 2.18182 9.81814 2.18182Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M5.45456 2.18182C6.05705 2.18182 6.54547 1.6934 6.54547 1.09091C6.54547 0.488417 6.05705 0 5.45456 0C4.85206 0 4.36365 0.488417 4.36365 1.09091C4.36365 1.6934 4.85206 2.18182 5.45456 2.18182Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M1.09091 2.18182C1.6934 2.18182 2.18182 1.6934 2.18182 1.09091C2.18182 0.488417 1.6934 0 1.09091 0C0.488417 0 0 0.488417 0 1.09091C0 1.6934 0.488417 2.18182 1.09091 2.18182Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M1.09091 6.54547C1.6934 6.54547 2.18182 6.05705 2.18182 5.45456C2.18182 4.85206 1.6934 4.36365 1.09091 4.36365C0.488417 4.36365 0 4.85206 0 5.45456C0 6.05705 0.488417 6.54547 1.09091 6.54547Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M1.09091 8.72723C0.801582 8.72723 0.524105 8.84217 0.31952 9.04675C0.114935 9.25134 0 9.52882 0 9.81814V14.1818C0 14.4711 0.114935 14.7486 0.31952 14.9532C0.524105 15.1578 0.801582 15.2727 1.09091 15.2727C1.38024 15.2727 1.65771 15.1578 1.8623 14.9532C2.06688 14.7486 2.18182 14.4711 2.18182 14.1818V9.81814C2.18182 9.52882 2.06688 9.25134 1.8623 9.04675C1.65771 8.84217 1.38024 8.72723 1.09091 8.72723V8.72723Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M9.81814 8.72723C9.52882 8.72723 9.25134 8.84217 9.04675 9.04675C8.84217 9.25134 8.72723 9.52882 8.72723 9.81814V14.1818C8.72723 14.4711 8.84217 14.7486 9.04675 14.9532C9.25134 15.1578 9.52882 15.2727 9.81814 15.2727C10.1075 15.2727 10.3849 15.1578 10.5895 14.9532C10.7941 14.7486 10.9091 14.4711 10.9091 14.1818V9.81814C10.9091 9.52882 10.7941 9.25134 10.5895 9.04675C10.3849 8.84217 10.1075 8.72723 9.81814 8.72723Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M5.45456 4.36365C5.16523 4.36365 4.88775 4.47858 4.68317 4.68317C4.47858 4.88775 4.36365 5.16523 4.36365 5.45456V14.1818C4.36365 14.4712 4.47858 14.7486 4.68317 14.9532C4.88775 15.1578 5.16523 15.2727 5.45456 15.2727C5.74388 15.2727 6.02136 15.1578 6.22595 14.9532C6.43053 14.7486 6.54547 14.4712 6.54547 14.1818V5.45456C6.54547 5.16523 6.43053 4.88775 6.22595 4.68317C6.02136 4.47858 5.74388 4.36365 5.45456 4.36365Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M14.1818 4.36365C13.8925 4.36365 13.615 4.47858 13.4104 4.68317C13.2058 4.88775 13.0909 5.16523 13.0909 5.45456V14.1818C13.0909 14.4712 13.2058 14.7486 13.4104 14.9532C13.615 15.1578 13.8925 15.2727 14.1818 15.2727C14.4711 15.2727 14.7486 15.1578 14.9532 14.9532C15.1578 14.7486 15.2727 14.4712 15.2727 14.1818V5.45456C15.2727 5.16523 15.1578 4.88775 14.9532 4.68317C14.7486 4.47858 14.4711 4.36365 14.1818 4.36365Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$refresh = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M11,8v5l4.25,2.52l0.77-1.28l-3.52-2.09V8H11z M21,10V3l-2.64,2.64C16.74,4.01,14.49,3,12,3c-4.97,0-9,4.03-9,9 s4.03,9,9,9s9-4.03,9-9h-2c0,3.86-3.14,7-7,7s-7-3.14-7-7s3.14-7,7-7c1.93,0,3.68,0.79,4.95,2.05L14,10H21z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$Attributes$clipRule = _VirtualDom_attribute('clip-rule');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $author$project$View$Icons$remove = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fillRule('evenodd'),
					$elm$svg$Svg$Attributes$clipRule('evenodd'),
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM5.29285 6.70708L8.58577 10L5.29286 13.2929L6.70708 14.7072L9.99998 11.4143L13.2929 14.7071L14.7071 13.2929L11.4142 10L14.7071 6.70714L13.2929 5.29293L9.99998 8.58582L6.70707 5.29288L5.29285 6.70708Z'),
					$elm$svg$Svg$Attributes$transform('translate(2, 2)')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$reset = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z M20,13c0-4.42-3.58-8-8-8c-0.06,0-0.12,0.01-0.18,0.01l1.09-1.09L11.5,2.5L8,6l3.5,3.5l1.41-1.41 l-1.08-1.08C11.89,7.01,11.95,7,12,7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02C16.95,20.44,20,17.08,20,13z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$save = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$shaftCenterline = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('translate(4.91528 8.83563)'),
					$elm$svg$Svg$Attributes$fillRule('evenodd'),
					$elm$svg$Svg$Attributes$opacity('0.25'),
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M 8.031 10.1644C 11.3744 10.1644 14.0847 7.45402 14.0847 4.11065C 14.0847 2.90922 13.7347 1.78953 13.1311 0.847972L 13.1469 0.840953C 13.261 0.0874132 14.0374 -0.323628 14.654 0.315746L 15.4989 2.87327L 15.2477 4.97412L 14.2429 7.78283L 11.8453 10.249L 8.03181 11.6876L 3.64747 11.0711L 0.404888 8.37654L 0.0623591 7.09777C -0.28017 5.49931 0.838742 4.97412 2.18602 5.72767L 2.19461 5.72384C 2.90069 8.28408 5.24627 10.1644 8.031 10.1644Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('translate(3 3)'),
					$elm$svg$Svg$Attributes$fillRule('evenodd'),
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M 9 17C 13.4183 17 17 13.4183 17 9C 17 4.58172 13.4183 1 9 1C 4.58172 1 1 4.58172 1 9C 1 13.4183 4.58172 17 9 17ZM 9 18C 13.9706 18 18 13.9706 18 9C 18 4.02944 13.9706 0 9 0C 4.02944 0 0 4.02944 0 9C 0 13.9706 4.02944 18 9 18Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('translate(6.89258 6.89258)'),
					$elm$svg$Svg$Attributes$fillRule('evenodd'),
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M 6.05371 11.1074C 8.8448 11.1074 11.1074 8.8448 11.1074 6.05371C 11.1074 3.26262 8.8448 1 6.05371 1C 3.26262 1 1 3.26262 1 6.05371C 1 8.8448 3.26262 11.1074 6.05371 11.1074ZM 6.05371 12.1074C 9.39708 12.1074 12.1074 9.39708 12.1074 6.05371C 12.1074 2.71034 9.39708 0 6.05371 0C 2.71034 0 0 2.71034 0 6.05371C 0 9.39708 2.71034 12.1074 6.05371 12.1074Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('translate(11.5127 11.5127)'),
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M 1.68358 0L 1.18358 0L 1.18358 1.18359L 0 1.18359L 0 1.68359L 1.18358 1.68359L 1.18358 2.86717L 1.68358 2.86717L 1.68358 1.68359L 2.86717 1.68359L 2.86717 1.18359L 1.68358 1.18359L 1.68358 0Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('translate(9.17348 9.10403)'),
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$opacity('0.25'),
					$elm$svg$Svg$Attributes$d('M 4.07638 3.98096C 5.06025 2.75893 5.26193 1.05957 5.26193 0L 4.76193 0C 4.76193 1.02554 4.56147 2.58115 3.68692 3.6674C 3.06623 4.43834 2.00393 5.02673 0.930691 5.08173C 0.909725 5.04626 0.884014 5.01285 0.853542 4.98238C 0.658291 4.78712 0.341702 4.78712 0.14645 4.98238C -0.0488167 5.17764 -0.0488167 5.49423 0.14645 5.68948C 0.341702 5.88475 0.658291 5.88475 0.853542 5.68948C 0.886303 5.65672 0.913555 5.62054 0.935329 5.58209C 2.1685 5.52591 3.36929 4.85922 4.07638 3.98096Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$spectrum = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M3.43555 0L1.07422 12.7812H-2.5e-08V13.7812H1.90625L3.45898 5.38672L5.07812 13.7852L9.82812 13.7324L10.418 10.7871L11.0078 13.7383H15.8672L15.9766 13.2988L16.082 13.7383H17.9844V12.7383H16.8691L15.9863 9.08985L15.084 12.7383H11.8281L10.418 5.6875L9.00586 12.7422L5.90234 12.7773L3.43555 0Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$star = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$teams = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$text = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$timeline = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M12.995 3c-4.975 0-8.995 4.030-8.995 9h-3l3.895 3.895 0.070 0.145 4.035-4.040h-3c0-3.865 3.135-7 7-7s7 3.135 7 7-3.135 7-7 7c-1.935 0-3.68-0.79-4.945-2.055l-1.415 1.415c1.625 1.63 3.87 2.64 6.355 2.64 4.975 0 9.005-4.030 9.005-9s-4.030-9-9.005-9zM12 8v5l4.28 2.54 0.72-1.215-3.5-2.075v-4.25h-1.5z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$timespan = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$trend = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('1'),
					$elm$svg$Svg$Attributes$d('M15.5098 -2.5e-08L12.3828 8.33398L9.43555 2.94922L5.45508 11.3887L3.40234 7.2832L0 16.3574L0.9375 16.709L3.53516 9.7832L5.48242 13.6777L9.50195 5.1543L12.5547 10.7305L15.4277 3.06836L17.5098 9.68359L18.4648 9.38281L15.5098 -2.5e-08Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$users = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$Attributes$strokeMiterlimit = _VirtualDom_attribute('stroke-miterlimit');
var $author$project$View$Icons$waterfall = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$stroke('currentColor'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('9.2'),
					$elm$svg$Svg$Attributes$d('M15.9702 11.1902H14.4606L13.9667 10.6948L13.4606 11.1902L9.4028 11.1902L8.4028 8.97217L7.4028 11.1902L1 11.234')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$stroke('currentColor'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('9.2'),
					$elm$svg$Svg$Attributes$d('M16.9439 8.15099H15.4342L14.9404 7.65553L14.4342 8.15099L10.3764 8.15098L9.31927 5.69476L8.37644 8.15098L1.97363 8.19478')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$stroke('currentColor'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('9.2'),
					$elm$svg$Svg$Attributes$d('M17.9439 5.15099H16.4342L15.9702 4.69476L15.4342 5.15099L11.3764 5.15098L10.4145 3.69476L9.37644 5.15098L2.97363 5.19478')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$stroke('currentColor'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('9.2'),
					$elm$svg$Svg$Attributes$d('M18.9439 2.15101H17.4342L16.9702 1.90438L16.4342 2.15101L12.3764 2.15101L11.4145 1L10.3764 2.15101L3.97363 2.1948')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$waveform = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$strokeWidth('0'),
					$elm$svg$Svg$Attributes$d('M2.08203 -4.99999e-08C1.82077 -4.99999e-08 1.57718 0.124613 1.41016 0.283203C1.24313 0.441793 1.12628 0.63077 1.02539 0.84375C0.82362 1.26971 0.68341 1.80371 0.560547 2.43359C0.31482 3.69336 0.158445 5.32564 0 6.95117L0.994141 7.04883C1.15258 5.42334 1.31323 3.80475 1.54297 2.62695C1.65784 2.03805 1.79472 1.55642 1.92969 1.27148C1.99074 1.1426 2.04613 1.07194 2.08203 1.0332C2.11797 1.072 2.17329 1.14247 2.23438 1.27148C2.36942 1.55672 2.5062 2.03761 2.62109 2.62695C2.85087 3.80564 3.01141 5.42653 3.16992 7.05273C3.32843 8.67894 3.48472 10.3116 3.73047 11.5723C3.85334 12.2026 3.99352 12.7378 4.19531 13.1641C4.29621 13.3772 4.41302 13.5659 4.58008 13.7246C4.74713 13.8833 4.99058 14.0078 5.25195 14.0078C5.51333 14.0078 5.75873 13.8833 5.92578 13.7246C6.09283 13.5659 6.2077 13.3772 6.30859 13.1641C6.51039 12.7378 6.65056 12.2026 6.77344 11.5723C7.01919 10.3116 7.17743 8.67894 7.33594 7.05273C7.49445 5.42653 7.65303 3.80564 7.88281 2.62695C7.9977 2.03761 8.13449 1.55672 8.26953 1.27148C8.33041 1.1429 8.38589 1.07219 8.42187 1.0332C8.45781 1.072 8.51313 1.14247 8.57422 1.27148C8.70926 1.55672 8.848 2.03761 8.96289 2.62695C9.19267 3.80564 9.35125 5.42653 9.50977 7.05273C9.66828 8.67894 9.82651 10.3116 10.0723 11.5723C10.1951 12.2026 10.3353 12.7378 10.5371 13.1641C10.638 13.3772 10.7529 13.5659 10.9199 13.7246C11.087 13.8833 11.3304 14.0078 11.5918 14.0078C11.8532 14.0078 12.0986 13.8833 12.2656 13.7246C12.4327 13.5659 12.5475 13.3772 12.6484 13.1641C12.8502 12.7378 12.9904 12.2026 13.1133 11.5723C13.359 10.3116 13.5173 8.67894 13.6758 7.05273C13.8343 5.42653 13.9929 3.80564 14.2227 2.62695C14.3375 2.03761 14.4763 1.55672 14.6113 1.27148C14.6724 1.14247 14.7277 1.072 14.7637 1.0332C14.7997 1.07219 14.8551 1.1429 14.916 1.27148C15.0511 1.55672 15.1878 2.03761 15.3027 2.62695C15.5325 3.80564 15.6911 5.42653 15.8496 7.05273C16.0081 8.67894 16.1664 10.3116 16.4121 11.5723C16.535 12.2026 16.6752 12.7378 16.877 13.1641C16.9778 13.3772 17.0927 13.5659 17.2598 13.7246C17.4268 13.8833 17.6722 14.0078 17.9336 14.0078C18.195 14.0078 18.4384 13.8833 18.6055 13.7246C18.7725 13.5659 18.8893 13.3772 18.9902 13.1641C19.192 12.7378 19.3322 12.2026 19.4551 11.5723C19.7008 10.3116 19.8571 8.67894 20.0156 7.05273L19.0215 6.95507C18.863 8.58128 18.7024 10.2022 18.4727 11.3809C18.3578 11.9702 18.221 12.4511 18.0859 12.7363C18.0251 12.8649 17.9696 12.9356 17.9336 12.9746C17.8977 12.9358 17.8423 12.8653 17.7812 12.7363C17.6462 12.4511 17.5094 11.9702 17.3945 11.3809C17.1648 10.2022 17.0042 8.58129 16.8457 6.95508C16.6872 5.32887 16.529 3.69617 16.2832 2.43555C16.1603 1.80524 16.0202 1.26998 15.8184 0.84375C15.7175 0.630634 15.6026 0.441892 15.4355 0.283203C15.2685 0.124514 15.025 -1.5e-07 14.7637 -4.99999e-08C14.5023 -1.5e-07 14.2569 0.124514 14.0898 0.283203C13.9228 0.441892 13.8079 0.630634 13.707 0.84375C13.5052 1.26998 13.3651 1.80524 13.2422 2.43555C12.9964 3.69617 12.8382 5.32887 12.6797 6.95508C12.5212 8.58129 12.3626 10.2022 12.1328 11.3809C12.0179 11.9702 11.8811 12.4511 11.7461 12.7363C11.6852 12.8649 11.6297 12.9356 11.5938 12.9746C11.5578 12.9358 11.5006 12.8654 11.4395 12.7363C11.3044 12.4511 11.1676 11.9702 11.0527 11.3809C10.823 10.2022 10.6644 8.58129 10.5059 6.95508C10.3473 5.32887 10.1891 3.69617 9.94336 2.43555C9.82048 1.80524 9.68031 1.26998 9.47852 0.84375C9.37762 0.630634 9.26276 0.441892 9.0957 0.283203C8.92865 0.124514 8.68325 -1.5e-07 8.42187 -4.99999e-08C8.1605 -1.5e-07 7.91705 0.124514 7.75 0.283203C7.58295 0.441892 7.46808 0.630634 7.36719 0.84375C7.16539 1.26998 7.02522 1.80524 6.90234 2.43555C6.65659 3.69617 6.49835 5.32887 6.33984 6.95508C6.18133 8.58129 6.0208 10.2022 5.79102 11.3809C5.67613 11.9702 5.53934 12.4511 5.4043 12.7363C5.34321 12.8653 5.28789 12.9358 5.25195 12.9746C5.21601 12.9358 5.16069 12.8653 5.09961 12.7363C4.96457 12.4511 4.82778 11.9702 4.71289 11.3809C4.48311 10.2022 4.32257 8.58129 4.16406 6.95508C4.00555 5.32887 3.84927 3.69617 3.60352 2.43555C3.48064 1.80524 3.34047 1.26998 3.13867 0.84375C3.03777 0.630634 2.92096 0.441892 2.75391 0.283203C2.58685 0.124514 2.3434 -1.5e-07 2.08203 -4.99999e-08Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$xyplot = $author$project$View$Icons$icon24(
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$d('M19.8904 4.31232L17.8116 6.91086L14.7994 8.19007L13.5877 13.184L10.6827 13.8198L8.44596 17.538L5.82962 18.7464L4.92945 20.256L4.07056 19.7439L5.12927 17.9684L7.74754 16.759L10.0479 12.9351L12.7633 12.3408L13.9461 7.46602L17.1884 6.08908L19.1096 3.68762L19.8904 4.31232Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('0.5'),
					$elm$svg$Svg$Attributes$d('M3 2H2V20H3V2Z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('0.5'),
					$elm$svg$Svg$Attributes$d('M22 22V21H4V22H22Z')
				]),
			_List_Nil)
		]));
var $author$project$View$Icons$iconf = function (name) {
	switch (name) {
		case 'home':
			return $author$project$View$Icons$home;
		case 'dashboard':
			return $author$project$View$Icons$dashboard;
		case 'assets':
			return $author$project$View$Icons$assets;
		case 'devices':
			return $author$project$View$Icons$devices;
		case 'devicegroups':
			return $author$project$View$Icons$devicegroups;
		case 'config':
			return $author$project$View$Icons$config;
		case 'users':
			return $author$project$View$Icons$users;
		case 'teams':
			return $author$project$View$Icons$teams;
		case 'organization':
			return $author$project$View$Icons$organization;
		case 'apikeys':
			return $author$project$View$Icons$apikeys;
		case 'location':
			return $author$project$View$Icons$location;
		case 'chat':
			return $author$project$View$Icons$chat;
		case 'help':
			return $author$project$View$Icons$help;
		case 'add':
			return $author$project$View$Icons$add;
		case 'edit':
			return $author$project$View$Icons$edit;
		case 'copy':
			return $author$project$View$Icons$copy;
		case 'remove':
			return $author$project$View$Icons$remove;
		case 'delete':
			return $author$project$View$Icons$delete;
		case 'fullScreen':
			return $author$project$View$Icons$fullScreen;
		case 'exitFullScreen':
			return $author$project$View$Icons$exitFullScreen;
		case 'apexchart':
			return $author$project$View$Icons$apexchart;
		case 'circularWaveform':
			return $author$project$View$Icons$circularWaveform;
		case 'iframe':
			return $author$project$View$Icons$iframe;
		case 'image':
			return $author$project$View$Icons$image;
		case 'longWaveform':
			return $author$project$View$Icons$longWaveform;
		case 'mimic':
			return $author$project$View$Icons$mimic;
		case 'orbit':
			return $author$project$View$Icons$orbit;
		case 'onlineValue':
			return $author$project$View$Icons$onlineValue;
		case 'parameters':
			return $author$project$View$Icons$parameters;
		case 'plotlychart':
			return $author$project$View$Icons$plotlychart;
		case 'phaseDiagram':
			return $author$project$View$Icons$phaseDiagram;
		case 'shaftCenterline':
			return $author$project$View$Icons$shaftCenterline;
		case 'spectrum':
			return $author$project$View$Icons$spectrum;
		case 'text':
			return $author$project$View$Icons$text;
		case 'timeline':
			return $author$project$View$Icons$timeline;
		case 'trend':
			return $author$project$View$Icons$trend;
		case 'waveform':
			return $author$project$View$Icons$waveform;
		case 'waterfall':
			return $author$project$View$Icons$waterfall;
		case 'xyplot':
			return $author$project$View$Icons$xyplot;
		case 'nowidget':
			return $author$project$View$Icons$nowidget;
		case 'folder':
			return $author$project$View$Icons$folder;
		case 'folderUp':
			return $author$project$View$Icons$folderUp;
		case 'folderAdd':
			return $author$project$View$Icons$folderAdd;
		case 'folderDelete':
			return $author$project$View$Icons$folderDelete;
		case 'refresh':
			return $author$project$View$Icons$refresh;
		case 'reset':
			return $author$project$View$Icons$reset;
		case 'timespan':
			return $author$project$View$Icons$timespan;
		case 'save':
			return $author$project$View$Icons$save;
		case 'importDashboard':
			return $author$project$View$Icons$importDashboard;
		case 'star':
			return $author$project$View$Icons$star;
		case 'downArrow':
			return $author$project$View$Icons$downArrow;
		default:
			return $elm$html$Html$text('');
	}
};
var $elm$html$Html$legend = _VirtualDom_node('legend');
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$View$FieldsetAccordion$fieldsetAccordion = F2(
	function (accordion, status) {
		var isOpen = A2($elm$core$Set$member, accordion.aY, status);
		var head = A2(
			$elm$html$Html$legend,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class('fieldsetAccordionLegend text-lg font-semibold border-b border-gray-300 cursor-pointer flex flex-row'),
				accordion.aR),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flex flex-1 block')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(accordion.bR)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flex fieldsetAccordionToggleIcon block h-6 mt-1 ml-6')
						]),
					_List_fromArray(
						[
							$author$project$View$Icons$iconf('downArrow')
						]))
				]));
		var content = _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('fieldsetAccordionContent block p-4')
					]),
				accordion.aT)
			]);
		return A2(
			$elm$html$Html$fieldset,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('fieldsetAccordion mt-10'),
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('fieldsetAccordionClosed', !isOpen)
						])),
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('fieldsetAccordionOpen', isOpen)
						]))
				]),
			A2($elm$core$List$cons, head, content));
	});
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$p = _VirtualDom_node('p');
var $author$project$Utils$boolToString = function (b) {
	return b ? 'true' : 'false';
};
var $author$project$Utils$unPackBool = function (val) {
	if (!val.$) {
		var bool = val.a;
		return bool;
	} else {
		return false;
	}
};
var $author$project$View$Detail$booleanPropertyDetail = F2(
	function (property, propertyValue) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(property.ay)
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Utils$boolToString(
								$author$project$Utils$unPackBool(propertyValue)))
						]))
				]));
	});
var $author$project$Utils$empty = $elm$html$Html$text('');
var $elm_community$html_extra$Html$Extra$nothing = $elm$html$Html$text('');
var $elm_community$html_extra$Html$Extra$viewMaybe = F2(
	function (fn, maybeThing) {
		return A2(
			$elm$core$Maybe$withDefault,
			$elm_community$html_extra$Html$Extra$nothing,
			A2($elm$core$Maybe$map, fn, maybeThing));
	});
var $author$project$View$Detail$intEnumDetail = F3(
	function (name, value, _v0) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(name)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(pv.ay)
								]));
					},
					value)
				]));
	});
var $author$project$View$Detail$stringEnumDetail = F3(
	function (name, value, _v0) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(name)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(pv.ay)
								]));
					},
					value)
				]));
	});
var $author$project$View$Detail$enumPropertyDetail = F3(
	function (property, propertyValue, attrs) {
		if (!propertyValue.$) {
			if (!propertyValue.a.$) {
				var _v1 = propertyValue.a;
				var selected = _v1.a;
				return A3($author$project$View$Detail$stringEnumDetail, property.ay, selected, attrs);
			} else {
				var _v2 = propertyValue.a;
				var selected = _v2.a;
				return A3($author$project$View$Detail$intEnumDetail, property.ay, selected, attrs);
			}
		} else {
			return $author$project$Utils$empty;
		}
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $author$project$View$Detail$floatPropertyDetail = F3(
	function (property, propertyValue, _v0) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(property.ay)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromFloat(pv))
								]));
					},
					propertyValue)
				]));
	});
var $author$project$View$Detail$integerPropertyDetail = F3(
	function (property, propertyValue, _v0) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(property.ay)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(pv))
								]));
					},
					propertyValue)
				]));
	});
var $author$project$View$Detail$stringPropertyDetail = F3(
	function (property, propertyValue, _v0) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(property.ay)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(pv)
								]));
					},
					propertyValue)
				]));
	});
var $author$project$Pages$Detail$Schema_$Instance_$propertyToDetail = function (property) {
	var attrs = (property.bt || property.c8) ? _List_fromArray(
		[
			$elm$html$Html$Attributes$class('text-gray-500')
		]) : _List_Nil;
	var detail = function () {
		var _v0 = property.aP;
		switch (_v0.$) {
			case 0:
				var val = _v0.a;
				return A3($author$project$View$Detail$stringPropertyDetail, property, val, attrs);
			case 1:
				var val = _v0.a;
				return A2($author$project$View$Detail$booleanPropertyDetail, property, val);
			case 2:
				var val = _v0.a;
				return A3($author$project$View$Detail$integerPropertyDetail, property, val, attrs);
			case 3:
				var val = _v0.a;
				return A3($author$project$View$Detail$floatPropertyDetail, property, val, attrs);
			default:
				var val = _v0.a;
				return A3($author$project$View$Detail$enumPropertyDetail, property, val, attrs);
		}
	}();
	return detail;
};
var $author$project$Shared$removeHiddenProperties = $elm$core$List$filter(
	function (v) {
		return !v.cT;
	});
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm_community$html_extra$Html$Extra$viewIf = F2(
	function (condition, html) {
		return condition ? html : $elm_community$html_extra$Html$Extra$nothing;
	});
var $author$project$Pages$Detail$Schema_$Instance_$componentsToDetail = F2(
	function (model, components) {
		var componentsDetails = $elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (component) {
					var schema = component.y;
					var componentContent = _List_fromArray(
						[
							A2(
							$elm_community$html_extra$Html$Extra$viewIf,
							component.cN,
							A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('text-lg font-semibold mb-4 border-b border-gray-300')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(component.ay)
									]))),
							A2(
							$elm_community$html_extra$Html$Extra$viewMaybe,
							function (valid_schemas) {
								return A2(
									$elm$html$Html$ul,
									_List_Nil,
									A2(
										$elm$core$List$map,
										function (valid_schema) {
											return A2(
												$elm$html$Html$li,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text(valid_schema)
													]));
										},
										valid_schemas));
							},
							component.dD),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('flex-1 w-auto h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4')
								]),
							A2(
								$elm$core$Maybe$withDefault,
								_List_Nil,
								A2(
									$elm$core$Maybe$map,
									function (properties) {
										return A2(
											$elm$core$List$map,
											$author$project$Pages$Detail$Schema_$Instance_$propertyToDetail,
											$author$project$Shared$removeHiddenProperties(properties));
									},
									$author$project$Domain$Schema$getComponentSchema(schema).ap)))
						]);
					return _List_fromArray(
						[
							A2(
							$elm_community$html_extra$Html$Extra$viewIf,
							component.cN,
							A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$id('component-' + component.bR),
										$elm$html$Html$Attributes$class('mt-10')
									]),
								componentContent)),
							A2(
							$elm_community$html_extra$Html$Extra$viewIf,
							!component.cN,
							A2(
								$author$project$View$FieldsetAccordion$fieldsetAccordion,
								{
									aR: _List_fromArray(
										[
											$elm$html$Html$Events$onClick(
											$author$project$Pages$Detail$Schema_$Instance_$FieldsetAccordionToggle(component.bR))
										]),
									aT: componentContent,
									aY: component.bR,
									bR: component.bR
								},
								model.I))
						]);
				},
				components));
		return componentsDetails;
	});
var $author$project$Pages$Detail$Schema_$Instance_$schemaToDetail = F2(
	function (model, schema) {
		var detail = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('detail-' + schema.aY),
					$elm$html$Html$Attributes$class('flex-1 w-auto h-full')
				]),
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2(
					$elm$core$Maybe$map,
					function (properties) {
						return A2(
							$elm$core$List$map,
							$author$project$Pages$Detail$Schema_$Instance_$propertyToDetail,
							$author$project$Shared$removeHiddenProperties(properties));
					},
					schema.ap)));
		return _List_fromArray(
			[
				detail,
				A2(
				$elm_community$html_extra$Html$Extra$viewMaybe,
				function (components) {
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$id('components')
							]),
						A2($author$project$Pages$Detail$Schema_$Instance_$componentsToDetail, model, components));
				},
				schema.ax)
			]);
	});
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$View$Buttons$standardButton = F3(
	function (shared, attrs, content) {
		return A2(
			$elm$html$Html$button,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'buttons.standard')),
				attrs),
			_List_fromArray(
				[
					$elm$html$Html$text(content)
				]));
	});
var $author$project$Pages$Detail$Schema_$Instance_$instanceDetailTab = F2(
	function (shared, model) {
		var detail = function (schema) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('contentPanel'),
						$elm$html$Html$Attributes$class('px-3')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('mb-4')
							]),
						A2($author$project$Pages$Detail$Schema_$Instance_$schemaToDetail, model, schema))
					]));
		};
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('flex flex-col')
				]),
			_List_fromArray(
				[
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (ins) {
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('flex justify-end mb-6')
								]),
							_List_fromArray(
								[
									A3(
									$author$project$View$Buttons$standardButton,
									shared,
									_List_fromArray(
										[
											$elm$html$Html$Events$onClick(
											$author$project$Pages$Detail$Schema_$Instance_$InstanceEdit(ins.aY))
										]),
									'Edit')
								]));
					},
					model.aB),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (schema) {
						return A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									detail(schema)
								]));
					},
					model.y)
				]));
	});
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $author$project$View$TelemetryDetail$ourTimezone = $elm$time$Time$utc;
var $ryannhg$date_format$DateFormat$DayOfMonthSuffix = {$: 6};
var $ryannhg$date_format$DateFormat$dayOfMonthSuffix = $ryannhg$date_format$DateFormat$DayOfMonthSuffix;
var $ryannhg$date_format$DateFormat$Language$Language = F6(
	function (toMonthName, toMonthAbbreviation, toWeekdayName, toWeekdayAbbreviation, toAmPm, toOrdinalSuffix) {
		return {dr: toAmPm, du: toMonthAbbreviation, dv: toMonthName, Y: toOrdinalSuffix, dz: toWeekdayAbbreviation, dA: toWeekdayName};
	});
var $ryannhg$date_format$DateFormat$Language$toEnglishAmPm = function (hour) {
	return (hour > 11) ? 'pm' : 'am';
};
var $ryannhg$date_format$DateFormat$Language$toEnglishMonthName = function (month) {
	switch (month) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		default:
			return 'December';
	}
};
var $ryannhg$date_format$DateFormat$Language$toEnglishSuffix = function (num) {
	var _v0 = A2($elm$core$Basics$modBy, 100, num);
	switch (_v0) {
		case 11:
			return 'th';
		case 12:
			return 'th';
		case 13:
			return 'th';
		default:
			var _v1 = A2($elm$core$Basics$modBy, 10, num);
			switch (_v1) {
				case 1:
					return 'st';
				case 2:
					return 'nd';
				case 3:
					return 'rd';
				default:
					return 'th';
			}
	}
};
var $ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName = function (weekday) {
	switch (weekday) {
		case 0:
			return 'Monday';
		case 1:
			return 'Tuesday';
		case 2:
			return 'Wednesday';
		case 3:
			return 'Thursday';
		case 4:
			return 'Friday';
		case 5:
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $ryannhg$date_format$DateFormat$Language$english = A6(
	$ryannhg$date_format$DateFormat$Language$Language,
	$ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
	A2(
		$elm$core$Basics$composeR,
		$ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
		$elm$core$String$left(3)),
	$ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
	A2(
		$elm$core$Basics$composeR,
		$ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
		$elm$core$String$left(3)),
	$ryannhg$date_format$DateFormat$Language$toEnglishAmPm,
	$ryannhg$date_format$DateFormat$Language$toEnglishSuffix);
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.bj, posixMinutes) < 0) {
					return posixMinutes + era.bU;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $ryannhg$date_format$DateFormat$amPm = F3(
	function (language, zone, posix) {
		return language.dr(
			A2($elm$time$Time$toHour, zone, posix));
	});
var $elm$core$Basics$ge = _Utils_ge;
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		bA: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		bP: month,
		cr: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).bA;
	});
var $ryannhg$date_format$DateFormat$dayOfMonth = $elm$time$Time$toDay;
var $elm$time$Time$Sun = 6;
var $elm$time$Time$Fri = 4;
var $elm$time$Time$Mon = 0;
var $elm$time$Time$Sat = 5;
var $elm$time$Time$Thu = 3;
var $elm$time$Time$Tue = 1;
var $elm$time$Time$Wed = 2;
var $ryannhg$date_format$DateFormat$days = _List_fromArray(
	[6, 0, 1, 2, 3, 4, 5]);
var $elm$time$Time$toWeekday = F2(
	function (zone, time) {
		var _v0 = A2(
			$elm$core$Basics$modBy,
			7,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60 * 24));
		switch (_v0) {
			case 0:
				return 3;
			case 1:
				return 4;
			case 2:
				return 5;
			case 3:
				return 6;
			case 4:
				return 0;
			case 5:
				return 1;
			default:
				return 2;
		}
	});
var $ryannhg$date_format$DateFormat$dayOfWeek = F2(
	function (zone, posix) {
		return function (_v1) {
			var i = _v1.a;
			return i;
		}(
			A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2(0, 6),
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						function (_v0) {
							var day = _v0.b;
							return _Utils_eq(
								day,
								A2($elm$time$Time$toWeekday, zone, posix));
						},
						A2(
							$elm$core$List$indexedMap,
							F2(
								function (i, day) {
									return _Utils_Tuple2(i, day);
								}),
							$ryannhg$date_format$DateFormat$days)))));
	});
var $ryannhg$date_format$DateFormat$isLeapYear = function (year_) {
	return (!(!A2($elm$core$Basics$modBy, 4, year_))) ? false : ((!(!A2($elm$core$Basics$modBy, 100, year_))) ? true : ((!(!A2($elm$core$Basics$modBy, 400, year_))) ? false : true));
};
var $ryannhg$date_format$DateFormat$daysInMonth = F2(
	function (year_, month) {
		switch (month) {
			case 0:
				return 31;
			case 1:
				return $ryannhg$date_format$DateFormat$isLeapYear(year_) ? 29 : 28;
			case 2:
				return 31;
			case 3:
				return 30;
			case 4:
				return 31;
			case 5:
				return 30;
			case 6:
				return 31;
			case 7:
				return 31;
			case 8:
				return 30;
			case 9:
				return 31;
			case 10:
				return 30;
			default:
				return 31;
		}
	});
var $elm$time$Time$Jan = 0;
var $elm$time$Time$Apr = 3;
var $elm$time$Time$Aug = 7;
var $elm$time$Time$Dec = 11;
var $elm$time$Time$Feb = 1;
var $elm$time$Time$Jul = 6;
var $elm$time$Time$Jun = 5;
var $elm$time$Time$Mar = 2;
var $elm$time$Time$May = 4;
var $elm$time$Time$Nov = 10;
var $elm$time$Time$Oct = 9;
var $elm$time$Time$Sep = 8;
var $ryannhg$date_format$DateFormat$months = _List_fromArray(
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).bP;
		switch (_v0) {
			case 1:
				return 0;
			case 2:
				return 1;
			case 3:
				return 2;
			case 4:
				return 3;
			case 5:
				return 4;
			case 6:
				return 5;
			case 7:
				return 6;
			case 8:
				return 7;
			case 9:
				return 8;
			case 10:
				return 9;
			case 11:
				return 10;
			default:
				return 11;
		}
	});
var $ryannhg$date_format$DateFormat$monthPair = F2(
	function (zone, posix) {
		return A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			$elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (_v0) {
						var i = _v0.a;
						var m = _v0.b;
						return _Utils_eq(
							m,
							A2($elm$time$Time$toMonth, zone, posix));
					},
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (a, b) {
								return _Utils_Tuple2(a, b);
							}),
						$ryannhg$date_format$DateFormat$months))));
	});
var $ryannhg$date_format$DateFormat$monthNumber_ = F2(
	function (zone, posix) {
		return 1 + function (_v0) {
			var i = _v0.a;
			var m = _v0.b;
			return i;
		}(
			A2($ryannhg$date_format$DateFormat$monthPair, zone, posix));
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).cr;
	});
var $ryannhg$date_format$DateFormat$dayOfYear = F2(
	function (zone, posix) {
		var monthsBeforeThisOne = A2(
			$elm$core$List$take,
			A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix) - 1,
			$ryannhg$date_format$DateFormat$months);
		var daysBeforeThisMonth = $elm$core$List$sum(
			A2(
				$elm$core$List$map,
				$ryannhg$date_format$DateFormat$daysInMonth(
					A2($elm$time$Time$toYear, zone, posix)),
				monthsBeforeThisOne));
		return daysBeforeThisMonth + A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix);
	});
var $ryannhg$date_format$DateFormat$quarter = F2(
	function (zone, posix) {
		return (A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix) / 4) | 0;
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $ryannhg$date_format$DateFormat$toFixedLength = F2(
	function (totalChars, num) {
		var numStr = $elm$core$String$fromInt(num);
		var numZerosNeeded = totalChars - $elm$core$String$length(numStr);
		var zeros = A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				function (_v0) {
					return '0';
				},
				A2($elm$core$List$range, 1, numZerosNeeded)));
		return _Utils_ap(zeros, numStr);
	});
var $elm$core$String$toLower = _String_toLower;
var $elm$time$Time$toMillis = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			1000,
			$elm$time$Time$posixToMillis(time));
	});
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $ryannhg$date_format$DateFormat$toNonMilitary = function (num) {
	return (!num) ? 12 : ((num <= 12) ? num : (num - 12));
};
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $elm$core$String$toUpper = _String_toUpper;
var $ryannhg$date_format$DateFormat$millisecondsPerYear = $elm$core$Basics$round((((1000 * 60) * 60) * 24) * 365.25);
var $ryannhg$date_format$DateFormat$firstDayOfYear = F2(
	function (zone, time) {
		return $elm$time$Time$millisToPosix(
			$ryannhg$date_format$DateFormat$millisecondsPerYear * A2($elm$time$Time$toYear, zone, time));
	});
var $ryannhg$date_format$DateFormat$weekOfYear = F2(
	function (zone, posix) {
		var firstDay = A2($ryannhg$date_format$DateFormat$firstDayOfYear, zone, posix);
		var firstDayOffset = A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, firstDay);
		var daysSoFar = A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix);
		return (((daysSoFar + firstDayOffset) / 7) | 0) + 1;
	});
var $ryannhg$date_format$DateFormat$year = F2(
	function (zone, time) {
		return $elm$core$String$fromInt(
			A2($elm$time$Time$toYear, zone, time));
	});
var $ryannhg$date_format$DateFormat$piece = F4(
	function (language, zone, posix, token) {
		switch (token.$) {
			case 0:
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 1:
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.Y(num));
				}(
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 2:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 3:
				return language.du(
					A2($elm$time$Time$toMonth, zone, posix));
			case 4:
				return language.dv(
					A2($elm$time$Time$toMonth, zone, posix));
			case 17:
				return $elm$core$String$fromInt(
					1 + A2($ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 18:
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.Y(num));
				}(
					1 + A2($ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 5:
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 6:
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.Y(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 7:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 8:
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 9:
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.Y(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 10:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 11:
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 12:
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.Y(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 13:
				return language.dz(
					A2($elm$time$Time$toWeekday, zone, posix));
			case 14:
				return language.dA(
					A2($elm$time$Time$toWeekday, zone, posix));
			case 19:
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 20:
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.Y(num));
				}(
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 21:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 15:
				return A2(
					$elm$core$String$right,
					2,
					A2($ryannhg$date_format$DateFormat$year, zone, posix));
			case 16:
				return A2($ryannhg$date_format$DateFormat$year, zone, posix);
			case 22:
				return $elm$core$String$toUpper(
					A3($ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 23:
				return $elm$core$String$toLower(
					A3($ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 24:
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toHour, zone, posix));
			case 25:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toHour, zone, posix));
			case 26:
				return $elm$core$String$fromInt(
					$ryannhg$date_format$DateFormat$toNonMilitary(
						A2($elm$time$Time$toHour, zone, posix)));
			case 27:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					$ryannhg$date_format$DateFormat$toNonMilitary(
						A2($elm$time$Time$toHour, zone, posix)));
			case 28:
				return $elm$core$String$fromInt(
					1 + A2($elm$time$Time$toHour, zone, posix));
			case 29:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					1 + A2($elm$time$Time$toHour, zone, posix));
			case 30:
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toMinute, zone, posix));
			case 31:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toMinute, zone, posix));
			case 32:
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toSecond, zone, posix));
			case 33:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toSecond, zone, posix));
			case 34:
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toMillis, zone, posix));
			case 35:
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2($elm$time$Time$toMillis, zone, posix));
			default:
				var string = token.a;
				return string;
		}
	});
var $ryannhg$date_format$DateFormat$formatWithLanguage = F4(
	function (language, tokens, zone, time) {
		return A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				A3($ryannhg$date_format$DateFormat$piece, language, zone, time),
				tokens));
	});
var $ryannhg$date_format$DateFormat$format = $ryannhg$date_format$DateFormat$formatWithLanguage($ryannhg$date_format$DateFormat$Language$english);
var $ryannhg$date_format$DateFormat$HourMilitaryFromOneFixed = {$: 29};
var $ryannhg$date_format$DateFormat$hourMilitaryFromOneFixed = $ryannhg$date_format$DateFormat$HourMilitaryFromOneFixed;
var $ryannhg$date_format$DateFormat$MinuteFixed = {$: 31};
var $ryannhg$date_format$DateFormat$minuteFixed = $ryannhg$date_format$DateFormat$MinuteFixed;
var $ryannhg$date_format$DateFormat$MonthNameFull = {$: 4};
var $ryannhg$date_format$DateFormat$monthNameFull = $ryannhg$date_format$DateFormat$MonthNameFull;
var $ryannhg$date_format$DateFormat$SecondFixed = {$: 33};
var $ryannhg$date_format$DateFormat$secondFixed = $ryannhg$date_format$DateFormat$SecondFixed;
var $ryannhg$date_format$DateFormat$Text = function (a) {
	return {$: 36, a: a};
};
var $ryannhg$date_format$DateFormat$text = $ryannhg$date_format$DateFormat$Text;
var $ryannhg$date_format$DateFormat$YearNumber = {$: 16};
var $ryannhg$date_format$DateFormat$yearNumber = $ryannhg$date_format$DateFormat$YearNumber;
var $author$project$View$TelemetryDetail$telemetryDetailDateFormatter = $ryannhg$date_format$DateFormat$format(
	_List_fromArray(
		[
			$ryannhg$date_format$DateFormat$monthNameFull,
			$ryannhg$date_format$DateFormat$text(' '),
			$ryannhg$date_format$DateFormat$dayOfMonthSuffix,
			$ryannhg$date_format$DateFormat$text(', '),
			$ryannhg$date_format$DateFormat$yearNumber,
			$ryannhg$date_format$DateFormat$text(' '),
			$ryannhg$date_format$DateFormat$hourMilitaryFromOneFixed,
			$ryannhg$date_format$DateFormat$text(':'),
			$ryannhg$date_format$DateFormat$minuteFixed,
			$ryannhg$date_format$DateFormat$text(':'),
			$ryannhg$date_format$DateFormat$secondFixed
		]));
var $author$project$View$TelemetryDetail$toPosix = function (millis) {
	return $elm$time$Time$millisToPosix(millis);
};
var $author$project$View$TelemetryDetail$booleanPropertyDetail = F2(
	function (property, propertyValue) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('group')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(property.ay)
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Utils$boolToString(
								$author$project$Utils$unPackBool(propertyValue)))
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-xs text-gray-400 italic'),
									$elm$html$Html$Attributes$class('opacity-0 group-hover:opacity-100 transition-opacity transition duration-300 ease-in-out')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									'Updated on ' + A2(
										$author$project$View$TelemetryDetail$telemetryDetailDateFormatter,
										$author$project$View$TelemetryDetail$ourTimezone,
										$author$project$View$TelemetryDetail$toPosix(property.cl)))
								]));
					},
					propertyValue)
				]));
	});
var $author$project$View$TelemetryDetail$intEnumDetail = F3(
	function (name, value, attrs) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(name)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(pv.ay)
								]));
					},
					value)
				]));
	});
var $author$project$View$TelemetryDetail$stringEnumDetail = F3(
	function (name, value, attrs) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(name)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(pv.ay)
								]));
					},
					value)
				]));
	});
var $author$project$View$TelemetryDetail$enumPropertyDetail = F3(
	function (property, propertyValue, attrs) {
		if (!propertyValue.$) {
			if (!propertyValue.a.$) {
				var _v1 = propertyValue.a;
				var selected = _v1.a;
				return A3($author$project$View$TelemetryDetail$stringEnumDetail, property.ay, selected, attrs);
			} else {
				var _v2 = propertyValue.a;
				var selected = _v2.a;
				return A3($author$project$View$TelemetryDetail$intEnumDetail, property.ay, selected, attrs);
			}
		} else {
			return $author$project$Utils$empty;
		}
	});
var $author$project$View$TelemetryDetail$floatPropertyDetail = F3(
	function (property, propertyValue, attrs) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('group')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(property.ay)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromFloat(pv))
								]));
					},
					propertyValue),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-xs text-gray-400 italic'),
									$elm$html$Html$Attributes$class('opacity-0 group-hover:opacity-100 transition-opacity transition duration-300 ease-in-out')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									'Updated on ' + A2(
										$author$project$View$TelemetryDetail$telemetryDetailDateFormatter,
										$author$project$View$TelemetryDetail$ourTimezone,
										$author$project$View$TelemetryDetail$toPosix(property.cl)))
								]));
					},
					propertyValue)
				]));
	});
var $author$project$View$TelemetryDetail$integerPropertyDetail = F3(
	function (property, propertyValue, attrs) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('group')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(property.ay)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(pv))
								]));
					},
					propertyValue),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-xs text-gray-400 italic'),
									$elm$html$Html$Attributes$class('opacity-0 group-hover:opacity-100 transition-opacity transition duration-300 ease-in-out')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									'Updated on ' + A2(
										$author$project$View$TelemetryDetail$telemetryDetailDateFormatter,
										$author$project$View$TelemetryDetail$ourTimezone,
										$author$project$View$TelemetryDetail$toPosix(property.cl)))
								]));
					},
					propertyValue)
				]));
	});
var $ryannhg$date_format$DateFormat$Relative$defaultInSomeDays = function (days) {
	return (days < 2) ? 'tomorrow' : ('in ' + ($elm$core$String$fromInt(days) + ' days'));
};
var $ryannhg$date_format$DateFormat$Relative$defaultInSomeHours = function (hours) {
	return (hours < 2) ? 'in an hour' : ('in ' + ($elm$core$String$fromInt(hours) + ' hours'));
};
var $ryannhg$date_format$DateFormat$Relative$defaultInSomeMinutes = function (minutes) {
	return (minutes < 2) ? 'in a minute' : ('in ' + ($elm$core$String$fromInt(minutes) + ' minutes'));
};
var $ryannhg$date_format$DateFormat$Relative$defaultInSomeMonths = function (months) {
	return (months < 2) ? 'in a month' : ('in ' + ($elm$core$String$fromInt(months) + ' months'));
};
var $ryannhg$date_format$DateFormat$Relative$defaultInSomeSeconds = function (seconds) {
	return (seconds < 30) ? 'in a few seconds' : ('in ' + ($elm$core$String$fromInt(seconds) + ' seconds'));
};
var $ryannhg$date_format$DateFormat$Relative$defaultInSomeYears = function (years) {
	return (years < 2) ? 'in a year' : ('in ' + ($elm$core$String$fromInt(years) + ' years'));
};
var $ryannhg$date_format$DateFormat$Relative$defaultRightNow = 'right now';
var $ryannhg$date_format$DateFormat$Relative$defaultSomeDaysAgo = function (days) {
	return (days < 2) ? 'yesterday' : ($elm$core$String$fromInt(days) + ' days ago');
};
var $ryannhg$date_format$DateFormat$Relative$defaultSomeHoursAgo = function (hours) {
	return (hours < 2) ? 'an hour ago' : ($elm$core$String$fromInt(hours) + ' hours ago');
};
var $ryannhg$date_format$DateFormat$Relative$defaultSomeMinutesAgo = function (minutes) {
	return (minutes < 2) ? 'a minute ago' : ($elm$core$String$fromInt(minutes) + ' minutes ago');
};
var $ryannhg$date_format$DateFormat$Relative$defaultSomeMonthsAgo = function (months) {
	return (months < 2) ? 'last month' : ($elm$core$String$fromInt(months) + ' months ago');
};
var $ryannhg$date_format$DateFormat$Relative$defaultSomeSecondsAgo = function (seconds) {
	return (seconds < 30) ? 'just now' : ($elm$core$String$fromInt(seconds) + ' seconds ago');
};
var $ryannhg$date_format$DateFormat$Relative$defaultSomeYearsAgo = function (years) {
	return (years < 2) ? 'last year' : ($elm$core$String$fromInt(years) + ' years ago');
};
var $ryannhg$date_format$DateFormat$Relative$defaultRelativeOptions = {aZ: $ryannhg$date_format$DateFormat$Relative$defaultInSomeDays, a_: $ryannhg$date_format$DateFormat$Relative$defaultInSomeHours, a$: $ryannhg$date_format$DateFormat$Relative$defaultInSomeMinutes, a0: $ryannhg$date_format$DateFormat$Relative$defaultInSomeMonths, a1: $ryannhg$date_format$DateFormat$Relative$defaultInSomeSeconds, a2: $ryannhg$date_format$DateFormat$Relative$defaultInSomeYears, bb: $ryannhg$date_format$DateFormat$Relative$defaultRightNow, bd: $ryannhg$date_format$DateFormat$Relative$defaultSomeDaysAgo, be: $ryannhg$date_format$DateFormat$Relative$defaultSomeHoursAgo, bf: $ryannhg$date_format$DateFormat$Relative$defaultSomeMinutesAgo, bg: $ryannhg$date_format$DateFormat$Relative$defaultSomeMonthsAgo, bh: $ryannhg$date_format$DateFormat$Relative$defaultSomeSecondsAgo, bi: $ryannhg$date_format$DateFormat$Relative$defaultSomeYearsAgo};
var $ryannhg$date_format$DateFormat$Relative$RelativeTimeFunctions = F6(
	function (seconds, minutes, hours, days, months, years) {
		return {bB: days, bJ: hours, bO: minutes, bQ: months, b8: seconds, cs: years};
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $ryannhg$date_format$DateFormat$Relative$relativeTimeWithFunctions = F3(
	function (zone, millis, functions) {
		var seconds = (millis / 1000) | 0;
		var posix = $elm$time$Time$millisToPosix(millis);
		var minutes = (seconds / 60) | 0;
		var hours = (minutes / 60) | 0;
		var days = (hours / 24) | 0;
		return (minutes < 1) ? functions.b8(
			A2($elm$time$Time$toSecond, zone, posix)) : ((hours < 1) ? functions.bO(
			A2($elm$time$Time$toMinute, zone, posix)) : ((hours < 24) ? functions.bJ(
			A2($elm$time$Time$toHour, zone, posix)) : ((days < 30) ? functions.bB(days) : ((days < 365) ? functions.bQ((days / 30) | 0) : functions.cs((days / 365) | 0)))));
	});
var $ryannhg$date_format$DateFormat$Relative$toMilliseconds = $elm$time$Time$posixToMillis;
var $ryannhg$date_format$DateFormat$Relative$relativeTimeWithOptions = F3(
	function (options, start, end) {
		var differenceInMilliseconds = $ryannhg$date_format$DateFormat$Relative$toMilliseconds(end) - $ryannhg$date_format$DateFormat$Relative$toMilliseconds(start);
		return (!differenceInMilliseconds) ? options.bb : A3(
			$ryannhg$date_format$DateFormat$Relative$relativeTimeWithFunctions,
			$elm$time$Time$utc,
			$elm$core$Basics$abs(differenceInMilliseconds),
			(differenceInMilliseconds < 0) ? A6($ryannhg$date_format$DateFormat$Relative$RelativeTimeFunctions, options.bh, options.bf, options.be, options.bd, options.bg, options.bi) : A6($ryannhg$date_format$DateFormat$Relative$RelativeTimeFunctions, options.a1, options.a$, options.a_, options.aZ, options.a0, options.a2));
	});
var $ryannhg$date_format$DateFormat$Relative$relativeTime = $ryannhg$date_format$DateFormat$Relative$relativeTimeWithOptions($ryannhg$date_format$DateFormat$Relative$defaultRelativeOptions);
var $author$project$View$TelemetryDetail$stringPropertyDetail = F4(
	function (now, property, propertyValue, attrs) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('group')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(property.ay)
						])),
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (pv) {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(pv)
								]));
					},
					propertyValue),
					function () {
					if (!now.$) {
						var val = now.a;
						return A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-xs text-gray-400 italic'),
									$elm$html$Html$Attributes$class('opacity-0 group-hover:opacity-100 transition-opacity transition duration-300 ease-in-out')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Updated '),
									$elm$html$Html$text(
									A2(
										$ryannhg$date_format$DateFormat$Relative$relativeTime,
										val,
										$author$project$View$TelemetryDetail$toPosix(property.cl)))
								]));
					} else {
						return A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Getting times...')
								]));
					}
				}()
				]));
	});
var $author$project$Pages$Detail$Schema_$Instance_$telemetryPropertyToDetail = F2(
	function (now, property) {
		var attrs = _List_Nil;
		var detail = function () {
			var _v0 = property.aP;
			switch (_v0.$) {
				case 0:
					var val = _v0.a;
					return A4($author$project$View$TelemetryDetail$stringPropertyDetail, now, property, val, attrs);
				case 1:
					var val = _v0.a;
					return A2($author$project$View$TelemetryDetail$booleanPropertyDetail, property, val);
				case 2:
					var val = _v0.a;
					return A3($author$project$View$TelemetryDetail$integerPropertyDetail, property, val, attrs);
				case 3:
					var val = _v0.a;
					return A3($author$project$View$TelemetryDetail$floatPropertyDetail, property, val, attrs);
				default:
					var val = _v0.a;
					return A3($author$project$View$TelemetryDetail$enumPropertyDetail, property, val, attrs);
			}
		}();
		return detail;
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$Pages$Detail$Schema_$Instance_$schemaToTelemetry = F2(
	function (now, schema) {
		var detail = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('detail-' + schema.aY),
					$elm$html$Html$Attributes$class('flex-1 w-auto h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4')
				]),
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2(
					$elm$core$Maybe$map,
					function (properties) {
						return $elm$core$Dict$values(
							A2(
								$elm$core$Dict$map,
								F2(
									function (_v0, v) {
										return A2($author$project$Pages$Detail$Schema_$Instance_$telemetryPropertyToDetail, now, v);
									}),
								properties));
					},
					schema.bm)));
		return _List_fromArray(
			[detail]);
	});
var $author$project$Pages$Detail$Schema_$Instance_$instanceTelemetryTab = function (model) {
	var telemetry = function (schema) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('contentPanel'),
					$elm$html$Html$Attributes$class('px-3')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('telemetry'),
							$elm$html$Html$Attributes$class('mb-4')
						]),
					A2($author$project$Pages$Detail$Schema_$Instance_$schemaToTelemetry, model.aG, schema))
				]));
	};
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('flex flex-col')
			]),
		_List_fromArray(
			[
				A2(
				$elm_community$html_extra$Html$Extra$viewMaybe,
				function (schema) {
					return A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								telemetry(schema)
							]));
				},
				model.y)
			]));
};
var $author$project$Pages$Detail$Schema_$Instance_$instanceTelemetryTabID = $author$project$View$Tabs$idFromString('instanceTelemetryTabID');
var $author$project$View$Tabs$tabIdToString = function (_v0) {
	var str = _v0;
	return str;
};
var $author$project$View$Tabs$styleTabs = F4(
	function (idTab, name, attrs, activeTab) {
		var baseAttrs = _List_fromArray(
			[
				$elm$html$Html$Attributes$id(
				'tabsComponent-tabControls--' + $author$project$View$Tabs$tabIdToString(idTab)),
				$elm$html$Html$Attributes$class('px-8 py-2 cursor-pointer'),
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'font-semibold border-b-4 border-blue-500',
						_Utils_eq(activeTab, idTab))
					]))
			]);
		return A2(
			$elm$html$Html$div,
			_Utils_ap(baseAttrs, attrs),
			_List_fromArray(
				[
					$elm$html$Html$text(name)
				]));
	});
var $author$project$View$Tabs$tabPanel = F3(
	function (idTab, activeTab, content) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(
					'tabsComponent-tabContent--' + $author$project$View$Tabs$tabIdToString(idTab)),
					$elm$html$Html$Attributes$class('w-full py-2'),
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'hidden',
							!_Utils_eq(activeTab, idTab))
						]))
				]),
			_List_fromArray(
				[content]));
	});
var $author$project$View$Tabs$tabsComponent = function (tabsConfig) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$id('tabsComponent--' + tabsConfig.bR)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('tabsComponent-tabControls--' + tabsConfig.bR),
						$elm$html$Html$Attributes$class('flex mb-2 border-b'),
						$elm$html$Html$Attributes$class('border-gray-600')
					]),
				A2(
					$elm$core$List$map,
					function (tab) {
						return A4($author$project$View$Tabs$styleTabs, tab.aY, tab.bR, tab.aR, tabsConfig.H);
					},
					tabsConfig.cg)),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('tabsComponent-tabContents--' + tabsConfig.bR),
						$elm$html$Html$Attributes$class('w-full py-2')
					]),
				A2(
					$elm$core$List$map,
					function (tab) {
						return A3($author$project$View$Tabs$tabPanel, tab.aY, tabsConfig.H, tab.aT);
					},
					tabsConfig.cg))
			]));
};
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $author$project$Pages$Detail$Schema_$Instance_$content = F3(
	function (shared, model, req) {
		var instance = A2($elm$core$Maybe$withDefault, $author$project$Domain$Instance$defaultInstance, model.aB);
		var infoTab = {
			aR: _List_fromArray(
				[
					$elm$html$Html$Events$onClick(
					$author$project$Pages$Detail$Schema_$Instance_$SetActiveTab($author$project$Pages$Detail$Schema_$Instance_$instanceDetailTabID))
				]),
			aT: A2($author$project$Pages$Detail$Schema_$Instance_$instanceDetailTab, shared, model),
			aY: $author$project$Pages$Detail$Schema_$Instance_$instanceDetailTabID,
			bR: 'Info'
		};
		var tabsConfig = function () {
			var _v2 = instance.bm;
			if (!_v2.$) {
				return {
					H: model.H,
					bR: 'user-tabs',
					cg: _List_fromArray(
						[
							infoTab,
							{
							aR: _List_fromArray(
								[
									$elm$html$Html$Events$onClick(
									$author$project$Pages$Detail$Schema_$Instance_$SetActiveTab($author$project$Pages$Detail$Schema_$Instance_$instanceTelemetryTabID))
								]),
							aT: $author$project$Pages$Detail$Schema_$Instance_$instanceTelemetryTab(model),
							aY: $author$project$Pages$Detail$Schema_$Instance_$instanceTelemetryTabID,
							bR: 'Status'
						}
						])
				};
			} else {
				return {
					H: model.H,
					bR: 'user-tabs',
					cg: _List_fromArray(
						[infoTab])
				};
			}
		}();
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('content'),
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'content'))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('content.inner'),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'content.inner'))
						]),
					_List_fromArray(
						[
							A2(
							$elm_community$html_extra$Html$Extra$viewMaybe,
							function (_v0) {
								return A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('flex justify-end')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$a,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$href(shared.ac + ('/schemas/' + req.ao.y)),
													$elm$html$Html$Attributes$target('_blank'),
													$elm$html$Html$Attributes$class(
													A2($author$project$Shared$getStyles, shared, 'link')),
													$elm$html$Html$Attributes$class('ml-3')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('API Schema')
												])),
											A2(
											$elm$html$Html$a,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$href(shared.ac + ('/instances/' + req.ao.aB)),
													$elm$html$Html$Attributes$target('_blank'),
													$elm$html$Html$Attributes$class(
													A2($author$project$Shared$getStyles, shared, 'link')),
													$elm$html$Html$Attributes$class('ml-3')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('API Instance')
												]))
										]));
							},
							shared.dl.cI),
							A2(
							$elm_community$html_extra$Html$Extra$viewMaybe,
							function (schema) {
								var nameProp = A2(
									$elm$core$Dict$get,
									'name',
									A3($elm_community$maybe_extra$Maybe$Extra$unwrap, $elm$core$Dict$empty, $elm$core$Basics$identity, instance.ap));
								var stringToShow = function () {
									if ((!nameProp.$) && (!nameProp.a.$)) {
										var val = nameProp.a.a;
										return val;
									} else {
										return $elm$core$Maybe$Just(instance.aY);
									}
								}();
								return A2(
									$author$project$View$Headers$sectionHeaderString,
									shared,
									A2($elm$core$Maybe$withDefault, '', stringToShow) + (' (' + (schema.ay + ')')));
							},
							model.y),
							$author$project$View$Tabs$tabsComponent(tabsConfig)
						]))
				]));
	});
var $author$project$Pages$Detail$Schema_$Instance_$view = F3(
	function (shared, req, model) {
		return {
			aS: _List_fromArray(
				[
					A3(
					$elm$html$Html$node,
					'main',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'main')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background.gradient')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.text'))
						]),
					_List_fromArray(
						[
							A3($author$project$Pages$Detail$Schema_$Instance_$content, shared, model, req)
						]))
				]),
			ci: 'Detail'
		};
	});
var $author$project$Pages$Detail$Schema_$Instance_$page = F2(
	function (shared, req) {
		return $author$project$Page$advanced(
			{
				r: A2($author$project$Pages$Detail$Schema_$Instance_$init, shared, req),
				v: $author$project$Pages$Detail$Schema_$Instance_$subscriptions,
				A: A2($author$project$Pages$Detail$Schema_$Instance_$update, shared, req),
				q: A2($author$project$Pages$Detail$Schema_$Instance_$view, shared, req)
			});
	});
var $author$project$View$Form$Edit = 0;
var $author$project$Pages$Edit$Schema_$Instance_$DealerMsg = function (a) {
	return {$: 1, a: a};
};
var $author$project$Pages$Edit$Schema_$Instance_$init = F2(
	function (shared, req) {
		var schemaId = req.ao.y;
		var schema = A2($elm$core$Dict$get, schemaId, shared.aL);
		var instanceId = req.ao.aB;
		var instance = A2($author$project$Dealer$getInstanceFromPaginatedDict, instanceId, shared.a9);
		var _v0 = A4(
			$author$project$Dealer$loadInstanceAndSchema,
			instanceId,
			schemaId,
			{aB: instance, y: schema, P: $elm$core$Dict$empty},
			shared);
		var model = _v0.a;
		var msg = _v0.b;
		return _Utils_Tuple2(
			model,
			$author$project$Effect$fromCmd(
				A2($elm$core$Platform$Cmd$map, $author$project$Pages$Edit$Schema_$Instance_$DealerMsg, msg)));
	});
var $author$project$Pages$Edit$Schema_$Instance_$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Shared$SaveInstance = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Utils$altMaybes = F2(
	function (a, b) {
		if (a.$ === 1) {
			return b;
		} else {
			return a;
		}
	});
var $author$project$Utils$maybeToBool = function (v) {
	if (!v.$) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Domain$Schema$isValueEmpty = function (propVal) {
	return !function () {
		switch (propVal.$) {
			case 0:
				var val = propVal.a;
				return $author$project$Utils$unPackBool(
					A2(
						$elm$core$Maybe$map,
						A2($elm$core$Basics$composeR, $elm$core$String$isEmpty, $elm$core$Basics$not),
						val));
			case 1:
				var val = propVal.a;
				return $author$project$Utils$maybeToBool(val);
			case 2:
				var val = propVal.a;
				return $author$project$Utils$maybeToBool(val);
			case 3:
				var val = propVal.a;
				return $author$project$Utils$maybeToBool(val);
			default:
				var val = propVal.a;
				return $author$project$Utils$maybeToBool(val);
		}
	}();
};
var $author$project$Utils$joinMaybes = function (mx) {
	if (!mx.$) {
		var x = mx.a;
		return x;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Pages$Edit$Schema_$Instance_$validateProperty = function (property) {
	var minLengthChecker = F2(
		function (minLength, value) {
			var valueLength = $elm$core$String$length(value);
			return (_Utils_cmp(valueLength, minLength) > 0) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				'String must be at least ' + ($elm$core$String$fromInt(minLength) + ' characters long'));
		});
	var maxLengthChecker = F2(
		function (maxLength, value) {
			var valueLength = $elm$core$String$length(value);
			return (_Utils_cmp(valueLength, maxLength) < 0) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				'String must be at most ' + ($elm$core$String$fromInt(maxLength) + ' characters long'));
		});
	var emptyField = property.dc ? $author$project$Domain$Schema$isValueEmpty(property.aP) : false;
	if (emptyField) {
		return $elm$core$Maybe$Just('This field is required');
	} else {
		var _v0 = property.aP;
		if (!_v0.$) {
			var val = _v0.a;
			return A2(
				$author$project$Utils$altMaybes,
				$author$project$Utils$joinMaybes(
					A3($elm$core$Maybe$map2, minLengthChecker, property.c0, val)),
				$author$project$Utils$joinMaybes(
					A3($elm$core$Maybe$map2, maxLengthChecker, property.c_, val)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	}
};
var $author$project$Pages$Edit$Schema_$Instance_$propertyErrors = function (schema) {
	var _v0 = A2(
		$elm$core$Maybe$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$map(
				function (property) {
					return A2(
						$elm$core$Maybe$map,
						function (err) {
							return _Utils_Tuple2(property.bR, err);
						},
						$author$project$Pages$Edit$Schema_$Instance_$validateProperty(property));
				}),
			$author$project$Utils$catMaybes),
		schema.ap);
	if (!_v0.$) {
		var errors = _v0.a;
		return $elm$core$Dict$fromList(errors);
	} else {
		return $elm$core$Dict$empty;
	}
};
var $author$project$Pages$Edit$Schema_$Instance_$validateSchema = function (schema) {
	var propErrors = $author$project$Pages$Edit$Schema_$Instance_$propertyErrors(schema);
	var componetErros = function () {
		var _v0 = schema.ax;
		if (!_v0.$) {
			var comps = _v0.a;
			return A3(
				$elm$core$List$foldl,
				$elm$core$Dict$union,
				$elm$core$Dict$empty,
				A2(
					$elm$core$List$map,
					function (component) {
						return $author$project$Pages$Edit$Schema_$Instance_$propertyErrors(
							$author$project$Domain$Schema$getComponentSchema(component.y));
					},
					comps));
		} else {
			return $elm$core$Dict$empty;
		}
	}();
	return A2($elm$core$Dict$union, componetErros, propErrors);
};
var $author$project$Pages$Edit$Schema_$Instance_$update = F3(
	function (shared, msg, model) {
		if (!msg.$) {
			var formMsg = msg.a;
			switch (formMsg.$) {
				case 0:
					var schema = formMsg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								y: $elm$core$Maybe$Just(schema)
							}),
						$author$project$Effect$none);
				case 1:
					var newComponentSchema = formMsg.a;
					var updateComponents = function (schema) {
						return _Utils_update(
							schema,
							{
								ax: A2(
									$elm$core$Maybe$map,
									function (components) {
										return A2(
											$elm$core$List$map,
											function (component) {
												var oldComponent = $author$project$Domain$Schema$getComponentSchema(component.y);
												var newComponent = $author$project$Domain$Schema$getComponentSchema(newComponentSchema);
												return _Utils_update(
													component,
													{
														y: _Utils_eq(newComponent.aY, oldComponent.aY) ? newComponent : oldComponent
													});
											},
											components);
									},
									schema.ax)
							});
					};
					var newSchemaToUse = A2($elm$core$Maybe$map, updateComponents, model.y);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{y: newSchemaToUse}),
						$author$project$Effect$none);
				case 2:
					var instanceId = formMsg.a;
					var schema = formMsg.b;
					var errors = $author$project$Pages$Edit$Schema_$Instance_$validateSchema(schema);
					return $elm$core$Dict$isEmpty(errors) ? _Utils_Tuple2(
						_Utils_update(
							model,
							{P: errors}),
						$author$project$Effect$fromShared(
							A2(
								$author$project$Shared$SaveInstance,
								schema,
								$elm$core$Maybe$Just(instanceId)))) : _Utils_Tuple2(
						_Utils_update(
							model,
							{P: errors}),
						$author$project$Effect$none);
				default:
					var schema = formMsg.a;
					var errors = $author$project$Pages$Edit$Schema_$Instance_$validateSchema(schema);
					return $elm$core$Dict$isEmpty(errors) ? _Utils_Tuple2(
						_Utils_update(
							model,
							{P: errors}),
						$author$project$Effect$fromShared(
							A2($author$project$Shared$SaveInstance, schema, $elm$core$Maybe$Nothing))) : _Utils_Tuple2(
						_Utils_update(
							model,
							{P: errors}),
						$author$project$Effect$none);
			}
		} else {
			var dealerMsg = msg.a;
			var _v2 = A3($author$project$Dealer$update, model, dealerMsg, shared);
			var updatedModel = _v2.a;
			var cmd = _v2.b;
			var newShared = _v2.c;
			var newModel = A3(
				$elm$core$Maybe$map2,
				F2(
					function (schema, instance) {
						return A4($author$project$Dealer$updateSchemaAndInstance, schema, instance, shared, updatedModel);
					}),
				updatedModel.y,
				updatedModel.aB);
			return _Utils_Tuple2(
				A2($elm$core$Maybe$withDefault, updatedModel, newModel),
				$author$project$Effect$batch(
					_List_fromArray(
						[
							$author$project$Effect$fromCmd(
							A2($elm$core$Platform$Cmd$map, $author$project$Pages$Edit$Schema_$Instance_$DealerMsg, cmd)),
							$author$project$Effect$fromShared(
							$author$project$Shared$ModelUpdated(newShared))
						])));
		}
	});
var $author$project$View$Form$EditInstanceValidation = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Pages$Edit$Schema_$Instance_$FormMsg = function (a) {
	return {$: 0, a: a};
};
var $author$project$View$Form$NewInstanceValidation = function (a) {
	return {$: 3, a: a};
};
var $elm$html$Html$form = _VirtualDom_node('form');
var $author$project$View$Form$SchemaUpdated = function (a) {
	return {$: 0, a: a};
};
var $author$project$View$Form$ComponentUpdated = function (a) {
	return {$: 1, a: a};
};
var $author$project$Utils$mapList = F2(
	function (f, xs) {
		return A2(
			$elm$core$List$map,
			$elm$html$Html$map(f),
			xs);
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetChecked = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	$elm$json$Json$Decode$bool);
var $elm$html$Html$Events$onCheck = function (tagger) {
	return A2(
		$elm$html$Html$Events$on,
		'change',
		A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetChecked));
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $author$project$View$Form$booleanPropertyForm = F5(
	function (shared, property, propertyValue, toMsg_, defaultValueButton) {
		var toMsg = A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$Just,
			A2($elm$core$Basics$composeR, $author$project$Domain$Schema$Bool, toMsg_));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'form.checkbox.container'))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'form.label'))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(property.ay)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'form.control.content')),
							$elm$html$Html$Attributes$class('h-8 flex items-center')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									A2($author$project$Shared$getStyles, shared, 'form.checkbox')),
									$elm$html$Html$Attributes$type_('checkbox'),
									$elm$html$Html$Attributes$checked(
									$author$project$Utils$unPackBool(propertyValue)),
									$elm$html$Html$Events$onCheck(toMsg)
								]),
							_List_Nil)
						])),
					defaultValueButton
				]));
	});
var $elm$html$Html$Attributes$for = $elm$html$Html$Attributes$stringProperty('htmlFor');
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm_community$html_extra$Html$Events$Extra$onChange = function (onChangeAction) {
	return A2(
		$elm$html$Html$Events$on,
		'change',
		A2($elm$json$Json$Decode$map, onChangeAction, $elm$html$Html$Events$targetValue));
};
var $elm$html$Html$option = _VirtualDom_node('option');
var $elm$html$Html$select = _VirtualDom_node('select');
var $elm$html$Html$Attributes$selected = $elm$html$Html$Attributes$boolProperty('selected');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$View$Form$select = F9(
	function (shared, label, values, defaultValue, toDisplayName, toValue, toMsg, _v0, defaultValueButton) {
		var id = 'selectInput-' + label;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'form.control'))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'form.label')),
							$elm$html$Html$Attributes$for(id)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'form.select.container'))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$select,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									A2($author$project$Shared$getStyles, shared, 'form.select')),
									$elm$html$Html$Attributes$id(id),
									$elm_community$html_extra$Html$Events$Extra$onChange(toMsg)
								]),
							function () {
								if (!defaultValue.$) {
									var val = defaultValue.a;
									return A2(
										$elm$core$List$map,
										function (v) {
											return A2(
												$elm$html$Html$option,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$selected(
														_Utils_eq(
															val,
															toValue(v))),
														$elm$html$Html$Attributes$value(
														toValue(v))
													]),
												_List_fromArray(
													[
														$elm$html$Html$text(
														toDisplayName(v))
													]));
										},
										values);
								} else {
									return A2(
										$elm$core$List$cons,
										A2(
											$elm$html$Html$option,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text('Choose one')
												])),
										A2(
											$elm$core$List$map,
											function (v) {
												return A2(
													$elm$html$Html$option,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$value(
															toValue(v))
														]),
													_List_fromArray(
														[
															$elm$html$Html$text(
															toDisplayName(v))
														]));
											},
											values));
								}
							}()),
							defaultValueButton
						]))
				]));
	});
var $author$project$View$Form$intEnumForm = F7(
	function (shared, label, values, defaultValue, toMsg_, attrs, defaultValueButton) {
		var toValue = A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.aP;
			},
			$elm$core$String$fromInt);
		var get = function (e) {
			return A2($elm$core$Dict$get, e, values);
		};
		var toMsg = A2(
			$elm$core$Basics$composeR,
			$elm$core$String$toInt,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$withDefault(0),
				A2($elm$core$Basics$composeR, get, toMsg_)));
		return A9(
			$author$project$View$Form$select,
			shared,
			label,
			$elm$core$Dict$values(values),
			A2($elm$core$Maybe$map, toValue, defaultValue),
			function ($) {
				return $.ay;
			},
			toValue,
			toMsg,
			attrs,
			defaultValueButton);
	});
var $author$project$View$Form$stringEnumForm = F7(
	function (shared, label, values, defaultValue, toMsg_, attrs, defaultValueButton) {
		var get = function (e) {
			return A2($elm$core$Dict$get, e, values);
		};
		var toMsg = A2($elm$core$Basics$composeR, get, toMsg_);
		return A9(
			$author$project$View$Form$select,
			shared,
			label,
			$elm$core$Dict$values(values),
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.aP;
				},
				defaultValue),
			function ($) {
				return $.ay;
			},
			function ($) {
				return $.aP;
			},
			toMsg,
			attrs,
			defaultValueButton);
	});
var $author$project$View$Form$enumPropertyForm = F6(
	function (shared, property, propertyValue, toMsg_, attrs, defaultValueButton) {
		if (!propertyValue.$) {
			if (!propertyValue.a.$) {
				var _v1 = propertyValue.a;
				var selected = _v1.a;
				var values = _v1.b;
				var getSelectedItem = function (selectedItem) {
					return A2($author$project$Domain$Schema$StringEnum, selectedItem, values);
				};
				var toMsg = A2(
					$elm$core$Basics$composeR,
					getSelectedItem,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$Just,
						A2($elm$core$Basics$composeR, $author$project$Domain$Schema$Enum, toMsg_)));
				return A7($author$project$View$Form$stringEnumForm, shared, property.ay, values, selected, toMsg, attrs, defaultValueButton);
			} else {
				var _v2 = propertyValue.a;
				var selected = _v2.a;
				var values = _v2.b;
				var getSelectedItem = function (selectedItem) {
					return A2($author$project$Domain$Schema$IntEnum, selectedItem, values);
				};
				var toMsg = A2(
					$elm$core$Basics$composeR,
					getSelectedItem,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$Just,
						A2($elm$core$Basics$composeR, $author$project$Domain$Schema$Enum, toMsg_)));
				return A7($author$project$View$Form$intEnumForm, shared, property.ay, values, selected, toMsg, attrs, defaultValueButton);
			}
		} else {
			return $author$project$Utils$empty;
		}
	});
var $author$project$View$Form$customControl = F4(
	function (shared, label, attrs, contents) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'form.control'))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'form.label'))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						])),
					A2(
					$elm$html$Html$div,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'form.control.content')),
						attrs),
					contents)
				]));
	});
var $author$project$View$Form$control = F3(
	function (shared, label, contents) {
		return A4($author$project$View$Form$customControl, shared, label, _List_Nil, contents);
	});
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $author$project$View$Form$input = F7(
	function (shared, label, type_, value, toMsg, attrs, defaultValueButton) {
		return A3(
			$author$project$View$Form$control,
			shared,
			label,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'form.input.container'))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_Utils_ap(
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class(
										A2($author$project$Shared$getStyles, shared, 'form.input')),
										$elm$html$Html$Attributes$type_(type_),
										$elm$html$Html$Attributes$value(value),
										$elm$html$Html$Events$onInput(toMsg)
									]),
								attrs),
							_List_Nil),
							defaultValueButton
						]))
				]));
	});
var $author$project$View$Form$inputWithError = F8(
	function (shared, label, type_, value, error, toMsg, attrs, defaultValueButton) {
		return A3(
			$author$project$View$Form$control,
			shared,
			label,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'form.input.container'))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$input,
							_Utils_ap(
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class(
										A2($author$project$Shared$getStyles, shared, 'form.input')),
										$elm$html$Html$Attributes$type_(type_),
										$elm$html$Html$Attributes$value(value),
										$elm$html$Html$Events$onInput(toMsg)
									]),
								attrs),
							_List_Nil),
							defaultValueButton
						])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'form.error'))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(error)
						]))
				]));
	});
var $author$project$View$Form$floatPropertyForm = F7(
	function (shared, property, propertyValue, error, toMsg_, attrs, defaultValueButton) {
		var toMsg = A2(
			$elm$core$Basics$composeR,
			$elm$core$String$toFloat,
			A2($elm$core$Basics$composeR, $author$project$Domain$Schema$Float, toMsg_));
		if (!error.$) {
			var err = error.a;
			return A8(
				$author$project$View$Form$inputWithError,
				shared,
				property.ay,
				'number',
				A2(
					$elm$core$Maybe$withDefault,
					' ',
					A2($elm$core$Maybe$map, $elm$core$String$fromFloat, propertyValue)),
				err,
				toMsg,
				attrs,
				defaultValueButton);
		} else {
			return A7(
				$author$project$View$Form$input,
				shared,
				property.ay,
				'number',
				A2(
					$elm$core$Maybe$withDefault,
					' ',
					A2($elm$core$Maybe$map, $elm$core$String$fromFloat, propertyValue)),
				toMsg,
				attrs,
				defaultValueButton);
		}
	});
var $author$project$Domain$Schema$hasDefaultValue = function (propertyValue) {
	switch (propertyValue.$) {
		case 0:
			var val = propertyValue.a;
			return $author$project$Utils$maybeToBool(val);
		case 1:
			var val = propertyValue.a;
			return $author$project$Utils$maybeToBool(val);
		case 2:
			var val = propertyValue.a;
			return $author$project$Utils$maybeToBool(val);
		case 3:
			var val = propertyValue.a;
			return $author$project$Utils$maybeToBool(val);
		default:
			var val = propertyValue.a;
			return $author$project$Utils$maybeToBool(val);
	}
};
var $author$project$View$Form$integerPropertyForm = F7(
	function (shared, property, propertyValue, error, toMsg_, attrs, defaultValueButton) {
		var toMsg = A2(
			$elm$core$Basics$composeR,
			$elm$core$String$toInt,
			A2($elm$core$Basics$composeR, $author$project$Domain$Schema$Int, toMsg_));
		if (!error.$) {
			var err = error.a;
			return A8(
				$author$project$View$Form$inputWithError,
				shared,
				property.ay,
				'number',
				A2(
					$elm$core$Maybe$withDefault,
					' ',
					A2($elm$core$Maybe$map, $elm$core$String$fromInt, propertyValue)),
				err,
				toMsg,
				attrs,
				defaultValueButton);
		} else {
			return A7(
				$author$project$View$Form$input,
				shared,
				property.ay,
				'number',
				A2(
					$elm$core$Maybe$withDefault,
					' ',
					A2($elm$core$Maybe$map, $elm$core$String$fromInt, propertyValue)),
				toMsg,
				attrs,
				defaultValueButton);
		}
	});
var $elm$html$Html$Attributes$readonly = $elm$html$Html$Attributes$boolProperty('readOnly');
var $author$project$View$Buttons$resetToDefaultButton = F2(
	function (shared, onClickAction) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'buttons.resettodefault')),
					$elm$html$Html$Events$onClick(onClickAction),
					$elm$html$Html$Attributes$type_('button')
				]),
			_List_fromArray(
				[
					$author$project$View$Icons$iconf('reset')
				]));
	});
var $author$project$View$Form$stringPropertyForm = F7(
	function (shared, property, propertyValue, error, toMsg_, attrs, defaultValueButton) {
		var toMsg = A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$Just,
			A2($elm$core$Basics$composeR, $author$project$Domain$Schema$String, toMsg_));
		if (!error.$) {
			var err = error.a;
			return A8(
				$author$project$View$Form$inputWithError,
				shared,
				property.ay,
				'text',
				A2($elm$core$Maybe$withDefault, '', propertyValue),
				err,
				toMsg,
				attrs,
				defaultValueButton);
		} else {
			return A7(
				$author$project$View$Form$input,
				shared,
				property.ay,
				'text',
				A2($elm$core$Maybe$withDefault, '', propertyValue),
				toMsg,
				attrs,
				defaultValueButton);
		}
	});
var $author$project$View$Form$propertyToForm = F5(
	function (shared, validationErrors, formType, property, defaultProperty) {
		var propertyName = property.bR;
		var error = A2($elm$core$Dict$get, propertyName, validationErrors);
		var defaultValueButton = $author$project$Domain$Schema$hasDefaultValue(defaultProperty.aP) ? A2(
			$author$project$View$Buttons$resetToDefaultButton,
			shared,
			_Utils_update(
				property,
				{aP: defaultProperty.aP})) : $author$project$Utils$empty;
		var _v0 = (property.bt || ((!formType) && property.c8)) ? _Utils_Tuple2(
			function (_v1) {
				return property;
			},
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'form.input')),
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'form.disabled')),
					$elm$html$Html$Attributes$readonly(true)
				])) : _Utils_Tuple2(
			function (val) {
				return _Utils_update(
					property,
					{aP: val});
			},
			_List_Nil);
		var toMsg = _v0.a;
		var attrs = _v0.b;
		var form = function () {
			var _v2 = property.aP;
			switch (_v2.$) {
				case 0:
					var val = _v2.a;
					return A7($author$project$View$Form$stringPropertyForm, shared, property, val, error, toMsg, attrs, defaultValueButton);
				case 1:
					var val = _v2.a;
					return A5($author$project$View$Form$booleanPropertyForm, shared, property, val, toMsg, defaultValueButton);
				case 2:
					var val = _v2.a;
					return A7($author$project$View$Form$integerPropertyForm, shared, property, val, error, toMsg, attrs, defaultValueButton);
				case 3:
					var val = _v2.a;
					return A7($author$project$View$Form$floatPropertyForm, shared, property, val, error, toMsg, attrs, defaultValueButton);
				default:
					var val = _v2.a;
					return A6($author$project$View$Form$enumPropertyForm, shared, property, val, toMsg, attrs, defaultValueButton);
			}
		}();
		return form;
	});
var $elm_community$list_extra$List$Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			$elm$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var $author$project$Shared$updateComponentProperty = F2(
	function (_v0, property) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				ap: A2(
					$elm$core$Maybe$map,
					A2(
						$elm_community$list_extra$List$Extra$updateIf,
						function (prop) {
							return _Utils_eq(prop.bR, property.bR);
						},
						function (_v1) {
							return property;
						}),
					schema.ap)
			});
	});
var $author$project$View$Form$componentsToForm = F5(
	function (shared, validationErrors, components, formType, defaultComponents) {
		var forms = $elm$core$List$concat(
			A3(
				$elm$core$List$map2,
				F2(
					function (component, defaultComponent) {
						var schema = component.y;
						return _List_fromArray(
							[
								A2(
								$elm$html$Html$fieldset,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$id('component-' + component.bR),
										$elm$html$Html$Attributes$class('mt-10')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$legend,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class(
												A2($author$project$Shared$getStyles, shared, 'form.legend'))
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(component.ay)
											])),
										A2(
										$elm_community$html_extra$Html$Extra$viewMaybe,
										function (valid_schemas) {
											return A2(
												$elm$html$Html$ul,
												_List_Nil,
												A2(
													$elm$core$List$map,
													function (valid_schema) {
														return A2(
															$elm$html$Html$li,
															_List_Nil,
															_List_fromArray(
																[
																	$elm$html$Html$text(valid_schema)
																]));
													},
													valid_schemas));
										},
										component.dD),
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class(
												A2($author$project$Shared$getStyles, shared, 'form.components'))
											]),
										A2(
											$author$project$Utils$mapList,
											$author$project$Shared$updateComponentProperty(schema),
											A2(
												$elm$core$Maybe$withDefault,
												_List_Nil,
												A3(
													$elm$core$Maybe$map2,
													F2(
														function (properties, defaultSchemaProperties) {
															return A3(
																$elm$core$List$map2,
																A3($author$project$View$Form$propertyToForm, shared, validationErrors, formType),
																$author$project$Shared$removeHiddenProperties(properties),
																$author$project$Shared$removeHiddenProperties(defaultSchemaProperties));
														}),
													$author$project$Domain$Schema$getComponentSchema(schema).ap,
													$author$project$Domain$Schema$getComponentSchema(defaultComponent.y).ap))))
									]))
							]);
					}),
				components,
				defaultComponents));
		return A2($author$project$Utils$mapList, $author$project$View$Form$ComponentUpdated, forms);
	});
var $author$project$View$Form$text = F6(
	function (shared, label, value, toMsg, attrs, defaultValueButton) {
		return A7($author$project$View$Form$input, shared, label, 'text', value, toMsg, attrs, defaultValueButton);
	});
var $author$project$View$Form$updateProperty = F2(
	function (schema, property) {
		return _Utils_update(
			schema,
			{
				ap: A2(
					$elm$core$Maybe$map,
					A2(
						$elm_community$list_extra$List$Extra$updateIf,
						function (prop) {
							return _Utils_eq(prop.bR, property.bR);
						},
						function (_v0) {
							return property;
						}),
					schema.ap)
			});
	});
var $author$project$Utils$viewMaybe2 = F3(
	function (fn, maybeThing1, maybeThing2) {
		return A2(
			$elm$core$Maybe$withDefault,
			$elm_community$html_extra$Html$Extra$nothing,
			A3($elm$core$Maybe$map2, fn, maybeThing1, maybeThing2));
	});
var $author$project$View$Form$schemaToForm = F7(
	function (schema, defaultSchema, validationErrors, buttonText, toMsg, formType, shared) {
		var form = A2(
			$elm$core$List$cons,
			A6(
				$author$project$View$Form$text,
				shared,
				'Schema',
				schema.aY,
				function (id) {
					return _Utils_update(
						schema,
						{aY: id});
				},
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class(
						A2($author$project$Shared$getStyles, shared, 'form.input')),
						$elm$html$Html$Attributes$class(
						A2($author$project$Shared$getStyles, shared, 'form.disabled')),
						$elm$html$Html$Attributes$readonly(true)
					]),
				$author$project$Utils$empty),
			A2(
				$author$project$Utils$mapList,
				$author$project$View$Form$updateProperty(schema),
				A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A3(
						$elm$core$Maybe$map2,
						F2(
							function (properties, defaultSchemaProperties) {
								return A3(
									$elm$core$List$map2,
									A3($author$project$View$Form$propertyToForm, shared, validationErrors, formType),
									$author$project$Shared$removeHiddenProperties(properties),
									$author$project$Shared$removeHiddenProperties(defaultSchemaProperties));
							}),
						schema.ap,
						defaultSchema.ap))));
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class(
						A2($author$project$Shared$getStyles, shared, 'form.fields'))
					]),
				A2($author$project$Utils$mapList, $author$project$View$Form$SchemaUpdated, form)),
				A3(
				$author$project$Utils$viewMaybe2,
				F2(
					function (components, defaultComponents) {
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('components')
								]),
							A5($author$project$View$Form$componentsToForm, shared, validationErrors, components, formType, defaultComponents));
					}),
				schema.ax,
				defaultSchema.ax),
				A3(
				$author$project$View$Buttons$standardButton,
				shared,
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick(
						toMsg(schema)),
						$elm$html$Html$Attributes$class('mt-8')
					]),
				buttonText)
			]);
	});
var $author$project$Pages$Edit$Schema_$Instance_$content = F3(
	function (shared, model, formType_) {
		var form = F4(
			function (schema, buttonText, toMsg, formType) {
				var defaultSchema = A2($elm$core$Dict$get, schema.aY, shared.aL);
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('contentPanel'),
							$elm$html$Html$Attributes$class('px-3')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$form,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('form'),
									$elm$html$Html$Attributes$class('mb-4')
								]),
							A2(
								$elm$core$List$map,
								$elm$html$Html$map($author$project$Pages$Edit$Schema_$Instance_$FormMsg),
								A2(
									$elm$core$Maybe$withDefault,
									_List_Nil,
									A2(
										$elm$core$Maybe$map,
										function (defSchema) {
											return A7($author$project$View$Form$schemaToForm, schema, defSchema, model.P, buttonText, toMsg, formType, shared);
										},
										defaultSchema))))
						]));
			});
		if (!formType_) {
			return A2(
				$elm_community$html_extra$Html$Extra$viewMaybe,
				function (instanceToUse) {
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$id('content'),
								$elm$html$Html$Attributes$class(
								A2($author$project$Shared$getStyles, shared, 'content'))
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class(
										A2($author$project$Shared$getStyles, shared, 'content.inner'))
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class(
												A2($author$project$Shared$getStyles, shared, 'content.inner.cols'))
											]),
										_List_fromArray(
											[
												A2(
												$elm_community$html_extra$Html$Extra$viewMaybe,
												function (schema) {
													return A2($author$project$View$Headers$sectionHeaderString, shared, 'Edit ' + schema.ay);
												},
												model.y),
												A2(
												$elm_community$html_extra$Html$Extra$viewMaybe,
												function (schema) {
													return A4(
														form,
														schema,
														'Save Changes',
														$author$project$View$Form$EditInstanceValidation(instanceToUse.aY),
														0);
												},
												model.y)
											]))
									]))
							]));
				},
				model.aB);
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('content'),
						$elm$html$Html$Attributes$class(
						A2($author$project$Shared$getStyles, shared, 'content'))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class(
								A2($author$project$Shared$getStyles, shared, 'content.inner'))
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class(
										A2($author$project$Shared$getStyles, shared, 'content.inner.cols'))
									]),
								_List_fromArray(
									[
										A2(
										$elm_community$html_extra$Html$Extra$viewMaybe,
										function (schema) {
											return A2($author$project$View$Headers$sectionHeaderString, shared, 'New ' + schema.ay);
										},
										model.y),
										A2(
										$elm_community$html_extra$Html$Extra$viewMaybe,
										function (schema) {
											return A4(form, schema, 'Create', $author$project$View$Form$NewInstanceValidation, formType_);
										},
										model.y)
									]))
							]))
					]));
		}
	});
var $author$project$Pages$Edit$Schema_$Instance_$view = F3(
	function (shared, formType, model) {
		return {
			aS: _List_fromArray(
				[
					A3(
					$elm$html$Html$node,
					'main',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'main')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background.gradient')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.text'))
						]),
					_List_fromArray(
						[
							A3($author$project$Pages$Edit$Schema_$Instance_$content, shared, model, formType)
						]))
				]),
			ci: 'Edit'
		};
	});
var $author$project$Pages$Edit$Schema_$Instance_$page = F2(
	function (shared, req) {
		return $author$project$Page$advanced(
			{
				r: A2($author$project$Pages$Edit$Schema_$Instance_$init, shared, req),
				v: $author$project$Pages$Edit$Schema_$Instance_$subscriptions,
				A: $author$project$Pages$Edit$Schema_$Instance_$update(shared),
				q: A2($author$project$Pages$Edit$Schema_$Instance_$view, shared, 0)
			});
	});
var $author$project$Pages$Home_$init = F2(
	function (shared, req) {
		return _Utils_Tuple2(
			{cP: 'String'},
			$author$project$Effect$none);
	});
var $author$project$Pages$Home_$subscriptions = function (model) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Pages$Home_$update = F4(
	function (shared, req, msg, model) {
		return _Utils_Tuple2(model, $author$project$Effect$none);
	});
var $author$project$Pages$Home_$content = F2(
	function (shared, model) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('content'),
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'content'))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'content.inner'))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									A2($author$project$Shared$getStyles, shared, 'content.inner.cols'))
								]),
							_List_fromArray(
								[
									A2($author$project$View$Headers$sectionHeaderString, shared, 'Homepage')
								]))
						]))
				]));
	});
var $author$project$Pages$Home_$view = F3(
	function (shared, req, model) {
		return {
			aS: _List_fromArray(
				[
					A3(
					$elm$html$Html$node,
					'main',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'main')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background.gradient')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.text'))
						]),
					_List_fromArray(
						[
							A2($author$project$Pages$Home_$content, shared, model)
						]))
				]),
			ci: 'Homepage'
		};
	});
var $author$project$Pages$Home_$page = F2(
	function (shared, req_) {
		var req = req_;
		return $author$project$Page$advanced(
			{
				r: A2($author$project$Pages$Home_$init, shared, req),
				v: $author$project$Pages$Home_$subscriptions,
				A: A2($author$project$Pages$Home_$update, shared, req),
				q: A2($author$project$Pages$Home_$view, shared, req)
			});
	});
var $author$project$Pages$List$Schema_$DealerMsg = function (a) {
	return {$: 5, a: a};
};
var $author$project$Shared$GetInstancesList = function (a) {
	return {$: 3, a: a};
};
var $author$project$View$Modals$NoModal = 1;
var $author$project$Pages$List$Schema_$SchemasTreeReceived = function (a) {
	return {$: 2, a: a};
};
var $author$project$View$Dropdown$defaultCheckboxDropdownState = {bz: _List_Nil, bV: false, N: _List_Nil};
var $author$project$Domain$Tree$Children = $elm$core$Basics$identity;
var $author$project$Domain$Tree$SchemaNodeData = F4(
	function (id, display_name, description, children) {
		return {cC: children, S: description, ay: display_name, aY: id};
	});
function $author$project$Domain$Tree$cyclic$decodeSchemaTree() {
	return A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2(
			$elm_community$json_extra$Json$Decode$Extra$withDefault,
			_List_Nil,
			A2(
				$elm$json$Json$Decode$field,
				'children',
				A2(
					$elm$json$Json$Decode$map,
					$elm$core$Basics$identity,
					$elm$json$Json$Decode$list(
						$elm$json$Json$Decode$lazy(
							function (_v0) {
								return $author$project$Domain$Tree$cyclic$decodeSchemaTree();
							}))))),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, 'description', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, 'display_name', $elm$json$Json$Decode$string),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
					$elm$json$Json$Decode$succeed($author$project$Domain$Tree$SchemaNodeData)))));
}
var $author$project$Domain$Tree$decodeSchemaTree = $author$project$Domain$Tree$cyclic$decodeSchemaTree();
$author$project$Domain$Tree$cyclic$decodeSchemaTree = function () {
	return $author$project$Domain$Tree$decodeSchemaTree;
};
var $author$project$Endpoint$schemaTree = F2(
	function (apiServer, schemaId) {
		return A3(
			$author$project$Endpoint$url,
			apiServer,
			_List_fromArray(
				['schemas', schemaId, 'tree']),
			_List_Nil);
	});
var $author$project$Api$getSchemasTree = F2(
	function (apiUrl, schemaId) {
		return A2(
			$author$project$Api$get,
			A2($author$project$Endpoint$schemaTree, apiUrl, schemaId),
			$author$project$Domain$Tree$decodeSchemaTree);
	});
var $author$project$View$Table$State = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$View$Table$initialSort = function (header) {
	return A2($author$project$View$Table$State, header, false);
};
var $author$project$View$TreeView$TreeView$Guts = F9(
	function (uidThunk, labelThunk, itemThunk, cssClasses, forest, annotatedNodes, collapsedNodeUids, visibleAnnotatedNodes, selection) {
		return {ab: annotatedNodes, o: collapsedNodeUids, i: cssClasses, U: forest, aD: itemThunk, ak: labelThunk, u: selection, h: uidThunk, B: visibleAnnotatedNodes};
	});
var $author$project$View$TreeView$TreeView$Model = $elm$core$Basics$identity;
var $author$project$View$TreeView$TreeView$uidOf = function (nUid) {
	var nodeUid = nUid;
	return nodeUid;
};
var $author$project$View$TreeView$TreeView$calculateVisibleAnnotatedNodes = F3(
	function (uidThunk, collapsedNodeUids, annotatedNodes) {
		var visibilityFoldThunk = F2(
			function (annotatedNode, foldState) {
				var nodeUid = uidThunk(annotatedNode.aE);
				var nodeLevel = annotatedNode.V;
				var collapsed = A2(
					$elm$core$Set$member,
					$author$project$View$TreeView$TreeView$uidOf(nodeUid),
					collapsedNodeUids);
				if (!foldState.a.$) {
					var visibilityThreshold = foldState.a.a;
					var annotatedNodesSoFar = foldState.b;
					return (_Utils_cmp(visibilityThreshold, nodeLevel) < 0) ? foldState : (collapsed ? _Utils_Tuple2(
						$elm$core$Maybe$Just(nodeLevel),
						_Utils_ap(
							annotatedNodesSoFar,
							_List_fromArray(
								[annotatedNode]))) : _Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						_Utils_ap(
							annotatedNodesSoFar,
							_List_fromArray(
								[annotatedNode]))));
				} else {
					var _v1 = foldState.a;
					var annotatedNodesSoFar = foldState.b;
					return collapsed ? _Utils_Tuple2(
						$elm$core$Maybe$Just(nodeLevel),
						_Utils_ap(
							annotatedNodesSoFar,
							_List_fromArray(
								[annotatedNode]))) : _Utils_Tuple2(
						$elm$core$Maybe$Nothing,
						_Utils_ap(
							annotatedNodesSoFar,
							_List_fromArray(
								[annotatedNode])));
				}
			});
		return A3(
			$elm$core$List$foldl,
			visibilityFoldThunk,
			_Utils_Tuple2($elm$core$Maybe$Nothing, _List_Nil),
			annotatedNodes).b;
	});
var $author$project$View$TreeView$Tree$childrenOf = function (n) {
	var node = n;
	return node.cC;
};
var $author$project$View$TreeView$Tree$foldForest = F3(
	function (foldOptions, initialFoldState, nodes) {
		var childrenFoldingThunk = F2(
			function (node, previousFoldState) {
				return A3(
					foldOptions.ae,
					previousFoldState,
					node,
					A3($author$project$View$TreeView$Tree$foldTree, foldOptions, previousFoldState, node));
			});
		return A3($elm$core$List$foldl, childrenFoldingThunk, initialFoldState, nodes);
	});
var $author$project$View$TreeView$Tree$foldTree = F3(
	function (foldOptions, initialFoldState, node) {
		var preFoldingValue = A2(foldOptions.L, initialFoldState, node);
		var childrenFoldingValue = A3(
			$author$project$View$TreeView$Tree$foldForest,
			foldOptions,
			preFoldingValue,
			$author$project$View$TreeView$Tree$childrenOf(node));
		return A3(foldOptions.aI, initialFoldState, node, childrenFoldingValue);
	});
var $author$project$View$TreeView$Tree$AnnotatedListingFoldState = F3(
	function (index, level, annotatedNodes) {
		return {ab: annotatedNodes, aA: index, V: level};
	});
var $author$project$View$TreeView$Tree$initialAnnotatedListingFoldState = A3($author$project$View$TreeView$Tree$AnnotatedListingFoldState, -1, -1, _List_Nil);
var $author$project$View$TreeView$Tree$AnnotatedNode = F3(
	function (index, level, node) {
		return {aA: index, V: level, aE: node};
	});
var $author$project$View$TreeView$Tree$defaultFoldOptions = {
	ae: F3(
		function (previousFoldState, node, nodeFoldState) {
			return nodeFoldState;
		}),
	aI: F3(
		function (foldStateFromParent, node, previousFoldState) {
			return previousFoldState;
		}),
	L: F2(
		function (foldStateFromParent, node) {
			return foldStateFromParent;
		})
};
var $author$project$View$TreeView$Tree$listAnnotatedFoldOptions = _Utils_update(
	$author$project$View$TreeView$Tree$defaultFoldOptions,
	{
		ae: F3(
			function (previousFoldState, node, nodeFoldState) {
				return _Utils_update(
					nodeFoldState,
					{V: nodeFoldState.V - 1});
			}),
		L: F2(
			function (foldStateFromParent, node) {
				var level = foldStateFromParent.V + 1;
				var index = foldStateFromParent.aA + 1;
				var annotatedNode = A3($author$project$View$TreeView$Tree$AnnotatedNode, index, level, node);
				return _Utils_update(
					foldStateFromParent,
					{
						ab: _Utils_ap(
							foldStateFromParent.ab,
							_List_fromArray(
								[annotatedNode])),
						aA: index,
						V: level
					});
			})
	});
var $author$project$View$TreeView$Tree$listAnnotatedForestNodes = function (nodes) {
	return A3($author$project$View$TreeView$Tree$foldForest, $author$project$View$TreeView$Tree$listAnnotatedFoldOptions, $author$project$View$TreeView$Tree$initialAnnotatedListingFoldState, nodes).ab;
};
var $author$project$View$TreeView$TreeView$initializeModel = F2(
	function (configuration, forest) {
		var collapsedNodesUids = $elm$core$Set$empty;
		var annotatedNodes = $author$project$View$TreeView$Tree$listAnnotatedForestNodes(forest);
		return A9(
			$author$project$View$TreeView$TreeView$Guts,
			configuration.h,
			configuration.ak,
			F2(
				function (_v0, node) {
					return $elm$html$Html$text(
						configuration.ak(node));
				}),
			configuration.i,
			forest,
			annotatedNodes,
			collapsedNodesUids,
			A3($author$project$View$TreeView$TreeView$calculateVisibleAnnotatedNodes, configuration.h, collapsedNodesUids, annotatedNodes),
			$elm$core$Maybe$Nothing);
	});
var $author$project$Dealer$loadSchema = F2(
	function (schemaId, shared) {
		return A2(
			$elm$core$Platform$Cmd$map,
			$author$project$Dealer$SchemaLoaded($elm$core$Maybe$Nothing),
			A2($author$project$Api$getSchema, shared.ac, schemaId));
	});
var $author$project$View$TreeView$TreeView$Configuration = F3(
	function (uidThunk, labelThunk, cssClasses) {
		return {i: cssClasses, ak: labelThunk, h: uidThunk};
	});
var $author$project$Domain$Tree$customCssClasses = {cx: 'tree-view-bullet-collapsed', cy: 'cursor-pointer tree-view-bullet-expanded', cz: 'tree-view-bullet-leaf', cJ: 'isDisabled', cV: 'tree-view-indentation w-2 p-0', dh: 'tree-view-selected-node font-semibold', dB: 'tree-view'};
var $author$project$Domain$Tree$schemaNodeDisplayName = function (n) {
	var node = n;
	return node.bz.ay;
};
var $author$project$View$TreeView$TreeView$NodeUid = $elm$core$Basics$identity;
var $author$project$Domain$Tree$schemaNodeId = function (n) {
	var node = n;
	return node.bz.aY;
};
var $author$project$Domain$Tree$schemaTreeConfiguration = A3($author$project$View$TreeView$TreeView$Configuration, $author$project$Domain$Tree$schemaNodeId, $author$project$Domain$Tree$schemaNodeDisplayName, $author$project$Domain$Tree$customCssClasses);
var $author$project$Pages$List$Schema_$init = F2(
	function (shared, req) {
		var schemaId = req.ao.y;
		var schema = A2($elm$core$Dict$get, schemaId, shared.aL);
		var defaultModel = {
			_: 1,
			R: _List_Nil,
			w: $author$project$View$Dropdown$defaultCheckboxDropdownState,
			cP: '',
			aC: $author$project$View$Table$initialSort('Instance'),
			K: schema,
			aK: $elm$core$Maybe$Nothing,
			z: A2($author$project$View$TreeView$TreeView$initializeModel, $author$project$Domain$Tree$schemaTreeConfiguration, _List_Nil),
			ca: $elm$core$Maybe$Nothing
		};
		var _v0 = function () {
			if (!schema.$) {
				var sch = schema.a;
				var properties = $author$project$Shared$removeHiddenProperties(
					A2($elm$core$Maybe$withDefault, _List_Nil, sch.ap));
				return _Utils_Tuple2(
					$author$project$Effect$fromShared(
						$author$project$Shared$GetInstancesList(schemaId)),
					_Utils_update(
						defaultModel,
						{
							w: _Utils_update(
								$author$project$View$Dropdown$defaultCheckboxDropdownState,
								{bz: properties, N: properties})
						}));
			} else {
				return _Utils_Tuple2(
					$author$project$Effect$fromCmd(
						A2(
							$elm$core$Platform$Cmd$map,
							$author$project$Pages$List$Schema_$DealerMsg,
							A2($author$project$Dealer$loadSchema, schemaId, shared))),
					defaultModel);
			}
		}();
		var schemaCmd = _v0.a;
		var modelToUse = _v0.b;
		return _Utils_Tuple2(
			modelToUse,
			$author$project$Effect$batch(
				_List_fromArray(
					[
						schemaCmd,
						$author$project$Effect$fromCmd(
						A2(
							$elm$core$Platform$Cmd$map,
							$author$project$Pages$List$Schema_$SchemasTreeReceived,
							A2($author$project$Api$getSchemasTree, shared.ac, schemaId)))
					])));
	});
var $author$project$Pages$List$Schema_$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Shared$Execute = function (a) {
	return {$: 11, a: a};
};
var $author$project$Shared$InstancesListReceived = function (a) {
	return {$: 4, a: a};
};
var $author$project$Pages$List$Schema_$childrenOfSchema = function (children) {
	var schemaNodeDataList = children;
	return schemaNodeDataList;
};
var $author$project$View$TreeView$Tree$dataOf = function (n) {
	var node = n;
	return node.bz;
};
var $author$project$Api$errorToString = function (err) {
	switch (err.$) {
		case 0:
			var str = err.a;
			return str;
		case 1:
			return 'Timeout';
		case 2:
			return 'Nwtwork Error';
		case 3:
			var status = err.a;
			return $elm$core$String$fromInt(status);
		default:
			var msg = err.a;
			return msg;
	}
};
var $author$project$Domain$Instance$PaginatedInstances = F7(
	function (instances, limit, offset, size, totalItems, prev, next) {
		return {a3: instances, bN: limit, bS: next, bU: offset, bY: prev, cc: size, cj: totalItems};
	});
var $author$project$Domain$Instance$decodePaginatedInstances = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2(
		$elm$json$Json$Decode$field,
		'_links',
		A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'next', $elm$json$Json$Decode$string)),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2(
			$elm$json$Json$Decode$field,
			'_links',
			A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'prev', $elm$json$Json$Decode$string)),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, 'total_items', $elm$json$Json$Decode$int),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, 'size', $elm$json$Json$Decode$int),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm$json$Json$Decode$field, 'offset', $elm$json$Json$Decode$int),
					A2(
						$elm_community$json_extra$Json$Decode$Extra$andMap,
						A2($elm$json$Json$Decode$field, 'limit', $elm$json$Json$Decode$int),
						A2(
							$elm_community$json_extra$Json$Decode$Extra$andMap,
							A2(
								$elm_community$json_extra$Json$Decode$Extra$withDefault,
								$elm$core$Dict$empty,
								A2(
									$elm$json$Json$Decode$field,
									'items',
									A2(
										$elm$json$Json$Decode$map,
										A2(
											$elm$core$Basics$composeL,
											$elm$core$Dict$fromList,
											$elm$core$List$map(
												function (instance) {
													return _Utils_Tuple2(instance.aY, instance);
												})),
										$elm$json$Json$Decode$list($author$project$Domain$Instance$decodeInstance)))),
							$elm$json$Json$Decode$succeed($author$project$Domain$Instance$PaginatedInstances))))))));
var $author$project$Endpoint$instances = F3(
	function (apiServer, schemaId, queryParams) {
		return A3(
			$author$project$Endpoint$url,
			apiServer,
			_List_fromArray(
				['schemas', schemaId, 'instances']),
			queryParams);
	});
var $author$project$Api$getConcretePageOfInstancesList = F4(
	function (apiUrl, schemaId, offset, limit) {
		var query = _List_fromArray(
			[
				A2($elm$url$Url$Builder$string, 'offset', offset),
				A2($elm$url$Url$Builder$string, 'limit', limit)
			]);
		return A2(
			$author$project$Api$get,
			A3($author$project$Endpoint$instances, apiUrl, schemaId, query),
			$author$project$Domain$Instance$decodePaginatedInstances);
	});
var $author$project$Endpoint$custom = function (apiServer) {
	return A3($author$project$Endpoint$url, apiServer, _List_Nil, _List_Nil);
};
var $author$project$Api$getPageOfInstancesList = function (apiUrl) {
	return A2(
		$author$project$Api$get,
		$author$project$Endpoint$custom(apiUrl),
		$author$project$Domain$Instance$decodePaginatedInstances);
};
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$View$TreeView$TreeView$gutsOf = function (model) {
	var guts = model;
	return guts;
};
var $author$project$View$TreeView$TreeView$getSelected = function (model) {
	var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
	return A2(
		$elm$core$Maybe$andThen,
		function (index) {
			return A2($elm_community$list_extra$List$Extra$getAt, index, guts.B);
		},
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.aA;
			},
			guts.u));
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm$url$Url$Builder$relative = F2(
	function (pathSegments, parameters) {
		return _Utils_ap(
			A2($elm$core$String$join, '/', pathSegments),
			$elm$url$Url$Builder$toQuery(parameters));
	});
var $elm_community$list_extra$List$Extra$reverseAppend = F2(
	function (list1, list2) {
		return A3($elm$core$List$foldl, $elm$core$List$cons, list2, list1);
	});
var $elm_community$list_extra$List$Extra$removeHelp = F4(
	function (list, x, xs, previousElements) {
		removeHelp:
		while (true) {
			if (!xs.b) {
				return list;
			} else {
				var y = xs.a;
				var ys = xs.b;
				if (_Utils_eq(x, y)) {
					return A2($elm_community$list_extra$List$Extra$reverseAppend, previousElements, ys);
				} else {
					var $temp$list = list,
						$temp$x = x,
						$temp$xs = ys,
						$temp$previousElements = A2($elm$core$List$cons, y, previousElements);
					list = $temp$list;
					x = $temp$x;
					xs = $temp$xs;
					previousElements = $temp$previousElements;
					continue removeHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$remove = F2(
	function (x, xs) {
		return A4($elm_community$list_extra$List$Extra$removeHelp, xs, x, xs, _List_Nil);
	});
var $author$project$Pages$List$Schema_$schemaDataId = function (data) {
	if (!data.$) {
		var val = data.a;
		return val.aY;
	} else {
		return '';
	}
};
var $author$project$View$TreeView$Tree$Node = $elm$core$Basics$identity;
var $author$project$Domain$Tree$SchemaData = F3(
	function (id, display_name, description) {
		return {S: description, ay: display_name, aY: id};
	});
var $author$project$Pages$List$Schema_$schemaToTreeView = function (schema) {
	var data = A3($author$project$Domain$Tree$SchemaData, schema.aY, schema.ay, schema.S);
	var children = A2(
		$elm$core$List$map,
		$author$project$Pages$List$Schema_$schemaToTreeView,
		$author$project$Pages$List$Schema_$childrenOfSchema(schema.cC));
	return {cC: children, bz: data};
};
var $author$project$View$TreeView$TreeView$Selection = F2(
	function (index, nodeUid) {
		return {aA: index, W: nodeUid};
	});
var $elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndex = $elm_community$list_extra$List$Extra$findIndexHelp(0);
var $author$project$View$TreeView$TreeView$findAnnotatedNodeIndex = F3(
	function (uidThunk, nodeUid, annotatedNodes) {
		var actualNodeUid = $author$project$View$TreeView$TreeView$uidOf(nodeUid);
		return A2(
			$elm_community$list_extra$List$Extra$findIndex,
			function (annotatedNode) {
				return _Utils_eq(
					$author$project$View$TreeView$TreeView$uidOf(
						uidThunk(annotatedNode.aE)),
					actualNodeUid);
			},
			annotatedNodes);
	});
var $author$project$View$TreeView$TreeView$setSelectionTo = F2(
	function (nodeUid, model) {
		var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
		var visibleIndexMaybe = A3($author$project$View$TreeView$TreeView$findAnnotatedNodeIndex, guts.h, nodeUid, guts.B);
		if (visibleIndexMaybe.$ === 1) {
			return model;
		} else {
			var visibleIndex = visibleIndexMaybe.a;
			return _Utils_update(
				guts,
				{
					u: $elm$core$Maybe$Just(
						A2($author$project$View$TreeView$TreeView$Selection, visibleIndex, nodeUid))
				});
		}
	});
var $author$project$View$TreeView$TreeView$stepSelection = F2(
	function (direction, model) {
		var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
		var visibleNodesCount = $elm$core$List$length(guts.B);
		var newSelectionIndex = function () {
			var _v1 = guts.u;
			if (_v1.$ === 1) {
				return (direction === 1) ? 0 : (visibleNodesCount - 1);
			} else {
				var index = _v1.a.aA;
				var nodeUid = _v1.a.W;
				return A2($elm$core$Basics$modBy, visibleNodesCount, index + direction);
			}
		}();
		var selectedNodeUidMaybe = A2(
			$elm$core$Maybe$map,
			function (n) {
				return guts.h(n);
			},
			A2(
				$elm$core$Maybe$map,
				function (aN) {
					return aN.aE;
				},
				A2($elm_community$list_extra$List$Extra$getAt, newSelectionIndex, guts.B)));
		if (selectedNodeUidMaybe.$ === 1) {
			return model;
		} else {
			var nodeUid = selectedNodeUidMaybe.a;
			return _Utils_update(
				guts,
				{
					u: $elm$core$Maybe$Just(
						A2($author$project$View$TreeView$TreeView$Selection, newSelectionIndex, nodeUid))
				});
		}
	});
var $author$project$View$TreeView$TreeView$modelWithNewExpansionStates = F2(
	function (collapsedNodeUids, model) {
		var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
		var newVisibleAnnotatedNodes = A3($author$project$View$TreeView$TreeView$calculateVisibleAnnotatedNodes, guts.h, collapsedNodeUids, guts.ab);
		var selection = function () {
			var _v0 = guts.u;
			if (_v0.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var index = _v0.a.aA;
				var nodeUid = _v0.a.W;
				var _v1 = A3($author$project$View$TreeView$TreeView$findAnnotatedNodeIndex, guts.h, nodeUid, newVisibleAnnotatedNodes);
				if (_v1.$ === 1) {
					return $elm$core$Maybe$Nothing;
				} else {
					var visibleIndex = _v1.a;
					return $elm$core$Maybe$Just(
						A2($author$project$View$TreeView$TreeView$Selection, visibleIndex, nodeUid));
				}
			}
		}();
		return _Utils_update(
			guts,
			{o: collapsedNodeUids, u: selection, B: newVisibleAnnotatedNodes});
	});
var $author$project$View$TreeView$TreeView$updateExpandedStateOf = F3(
	function (nodeUid, expanded, model) {
		var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
		var collapsedNodeUids = expanded ? A2(
			$elm$core$Set$remove,
			$author$project$View$TreeView$TreeView$uidOf(nodeUid),
			guts.o) : A2(
			$elm$core$Set$insert,
			$author$project$View$TreeView$TreeView$uidOf(nodeUid),
			guts.o);
		return A2($author$project$View$TreeView$TreeView$modelWithNewExpansionStates, collapsedNodeUids, model);
	});
var $author$project$View$TreeView$TreeView$update = F2(
	function (message, model) {
		switch (message.$) {
			case 0:
				var nodeUid = message.a;
				return A3($author$project$View$TreeView$TreeView$updateExpandedStateOf, nodeUid, true, model);
			case 1:
				var nodeUid = message.a;
				return A3($author$project$View$TreeView$TreeView$updateExpandedStateOf, nodeUid, false, model);
			case 2:
				var nodeUid = message.a;
				return A2($author$project$View$TreeView$TreeView$setSelectionTo, nodeUid, model);
			default:
				var arrow = message.a;
				switch (arrow) {
					case 2:
						return A2($author$project$View$TreeView$TreeView$stepSelection, -1, model);
					case 3:
						return A2($author$project$View$TreeView$TreeView$stepSelection, 1, model);
					case 0:
						var _v2 = $author$project$View$TreeView$TreeView$gutsOf(model).u;
						if (_v2.$ === 1) {
							return model;
						} else {
							var index = _v2.a.aA;
							var nodeUid = _v2.a.W;
							return A3($author$project$View$TreeView$TreeView$updateExpandedStateOf, nodeUid, false, model);
						}
					case 1:
						var _v3 = $author$project$View$TreeView$TreeView$gutsOf(model).u;
						if (_v3.$ === 1) {
							return model;
						} else {
							var index = _v3.a.aA;
							var nodeUid = _v3.a.W;
							return A3($author$project$View$TreeView$TreeView$updateExpandedStateOf, nodeUid, true, model);
						}
					default:
						return model;
				}
		}
	});
var $author$project$Pages$List$Schema_$update = F4(
	function (shared, req, msg, model) {
		switch (msg.$) {
			case 1:
				var tableMsg = msg.a;
				switch (tableMsg.$) {
					case 2:
						var state = tableMsg.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{aC: state}),
							$author$project$Effect$none);
					case 4:
						var instance = tableMsg.a;
						return _Utils_Tuple2(
							model,
							$author$project$Effect$fromCmd(
								A2(
									$elm$browser$Browser$Navigation$pushUrl,
									req.x,
									$author$project$Gen$Route$toHref(
										$author$project$Gen$Route$Detail__Schema___Instance_(
											{aB: instance.aY, y: instance.y})))));
					default:
						return _Utils_Tuple2(model, $author$project$Effect$none);
				}
			case 0:
				var modal = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{_: modal}),
					$author$project$Effect$none);
			case 2:
				var res = msg.a;
				switch (res.$) {
					case 3:
						var nodeData = res.a;
						var getAllChildren = F2(
							function (nodeDataList, idList) {
								if (nodeDataList.b) {
									if (!nodeDataList.b.b) {
										var x = nodeDataList.a;
										return A2(
											$elm$core$List$cons,
											_Utils_Tuple2(x.aY, x.ay),
											A2(
												getAllChildren,
												$author$project$Pages$List$Schema_$childrenOfSchema(x.cC),
												idList));
									} else {
										var x = nodeDataList.a;
										var xs = nodeDataList.b;
										return A2(
											$elm$core$List$cons,
											_Utils_Tuple2(x.aY, x.ay),
											_Utils_ap(
												A2(
													getAllChildren,
													$author$project$Pages$List$Schema_$childrenOfSchema(x.cC),
													idList),
												A2(getAllChildren, xs, idList)));
									}
								} else {
									return idList;
								}
							});
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									R: A2(
										$elm$core$List$cons,
										_Utils_Tuple2(nodeData.aY, nodeData.ay),
										A2(
											getAllChildren,
											$author$project$Pages$List$Schema_$childrenOfSchema(nodeData.cC),
											_List_Nil)),
									aK: $elm$core$Maybe$Just(nodeData),
									z: A2(
										$author$project$View$TreeView$TreeView$initializeModel,
										$author$project$Domain$Tree$schemaTreeConfiguration,
										_List_fromArray(
											[
												$author$project$Pages$List$Schema_$schemaToTreeView(nodeData)
											]))
								}),
							$author$project$Effect$none);
					case 2:
						var err = res.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									cP: $author$project$Api$errorToString(err)
								}),
							$author$project$Effect$none);
					default:
						return _Utils_Tuple2(model, $author$project$Effect$none);
				}
			case 3:
				var treeViewMsg = msg.a;
				var updatedSchemasTreeViewModel = A2($author$project$View$TreeView$TreeView$update, treeViewMsg, model.z);
				var modelAction = function () {
					if (treeViewMsg.$ === 2) {
						var selectedSchema = A2(
							$elm$core$Maybe$map,
							$author$project$View$TreeView$Tree$dataOf,
							A2(
								$elm$core$Maybe$map,
								function ($) {
									return $.aE;
								},
								$author$project$View$TreeView$TreeView$getSelected(updatedSchemasTreeViewModel)));
						var schemaId = $author$project$Pages$List$Schema_$schemaDataId(selectedSchema);
						var newInstanceUrl = A2(
							$elm$url$Url$Builder$relative,
							_List_fromArray(
								[
									$author$project$Gen$Route$toHref(
									$author$project$Gen$Route$New__Schema_(
										{y: schemaId}))
								]),
							_List_Nil);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{z: updatedSchemasTreeViewModel}),
							$author$project$Effect$fromCmd(
								A2($elm$browser$Browser$Navigation$pushUrl, req.x, newInstanceUrl)));
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{z: updatedSchemasTreeViewModel}),
							$author$project$Effect$none);
					}
				}();
				return modelAction;
			case 4:
				var schemaId = msg.a;
				var getChild = F2(
					function (children, id) {
						getChild:
						while (true) {
							if (children.b) {
								if (!children.b.b) {
									var x = children.a;
									if (_Utils_eq(x.aY, id)) {
										return $elm$core$Maybe$Just(x);
									} else {
										if ($elm$core$List$isEmpty(
											$author$project$Pages$List$Schema_$childrenOfSchema(x.cC))) {
											return $elm$core$Maybe$Nothing;
										} else {
											var $temp$children = $author$project$Pages$List$Schema_$childrenOfSchema(x.cC),
												$temp$id = id;
											children = $temp$children;
											id = $temp$id;
											continue getChild;
										}
									}
								} else {
									var x = children.a;
									var xs = children.b;
									return A2(
										$author$project$Utils$altMaybes,
										A2(
											getChild,
											_List_fromArray(
												[x]),
											id),
										A2(getChild, xs, id));
								}
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					});
				var newNodeData = A2(
					$elm$core$Maybe$andThen,
					function (nodeData) {
						return _Utils_eq(nodeData.aY, schemaId) ? $elm$core$Maybe$Just(nodeData) : A2(
							getChild,
							$author$project$Pages$List$Schema_$childrenOfSchema(nodeData.cC),
							schemaId);
					},
					model.aK);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							z: A2(
								$elm$core$Maybe$withDefault,
								model.z,
								A2(
									$elm$core$Maybe$map,
									function (nodeData) {
										return A2(
											$author$project$View$TreeView$TreeView$initializeModel,
											$author$project$Domain$Tree$schemaTreeConfiguration,
											_List_fromArray(
												[
													$author$project$Pages$List$Schema_$schemaToTreeView(nodeData)
												]));
									},
									newNodeData))
						}),
					$author$project$Effect$batch(
						_List_fromArray(
							[
								$author$project$Effect$fromCmd(
								A2(
									$elm$core$Platform$Cmd$map,
									$author$project$Pages$List$Schema_$DealerMsg,
									A2($author$project$Dealer$loadSchema, schemaId, shared))),
								$author$project$Effect$fromShared(
								$author$project$Shared$GetInstancesList(schemaId))
							])));
			case 5:
				var dealerMsg = msg.a;
				var _v6 = A3(
					$author$project$Dealer$update,
					{aB: $elm$core$Maybe$Nothing, y: model.K},
					dealerMsg,
					shared);
				var updatedModel = _v6.a;
				var cmd = _v6.b;
				var newShared = _v6.c;
				var properties = $author$project$Shared$removeHiddenProperties(
					A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2(
							$elm$core$Maybe$andThen,
							function ($) {
								return $.ap;
							},
							updatedModel.y)));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							w: _Utils_update(
								$author$project$View$Dropdown$defaultCheckboxDropdownState,
								{bz: properties, N: properties}),
							K: updatedModel.y
						}),
					$author$project$Effect$batch(
						_List_fromArray(
							[
								$author$project$Effect$fromShared(
								$author$project$Shared$ModelUpdated(newShared)),
								$author$project$Effect$fromCmd(
								A2($elm$core$Platform$Cmd$map, $author$project$Pages$List$Schema_$DealerMsg, cmd)),
								A2(
								$elm$core$Maybe$withDefault,
								$author$project$Effect$none,
								A2(
									$elm$core$Maybe$map,
									function (sch) {
										return $author$project$Effect$fromShared(
											$author$project$Shared$GetInstancesList(sch.aY));
									},
									updatedModel.y))
							])));
			case 6:
				var paginationMsg = msg.a;
				switch (paginationMsg.$) {
					case 1:
						var url = paginationMsg.a;
						return _Utils_Tuple2(
							model,
							$author$project$Effect$fromShared(
								$author$project$Shared$Execute(
									A2(
										$elm$core$Platform$Cmd$map,
										$author$project$Shared$InstancesListReceived,
										$author$project$Api$getPageOfInstancesList(url)))));
					case 0:
						var url = paginationMsg.a;
						return _Utils_Tuple2(
							model,
							$author$project$Effect$fromShared(
								$author$project$Shared$Execute(
									A2(
										$elm$core$Platform$Cmd$map,
										$author$project$Shared$InstancesListReceived,
										$author$project$Api$getPageOfInstancesList(url)))));
					default:
						var offset = paginationMsg.a;
						var limit = paginationMsg.b;
						return _Utils_Tuple2(
							model,
							A2(
								$elm$core$Maybe$withDefault,
								$author$project$Effect$none,
								A2(
									$elm$core$Maybe$map,
									function (schema) {
										return $author$project$Effect$fromShared(
											$author$project$Shared$Execute(
												A2(
													$elm$core$Platform$Cmd$map,
													$author$project$Shared$InstancesListReceived,
													A4($author$project$Api$getConcretePageOfInstancesList, shared.ac, schema.aY, offset, limit))));
									},
									model.K)));
				}
			default:
				var dropdownMsg = msg.a;
				var dropdownState = model.w;
				switch (dropdownMsg.$) {
					case 0:
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									w: _Utils_update(
										dropdownState,
										{bV: !dropdownState.bV})
								}),
							$author$project$Effect$none);
					case 2:
						var prop = dropdownMsg.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									w: _Utils_update(
										dropdownState,
										{
											N: A2($elm$core$List$member, prop, dropdownState.N) ? A2($elm_community$list_extra$List$Extra$remove, prop, dropdownState.N) : A2($elm$core$List$cons, prop, dropdownState.N)
										})
								}),
							$author$project$Effect$none);
					default:
						return _Utils_Tuple2(model, $author$project$Effect$none);
				}
		}
	});
var $author$project$Pages$List$Schema_$ChangeSchema = function (a) {
	return {$: 4, a: a};
};
var $author$project$Pages$List$Schema_$DropdownMsg = function (a) {
	return {$: 7, a: a};
};
var $author$project$View$Modals$NewInstance = 0;
var $author$project$Pages$List$Schema_$NewModal = function (a) {
	return {$: 0, a: a};
};
var $author$project$Pages$List$Schema_$PaginationMsg = function (a) {
	return {$: 6, a: a};
};
var $author$project$Pages$List$Schema_$TableMsg = function (a) {
	return {$: 1, a: a};
};
var $author$project$View$Dropdown$SelectItemToggle = function (a) {
	return {$: 2, a: a};
};
var $author$project$View$Dropdown$Toggle = {$: 0};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $author$project$Utils$none = A2($elm$html$Html$Attributes$property, '', $elm$json$Json$Encode$null);
var $author$project$Utils$attrIf = F2(
	function (pred, attr) {
		return pred ? attr : $author$project$Utils$none;
	});
var $author$project$View$Dropdown$checkboxDropdown = F4(
	function (shared, state, toDisplay, toValue) {
		var inputs = A2(
			$elm$core$List$map,
			function (item) {
				var cbId = 'cb-' + toValue(item);
				return A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$input,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$id(cbId),
											$elm$html$Html$Attributes$type_('checkbox'),
											$elm$html$Html$Attributes$checked(
											A2($elm$core$List$member, item, state.N)),
											$elm$html$Html$Events$onInput(
											function (_v0) {
												return $author$project$View$Dropdown$SelectItemToggle(item);
											}),
											$elm$html$Html$Attributes$value(
											toValue(item)),
											$elm$html$Html$Attributes$class('w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500')
										]),
									_List_Nil),
									A2(
									$elm$html$Html$label,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$for(cbId),
											$elm$html$Html$Attributes$class('ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											toDisplay(item))
										]))
								]))
						]));
			},
			state.bz);
		return A2(
			$elm_community$html_extra$Html$Extra$viewIf,
			!$elm$core$List$isEmpty(state.bz),
			A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$author$project$View$Buttons$standardButton,
						shared,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick($author$project$View$Dropdown$Toggle)
							]),
						'Visible columns ↓'),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('absolute w-48 bg-white rounded shadow dark:bg-gray-700 '),
								A2(
								$author$project$Utils$attrIf,
								!state.bV,
								$elm$html$Html$Attributes$class('hidden'))
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$ul,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200')
									]),
								inputs)
							]))
					])));
	});
var $author$project$View$Table$SetTableState = function (a) {
	return {$: 2, a: a};
};
var $author$project$View$Table$Column = $elm$core$Basics$identity;
var $author$project$View$Table$HtmlDetails = F2(
	function (attributes, children) {
		return {ad: attributes, cC: children};
	});
var $author$project$View$Table$textDetails = function (str) {
	return A2(
		$author$project$View$Table$HtmlDetails,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $author$project$View$Table$None = {$: 0};
var $author$project$View$Table$unsortable = $author$project$View$Table$None;
var $author$project$View$Table$boolColumn = F2(
	function (name, toBool) {
		return {
			bR: name,
			cd: $author$project$View$Table$unsortable,
			cm: A2(
				$elm$core$Basics$composeL,
				A2($elm$core$Basics$composeL, $author$project$View$Table$textDetails, $author$project$Utils$boolToString),
				toBool)
		};
	});
var $author$project$View$Table$Config = $elm$core$Basics$identity;
var $author$project$View$Table$customConfig = function (_v0) {
	var toId = _v0.ds;
	var toMsg = _v0.dw;
	var columns = _v0.cE;
	var customizations = _v0.cH;
	return {
		cE: A2(
			$elm$core$List$map,
			function (_v1) {
				var cData = _v1;
				return cData;
			},
			columns),
		cH: customizations,
		ds: toId,
		dw: toMsg
	};
};
var $author$project$Pages$List$Schema_$customRowAttrs = F2(
	function (shared, _v0) {
		return _List_fromArray(
			[
				$elm$html$Html$Attributes$class(
				A2($author$project$Shared$getStyles, shared, 'table.tr'))
			]);
	});
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$String$fromList = _String_fromList;
var $author$project$View$Table$nbsp = $elm$core$String$fromList(
	_List_fromArray(
		[
			$elm$core$Char$fromCode(160)
		]));
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$View$Table$darkGrey = function (symbol) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#555')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				_Utils_ap($author$project$View$Table$nbsp, symbol))
			]));
};
var $author$project$View$Table$lightGrey = function (symbol) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#ccc')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				_Utils_ap($author$project$View$Table$nbsp, symbol))
			]));
};
var $elm$html$Html$th = _VirtualDom_node('th');
var $author$project$View$Table$customTheadHelp = F2(
	function (shared, _v0) {
		var name = _v0.a;
		var status = _v0.b;
		var click = _v0.c;
		var content = function () {
			switch (status.$) {
				case 0:
					return _List_fromArray(
						[
							$elm$html$Html$text(name)
						]);
				case 1:
					var selected = status.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name),
							selected ? $author$project$View$Table$darkGrey('↓') : $author$project$View$Table$lightGrey('↓')
						]);
				default:
					if (status.a.$ === 1) {
						var _v2 = status.a;
						return _List_fromArray(
							[
								$elm$html$Html$text(name),
								$author$project$View$Table$lightGrey('↕')
							]);
					} else {
						var isReversed = status.a.a;
						return _List_fromArray(
							[
								$elm$html$Html$text(name),
								$author$project$View$Table$darkGrey(
								isReversed ? '↑' : '↓')
							]);
					}
			}
		}();
		var attrs = $elm$html$Html$Attributes$class(
			A2($author$project$Shared$getStyles, shared, 'table.th'));
		return A2(
			$elm$html$Html$th,
			_List_fromArray(
				[attrs, click]),
			content);
	});
var $author$project$View$Table$customThead = F2(
	function (shared, headers) {
		return A2(
			$author$project$View$Table$HtmlDetails,
			_List_Nil,
			A2(
				$elm$core$List$map,
				$author$project$View$Table$customTheadHelp(shared),
				headers));
	});
var $author$project$View$Table$IncOrDec = function (a) {
	return {$: 3, a: a};
};
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$View$Table$increasingOrDecreasingBy = function (toComparable) {
	return $author$project$View$Table$IncOrDec(
		$elm$core$List$sortBy(toComparable));
};
var $author$project$View$Table$floatColumn = F2(
	function (name, toFloat) {
		return {
			bR: name,
			cd: $author$project$View$Table$increasingOrDecreasingBy(toFloat),
			cm: A2(
				$elm$core$Basics$composeL,
				A2($elm$core$Basics$composeL, $author$project$View$Table$textDetails, $elm$core$String$fromFloat),
				toFloat)
		};
	});
var $author$project$Domain$Schema$getBool = function (propVal) {
	if (propVal.$ === 1) {
		var val = propVal.a;
		return val;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Domain$Schema$getFloat = function (propVal) {
	if (propVal.$ === 3) {
		var val = propVal.a;
		return val;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Domain$Schema$getInt = function (propVal) {
	if (propVal.$ === 2) {
		var val = propVal.a;
		return val;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Domain$Schema$getString = function (propVal) {
	if (!propVal.$) {
		var val = propVal.a;
		return val;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$View$Table$veryCustomColumn = $elm$core$Basics$identity;
var $author$project$View$Table$OpenInstance = function (a) {
	return {$: 4, a: a};
};
var $author$project$Pages$List$Schema_$viewName = F3(
	function (shared, toStr, instanceToShow) {
		return A2(
			$author$project$View$Table$HtmlDetails,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('font-semibold'),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'link')),
							$elm$html$Html$Events$onClick(
							$author$project$View$Table$OpenInstance(instanceToShow))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							toStr(instanceToShow))
						]))
				]));
	});
var $author$project$Pages$List$Schema_$viewInstanceId = F2(
	function (shared, instanceToShow) {
		return A3(
			$author$project$Pages$List$Schema_$viewName,
			shared,
			function (_v0) {
				return instanceToShow.aY;
			},
			instanceToShow);
	});
var $author$project$Pages$List$Schema_$instanceIdLinkColumn = function (shared) {
	return $author$project$View$Table$veryCustomColumn(
		{
			bR: 'ID',
			cd: $author$project$View$Table$increasingOrDecreasingBy(
				function ($) {
					return $.aY;
				}),
			cm: $author$project$Pages$List$Schema_$viewInstanceId(shared)
		});
};
var $author$project$Pages$List$Schema_$instanceLinkColumn = F4(
	function (shared, instanceProp, display_name, propertyName) {
		var toStr = A2(
			$elm$core$Basics$composeL,
			$elm$core$Maybe$withDefault(''),
			A2(instanceProp, propertyName, $author$project$Domain$Schema$getString));
		return $author$project$View$Table$veryCustomColumn(
			{
				bR: display_name,
				cd: $author$project$View$Table$increasingOrDecreasingBy(toStr),
				cm: A2($author$project$Pages$List$Schema_$viewName, shared, toStr)
			});
	});
var $author$project$View$Table$intColumn = F2(
	function (name, toInt) {
		return {
			bR: name,
			cd: $author$project$View$Table$increasingOrDecreasingBy(toInt),
			cm: A2(
				$elm$core$Basics$composeL,
				A2($elm$core$Basics$composeL, $author$project$View$Table$textDetails, $elm$core$String$fromInt),
				toInt)
		};
	});
var $elm$core$List$sortWith = _List_sortWith;
var $author$project$View$Table$stringColumn = F2(
	function (name, toStr) {
		return {
			bR: name,
			cd: $author$project$View$Table$increasingOrDecreasingBy(toStr),
			cm: A2($elm$core$Basics$composeL, $author$project$View$Table$textDetails, toStr)
		};
	});
var $author$project$Pages$List$Schema_$instanceTableConfig = F3(
	function (shared, model, schema) {
		var schemaProps = A2(
			$elm$core$Maybe$map,
			A2(
				$elm$core$Basics$composeL,
				$elm$core$List$map(
					function (v) {
						return _Utils_Tuple3(v.bR, v.aP, v.ay);
					}),
				$elm$core$List$filter(
					function (item) {
						return A2($elm$core$List$member, item, model.w.N);
					})),
			schema.ap);
		var keyProperty = 'name';
		var instanceProp = F3(
			function (key, viewData, instance) {
				return $author$project$Utils$joinMaybes(
					A2(
						$elm$core$Maybe$andThen,
						$elm$core$Maybe$map(viewData),
						A2(
							$elm$core$Maybe$map,
							$elm$core$Dict$get(key),
							instance.ap)));
			});
		var hasKeyProperty = $author$project$Utils$unPackBool(
			A2(
				$elm$core$Maybe$map,
				function (props) {
					return A2(
						$elm$core$List$any,
						function (_v5) {
							var propertyName = _v5.a;
							return _Utils_eq(propertyName, keyProperty);
						},
						props);
				},
				schemaProps));
		var generatedCols = function () {
			if (!schemaProps.$) {
				var properties = schemaProps.a;
				return A2(
					$elm$core$List$map,
					function (_v1) {
						var propertyName = _v1.a;
						var schemaValue = _v1.b;
						var displayName = _v1.c;
						if (_Utils_eq(propertyName, keyProperty)) {
							return A4($author$project$Pages$List$Schema_$instanceLinkColumn, shared, instanceProp, displayName, propertyName);
						} else {
							switch (schemaValue.$) {
								case 0:
									return A2(
										$author$project$View$Table$stringColumn,
										displayName,
										A2(
											$elm$core$Basics$composeL,
											$elm$core$Maybe$withDefault(''),
											A2(instanceProp, propertyName, $author$project$Domain$Schema$getString)));
								case 1:
									return A2(
										$author$project$View$Table$boolColumn,
										displayName,
										A2(
											$elm$core$Basics$composeL,
											$elm$core$Maybe$withDefault(false),
											A2(instanceProp, propertyName, $author$project$Domain$Schema$getBool)));
								case 2:
									return A2(
										$author$project$View$Table$intColumn,
										displayName,
										A2(
											$elm$core$Basics$composeL,
											$elm$core$Maybe$withDefault(0),
											A2(instanceProp, propertyName, $author$project$Domain$Schema$getInt)));
								case 3:
									return A2(
										$author$project$View$Table$floatColumn,
										displayName,
										A2(
											$elm$core$Basics$composeL,
											$elm$core$Maybe$withDefault(0.0),
											A2(instanceProp, propertyName, $author$project$Domain$Schema$getFloat)));
								default:
									return A2(
										$author$project$View$Table$stringColumn,
										displayName,
										A2(
											$elm$core$Basics$composeL,
											$elm$core$Maybe$withDefault('TODO'),
											A2(instanceProp, propertyName, $author$project$Domain$Schema$getString)));
							}
						}
					},
					A2(
						$elm$core$List$sortWith,
						F2(
							function (_v3, _v4) {
								var propertyNameA = _v3.a;
								return _Utils_eq(propertyNameA, keyProperty) ? 0 : 1;
							}),
						properties));
			} else {
				return _List_Nil;
			}
		}();
		return $author$project$View$Table$customConfig(
			{
				cE: _Utils_ap(
					(!hasKeyProperty) ? _List_fromArray(
						[
							$author$project$Pages$List$Schema_$instanceIdLinkColumn(shared)
						]) : _List_Nil,
					generatedCols),
				cH: {
					cA: $elm$core$Maybe$Nothing,
					df: $author$project$Pages$List$Schema_$customRowAttrs(shared),
					dn: _List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'table'))
						]),
					$7: _List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'table.body'))
						]),
					dp: $elm$core$Maybe$Nothing,
					dq: $author$project$View$Table$customThead(shared)
				},
				ds: function ($) {
					return $.aY;
				},
				dw: $author$project$View$Table$SetTableState
			});
	});
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $author$project$View$Headers$modalHeader = F2(
	function (shared, content) {
		return A2(
			$elm$html$Html$h2,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'headers.modal'))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(content)
				]));
	});
var $author$project$View$Modals$modalComponent = F2(
	function (shared, modalConfig) {
		var baseAttrs = _List_fromArray(
			[
				$elm$html$Html$Attributes$id('bck-modal-' + modalConfig.bR),
				$elm$html$Html$Attributes$class(
				A2($author$project$Shared$getStyles, shared, 'modals.overlay'))
			]);
		var _v0 = modalConfig._;
		if (!_v0) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('modal-' + modalConfig.bR),
						$elm$html$Html$Attributes$class(
						A2($author$project$Shared$getStyles, shared, 'modals.container')),
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2(
								A2($author$project$Shared$getStyles, shared, 'modals.container.inactive'),
								!_Utils_eq(modalConfig._, modalConfig.aY))
							]))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$id('content-modal-' + modalConfig.bR),
								$elm$html$Html$Attributes$class(
								A2($author$project$Shared$getStyles, shared, 'modals.outer'))
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_Utils_ap(baseAttrs, modalConfig.cD),
								_List_Nil),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class(
										A2($author$project$Shared$getStyles, shared, 'modals.modal'))
									]),
								_List_fromArray(
									[
										A2($author$project$View$Headers$modalHeader, shared, modalConfig.cS),
										modalConfig.aT
									]))
							]))
					]));
		} else {
			return $author$project$Utils$empty;
		}
	});
var $author$project$Pages$List$Schema_$SchemasTreeViewMsg = function (a) {
	return {$: 3, a: a};
};
var $author$project$View$TreeView$Tree$treeHeightFoldOptions = {
	ae: F3(
		function (heightSoFar, node, childHeight) {
			return A2($elm$core$Basics$max, heightSoFar, childHeight);
		}),
	aI: F3(
		function (foldStateFromParent, node, childrenHeight) {
			return childrenHeight + 1;
		}),
	L: F2(
		function (foldStateFromParent, node) {
			return 0;
		})
};
var $author$project$View$TreeView$Tree$forestHeight = function (nodes) {
	return A3($author$project$View$TreeView$Tree$foldForest, $author$project$View$TreeView$Tree$treeHeightFoldOptions, 0, nodes);
};
var $author$project$View$TreeView$TreeView$modelHeight = function (model) {
	return $author$project$View$TreeView$Tree$forestHeight(
		$author$project$View$TreeView$TreeView$gutsOf(model).U);
};
var $elm$html$Html$table = _VirtualDom_node('table');
var $author$project$View$TreeView$TreeView$Select = function (a) {
	return {$: 2, a: a};
};
var $author$project$View$TreeView$TreeView$Collapse = function (a) {
	return {$: 1, a: a};
};
var $author$project$View$TreeView$TreeView$Collapsed = 2;
var $author$project$View$TreeView$TreeView$Expand = function (a) {
	return {$: 0, a: a};
};
var $author$project$View$TreeView$TreeView$Expanded = 1;
var $author$project$View$TreeView$TreeView$Leaf = 0;
var $elm$html$Html$td = _VirtualDom_node('td');
var $author$project$View$TreeView$TreeView$bulletTd = F3(
	function (expansionState, nodeUid, cssClasses) {
		var htmlContent = function () {
			switch (expansionState) {
				case 1:
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								$author$project$View$TreeView$TreeView$Collapse(nodeUid)),
								$elm$html$Html$Attributes$class(cssClasses.cy)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('O')
							]));
				case 2:
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								$author$project$View$TreeView$TreeView$Expand(nodeUid)),
								$elm$html$Html$Attributes$class(cssClasses.cx)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('O')
							]));
				default:
					return $elm$html$Html$text(' ');
			}
		}();
		var attributes = _List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2(cssClasses.dB, true),
						_Utils_Tuple2(cssClasses.cy, expansionState === 1),
						_Utils_Tuple2(cssClasses.cx, expansionState === 2),
						_Utils_Tuple2(cssClasses.cz, !expansionState)
					]))
			]);
		return A2(
			$elm$html$Html$td,
			attributes,
			_List_fromArray(
				[htmlContent]));
	});
var $author$project$View$TreeView$TreeView$isLeaf = function (annotatedNode) {
	return $elm$core$List$isEmpty(
		$author$project$View$TreeView$Tree$childrenOf(annotatedNode.aE));
};
var $author$project$View$TreeView$TreeView$expansionStateOf = F2(
	function (annotatedNode, model) {
		if ($author$project$View$TreeView$TreeView$isLeaf(annotatedNode)) {
			return 0;
		} else {
			var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
			var nodeUid = $author$project$View$TreeView$TreeView$uidOf(
				guts.h(annotatedNode.aE));
			return A2($elm$core$Set$member, nodeUid, guts.o) ? 2 : 1;
		}
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $author$project$View$TreeView$TreeView$nBlankCells = F2(
	function (cssClasses, currentDepth) {
		return A2(
			$elm$core$List$repeat,
			currentDepth,
			A2(
				$elm$html$Html$td,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2(cssClasses.dB, true),
								_Utils_Tuple2(cssClasses.cV, true)
							]))
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(' ')
					])));
	});
var $elm$html$Html$Attributes$colspan = function (n) {
	return A2(
		_VirtualDom_attribute,
		'colspan',
		$elm$core$String$fromInt(n));
};
var $author$project$View$TreeView$TreeView$nodeTdAttributes = F4(
	function (colSpan, nodeUid, isLeafNode, model) {
		var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
		var selected = A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm$core$Maybe$map,
				function (s) {
					return _Utils_eq(s.W, nodeUid);
				},
				guts.u));
		return _List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2(guts.i.dB, true),
						_Utils_Tuple2(guts.i.dh, selected),
						_Utils_Tuple2('opacity-40 cursor-not-allowed pointer-events-none', !isLeafNode),
						_Utils_Tuple2('cursor-pointer', isLeafNode)
					])),
				$elm$html$Html$Attributes$colspan(colSpan)
			]);
	});
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $author$project$View$TreeView$TreeView$tableRowForNode = F3(
	function (height, model, annotatedNode) {
		var level = annotatedNode.V;
		var levelsLeft = height - level;
		var isLeafNode = $author$project$View$TreeView$TreeView$isLeaf(annotatedNode);
		var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
		var indentation = A2($author$project$View$TreeView$TreeView$nBlankCells, guts.i, level);
		var nodeItem = $elm$html$Html$text(
			guts.ak(annotatedNode.aE));
		var nodeUid = guts.h(annotatedNode.aE);
		var renderedNodeTd = A2(
			$elm$html$Html$td,
			A4($author$project$View$TreeView$TreeView$nodeTdAttributes, levelsLeft, nodeUid, isLeafNode, model),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							$author$project$View$TreeView$TreeView$Select(nodeUid))
						]),
					_List_fromArray(
						[nodeItem]))
				]));
		var expansionState = A2($author$project$View$TreeView$TreeView$expansionStateOf, annotatedNode, model);
		var bullet = A3($author$project$View$TreeView$TreeView$bulletTd, expansionState, nodeUid, guts.i);
		return A2(
			$elm$html$Html$tr,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(guts.i.dB)
				]),
			_Utils_ap(
				indentation,
				_List_fromArray(
					[bullet, renderedNodeTd])));
	});
var $author$project$View$TreeView$TreeView$tableRowsForNodes = F2(
	function (height, model) {
		var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
		return A2(
			$elm$core$List$map,
			function (annotatedNode) {
				return A3($author$project$View$TreeView$TreeView$tableRowForNode, height, model, annotatedNode);
			},
			guts.B);
	});
var $author$project$View$TreeView$TreeView$view = function (model) {
	var height = $author$project$View$TreeView$TreeView$modelHeight(model);
	var guts = $author$project$View$TreeView$TreeView$gutsOf(model);
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$table,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class(guts.i.dB)
					]),
				A2($author$project$View$TreeView$TreeView$tableRowsForNodes, height, model))
			]));
};
var $author$project$Pages$List$Schema_$schemaTreeView = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('schemaTreeView mt-4')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$map,
				$author$project$Pages$List$Schema_$SchemasTreeViewMsg,
				$author$project$View$TreeView$TreeView$view(model.z))
			]));
};
var $author$project$Pages$List$Schema_$newInstanceChooseSchema = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('w-64')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-sm mb-4')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Pick an schema:')
					])),
				$author$project$Pages$List$Schema_$schemaTreeView(model)
			]));
};
var $author$project$View$Table$GoTo = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$View$Table$Next = function (a) {
	return {$: 1, a: a};
};
var $author$project$View$Table$Prev = function (a) {
	return {$: 0, a: a};
};
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $author$project$View$Buttons$unthemedButton = F3(
	function (shared, attrs, content) {
		return A2(
			$elm$html$Html$button,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'buttons.unthemed')),
				attrs),
			_List_fromArray(
				[
					$elm$html$Html$text(content)
				]));
	});
var $author$project$View$Table$paginationView = function (shared) {
	var paginatedInstances = shared.a9;
	var previus = paginatedInstances.bY;
	var prevButton = function (text) {
		return A3(
			$author$project$View$Buttons$unthemedButton,
			shared,
			function () {
				if (!previus.$) {
					var prevCmd = previus.a;
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button.prev')),
							$elm$html$Html$Events$onClick(
							$author$project$View$Table$Prev(prevCmd))
						]);
				} else {
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button.prev')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button.disabled')),
							$elm$html$Html$Attributes$disabled(true)
						]);
				}
			}(),
			text);
	};
	var offset = paginatedInstances.bU;
	var next = paginatedInstances.bS;
	var nextButton = function (text) {
		return A3(
			$author$project$View$Buttons$unthemedButton,
			shared,
			function () {
				if (!next.$) {
					var nextCmd = next.a;
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button.next')),
							$elm$html$Html$Events$onClick(
							$author$project$View$Table$Next(nextCmd))
						]);
				} else {
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button.next')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'pagination.button.disabled')),
							$elm$html$Html$Attributes$disabled(true)
						]);
				}
			}(),
			text);
	};
	var limit = paginatedInstances.bN;
	var numberOfPages = paginatedInstances.cj / limit;
	var pages = (numberOfPages > 0) ? $elm$core$Array$toList(
		A2(
			$elm$core$Array$initialize,
			$elm$core$Basics$ceiling(numberOfPages),
			$elm$core$Basics$identity)) : _List_Nil;
	var currentPage = 1 + $elm$core$Basics$round(numberOfPages * (offset / paginatedInstances.cj));
	var numberButtons = A2(
		$elm$core$List$map,
		function (page) {
			return A3(
				$author$project$View$Buttons$unthemedButton,
				shared,
				_Utils_eq(page, currentPage - 1) ? _List_fromArray(
					[
						$elm$html$Html$Attributes$disabled(true),
						$elm$html$Html$Attributes$class(
						A2($author$project$Shared$getStyles, shared, 'pagination.button')),
						$elm$html$Html$Attributes$class(
						A2($author$project$Shared$getStyles, shared, 'pagination.button.number.active'))
					]) : _List_fromArray(
					[
						$elm$html$Html$Attributes$class(
						A2($author$project$Shared$getStyles, shared, 'pagination.button')),
						$elm$html$Html$Attributes$class(
						A2($author$project$Shared$getStyles, shared, 'pagination.button.number')),
						$elm$html$Html$Events$onClick(
						A2(
							$author$project$View$Table$GoTo,
							$elm$core$String$fromInt(limit * page),
							$elm$core$String$fromInt(limit)))
					]),
				$elm$core$String$fromInt(page + 1));
		},
		pages);
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$id('pagination'),
				$elm$html$Html$Attributes$class(
				A2($author$project$Shared$getStyles, shared, 'pagination'))
			]),
		_List_fromArray(
			[
				A2(
				$elm_community$html_extra$Html$Extra$viewIf,
				numberOfPages > 1,
				A2(
					$elm$html$Html$div,
					_List_Nil,
					A2(
						$elm$core$List$cons,
						prevButton('<'),
						_Utils_ap(
							numberButtons,
							_List_fromArray(
								[
									nextButton('>')
								])))))
			]));
};
var $elm$html$Html$caption = _VirtualDom_node('caption');
var $author$project$View$Table$applySorter = F3(
	function (isReversed, sorter, data) {
		switch (sorter.$) {
			case 0:
				return data;
			case 1:
				var srt = sorter.a;
				return srt(data);
			case 2:
				var srt = sorter.a;
				return $elm$core$List$reverse(
					srt(data));
			case 3:
				var srt = sorter.a;
				return isReversed ? $elm$core$List$reverse(
					srt(data)) : srt(data);
			default:
				var srt = sorter.a;
				return isReversed ? srt(data) : $elm$core$List$reverse(
					srt(data));
		}
	});
var $author$project$View$Table$findSorter = F2(
	function (selectedColumn, columnData) {
		findSorter:
		while (true) {
			if (!columnData.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var name = columnData.a.bR;
				var sorter = columnData.a.cd;
				var remainingColumnData = columnData.b;
				if (_Utils_eq(name, selectedColumn)) {
					return $elm$core$Maybe$Just(sorter);
				} else {
					var $temp$selectedColumn = selectedColumn,
						$temp$columnData = remainingColumnData;
					selectedColumn = $temp$selectedColumn;
					columnData = $temp$columnData;
					continue findSorter;
				}
			}
		}
	});
var $author$project$View$Table$sort = F3(
	function (_v0, columnData, data) {
		var selectedColumn = _v0.a;
		var isReversed = _v0.b;
		var _v1 = A2($author$project$View$Table$findSorter, selectedColumn, columnData);
		if (_v1.$ === 1) {
			return data;
		} else {
			var sorter = _v1.a;
			return A3($author$project$View$Table$applySorter, isReversed, sorter, data);
		}
	});
var $author$project$View$Table$getSortedData = F3(
	function (_v0, state, data) {
		var columns = _v0.cE;
		return A3($author$project$View$Table$sort, state, columns, data);
	});
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$html$Html$tfoot = _VirtualDom_node('tfoot');
var $elm$html$Html$thead = _VirtualDom_node('thead');
var $author$project$View$Table$Reversible = function (a) {
	return {$: 2, a: a};
};
var $author$project$View$Table$Sortable = function (a) {
	return {$: 1, a: a};
};
var $author$project$View$Table$Unsortable = {$: 0};
var $author$project$View$Table$onClick = F3(
	function (name, isReversed, toMsg) {
		return A2(
			$elm$html$Html$Events$on,
			'click',
			A2(
				$elm$json$Json$Decode$map,
				toMsg,
				A3(
					$elm$json$Json$Decode$map2,
					$author$project$View$Table$State,
					$elm$json$Json$Decode$succeed(name),
					$elm$json$Json$Decode$succeed(isReversed))));
	});
var $author$project$View$Table$toHeaderInfo = F3(
	function (_v0, toMsg, _v1) {
		var sortName = _v0.a;
		var isReversed = _v0.b;
		var name = _v1.bR;
		var sorter = _v1.cd;
		switch (sorter.$) {
			case 0:
				return _Utils_Tuple3(
					name,
					$author$project$View$Table$Unsortable,
					A3($author$project$View$Table$onClick, sortName, isReversed, toMsg));
			case 1:
				return _Utils_Tuple3(
					name,
					$author$project$View$Table$Sortable(
						!_Utils_eq(name, sortName)),
					A3($author$project$View$Table$onClick, name, false, toMsg));
			case 2:
				return _Utils_Tuple3(
					name,
					$author$project$View$Table$Sortable(
						_Utils_eq(name, sortName)),
					A3($author$project$View$Table$onClick, name, false, toMsg));
			case 3:
				return _Utils_eq(name, sortName) ? _Utils_Tuple3(
					name,
					$author$project$View$Table$Reversible(
						$elm$core$Maybe$Just(!isReversed)),
					A3($author$project$View$Table$onClick, name, !isReversed, toMsg)) : _Utils_Tuple3(
					name,
					$author$project$View$Table$Reversible($elm$core$Maybe$Nothing),
					A3($author$project$View$Table$onClick, name, false, toMsg));
			default:
				return _Utils_eq(name, sortName) ? _Utils_Tuple3(
					name,
					$author$project$View$Table$Reversible(
						$elm$core$Maybe$Just(isReversed)),
					A3($author$project$View$Table$onClick, name, !isReversed, toMsg)) : _Utils_Tuple3(
					name,
					$author$project$View$Table$Reversible($elm$core$Maybe$Nothing),
					A3($author$project$View$Table$onClick, name, false, toMsg));
		}
	});
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $author$project$View$Table$viewCell = F3(
	function (shared, data, _v0) {
		var viewData = _v0.cm;
		var details = viewData(data);
		return A2(
			$elm$html$Html$td,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'table.td')),
				details.ad),
			details.cC);
	});
var $author$project$View$Table$viewRowHelp = F4(
	function (shared, columns, toRowAttrs, data) {
		return A2(
			$elm$html$Html$tr,
			toRowAttrs(data),
			A2(
				$elm$core$List$map,
				A2($author$project$View$Table$viewCell, shared, data),
				columns));
	});
var $author$project$View$Table$viewRow = F5(
	function (shared, toId, columns, toRowAttrs, data) {
		return _Utils_Tuple2(
			toId(data),
			A4(
				$elm$html$Html$Lazy$lazy3,
				$author$project$View$Table$viewRowHelp(shared),
				columns,
				toRowAttrs,
				data));
	});
var $author$project$View$Table$view = F4(
	function (shared, conf, state, data) {
		var toId = conf.ds;
		var toMsg = conf.dw;
		var columns = conf.cE;
		var customizations = conf.cH;
		var theadDetails = customizations.dq(
			A2(
				$elm$core$List$map,
				A2($author$project$View$Table$toHeaderInfo, state, toMsg),
				columns));
		var thead = A2(
			$elm$html$Html$thead,
			theadDetails.ad,
			_List_fromArray(
				[
					A2($elm$html$Html$tr, _List_Nil, theadDetails.cC)
				]));
		var sortedData = A3($author$project$View$Table$getSortedData, conf, state, data);
		var tbody = A3(
			$elm$html$Html$Keyed$node,
			'tbody',
			customizations.$7,
			A2(
				$elm$core$List$map,
				A4($author$project$View$Table$viewRow, shared, toId, columns, customizations.df),
				sortedData));
		var withFoot = function () {
			var _v1 = customizations.dp;
			if (_v1.$ === 1) {
				return _List_fromArray(
					[tbody]);
			} else {
				var attributes = _v1.a.ad;
				var children = _v1.a.cC;
				return _List_fromArray(
					[
						A2($elm$html$Html$tfoot, attributes, children),
						tbody
					]);
			}
		}();
		return A2(
			$elm$html$Html$table,
			customizations.dn,
			function () {
				var _v0 = customizations.cA;
				if (_v0.$ === 1) {
					return A2($elm$core$List$cons, thead, withFoot);
				} else {
					var attributes = _v0.a.ad;
					var children = _v0.a.cC;
					return A2(
						$elm$core$List$cons,
						A2($elm$html$Html$caption, attributes, children),
						A2($elm$core$List$cons, thead, withFoot));
				}
			}());
	});
var $author$project$Pages$List$Schema_$viewInstancesTable = F3(
	function (conf, model, shared) {
		var instances = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				function (schema) {
					return A2(
						$elm$core$List$map,
						$author$project$Domain$Instance$parseInstanceEnums(schema),
						$elm$core$Dict$values(shared.a9.a3));
				},
				model.K));
		return A4($author$project$View$Table$view, shared, conf, model.aC, instances);
	});
var $author$project$Pages$List$Schema_$content = F3(
	function (shared, req, model) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('content'),
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'content'))
				]),
			_List_fromArray(
				[
					A2(
					$elm_community$html_extra$Html$Extra$viewMaybe,
					function (schema) {
						var modalNewInstanceConfig = {
							_: model._,
							cD: _List_fromArray(
								[
									$elm$html$Html$Events$onClick(
									$author$project$Pages$List$Schema_$NewModal(1))
								]),
							aT: $author$project$Pages$List$Schema_$newInstanceChooseSchema(model),
							cS: 'New ' + schema.ay,
							aY: 0,
							bR: 'newInstance'
						};
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('flex-1 p-6')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('flex flex-col')
										]),
									_List_fromArray(
										[
											A2(
											$elm_community$html_extra$Html$Extra$viewMaybe,
											function (_v0) {
												return A2(
													$elm$html$Html$div,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$class('flex justify-end')
														]),
													_List_fromArray(
														[
															A2(
															$elm$html$Html$a,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$href(shared.ac + ('/schemas/' + req.ao.y)),
																	$elm$html$Html$Attributes$target('_blank'),
																	$elm$html$Html$Attributes$class(
																	A2($author$project$Shared$getStyles, shared, 'link')),
																	$elm$html$Html$Attributes$class('ml-3')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('API Schema')
																])),
															A2(
															$elm$html$Html$a,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$href(shared.ac + ('/schemas/' + (req.ao.y + '/instances'))),
																	$elm$html$Html$Attributes$target('_blank'),
																	$elm$html$Html$Attributes$class(
																	A2($author$project$Shared$getStyles, shared, 'link')),
																	$elm$html$Html$Attributes$class('ml-3')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('API Instances')
																]))
														]));
											},
											shared.dl.cI),
											A2($author$project$View$Headers$sectionHeaderString, shared, 'List ' + schema.ay),
											A2(
											$elm$html$Html$div,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('flex justify-end')
												]),
											_List_fromArray(
												[
													A3(
													$author$project$View$Buttons$standardButton,
													shared,
													_List_fromArray(
														[
															$elm$html$Html$Events$onClick(
															$author$project$Pages$List$Schema_$NewModal(0))
														]),
													'New ' + schema.ay)
												]))
										])),
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('flex justify-end')
										]),
									_List_fromArray(
										[
											A2(
											$elm_community$html_extra$Html$Extra$viewIf,
											!($elm$core$List$isEmpty(model.R) || ($elm$core$List$length(model.R) === 1)),
											A9(
												$author$project$View$Form$select,
												shared,
												'Schema',
												model.R,
												$elm$core$Maybe$Just(schema.aY),
												function (_v1) {
													var display_name = _v1.b;
													return display_name;
												},
												function (_v2) {
													var id = _v2.a;
													return id;
												},
												$author$project$Pages$List$Schema_$ChangeSchema,
												_List_Nil,
												$author$project$Utils$empty)),
											A2(
											$elm$html$Html$map,
											$author$project$Pages$List$Schema_$DropdownMsg,
											A4(
												$author$project$View$Dropdown$checkboxDropdown,
												shared,
												model.w,
												function ($) {
													return $.ay;
												},
												function ($) {
													return $.bR;
												}))
										])),
									A2(
									$elm$html$Html$map,
									$author$project$Pages$List$Schema_$PaginationMsg,
									$author$project$View$Table$paginationView(shared)),
									A2(
									$elm$html$Html$map,
									$author$project$Pages$List$Schema_$TableMsg,
									A3(
										$author$project$Pages$List$Schema_$viewInstancesTable,
										A3($author$project$Pages$List$Schema_$instanceTableConfig, shared, model, schema),
										model,
										shared)),
									A2($author$project$View$Modals$modalComponent, shared, modalNewInstanceConfig)
								]));
					},
					model.K)
				]));
	});
var $author$project$Pages$List$Schema_$view = F3(
	function (shared, req, model) {
		return {
			aS: _List_fromArray(
				[
					A3(
					$elm$html$Html$node,
					'main',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'main')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background.gradient')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.text'))
						]),
					_List_fromArray(
						[
							A3($author$project$Pages$List$Schema_$content, shared, req, model)
						]))
				]),
			ci: 'List'
		};
	});
var $author$project$Pages$List$Schema_$page = F2(
	function (shared, req) {
		return $author$project$Page$advanced(
			{
				r: A2($author$project$Pages$List$Schema_$init, shared, req),
				v: $author$project$Pages$List$Schema_$subscriptions,
				A: A2($author$project$Pages$List$Schema_$update, shared, req),
				q: A2($author$project$Pages$List$Schema_$view, shared, req)
			});
	});
var $author$project$View$Form$Create = 1;
var $author$project$Pages$New$Schema_$init = F2(
	function (shared, req) {
		var schemaId = req.ao.y;
		var schema = A2($elm$core$Dict$get, schemaId, shared.aL);
		var model = {aB: $elm$core$Maybe$Nothing, y: schema, P: $elm$core$Dict$empty};
		if (!schema.$) {
			var sch = schema.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						y: $elm$core$Maybe$Just(
							A3($author$project$Dealer$loadSchemaPropertiesAndComponents, $elm$core$Maybe$Nothing, shared, sch))
					}),
				$author$project$Effect$none);
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Effect$fromCmd(
					A2(
						$elm$core$Platform$Cmd$map,
						$author$project$Pages$Edit$Schema_$Instance_$DealerMsg,
						A2($author$project$Dealer$loadSchema, schemaId, shared))));
		}
	});
var $author$project$Pages$New$Schema_$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Pages$New$Schema_$page = F2(
	function (shared, req) {
		return $author$project$Page$advanced(
			{
				r: A2($author$project$Pages$New$Schema_$init, shared, req),
				v: $author$project$Pages$New$Schema_$subscriptions,
				A: $author$project$Pages$Edit$Schema_$Instance_$update(shared),
				q: A2($author$project$Pages$Edit$Schema_$Instance_$view, shared, 1)
			});
	});
var $author$project$Pages$Themes$ThemesReceived = function (a) {
	return {$: 0, a: a};
};
var $author$project$Domain$Theme$defaultTheme = {
	av: 'TWave.io',
	S: 'Default styles for Schemata UI',
	bR: 'Schemata UI Default Theme',
	aN: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('main', ''),
				_Utils_Tuple2('navmenu', 'bg-gray-300'),
				_Utils_Tuple2('navmenu.menu', 'text-gray-700'),
				_Utils_Tuple2('navmenu.menu.sections.icon', 'text-lg mr-2'),
				_Utils_Tuple2('navmenu.menu.sections.pages.icon', 'text-lg mr-2'),
				_Utils_Tuple2('topbar', 'bg-gray-700'),
				_Utils_Tuple2('topbar.appTitle', 'text-white'),
				_Utils_Tuple2('pagination', ''),
				_Utils_Tuple2('pagination.button', ''),
				_Utils_Tuple2('pagination.button.number', 'bg-gray-300'),
				_Utils_Tuple2('pagination.button.number.active', 'bg-gray-500 text-white'),
				_Utils_Tuple2('pagination.button.prev', ''),
				_Utils_Tuple2('pagination.button.next', ''),
				_Utils_Tuple2('pagination.button.disabled', 'cursor-not-allowed'),
				_Utils_Tuple2('pagination.button.text', ''),
				_Utils_Tuple2('pagination.button.icon', ''),
				_Utils_Tuple2('link', 'text-blue-600'),
				_Utils_Tuple2('form.disabled', 'bg-gray-200'),
				_Utils_Tuple2('buttons.standard', 'bg-gray-500 hover:bg-gray-700 text-white font-bold'),
				_Utils_Tuple2('modals.overlay', 'bg-gray-900'),
				_Utils_Tuple2('modals.modal', 'bg-gray-100')
			])),
	aO: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQBAMAAACAGwOrAAAAG1BMVEUfKTf////j5ObHyc1XXmmPlJs7Q1CrrrRzeYIQNJnCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEEUlEQVR4nO3YzW8bRRgH4FnHcXzM2Enco5eglqMNVc8mWPSaIP4ARwKXY1wE5wQE4s9mPmzHhSSFQ1GNnkfKx7v77lbz62Z2xiEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwIMcbz2aboTSc7pzrH9ed1zE5C+8RteqUnzh7seejgUzf7aOUhnm6Kg/jfhJXuvJdhDZbL13G2LpqTxc6pNKRmnH525/N2Pp89Pb75/OJkPn+45/8TVvq6Gq+LZrx7ahNWWA/3PeMrD+I/C+vwcn/D6pysi2a8e+rDhfX+m32ccliHadJ6074MRzFOem8HL+tQBp3jw7iexGpY3emLRei9Hc5SML8Mbt/EV6GWRQ2r9JTLQ9tvP+uthovySzrVz6fetOezvf4z7A1DN83Ot4ft4KaTp+ltWOlA6aph3cU4Dl/G+Cx0RoPpaftFXNSyqGGVnnVYq/P4zXB6FtqrGNMf3tV5+zy0+VWx12EN0uiXaeZqxuHqVVhNNmHlA0UNa/j1xWlof/4+tadk4/OwuqllUcOqPeXG7bNwNVgcjUKbbn6Wy4PTw+HiaLjXYYUY7m7C0UloxmG6CM3xI2FNQnfYH4WwmnVGabFwG64ntSw9NazcswnrJlw/y49tOnh0msvu8OAs/2t7HVabM+qNQjMOv4XHw7pNz2Ae7fVNfiXE/EKoZempYeWeTVizfKv8y22JbJZO9S/3Pqw0nuVyOQzNOBXfrR4La5EPni2X15POWbmyGdey9NSwFuVu9Z6Lcv1gc7B8D73X+x1W+m/Py+9BaMahO43xsbDywSZ3jjvH67BqWXq2S4fB/fd8fY2pXR/8KvXvdVjdUd2thCa97AY/XTwVVtn7HG/DqmXpeSKs+4Pd+OLbdq/DSuusWIomTfCX66H0HnmySjL3T9bx9k7vhtX7y5O1nvUPTnPPPoeVZqA8nj9CU5ZIdYLvPhxWnq36t9uwall63g2ruxvWLD2826d1zyf4q0lYXYZ+eRumR+zuOL8cjx4OK60B0jpjG1YtS89OWOXynbAmeV2yeTD7exxW/dTh+tnyrq6z0mrzLK8270pYZ7XrPqxe/P2HONuGVcvSsxNWuXwnrNFytV7WH6SFalzsa1h5gk77lbQLTDuSZhzSduXHOLsevD3NYR3E3e1OyCO/yp9/bcOqZbETVrl8J6zVdgvVj3E0PdnjsMonpb/m/XMzDmnP2/1k1vt8cJvD6rZ/C6s/rTvhdVilLHbCKpfvhHXUbjbnIW3ALz7d17AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/oU/AQgciZvQ1/9pAAAAAElFTkSuQmCC',
	aQ: '1.0.0'
};
var $author$project$Domain$Theme$Theme = F6(
	function (name, description, author, version, thumb, styles) {
		return {av: author, S: description, bR: name, aN: styles, aO: thumb, aQ: version};
	});
var $author$project$Domain$Theme$decodeTheme = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2(
		$elm$json$Json$Decode$field,
		'styles',
		$elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, 'thumb', $elm$json$Json$Decode$string),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm$json$Json$Decode$field, 'version', $elm$json$Json$Decode$string),
			A2(
				$elm_community$json_extra$Json$Decode$Extra$andMap,
				A2($elm$json$Json$Decode$field, 'author', $elm$json$Json$Decode$string),
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm$json$Json$Decode$field, 'description', $elm$json$Json$Decode$string),
					A2(
						$elm_community$json_extra$Json$Decode$Extra$andMap,
						A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
						$elm$json$Json$Decode$succeed($author$project$Domain$Theme$Theme)))))));
var $author$project$Domain$Theme$decodeThemes = A2(
	$elm$json$Json$Decode$field,
	'items',
	$elm$json$Json$Decode$dict($author$project$Domain$Theme$decodeTheme));
var $author$project$Endpoint$themes = A3(
	$author$project$Endpoint$url,
	'',
	_List_fromArray(
		['assets', 'json', 'themes.json']),
	_List_Nil);
var $author$project$Api$getThemes = A2($author$project$Api$get, $author$project$Endpoint$themes, $author$project$Domain$Theme$decodeThemes);
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $author$project$Pages$Themes$init = F2(
	function (shared, _v0) {
		return _Utils_Tuple2(
			{
				cP: A3($elm_community$maybe_extra$Maybe$Extra$unwrap, '', $elm$core$Basics$identity, shared.dl.cO),
				aq: A2($elm$core$Dict$singleton, '#default', $author$project$Domain$Theme$defaultTheme)
			},
			$author$project$Effect$batch(
				_List_fromArray(
					[
						$author$project$Effect$fromCmd(
						A2($elm$core$Platform$Cmd$map, $author$project$Pages$Themes$ThemesReceived, $author$project$Api$getThemes))
					])));
	});
var $author$project$Pages$Themes$subscriptions = function (model) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Shared$SetActiveTheme = function (a) {
	return {$: 10, a: a};
};
var $author$project$Pages$Themes$update = F4(
	function (shared, req, msg, model) {
		if (!msg.$) {
			var res = msg.a;
			switch (res.$) {
				case 3:
					var themes = res.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								aq: A2($elm$core$Dict$union, model.aq, themes)
							}),
						$author$project$Effect$none);
				case 2:
					var err = res.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								cP: $author$project$Api$errorToString(err)
							}),
						$author$project$Effect$none);
				default:
					return _Utils_Tuple2(model, $author$project$Effect$none);
			}
		} else {
			var theme = msg.a;
			return _Utils_Tuple2(
				model,
				$author$project$Effect$fromShared(
					$author$project$Shared$SetActiveTheme(theme)));
		}
	});
var $author$project$Pages$Themes$SetActiveTheme = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $author$project$Pages$Themes$themeListItem = F2(
	function (shared, theme) {
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('themes.list.item.' + theme.bR),
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'themes.list.item')),
					A2(
					$author$project$Utils$attrIf,
					_Utils_eq(
						$elm$core$Maybe$Just(theme),
						shared.ct),
					$elm$html$Html$Attributes$class('border-b')),
					$elm$html$Html$Attributes$class('p-4 hover:border-b'),
					$elm$html$Html$Events$onClick(
					$author$project$Pages$Themes$SetActiveTheme(theme))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(theme.aO)
						]),
					_List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('flex flex-col')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('font-semibold capitalize')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(theme.bR),
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('text-xs pl-3')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(theme.aQ)
										]))
								])),
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-xs')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(theme.av)
								])),
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('text-xs mt-2 italic')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(theme.S)
								]))
						]))
				]));
	});
var $author$project$Pages$Themes$content = F2(
	function (shared, model) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('content'),
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'content'))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('content.inner'),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'content.inner'))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('content.inner.cols'),
									$elm$html$Html$Attributes$class(
									A2($author$project$Shared$getStyles, shared, 'content.inner.cols'))
								]),
							_List_fromArray(
								[
									A2($author$project$View$Headers$sectionHeaderString, shared, 'Themes'),
									A2(
									$elm$html$Html$ul,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$id('themes.list'),
											$elm$html$Html$Attributes$class(
											A2($author$project$Shared$getStyles, shared, 'themes.list'))
										]),
									A2(
										$elm$core$List$map,
										function (theme) {
											return A2($author$project$Pages$Themes$themeListItem, shared, theme);
										},
										$elm$core$Dict$values(model.aq)))
								]))
						]))
				]));
	});
var $author$project$Pages$Themes$view = F3(
	function (shared, req, model) {
		return {
			aS: _List_fromArray(
				[
					A3(
					$elm$html$Html$node,
					'main',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'main')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background.gradient')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.text'))
						]),
					_List_fromArray(
						[
							A2($author$project$Pages$Themes$content, shared, model)
						]))
				]),
			ci: 'Custom'
		};
	});
var $author$project$Pages$Themes$page = F2(
	function (shared, req_) {
		var req = req_;
		return $author$project$Page$advanced(
			{
				r: A2($author$project$Pages$Themes$init, shared, req),
				v: $author$project$Pages$Themes$subscriptions,
				A: A2($author$project$Pages$Themes$update, shared, req),
				q: A2($author$project$Pages$Themes$view, shared, req)
			});
	});
var $author$project$Gen$Pages$static = F2(
	function (view_, toModel) {
		return {
			r: F4(
				function (params, _v0, _v1, _v2) {
					return _Utils_Tuple2(
						toModel(params),
						$author$project$Effect$none);
				}),
			v: F5(
				function (_v3, _v4, _v5, _v6, _v7) {
					return $elm$core$Platform$Sub$none;
				}),
			A: F6(
				function (params, _v8, _v9, _v10, _v11, _v12) {
					return _Utils_Tuple2(
						toModel(params),
						$author$project$Effect$none);
				}),
			q: F5(
				function (_v13, _v14, _v15, _v16, _v17) {
					return A2($author$project$View$map, $elm$core$Basics$never, view_);
				})
		};
	});
var $author$project$Pages$NotFound$view = $author$project$View$placeholder('Page not found.');
var $author$project$Gen$Pages$pages = {
	af: A3($author$project$Gen$Pages$bundle, $author$project$Pages$Custom$page, $author$project$Gen$Model$Custom, $author$project$Gen$Msg$Custom),
	ag: A3($author$project$Gen$Pages$bundle, $author$project$Pages$Dashboard$page, $author$project$Gen$Model$Dashboard, $author$project$Gen$Msg$Dashboard),
	ah: A3($author$project$Gen$Pages$bundle, $author$project$Pages$Detail$Schema_$Instance_$page, $author$project$Gen$Model$Detail__Schema___Instance_, $author$project$Gen$Msg$Detail__Schema___Instance_),
	ai: A3($author$project$Gen$Pages$bundle, $author$project$Pages$Edit$Schema_$Instance_$page, $author$project$Gen$Model$Edit__Schema___Instance_, $author$project$Gen$Msg$Edit__Schema___Instance_),
	aj: A3($author$project$Gen$Pages$bundle, $author$project$Pages$Home_$page, $author$project$Gen$Model$Home_, $author$project$Gen$Msg$Home_),
	am: A3($author$project$Gen$Pages$bundle, $author$project$Pages$List$Schema_$page, $author$project$Gen$Model$List__Schema_, $author$project$Gen$Msg$List__Schema_),
	an: A3($author$project$Gen$Pages$bundle, $author$project$Pages$New$Schema_$page, $author$project$Gen$Model$New__Schema_, $author$project$Gen$Msg$New__Schema_),
	aF: A2($author$project$Gen$Pages$static, $author$project$Pages$NotFound$view, $author$project$Gen$Model$NotFound),
	aq: A3($author$project$Gen$Pages$bundle, $author$project$Pages$Themes$page, $author$project$Gen$Model$Themes, $author$project$Gen$Msg$Themes)
};
var $author$project$Gen$Pages$init = function (route) {
	switch (route.$) {
		case 0:
			return $author$project$Gen$Pages$pages.af.r(0);
		case 1:
			return $author$project$Gen$Pages$pages.ag.r(0);
		case 2:
			return $author$project$Gen$Pages$pages.aj.r(0);
		case 3:
			return $author$project$Gen$Pages$pages.aq.r(0);
		case 4:
			var params = route.a;
			return $author$project$Gen$Pages$pages.ah.r(params);
		case 5:
			var params = route.a;
			return $author$project$Gen$Pages$pages.ai.r(params);
		case 6:
			var params = route.a;
			return $author$project$Gen$Pages$pages.am.r(params);
		case 7:
			var params = route.a;
			return $author$project$Gen$Pages$pages.an.r(params);
		default:
			return $author$project$Gen$Pages$pages.aF.r(0);
	}
};
var $author$project$Domain$Theme$baseTheme = {
	av: 'TWave.io',
	S: 'Base styles for Schemata UI',
	bR: 'Schemata UI Base Theme',
	aN: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('main', ''),
				_Utils_Tuple2('navmenu', 'fixed top-12 left-0 h-full w-52 z-50 flex flex-col px-4 py-2 pb-20 overflow-auto scrollbar-hidden'),
				_Utils_Tuple2('navmenu.menu', 'pt-2'),
				_Utils_Tuple2('navmenu.menu.sections', 'mb-8'),
				_Utils_Tuple2('navmenu.menu.sections.title', 'flex flex-row font-bold'),
				_Utils_Tuple2('navmenu.menu.sections.icon', 'text-lg mr-2'),
				_Utils_Tuple2('navmenu.menu.sections.pages', 'mb-4 flex flex-col pl-6'),
				_Utils_Tuple2('navmenu.menu.sections.pages.title', 'flex flex-row'),
				_Utils_Tuple2('navmenu.menu.sections.pages.icon', 'text-lg mr-2'),
				_Utils_Tuple2('navmenu.menu.item', 'font-light hover:font-semibold'),
				_Utils_Tuple2('navmenu.menu.item.active', 'font-semibold'),
				_Utils_Tuple2('navmenu.menu.item.title', 'flex flex-row'),
				_Utils_Tuple2('navmenu.menu.item.icon', 'text-lg mr-2'),
				_Utils_Tuple2('topbar', 'fixed top-0 left-0 h-12 w-full p-2 pl-4 z-51'),
				_Utils_Tuple2('topbar.appTitle', 'cursor-pointer text-2xl'),
				_Utils_Tuple2('content', 'top-12 left-0 absolute w-full h-full pl-52 px-4 overflow-y-auto scrollbar-hidden z-0'),
				_Utils_Tuple2('content.inner', 'flex-1 p-6'),
				_Utils_Tuple2('content.inner.cols', 'flex flex-col pb-8'),
				_Utils_Tuple2('link', 'underline cursor-pointer'),
				_Utils_Tuple2('buttons.standard', 'py-2 px-8 rounded focus:outline-none transition-all transition duration-300 ease-in-out '),
				_Utils_Tuple2('buttons.unthemed', 'rounded focus:outline-none transition-all transition duration-300 ease-in-out '),
				_Utils_Tuple2('buttons.resettodefault', 'font-bold p-1 rounded focus:outline-none h-9 ml-1 transition duration-300 ease-in-out'),
				_Utils_Tuple2('buttons.withicon', ''),
				_Utils_Tuple2('buttons.withicon.icon', ''),
				_Utils_Tuple2('form', ''),
				_Utils_Tuple2('form.disabled', 'disabled cursor-not-allowed opacity-50'),
				_Utils_Tuple2('form.fields', 'flex-1 w-auto h-full'),
				_Utils_Tuple2('form.components', 'flex-1 w-auto h-full'),
				_Utils_Tuple2('form.legend', 'text-lg font-semibold mb-4 border-b '),
				_Utils_Tuple2('form.section', ''),
				_Utils_Tuple2('form.fieldset', ''),
				_Utils_Tuple2('form.control', 'flex flex-row mb-2 items-center'),
				_Utils_Tuple2('form.control.content', 'w-full'),
				_Utils_Tuple2('form.label', 'inline-block w-64 text-right pr-3'),
				_Utils_Tuple2('form.input.container', 'flex flex-row items-center'),
				_Utils_Tuple2('form.input', 'appearance-none border rounded w-64 py-2 px-3 leading-tight focus:outline-none'),
				_Utils_Tuple2('form.checkbox.container', 'flex flex-row mb-2 items-center'),
				_Utils_Tuple2('form.checkbox', 'appearance-none h-4 w-4 border rounded-sm focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain'),
				_Utils_Tuple2('form.select.container', 'flex flex-row w-full items-center'),
				_Utils_Tuple2('form.select', 'block p-2 w-64 rounded border'),
				_Utils_Tuple2('form.error', 'text-xs italic'),
				_Utils_Tuple2('form.resetbutton', ''),
				_Utils_Tuple2('form.resetbutton.icon', ''),
				_Utils_Tuple2('table', 'w-full text-s text-left'),
				_Utils_Tuple2('table.body', ''),
				_Utils_Tuple2('table.header', ''),
				_Utils_Tuple2('table.th', 'p-3 text-sm cursor-pointer border-b'),
				_Utils_Tuple2('table.tr', 'transition-colors transition duration-300 ease-in-out'),
				_Utils_Tuple2('table.td', 'p-3'),
				_Utils_Tuple2('pagination', 'flex justify-end'),
				_Utils_Tuple2('pagination.button', 'py-1 px-2 mx-1'),
				_Utils_Tuple2('pagination.button.number', ''),
				_Utils_Tuple2('pagination.button.number.active', 'font-semibold'),
				_Utils_Tuple2('pagination.button.prev', ''),
				_Utils_Tuple2('pagination.button.next', ''),
				_Utils_Tuple2('pagination.button.disabled', 'cursor-not-allowed'),
				_Utils_Tuple2('pagination.button.text', ''),
				_Utils_Tuple2('pagination.button.icon', ''),
				_Utils_Tuple2('modals.outer', 'fixed top-0 left-0 w-full h-full flex justify-center place-items-center z-30'),
				_Utils_Tuple2('modals.container', 'transition duration-200 ease-in'),
				_Utils_Tuple2('modals.container.inactive', 'pointer-events-none opacity-0'),
				_Utils_Tuple2('modals.overlay', 'w-full h-full opacity-70 z-40 fixed top-0 left-0'),
				_Utils_Tuple2('modals.modal', 'absolute h-auto p-4 border z-50'),
				_Utils_Tuple2('icon', 'material-icons material-symbols-outlined'),
				_Utils_Tuple2('headers.modal', 'text-xl mb-4 border-b'),
				_Utils_Tuple2('headers.section', 'text-xl font-semibold capitalize mb-4 border-b'),
				_Utils_Tuple2('themes.list', 'grid grid-cols-4 gap-4'),
				_Utils_Tuple2('themes.list.item', 'cursor-pointer')
			])),
	aO: '',
	aQ: '1.0.0'
};
var $author$project$Domain$Config$defaultConfig = {bs: '', a8: _List_Nil, b9: _List_Nil, ci: ''};
var $author$project$Domain$Instance$emptyPagnatedInstances = {a3: $elm$core$Dict$empty, bN: 0, bS: $elm$core$Maybe$Nothing, bU: 0, bY: $elm$core$Maybe$Nothing, cc: 0, cj: 0};
var $author$project$Storage$Storage = F3(
	function (debug, activeTheme, errMsg) {
		return {ct: activeTheme, cI: debug, cO: errMsg};
	});
var $author$project$Storage$decoder = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'errMsg', $elm$json$Json$Decode$string),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'activeTheme', $author$project$Domain$Theme$decodeTheme),
		A2(
			$elm_community$json_extra$Json$Decode$Extra$andMap,
			A2($elm_community$json_extra$Json$Decode$Extra$optionalField, 'debug', $elm$json$Json$Decode$bool),
			$elm$json$Json$Decode$succeed($author$project$Storage$Storage))));
var $author$project$Storage$init = {ct: $elm$core$Maybe$Nothing, cI: $elm$core$Maybe$Nothing, cO: $elm$core$Maybe$Nothing};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Storage$fromJson = function (json) {
	var _default = function () {
		var _v0 = A2($elm$json$Json$Decode$decodeValue, $author$project$Storage$decoder, json);
		if (!_v0.$) {
			var val = _v0.a;
			return $author$project$Storage$init;
		} else {
			var err = _v0.a;
			return _Utils_update(
				$author$project$Storage$init,
				{
					cO: $elm$core$Maybe$Just(
						$elm$json$Json$Decode$errorToString(err))
				});
		}
	}();
	return A2(
		$elm$core$Result$withDefault,
		_default,
		A2($elm$json$Json$Decode$decodeValue, $author$project$Storage$decoder, json));
};
var $elm$json$Json$Encode$dict = F3(
	function (toKey, toValue, dictionary) {
		return _Json_wrap(
			A3(
				$elm$core$Dict$foldl,
				F3(
					function (key, value, obj) {
						return A3(
							_Json_addField,
							toKey(key),
							toValue(value),
							obj);
					}),
				_Json_emptyObject(0),
				dictionary));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $author$project$Domain$Theme$encodeTheme = function (theme) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(theme.bR)),
				_Utils_Tuple2(
				'description',
				$elm$json$Json$Encode$string(theme.S)),
				_Utils_Tuple2(
				'author',
				$elm$json$Json$Encode$string(theme.av)),
				_Utils_Tuple2(
				'version',
				$elm$json$Json$Encode$string(theme.aQ)),
				_Utils_Tuple2(
				'thumb',
				$elm$json$Json$Encode$string(theme.aO)),
				_Utils_Tuple2(
				'styles',
				A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$string, theme.aN))
			]));
};
var $the_sett$json_optional$Json$Encode$Optional$objectMaySkip = function (fields) {
	return $elm$json$Json$Encode$object(
		A3(
			$elm$core$List$foldr,
			F2(
				function (fld, accum) {
					switch (fld.$) {
						case 0:
							var name = fld.a;
							var val = fld.b;
							return A2(
								$elm$core$List$cons,
								_Utils_Tuple2(name, val),
								accum);
						case 1:
							var name = fld.a;
							return accum;
						case 2:
							var name = fld.a;
							return A2(
								$elm$core$List$cons,
								_Utils_Tuple2(name, $elm$json$Json$Encode$null),
								accum);
						default:
							return accum;
					}
				}),
			_List_Nil,
			fields));
};
var $the_sett$json_optional$Json$Encode$Optional$Optional = function (a) {
	return {$: 1, a: a};
};
var $the_sett$json_optional$Json$Encode$Optional$WithValue = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $the_sett$json_optional$Json$Encode$Optional$optionalField = F2(
	function (encoder, _v0) {
		var name = _v0.a;
		var maybeVal = _v0.b;
		if (!maybeVal.$) {
			var val = maybeVal.a;
			return A2(
				$the_sett$json_optional$Json$Encode$Optional$WithValue,
				name,
				encoder(val));
		} else {
			return $the_sett$json_optional$Json$Encode$Optional$Optional(name);
		}
	});
var $author$project$Storage$save = function (storage) {
	return $the_sett$json_optional$Json$Encode$Optional$objectMaySkip(
		_List_fromArray(
			[
				A2(
				$the_sett$json_optional$Json$Encode$Optional$optionalField,
				$elm$json$Json$Encode$bool,
				_Utils_Tuple2('debug', storage.cI)),
				A2(
				$the_sett$json_optional$Json$Encode$Optional$optionalField,
				$author$project$Domain$Theme$encodeTheme,
				_Utils_Tuple2('activeTheme', storage.ct))
			]));
};
var $author$project$Storage$save_ = _Platform_outgoingPort('save_', $elm$core$Basics$identity);
var $author$project$Storage$saveToLocalStorage = A2($elm$core$Basics$composeR, $author$project$Storage$save, $author$project$Storage$save_);
var $author$project$Storage$setDebug = F2(
	function (debug, storage) {
		if ((!debug.$) && debug.a) {
			return $author$project$Storage$saveToLocalStorage(
				_Utils_update(
					storage,
					{cI: debug}));
		} else {
			return $author$project$Storage$saveToLocalStorage(
				_Utils_update(
					storage,
					{cI: $elm$core$Maybe$Nothing}));
		}
	});
var $author$project$Shared$init = F2(
	function (req, flags) {
		var store = $author$project$Storage$fromJson(flags.dm);
		var model = {
			ct: function () {
				var _v1 = store.ct;
				if (!_v1.$) {
					var theme = _v1.a;
					return $elm$core$Maybe$Just(theme);
				} else {
					return $elm$core$Maybe$Just($author$project$Domain$Theme$defaultTheme);
				}
			}(),
			ac: flags.bs,
			aw: $author$project$Domain$Theme$baseTheme,
			cF: $author$project$Domain$Config$defaultConfig,
			cP: '',
			a8: $elm$core$Dict$empty,
			a9: $author$project$Domain$Instance$emptyPagnatedInstances,
			aL: $elm$core$Dict$empty,
			b9: _List_Nil,
			dl: store
		};
		var action = function () {
			var _v0 = A2($elm$core$Dict$get, 'debug', req.c7);
			_v0$2:
			while (true) {
				if (!_v0.$) {
					switch (_v0.a) {
						case 'true':
							return A2(
								$author$project$Storage$setDebug,
								$elm$core$Maybe$Just(true),
								store);
						case 'false':
							return A2($author$project$Storage$setDebug, $elm$core$Maybe$Nothing, store);
						default:
							break _v0$2;
					}
				} else {
					break _v0$2;
				}
			}
			return $elm$core$Platform$Cmd$none;
		}();
		return _Utils_Tuple2(model, action);
	});
var $author$project$Main$init = F3(
	function (flags, url_, key) {
		var url = $author$project$Main$fragmentAsPath(
			A2(
				$elm$core$Maybe$withDefault,
				url_,
				$elm$url$Url$fromString('http://localhost:5000/#/dashboard')));
		var _v0 = A2(
			$author$project$Shared$init,
			A3($author$project$Request$create, 0, url, key),
			flags);
		var shared = _v0.a;
		var sharedCmd = _v0.b;
		var _v1 = A4(
			$author$project$Gen$Pages$init,
			$author$project$Gen$Route$fromUrl(url),
			shared,
			url,
			key);
		var page = _v1.a;
		var effect = _v1.b;
		return _Utils_Tuple2(
			A4($author$project$Main$Model, url, key, shared, page),
			A2(
				$elm$core$Platform$Cmd$map,
				A2($author$project$Main$GetConfig, sharedCmd, effect),
				$author$project$Api$getConfig(flags.bs)));
	});
var $author$project$Main$Page = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$Shared = function (a) {
	return {$: 2, a: a};
};
var $author$project$Gen$Pages$subscriptions = function (model_) {
	switch (model_.$) {
		case 0:
			return F3(
				function (_v1, _v2, _v3) {
					return $elm$core$Platform$Sub$none;
				});
		case 1:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.af.v, params, model);
		case 2:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.ag.v, params, model);
		case 3:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.aj.v, params, model);
		case 4:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.aq.v, params, model);
		case 5:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.ah.v, params, model);
		case 6:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.ai.v, params, model);
		case 7:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.am.v, params, model);
		case 8:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.an.v, params, model);
		default:
			var params = model_.a;
			return A2($author$project$Gen$Pages$pages.aF.v, params, 0);
	}
};
var $author$project$Shared$StorageUpdated = function (a) {
	return {$: 8, a: a};
};
var $author$project$Storage$load_ = _Platform_incomingPort('load_', $elm$json$Json$Decode$value);
var $author$project$Storage$load = function (fromStorage) {
	return $author$project$Storage$load_(
		A2($elm$core$Basics$composeR, $author$project$Storage$fromJson, fromStorage));
};
var $author$project$Shared$subscriptions = F2(
	function (_v0, _v1) {
		return $author$project$Storage$load($author$project$Shared$StorageUpdated);
	});
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2(
				$elm$core$Platform$Sub$map,
				$author$project$Main$Page,
				A4($author$project$Gen$Pages$subscriptions, model.c5, model.l, model.bp, model.x)),
				A2(
				$elm$core$Platform$Sub$map,
				$author$project$Main$Shared,
				A2(
					$author$project$Shared$subscriptions,
					A3($author$project$Request$create, 0, model.bp, model.x),
					model.l))
			]));
};
var $author$project$Shared$SchemasLoaded = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $author$project$Effect$toCmd = F2(
	function (_v0, effect) {
		var fromSharedMsg = _v0.a;
		var fromPageMsg = _v0.b;
		switch (effect.$) {
			case 0:
				return $elm$core$Platform$Cmd$none;
			case 1:
				var cmd = effect.a;
				return A2($elm$core$Platform$Cmd$map, fromPageMsg, cmd);
			case 2:
				var msg = effect.a;
				return A2(
					$elm$core$Task$perform,
					fromSharedMsg,
					$elm$core$Task$succeed(msg));
			default:
				var list = effect.a;
				return $elm$core$Platform$Cmd$batch(
					A2(
						$elm$core$List$map,
						$author$project$Effect$toCmd(
							_Utils_Tuple2(fromSharedMsg, fromPageMsg)),
						list));
		}
	});
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 1) {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 1) {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.b0;
		if (!_v0) {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.aW,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.c7,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.bX,
					_Utils_ap(http, url.bI)),
				url.aH)));
};
var $author$project$Gen$Pages$update = F2(
	function (msg_, model_) {
		var _v0 = _Utils_Tuple2(msg_, model_);
		_v0$8:
		while (true) {
			switch (_v0.a.$) {
				case 0:
					if (_v0.b.$ === 1) {
						var msg = _v0.a.a;
						var _v1 = _v0.b;
						var params = _v1.a;
						var model = _v1.b;
						return A3($author$project$Gen$Pages$pages.af.A, params, msg, model);
					} else {
						break _v0$8;
					}
				case 1:
					if (_v0.b.$ === 2) {
						var msg = _v0.a.a;
						var _v2 = _v0.b;
						var params = _v2.a;
						var model = _v2.b;
						return A3($author$project$Gen$Pages$pages.ag.A, params, msg, model);
					} else {
						break _v0$8;
					}
				case 2:
					if (_v0.b.$ === 3) {
						var msg = _v0.a.a;
						var _v3 = _v0.b;
						var params = _v3.a;
						var model = _v3.b;
						return A3($author$project$Gen$Pages$pages.aj.A, params, msg, model);
					} else {
						break _v0$8;
					}
				case 3:
					if (_v0.b.$ === 4) {
						var msg = _v0.a.a;
						var _v4 = _v0.b;
						var params = _v4.a;
						var model = _v4.b;
						return A3($author$project$Gen$Pages$pages.aq.A, params, msg, model);
					} else {
						break _v0$8;
					}
				case 4:
					if (_v0.b.$ === 5) {
						var msg = _v0.a.a;
						var _v5 = _v0.b;
						var params = _v5.a;
						var model = _v5.b;
						return A3($author$project$Gen$Pages$pages.ah.A, params, msg, model);
					} else {
						break _v0$8;
					}
				case 5:
					if (_v0.b.$ === 6) {
						var msg = _v0.a.a;
						var _v6 = _v0.b;
						var params = _v6.a;
						var model = _v6.b;
						return A3($author$project$Gen$Pages$pages.ai.A, params, msg, model);
					} else {
						break _v0$8;
					}
				case 6:
					if (_v0.b.$ === 7) {
						var msg = _v0.a.a;
						var _v7 = _v0.b;
						var params = _v7.a;
						var model = _v7.b;
						return A3($author$project$Gen$Pages$pages.am.A, params, msg, model);
					} else {
						break _v0$8;
					}
				default:
					if (_v0.b.$ === 8) {
						var msg = _v0.a.a;
						var _v8 = _v0.b;
						var params = _v8.a;
						var model = _v8.b;
						return A3($author$project$Gen$Pages$pages.an.A, params, msg, model);
					} else {
						break _v0$8;
					}
			}
		}
		return F3(
			function (_v9, _v10, _v11) {
				return _Utils_Tuple2(model_, $author$project$Effect$none);
			});
	});
var $author$project$Shared$InstanceSaved = function (a) {
	return {$: 6, a: a};
};
var $author$project$Shared$SchemaComponentsLoaded = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Utils$encodeMaybe = F2(
	function (m, encoder) {
		if (!m.$) {
			var val = m.a;
			return encoder(val);
		} else {
			return $elm$json$Json$Encode$null;
		}
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Domain$Schema$encodeEnumType = function (_enum) {
	if (!_enum.$) {
		var selected = _enum.a;
		return A2(
			$author$project$Utils$encodeMaybe,
			selected,
			function (item) {
				return $elm$json$Json$Encode$string(item.aP);
			});
	} else {
		var selected = _enum.a;
		return A2(
			$author$project$Utils$encodeMaybe,
			selected,
			function (item) {
				return $elm$json$Json$Encode$int(item.aP);
			});
	}
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$Domain$Schema$encodePropertyValue = function (value) {
	switch (value.$) {
		case 0:
			var val = value.a;
			return A2($author$project$Utils$encodeMaybe, val, $elm$json$Json$Encode$string);
		case 1:
			var val = value.a;
			return A2($author$project$Utils$encodeMaybe, val, $elm$json$Json$Encode$bool);
		case 2:
			var val = value.a;
			return A2($author$project$Utils$encodeMaybe, val, $elm$json$Json$Encode$int);
		case 3:
			var val = value.a;
			return A2($author$project$Utils$encodeMaybe, val, $elm$json$Json$Encode$float);
		default:
			var val = value.a;
			return A2($author$project$Utils$encodeMaybe, val, $author$project$Domain$Schema$encodeEnumType);
	}
};
var $author$project$Domain$Schema$encodeNewProperty = function (property) {
	return (!property.bt) ? $elm$core$Maybe$Just(
		_Utils_Tuple2(
			property.bR,
			$author$project$Domain$Schema$encodePropertyValue(property.aP))) : $elm$core$Maybe$Nothing;
};
var $author$project$Domain$Schema$encodeComponent = function (component) {
	return _Utils_Tuple2(
		component.bR,
		A2(
			$author$project$Domain$Schema$encodeSchema,
			$author$project$Domain$Schema$getComponentSchema(component.y),
			$elm$core$Maybe$Nothing));
};
var $author$project$Domain$Schema$encodeSchema = F2(
	function (schema, instanceId) {
		var _v0 = function () {
			if (!instanceId.$) {
				var id = instanceId.a;
				return _Utils_Tuple2(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'id',
							$elm$json$Json$Encode$string(id))
						]),
					$author$project$Domain$Schema$encodeNewProperty);
			} else {
				return _Utils_Tuple2(_List_Nil, $author$project$Domain$Schema$encodeNewProperty);
			}
		}();
		var instanceIdEncoded = _v0.a;
		var encodeProperty = _v0.b;
		return $elm$json$Json$Encode$object(
			_Utils_ap(
				instanceIdEncoded,
				_Utils_ap(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'schema',
							$elm$json$Json$Encode$string(schema.aY)),
							_Utils_Tuple2(
							'properties',
							$elm$json$Json$Encode$object(
								A2(
									$elm$core$Maybe$withDefault,
									_List_Nil,
									A2(
										$elm$core$Maybe$map,
										A2(
											$elm$core$Basics$composeR,
											$elm$core$List$map(encodeProperty),
											$author$project$Utils$catMaybes),
										schema.ap))))
						]),
					function () {
						var _v2 = schema.ax;
						if (!_v2.$) {
							var components = _v2.a;
							return _List_fromArray(
								[
									_Utils_Tuple2(
									'components',
									$elm$json$Json$Encode$object(
										A2($elm$core$List$map, $author$project$Domain$Schema$encodeComponent, components)))
								]);
						} else {
							return _List_Nil;
						}
					}())));
	});
var $author$project$Api$getInstancesList = F2(
	function (apiUrl, schemaId) {
		return A2(
			$author$project$Api$get,
			A3($author$project$Endpoint$instances, apiUrl, schemaId, _List_Nil),
			$author$project$Domain$Instance$decodePaginatedInstances);
	});
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $author$project$Api$post = F3(
	function (url, body, decoder) {
		return $author$project$Endpoint$request(
			{
				aS: body,
				aU: A2($elm$http$Http$expectJson, $author$project$Api$fromResult, decoder),
				aX: _List_fromArray(
					[
						A2($elm$http$Http$header, 'accept', 'application/json')
					]),
				a5: 'POST',
				bn: $elm$core$Maybe$Nothing,
				bo: false,
				bp: url
			});
	});
var $author$project$Endpoint$postInstance = function (apiServer) {
	return A3(
		$author$project$Endpoint$url,
		apiServer,
		_List_fromArray(
			['instances']),
		_List_Nil);
};
var $author$project$Api$postInstance = F2(
	function (apiUrl, body) {
		return A3(
			$author$project$Api$post,
			$author$project$Endpoint$postInstance(apiUrl),
			$elm$http$Http$jsonBody(body),
			A2($elm$json$Json$Decode$field, 'schema', $elm$json$Json$Decode$string));
	});
var $author$project$Api$put = F3(
	function (url, body, decoder) {
		return $author$project$Endpoint$request(
			{
				aS: body,
				aU: A2($elm$http$Http$expectJson, $author$project$Api$fromResult, decoder),
				aX: _List_fromArray(
					[
						A2($elm$http$Http$header, 'accept', 'application/json')
					]),
				a5: 'PUT',
				bn: $elm$core$Maybe$Nothing,
				bo: false,
				bp: url
			});
	});
var $author$project$Api$putInstance = F3(
	function (apiUrl, instanceId, body) {
		return A3(
			$author$project$Api$put,
			A2($author$project$Endpoint$instance, apiUrl, instanceId),
			$elm$http$Http$jsonBody(body),
			A2($elm$json$Json$Decode$field, 'schema', $elm$json$Json$Decode$string));
	});
var $author$project$Storage$setActiveTheme = F2(
	function (theme, storage) {
		return $author$project$Storage$saveToLocalStorage(
			_Utils_update(
				storage,
				{ct: theme}));
	});
var $author$project$Shared$update = F3(
	function (req, msg, model) {
		switch (msg.$) {
			case 0:
				var schemaIds = msg.a;
				return _Utils_Tuple2(
					model,
					A2(
						$elm$core$Platform$Cmd$map,
						$author$project$Shared$SchemasLoaded,
						A2($author$project$Api$getSchemas, model.ac, schemaIds)));
			case 1:
				var res = msg.a;
				switch (res.$) {
					case 3:
						var schemas = res.a;
						var schemasToUpdate = A2(
							$elm$core$List$map,
							function (_v2) {
								var s = _v2.a;
								var comps = _v2.b;
								if (!comps.$) {
									var val = comps.a;
									return A2(
										$elm$core$Platform$Cmd$map,
										$author$project$Shared$SchemaComponentsLoaded(s),
										A2($author$project$Api$getSchemas, model.ac, val));
								} else {
									return $elm$core$Platform$Cmd$none;
								}
							},
							A2(
								$elm$core$List$map,
								function (schema) {
									return _Utils_Tuple2(
										schema,
										A2(
											$elm$core$Maybe$map,
											$elm$core$List$map(
												function (comp) {
													return $author$project$Domain$Schema$getComponentSchema(comp.y).aY;
												}),
											schema.ax));
								},
								schemas));
						var newSchemas = A2(
							$elm$core$Dict$union,
							$elm$core$Dict$fromList(
								A2(
									$elm$core$List$map,
									function (s) {
										return _Utils_Tuple2(s.aY, s);
									},
									schemas)),
							model.aL);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{aL: newSchemas}),
							$elm$core$Platform$Cmd$batch(schemasToUpdate));
					case 2:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 2:
				var schema = msg.a;
				var res = msg.b;
				switch (res.$) {
					case 3:
						var schemas = res.a;
						var _v5 = A3($author$project$Shared$updateSchemasDictComponents, schema, schemas, model);
						var newModel = _v5.a;
						return _Utils_Tuple2(newModel, $elm$core$Platform$Cmd$none);
					case 2:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 3:
				var schemaId = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{a9: $author$project$Domain$Instance$emptyPagnatedInstances}),
					A2(
						$elm$core$Platform$Cmd$map,
						$author$project$Shared$InstancesListReceived,
						A2($author$project$Api$getInstancesList, model.cF.bs, schemaId)));
			case 5:
				var schema = msg.a;
				var instanceId = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{a9: $author$project$Domain$Instance$emptyPagnatedInstances}),
					function () {
						if (!instanceId.$) {
							var id = instanceId.a;
							return A2(
								$elm$core$Platform$Cmd$map,
								$author$project$Shared$InstanceSaved,
								A3(
									$author$project$Api$putInstance,
									model.ac,
									id,
									A2(
										$author$project$Domain$Schema$encodeSchema,
										schema,
										$elm$core$Maybe$Just(id))));
						} else {
							return A2(
								$elm$core$Platform$Cmd$map,
								$author$project$Shared$InstanceSaved,
								A2(
									$author$project$Api$postInstance,
									model.ac,
									A2($author$project$Domain$Schema$encodeSchema, schema, $elm$core$Maybe$Nothing)));
						}
					}());
			case 6:
				var res = msg.a;
				switch (res.$) {
					case 3:
						var instance = res.a;
						var backToListUrl = $author$project$Gen$Route$toHref(
							$author$project$Gen$Route$List__Schema_(
								{y: instance}));
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{a9: $author$project$Domain$Instance$emptyPagnatedInstances}),
							A2($elm$browser$Browser$Navigation$pushUrl, req.x, backToListUrl));
					case 2:
						var err = res.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									cP: $author$project$Api$errorToString(err)
								}),
							$elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 4:
				var res = msg.a;
				switch (res.$) {
					case 3:
						var instances = res.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{a9: instances}),
							$elm$core$Platform$Cmd$none);
					case 2:
						var err = res.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									cP: $author$project$Api$errorToString(err)
								}),
							$elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 7:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 8:
				var newStorage = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{dl: newStorage}),
					$elm$core$Platform$Cmd$none);
			case 9:
				var newModel = msg.a;
				return _Utils_Tuple2(newModel, $elm$core$Platform$Cmd$none);
			case 10:
				var theme = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ct: $elm$core$Maybe$Just(theme)
						}),
					A2(
						$author$project$Storage$setActiveTheme,
						$elm$core$Maybe$Just(theme),
						model.dl));
			default:
				var cmd = msg.a;
				return _Utils_Tuple2(model, cmd);
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 4:
				var sharedCmd = msg.a;
				var effect = msg.b;
				var res = msg.c;
				var shared = model.l;
				switch (res.$) {
					case 3:
						var config = res.a;
						var schemasToPreload = A2(
							$elm$core$List$map,
							function ($) {
								return $.y;
							},
							config.a8);
						var newConfig = _Utils_update(
							config,
							{bs: shared.ac});
						var newShared = _Utils_update(
							shared,
							{
								cF: newConfig,
								a8: $elm$core$Dict$fromList(
									A2(
										$elm$core$List$map,
										function (page_) {
											return _Utils_Tuple2(page_.bR, page_);
										},
										config.a8)),
								b9: config.b9
							});
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{l: newShared}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										A2(
										$elm$core$Platform$Cmd$map,
										$author$project$Main$Shared,
										A2(
											$elm$core$Platform$Cmd$map,
											$author$project$Shared$SchemasLoaded,
											A2($author$project$Api$getSchemas, newShared.ac, schemasToPreload))),
										A2($elm$core$Platform$Cmd$map, $author$project$Main$Shared, sharedCmd),
										A2(
										$author$project$Effect$toCmd,
										_Utils_Tuple2($author$project$Main$Shared, $author$project$Main$Page),
										effect)
									])));
					case 2:
						var err = res.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									l: _Utils_update(
										shared,
										{
											cP: $author$project$Api$errorToString(err)
										})
								}),
							$elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 1:
				if (!msg.a.$) {
					var url = msg.a.a;
					return _Utils_Tuple2(
						model,
						A2(
							$elm$browser$Browser$Navigation$pushUrl,
							model.x,
							$elm$url$Url$toString(url)));
				} else {
					var url = msg.a.a;
					return _Utils_Tuple2(
						model,
						(url === '') ? $elm$core$Platform$Cmd$none : $elm$browser$Browser$Navigation$load(url));
				}
			case 0:
				var url_ = msg.a;
				var url = $author$project$Main$fragmentAsPath(
					A2(
						$elm$core$Maybe$withDefault,
						url_,
						$elm$url$Url$fromString('http://localhost:5000/#/dashboard')));
				if (!_Utils_eq(url.aH, model.bp.aH)) {
					var _v2 = A4(
						$author$project$Gen$Pages$init,
						$author$project$Gen$Route$fromUrl(url),
						model.l,
						url,
						model.x);
					var page = _v2.a;
					var effect = _v2.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{c5: page, bp: url}),
						A2(
							$author$project$Effect$toCmd,
							_Utils_Tuple2($author$project$Main$Shared, $author$project$Main$Page),
							effect));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{bp: url}),
						$elm$core$Platform$Cmd$none);
				}
			case 2:
				var sharedMsg = msg.a;
				var _v3 = A3(
					$author$project$Shared$update,
					A3($author$project$Request$create, 0, model.bp, model.x),
					sharedMsg,
					model.l);
				var shared = _v3.a;
				var sharedCmd = _v3.b;
				var _v4 = A4(
					$author$project$Gen$Pages$init,
					$author$project$Gen$Route$fromUrl(model.bp),
					shared,
					model.bp,
					model.x);
				var page = _v4.a;
				var effect = _v4.b;
				return _Utils_eq(page, $author$project$Gen$Model$Redirecting_) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{c5: page, l: shared}),
					$elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2($elm$core$Platform$Cmd$map, $author$project$Main$Shared, sharedCmd),
								A2(
								$author$project$Effect$toCmd,
								_Utils_Tuple2($author$project$Main$Shared, $author$project$Main$Page),
								effect)
							]))) : _Utils_Tuple2(
					_Utils_update(
						model,
						{l: shared}),
					A2($elm$core$Platform$Cmd$map, $author$project$Main$Shared, sharedCmd));
			default:
				var pageMsg = msg.a;
				var _v5 = A5($author$project$Gen$Pages$update, pageMsg, model.c5, model.l, model.bp, model.x);
				var page = _v5.a;
				var effect = _v5.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{c5: page}),
					A2(
						$author$project$Effect$toCmd,
						_Utils_Tuple2($author$project$Main$Shared, $author$project$Main$Page),
						effect));
		}
	});
var $author$project$Utils$parentRoute = function (route) {
	switch (route.$) {
		case 0:
			return $author$project$Gen$Route$Custom;
		case 2:
			return $author$project$Gen$Route$Home_;
		case 4:
			var params = route.a;
			return $author$project$Gen$Route$List__Schema_(
				{y: params.y});
		case 5:
			var params = route.a;
			return $author$project$Gen$Route$List__Schema_(
				{y: params.y});
		case 6:
			var params = route.a;
			return $author$project$Gen$Route$List__Schema_(params);
		case 7:
			var params = route.a;
			return $author$project$Gen$Route$List__Schema_(
				{y: params.y});
		case 3:
			return $author$project$Gen$Route$Themes;
		case 1:
			return $author$project$Gen$Route$Dashboard;
		default:
			return $author$project$Gen$Route$NotFound;
	}
};
var $author$project$View$Menu$mainMenu = F2(
	function (shared, url) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('navmenu.menu'),
					$elm$html$Html$Attributes$class(
					A2($author$project$Shared$getStyles, shared, 'navmenu.menu'))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$ul,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('navmenu.menu.sections'),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'navmenu.menu.sections'))
						]),
					A2(
						$elm$core$List$map,
						function (section) {
							return A2(
								$elm$html$Html$li,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$id('navmenu.menu.sections.' + section.bR)
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$id('navmenu.menu.sections.' + (section.bR + '.title')),
												$elm$html$Html$Attributes$class(
												A2($author$project$Shared$getStyles, shared, 'navmenu.menu.sections.title'))
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$div,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class(
														A2($author$project$Shared$getStyles, shared, 'navmenu.menu.sections.icon'))
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$span,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class(
																A2($author$project$Shared$getStyles, shared, 'icon'))
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(
																A3($elm_community$maybe_extra$Maybe$Extra$unwrap, '', $elm$core$Basics$identity, section.az))
															]))
													])),
												$elm$html$Html$text(section.ay)
											])),
										A2(
										$elm$html$Html$ul,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$id('menu-sections-' + (section.bR + '-pages')),
												$elm$html$Html$Attributes$class(
												A2($author$project$Shared$getStyles, shared, 'navmenu.menu.sections.pages'))
											]),
										A2(
											$elm$core$List$map,
											function (page) {
												var pageElement = function () {
													var _v0 = A2($elm$core$Dict$get, page, shared.a8);
													if (!_v0.$) {
														var val = _v0.a;
														var compareRoutes = F2(
															function (menuRoute, urlRoute) {
																return _Utils_eq(
																	$author$project$Gen$Route$toHref(menuRoute),
																	$elm$url$Url$toString(urlRoute)) ? true : _Utils_eq(
																	$author$project$Utils$parentRoute(menuRoute),
																	$author$project$Utils$parentRoute(
																		$author$project$Gen$Route$fromUrl(urlRoute)));
															});
														var checkInstanceForRoute = function (target) {
															var _v3 = val.aB;
															if (!_v3.$) {
																var ins = _v3.a;
																return target(
																	{aB: ins, y: val.y});
															} else {
																return $author$project$Gen$Route$List__Schema_(
																	{y: val.y});
															}
														};
														var route = function () {
															var _v2 = val.a7;
															switch (_v2) {
																case 0:
																	return $author$project$Gen$Route$List__Schema_(
																		{y: val.y});
																case 1:
																	return checkInstanceForRoute($author$project$Gen$Route$Detail__Schema___Instance_);
																case 2:
																	return checkInstanceForRoute($author$project$Gen$Route$Edit__Schema___Instance_);
																case 3:
																	return $author$project$Gen$Route$New__Schema_(
																		{y: val.y});
																case 4:
																	return $author$project$Gen$Route$Custom;
																case 5:
																	return $author$project$Gen$Route$Themes;
																default:
																	return $author$project$Gen$Route$NotFound;
															}
														}();
														var menuItemBaseAttrs = function () {
															var _v1 = val.a7;
															switch (_v1) {
																case 6:
																	return _List_fromArray(
																		[
																			$elm$html$Html$Attributes$href(
																			$author$project$Gen$Route$toHref($author$project$Gen$Route$Dashboard))
																		]);
																case 7:
																	return _List_fromArray(
																		[
																			$elm$html$Html$Attributes$href('#')
																		]);
																default:
																	return _List_fromArray(
																		[
																			$elm$html$Html$Attributes$href(
																			$author$project$Gen$Route$toHref(route))
																		]);
															}
														}();
														var menuItemAttrs = _Utils_ap(
															menuItemBaseAttrs,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class(
																	A2($author$project$Shared$getStyles, shared, 'navmenu.menu.item')),
																	A2(
																	$author$project$Utils$attrIf,
																	A2(compareRoutes, route, url),
																	$elm$html$Html$Attributes$class('font-bold'))
																]));
														return A2(
															$elm$html$Html$li,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$id('navmenu.menu.sections.pages.' + val.bR)
																]),
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$div,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$class(
																			A2($author$project$Shared$getStyles, shared, 'navmenu.menu.sections.pages.title'))
																		]),
																	_List_fromArray(
																		[
																			A2(
																			$elm$html$Html$div,
																			_List_fromArray(
																				[
																					$elm$html$Html$Attributes$class(
																					A2($author$project$Shared$getStyles, shared, 'navmenu.menu.sections.pages.icon'))
																				]),
																			_List_fromArray(
																				[
																					A2(
																					$elm$html$Html$span,
																					_List_fromArray(
																						[
																							$elm$html$Html$Attributes$class(
																							A2($author$project$Shared$getStyles, shared, 'icon'))
																						]),
																					_List_fromArray(
																						[
																							$elm$html$Html$text(
																							A3($elm_community$maybe_extra$Maybe$Extra$unwrap, '', $elm$core$Basics$identity, val.az))
																						]))
																				])),
																			A2(
																			$elm$html$Html$a,
																			menuItemAttrs,
																			_List_fromArray(
																				[
																					$elm$html$Html$text(val.ay)
																				]))
																		]))
																]));
													} else {
														return $author$project$Utils$empty;
													}
												}();
												return pageElement;
											},
											section.a8))
									]));
						},
						shared.b9))
				]));
	});
var $elm$html$Html$nav = _VirtualDom_node('nav');
var $author$project$View$Menu$mainNavMenu = F2(
	function (shared, url) {
		return {
			aS: _List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('topbar'),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'topbar')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.text'))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('topbar.appTitle'),
									$elm$html$Html$Attributes$class(
									A2($author$project$Shared$getStyles, shared, 'topbar.appTitle')),
									$elm$html$Html$Attributes$href(
									$author$project$Gen$Route$toHref($author$project$Gen$Route$Home_))
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(shared.cF.ci)
								]))
						])),
					A2(
					$elm$html$Html$nav,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('navmenu'),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'navmenu')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.background.gradient')),
							$elm$html$Html$Attributes$class(
							A2($author$project$Shared$getStyles, shared, 'colors.text'))
						]),
					_List_fromArray(
						[
							A2($author$project$View$Menu$mainMenu, shared, url),
							A2(
							$elm_community$html_extra$Html$Extra$viewMaybe,
							function (_v0) {
								return A2(
									$elm$html$Html$ul,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('mt-8')
										]),
									A2(
										$elm$core$List$map,
										function (schema) {
											return A2(
												$elm$html$Html$li,
												_List_Nil,
												_List_fromArray(
													[
														A2(
														$elm$html$Html$a,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class(
																A2($author$project$Shared$getStyles, shared, 'link')),
																$elm$html$Html$Attributes$class('text-xs'),
																$elm$html$Html$Attributes$href(
																$author$project$Gen$Route$toHref(
																	$author$project$Gen$Route$List__Schema_(
																		{y: schema.aY})))
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(schema.aY)
															]))
													]));
										},
										$elm$core$Dict$values(shared.aL)));
							},
							shared.dl.cI)
						]))
				]),
			ci: 'Navbar'
		};
	});
var $author$project$View$toBrowserDocument = F2(
	function (navView, view) {
		return {
			aS: _Utils_ap(navView.aS, view.aS),
			ci: view.ci
		};
	});
var $author$project$Gen$Pages$view = function (model_) {
	switch (model_.$) {
		case 0:
			return F3(
				function (_v1, _v2, _v3) {
					return $author$project$View$none;
				});
		case 1:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.af.q, params, model);
		case 2:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.ag.q, params, model);
		case 3:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.aj.q, params, model);
		case 4:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.aq.q, params, model);
		case 5:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.ah.q, params, model);
		case 6:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.ai.q, params, model);
		case 7:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.am.q, params, model);
		case 8:
			var params = model_.a;
			var model = model_.b;
			return A2($author$project$Gen$Pages$pages.an.q, params, model);
		default:
			var params = model_.a;
			return A2($author$project$Gen$Pages$pages.aF.q, params, 0);
	}
};
var $author$project$Main$view = function (model) {
	return A2(
		$author$project$View$toBrowserDocument,
		A2(
			$author$project$View$map,
			$author$project$Main$Shared,
			A2($author$project$View$Menu$mainNavMenu, model.l, model.bp)),
		A2(
			$author$project$View$map,
			$author$project$Main$Page,
			A4($author$project$Gen$Pages$view, model.c5, model.l, model.bp, model.x)));
};
var $author$project$Main$main = $elm$browser$Browser$application(
	{r: $author$project$Main$init, c2: $author$project$Main$ChangedUrl, c3: $author$project$Main$ClickedLink, v: $author$project$Main$subscriptions, A: $author$project$Main$update, q: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (store) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (api_server) {
					return $elm$json$Json$Decode$succeed(
						{bs: api_server, dm: store});
				},
				A2($elm$json$Json$Decode$field, 'api_server', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'store', $elm$json$Json$Decode$value)))(0)}});}(this));