// exports browsers and tests
// new browsers should only be added once they have at least a single 'true' result.
exports.name = 'ES Next';
exports.target_file = 'esnext/index.html';
exports.skeleton_file = 'esnext/skeleton.html';

var temp = {};
var flag = "flagged";
/* jshint unused:false */
var very = "very";
var strict = "strict";
var fallthrough = "needs-polyfill-or-native";

var babel = {
    regenerator: {
        val: true,
        note_id: "babel-regenerator",
        note_html: "This feature requires native generators or <code>regenerator-runtime</code>, it's a part of <code>babel-polyfill</code> or <code>babel-runtime</code>."
    }
};

var typescript = {
    corejs: {
        val: true,
        note_id: "typescript-core-js",
        note_html: "This feature is supported when using TypeScript with <a href='https://github.com/zloirock/core-js'>core-js</a>, or when a native ES6 host is used."
    },
    fallthrough: {
        val: fallthrough,
        note_id: "typescript-es6",
        note_html: "TypeScript's compiler will accept code using this feature if the <code>--target ES6</code> flag is set, but passes it through unmodified and does not supply a runtime polyfill."
    },
    asyncawait: {
        val: true,
        note_id: "typescript-async-await",
        note_html: "TypeScript <code>async</code> / <code>await</code> requires native generators support."
    },
};
var firefox = {
  nightly: {
    val: false,
    note_id: "firefox-nightly",
    note_html: "The feature is enabled by default only in Firefox Nightly."
  }
};

exports.browsers = {
  tr: {
    full: 'Traceur',
    short: 'Traceur',
    platformtype: 'compiler',
  },
  babel: {
    full: 'Babel 6.5 + core-js 2.4',
    short: 'Babel +<br><nobr>core-js</nobr>',
    platformtype: 'compiler',
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via <code>babel-preset-stage-0</code> preset'
  },
  jsx: {
    full: 'JSX',
    short: 'JSX',
    obsolete: true,
    platformtype: 'compiler',
  },
  typescript: {
    full: 'TypeScript 1.8 + core-js 2.4',
    short: 'Type-<br />Script +<br /><nobr>core-js</nobr>',
    obsolete: false,
    platformtype: 'compiler'
  },
  es7shim: {
    full: 'es7-shim',
    short: 'es7-shim',
    platformtype: 'compiler',
  },
  ie10: {
    full: 'Internet Explorer',
    family: 'Chakra',
    short: 'IE 10-',
    obsolete: true,
  },
  ie11: {
    full: 'Internet Explorer',
    family: 'Chakra',
    short: 'IE 11',
    obsolete: false // no EOL any time soon
  },
  edge12: {
    full: 'Microsoft Edge',
    family: 'Chakra',
    short: 'Edge 12',
    note_id: 'edge-experimental-flag',
    note_html: 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
  },
  edge13: {
    full: 'Microsoft Edge',
    family: 'Chakra',
    short: 'Edge 13',
    note_id: 'edge-experimental-flag',
    note_html: 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
  },
  edge14: {
    full: 'Microsoft Edge',
    family: 'Chakra',
    short: 'Edge 14',
    unstable: true,
    note_id: 'edge-experimental-flag',
    note_html: 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31',
    obsolete: very
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32',
    obsolete: very
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF 34',
    obsolete: very
  },
  firefox35: {
    full: 'Firefox',
    short: 'FF 35',
    obsolete: true,
  },
  firefox36: {
    full: 'Firefox',
    short: 'FF 36',
    obsolete: true,
  },
  firefox38: {
    full: 'Firefox',
    short: 'FF 38 ESR',
    obsolete: false,
  },
  firefox39: {
    full: 'Firefox',
    short: 'FF 39',
    obsolete: true,
  },
  firefox41: {
    full: 'Firefox',
    short: 'FF 41',
    obsolete: true,
  },
  firefox42: {
    full: 'Firefox',
    short: 'FF 42',
    obsolete: true,
  },
  firefox43: {
    full: 'Firefox',
    short: 'FF 43',
    obsolete: true,
  },
  firefox44: {
    full: 'Firefox',
    short: 'FF 44',
    obsolete: true,
  },
  firefox45: {
    full: 'Firefox',
    short: 'FF 45 ESR',
  },
  firefox46: {
    full: 'Firefox',
    short: 'FF 46',
    obsolete: false,
  },
  firefox47: {
    full: 'Firefox',
    short: 'FF 47',
    unstable: true,
  },
  firefox48: {
    full: 'Firefox',
    short: 'FF 48',
    unstable: true,
  },
  firefox49: {
    full: 'Firefox',
    short: 'FF 49',
    unstable: true,
  },
  chrome30: {
    full: 'Chrome',
    short: 'CH 30',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome33: {
    full: 'Chrome',
    short: 'CH 33',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome34: {
    full: 'Chrome',
    short: 'CH 34',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome35: {
    full: 'Chrome',
    short: 'CH 35',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome37: {
    full: 'Chrome',
    short: 'CH 37',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome38: {
    full: 'Chrome',
    short: 'CH 38',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome39: {
    full: 'Chrome',
    short: 'CH 39',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome40: {
    full: 'Chrome',
    short: 'CH 40',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome41: {
    full: 'Chrome',
    short: 'CH 41',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome42: {
    full: 'Chrome',
    short: 'CH 42',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome43: {
    full: 'Chrome',
    short: 'CH 43',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome46: {
    full: 'Chrome',
    short: 'CH 46',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome47: {
    full: 'Chrome',
    short: 'CH 47',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome48: {
    full: 'Chrome',
    short: 'CH 48',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome49: {
    full: 'Chrome',
    short: 'CH 49',
    obsolete: true,
    note_id: 'experimental-flag',
  },
  chrome50: {
    full: 'Chrome',
    short: 'CH 50',
    note_id: 'experimental-flag',
  },
  chrome51: {
    full: 'Chrome',
    short: 'CH 51',
    unstable: true,
    note_id: 'experimental-flag',
  },
  chrome52: {
    full: 'Chrome',
    short: 'CH 52',
    unstable: true,
    note_id: 'experimental-flag',
  },
  safari51: {
    full: 'Safari 5.1 - 8',
    short: 'SF<br />5.1 - 8',
    obsolete: false,
  },
  safari9: {
    full: 'Safari 9',
    short: 'SF 9',
    obsolete: false,
  },
  safaritp: {
    full: 'Safari Technology Preview Release 4',
    short: 'SF TP',
    unstable: true
  },
  webkit: {
    full: 'WebKit r200167 (April 28, 2016)',
    short: 'WK',
    unstable: true,
  },
  node: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 0.12',
    platformtype: 'engine',
  },
  iojs: {
    full: 'io.js',
    family: 'Node.js',
    short: 'io.js',
    obsolete: true,
    platformtype: 'engine',
  },
  node4: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 4 - 5',
    platformtype: 'engine',
  },
  node6: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 6',
    platformtype: 'engine',
    equals: 'chrome50',
    obsolete: false,
  },
  android40: {
    full: 'Android Browser',
    short: 'AN 4.0',
    platformtype: 'mobile',
    obsolete: true,
  },
  android41: {
    full: 'Android Browser',
    short: 'AN 4.1 - 4.3',
    platformtype: 'mobile',
    obsolete: true,
  },
  android44: {
    full: 'Android Browser',
    short: 'AN 4.4',
    platformtype: 'mobile',
    equals: 'chrome30',
    ignore_flagged: true,
  },
  android50: {
    full: 'Android Browser',
    short: 'AN 5.0',
    platformtype: 'mobile',
    equals: 'chrome37',
    ignore_flagged: true,
  },
  android51: {
    full: 'Android Browser',
    short: 'AN 5.1',
    platformtype: 'mobile',
    equals: 'chrome39',
    ignore_flagged: true,
  },
  ios51: {
    full: 'iOS 5.1',
    short: 'iOS 5.1',
    platformtype: 'mobile',
    obsolete: true,
  },
  ios6: {
    full: 'iOS 6-8',
    short: 'iOS<br />6-8',
    platformtype: 'mobile',
    equals: 'safari51',
    obsolete: false,
  },
  ios9: {
    full: 'iOS 9',
    short: 'iOS 9',
    platformtype: 'mobile',
    equals: 'safari9',
    obsolete: false,
  },
};

exports.tests = [
{
  name: 'exponentiation (**) operator',
  category: '2016 features',
  significance: 'small',
  link: 'https://github.com/rwaldron/exponentiation-operator',
  subtests: [
    {
      name: 'basic support',
      exec: function () {/*
        return 2 ** 3 === 8 && -(5 ** 2) === -25 && (-5) ** 2 === 25;
      */},
      res: {
        tr:          true,
        babel:       false,
        typescript:  true,
        edge13:      flag,
        edge14:      true,
        firefox48:   firefox.nightly,
        chrome51:    flag,
        chrome52:    true,
      }
    },
    {
      name: 'assignment',
      exec: function () {/*
        var a = 2; a **= 3; return a === 8;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        edge13:      flag,
        edge14:      true,
        firefox48:   firefox.nightly,
        chrome51:    flag,
        chrome52:    true,
      }
    },
    {
      name: 'early syntax error for unary negation without parens',
      exec: function () {/*
        if (2 ** 3 !== 8) { return false; }
        try {
          Function("-5 ** 2")();
        } catch(e) {
          return true;
        }
      */},
      res: {
        babel:       true,
        edge14:      true,
        chrome51:    flag,
        chrome52:    true,
      }
    },
  ],
},
{
  name: 'bind (::) operator',
  link: 'https://github.com/zenparsing/es-function-bind',
  category: 'strawman (stage 0)',
  significance: 'medium',
  subtests: [
    {
      name: 'binary form',
      exec: function () {/*
        function foo() { this.garply += "foo"; return this; }
        var obj = { garply: "bar" };
        return typeof obj::foo === "function" && obj::foo().garply === "barfoo";
      */},
      res: {
        babel:       true,
      }
    },
    {
      name: 'unary form',
      exec: function () {/*
        var obj = { garply: "bar", foo: function() { this.garply += "foo"; return this; } };
        return typeof ::obj.foo === "function" && ::obj.foo().garply === "barfoo";
      */},
      res: {
        babel:       true,
      },
    },
  ],
},
{
  name: 'do expression',
  category: 'strawman (stage 0)',
  significance: 'small',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:do_expressions',
  exec: function () {/*
    return do {
      let x = 23;
      x + 19;
    } === 42;
  */},
  res: {
    babel:       true,
  }
},
{
  name: 'function.sent',
  category: 'draft (stage 2)',
  significance: 'small',
  link: 'https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md',
  exec: function () {/*
    var result;
    function* generator() {
      result = function.sent;
    }
    var iter = generator();
    iter.next('tromple');
    return result === 'tromple';
  */},
  res: {
  }
},
{
  name: 'Object.values',
  link: 'https://github.com/ljharb/proposal-object-values-entries',
  category: 'finished (stage 4)',
  significance: 'small',
  exec: function () {/*
    var obj = Object.create({ a: "qux", d: "qux" });
    obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
    var v = Object.values(obj);
    return Array.isArray(v) && String(v) === "foo,bar,baz";
  */},
  res: {
    babel:      true,
    es7shim:    true,
    typescript: typescript.corejs,
    firefox45:  firefox.nightly,
    firefox47:  true,
    chrome51:   flag,
    edge14:     true,
  }
},
{
  name: 'Object.entries',
  link: 'https://github.com/ljharb/proposal-object-values-entries',
  category: 'finished (stage 4)',
  significance: 'small',
  exec: function () {/*
    var obj = Object.create({ a: "qux", d: "qux" });
    obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
    var e = Object.entries(obj);
    return Array.isArray(e)
      && e.length === 3
      && String(e[0]) === "a,foo"
      && String(e[1]) === "b,bar"
      && String(e[2]) === "c,baz";
  */},
  res: {
    babel:      true,
    es7shim:    true,
    typescript: typescript.corejs,
    firefox45:  firefox.nightly,
    firefox47:  true,
    chrome51:   flag,
    edge14:     true,
  }
},
{
  name: 'Array.prototype.includes',
  link: 'https://tc39.github.io/ecma262/#sec-array.prototype.includes',
  category: '2016 features',
  significance: 'small',
  subtests: [
    {
      name: 'Array.prototype.includes',
      exec: function(){/*
        return [1, 2, 3].includes(1)
          && ![1, 2, 3].includes(4)
          && ![1, 2, 3].includes(1, 1)
          && [NaN].includes(NaN)
          && Array(1).includes();
      */},
      res: {
        babel:           true,
        es7shim:         true,
        typescript:      typescript.corejs,
        safari9:         true,
        safaritp:        true,
        webkit:          true,
        chrome47:        true,
        edge14:          true,
        firefox43:       true,
      }
    },
    {
      name: 'Array.prototype.includes is generic',
      exec: function(){/*
        var passed = 0;
        return [].includes.call({
          get "0"() {
            passed = NaN;
            return 'foo';
          },
          get "11"() {
            passed += 1;
            return 0;
          },
          get "19"() {
            passed += 1;
            return 'foo';
          },
          get "21"() {
            passed = NaN;
            return 'foo';
          },
          get length() {
            passed += 1;
            return 24;
          }
        }, 'foo', 6) === true && passed === 3;
      */},
      res: {
        babel:           true,
        es7shim:         true,
        typescript:      typescript.corejs,
        safari9:         true,
        safaritp:        true,
        webkit:          true,
        chrome47:        true,
        edge14:          true,
        firefox43:       true,
      }
    },
    {
      name: '%TypedArray%.prototype.includes',
      exec: function(){/*
        return [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
            Int32Array, Uint32Array, Float32Array, Float64Array].every(function(TypedArray){
          return new TypedArray([1, 2, 3]).includes(1)
            && !new TypedArray([1, 2, 3]).includes(4)
            && !new TypedArray([1, 2, 3]).includes(1, 1);
        });
      */},
      res: {
        babel:           true,
        typescript:      typescript.corejs,
        safaritp:        false,
        chrome47:        true,
        edge14:          true,
        firefox42:       false,
        firefox43:       true,
      }
    },
  ],
},
{
  name: 'trailing commas in function syntax',
  link: 'https://jeffmo.github.io/es-trailing-function-commas/',
  category: 'candidate (stage 3)',
  significance: 'small',
  subtests: [
    {
      name: 'in parameter lists',
      exec: function(){/*
        return typeof function f( a, b, ){} === 'function';
      */},
      res: {
        babel:       true,
        typescript:  true,
        edge14:      true,
      }
    },
    {
      name: 'in argument lists',
      exec: function(){/*
        return Math.min(1,2,3,) === 1;
      */},
      res: {
        babel:       true,
        typescript:  true,
        edge14:      true,
      }
    },
  ],
},
{
  name: 'async functions',
  category: 'candidate (stage 3)',
  significance: 'large',
  link: 'https://tc39.github.io/ecmascript-asyncawait/',
  subtests: [
    {
      name: 'basic support',
      exec: function () {/*
        return (async function(){
          return 42;
        })() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       babel.regenerator,
        typescript:  typescript.asyncawait,
        edge13:      flag,
        edge14:      true,
      }
    },
    {
      name: 'await support',
      exec: function () {/*
        return (async function(){
          return 10 + await Promise.resolve(10);
        })() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       babel.regenerator,
        typescript:  typescript.asyncawait,
        edge13:      flag,
        edge14:      true,
      }
    },
    {
      name: 'arrow async functions',
      exec: function () {/*
        return (async () => 42 + await Promise.resolve(42))() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       babel.regenerator,
        typescript:  false, // still buggy output
        edge13:      flag,
        edge14:      true,
      }
    }
  ]
},
{
  name: 'Object.getOwnPropertyDescriptors',
  link: 'https://github.com/tc39/proposal-object-getownpropertydescriptors',
  category: 'candidate (stage 3)',
  significance: 'small',
  exec: function () {/*
    var object = {a: 1};
    var B = typeof Symbol === 'function' ? Symbol('b') : 'b';
    object[B] = 2;
    var O = Object.defineProperty(object, 'c', {value: 3});
    var D = Object.getOwnPropertyDescriptors(O);

    return D.a.value === 1 && D.a.enumerable === true && D.a.configurable === true && D.a.writable === true
      && D[B].value === 2 && D[B].enumerable === true && D[B].configurable === true && D[B].writable === true
      && D.c.value === 3 && D.c.enumerable === false && D.c.configurable === false && D.c.writable === false;
  */},
  res: {
    babel:       true,
    es7shim:     true,
    typescript:  typescript.corejs,
    chrome51:    flag,
    safaritp:    true,
    webkit:      true,
  }
},
{
  name: 'ArrayBuffer.transfer',
  link: 'https://gist.github.com/lukewagner/2735af7eea411e18cf20',
  category: 'proposal (stage 1)',
  significance: 'small',
  exec: function(){/*
    var buffer1 = new Uint8Array([1, 2, 3]).buffer;
    var buffer2 = ArrayBuffer.transfer(buffer1, 2);
    return buffer1.byteLength === 0
      && buffer2.byteLength === 2
      && new Uint8Array(buffer2)[0] === 1;
  */},
  res : {
    edge13:    flag,
  }
},
{
  name: 'SIMD (Single Instruction, Multiple Data)',
  category: 'candidate (stage 3)',
  significance: 'large',
  link: 'https://tc39.github.io/ecmascript_simd/',
  subtests: [
    {
      name: 'basic support',
      exec: function () {/*
        return typeof SIMD !== 'undefined';
      */},
      res: {
        edge12:    flag,
        firefox39: true,
        firefox42: false,
        firefox44: false,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'Float32x4',
      exec: function(){/*
        return typeof SIMD.Float32x4 === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'Int32x4',
      exec: function(){/*
        return typeof SIMD.Int32x4 === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'Int16x8',
      exec: function(){/*
        return typeof SIMD.Int16x8 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:      flag,
      }
    },
    {
      name: 'Int8x16',
      exec: function(){/*
        return typeof SIMD.Int8x16 === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'Uint32x4',
      exec: function(){/*
        return typeof SIMD.Uint32x4 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'Uint16x8',
      exec: function(){/*
        return typeof SIMD.Uint16x8 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'Uint8x16',
      exec: function(){/*
        return typeof SIMD.Uint8x16 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'Bool32x4',
      exec: function(){/*
        return typeof SIMD.Bool32x4 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'Bool16x8',
      exec: function(){/*
        return typeof SIMD.Bool16x8 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'Bool8x16',
      exec: function(){/*
        return typeof SIMD.Bool8x16 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.abs',
      exec: function(){/*
        return typeof SIMD.Float32x4.abs === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.add',
      exec: function(){/*
        return typeof SIMD.Float32x4.add === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%integerType%.addSaturate',
      exec: function(){/*
        return typeof SIMD.Int16x8.addSaturate === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%booleanType%.and',
      exec: function(){/*
        return typeof SIMD.Bool16x8.and === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%booleanType%.anyTrue',
      exec: function(){/*
        return typeof SIMD.Bool32x4.anyTrue === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%booleanType%.allTrue',
      exec: function(){/*
        return typeof SIMD.Bool32x4.allTrue === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.check',
      exec: function(){/*
        return typeof SIMD.Float32x4.check === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.equal',
      exec: function(){/*
        return typeof SIMD.Float32x4.equal === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.extractLane',
      exec: function(){/*
        return typeof SIMD.Float32x4.extractLane === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.greaterThan',
      exec: function(){/*
        return typeof SIMD.Float32x4.greaterThan === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.greaterThanOrEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.greaterThanOrEqual === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.lessThan',
      exec: function(){/*
        return typeof SIMD.Float32x4.lessThan === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.lessThanOrEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.lessThanOrEqual === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.mul',
      exec: function(){/*
        return typeof SIMD.Float32x4.mul === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.div',
      exec: function(){/*
        return typeof SIMD.Float32x4.div === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.load',
      exec: function(){/*
        return typeof SIMD.Float32x4.load === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.load1',
      exec: function(){/*
        return typeof SIMD.Float32x4.load1 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.load2',
      exec: function(){/*
        return typeof SIMD.Float32x4.load2 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.load3',
      exec: function(){/*
        return typeof SIMD.Float32x4.load3 === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.max',
      exec: function(){/*
        return typeof SIMD.Float32x4.max === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.maxNum',
      exec: function(){/*
        return typeof SIMD.Float32x4.maxNum === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.min',
      exec: function(){/*
        return typeof SIMD.Float32x4.min === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.minNum',
      exec: function(){/*
        return typeof SIMD.Float32x4.minNum === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.neg',
      exec: function(){/*
        return typeof SIMD.Float32x4.neg === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%booleanType%.not',
      exec: function(){/*
        return typeof SIMD.Bool16x8.not === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.notEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.notEqual === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%booleanType%.or',
      exec: function(){/*
        return typeof SIMD.Bool16x8.or === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.reciprocalApproximation',
      exec: function(){/*
        return typeof SIMD.Float32x4.reciprocalApproximation === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.reciprocalSqrtApproximation',
      exec: function(){/*
        return typeof SIMD.Float32x4.reciprocalSqrtApproximation === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.replaceLane',
      exec: function(){/*
        return typeof SIMD.Float32x4.replaceLane === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.select',
      exec: function(){/*
        return typeof SIMD.Float32x4.select === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftLeftByScalar',
      exec: function(){/*
        return typeof SIMD.Int32x4.shiftLeftByScalar === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftRightByScalar',
      exec: function(){/*
        return typeof SIMD.Int32x4.shiftRightByScalar === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.shuffle',
      exec: function(){/*
        return typeof SIMD.Float32x4.shuffle === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.splat',
      exec: function(){/*
        return typeof SIMD.Float32x4.splat === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.sqrt',
      exec: function(){/*
        return typeof SIMD.Float32x4.sqrt === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.store',
      exec: function(){/*
        return typeof SIMD.Float32x4.store === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.store1',
      exec: function(){/*
        return typeof SIMD.Float32x4.store1 === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.store2',
      exec: function(){/*
        return typeof SIMD.Float32x4.store2 === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.store3',
      exec: function(){/*
        return typeof SIMD.Float32x4.store3 === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.sub',
      exec: function(){/*
        return typeof SIMD.Float32x4.sub === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%integerType%.subSaturate',
      exec: function(){/*
        return typeof SIMD.Int16x8.subSaturate === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%type%.swizzle',
      exec: function(){/*
        return typeof SIMD.Float32x4.swizzle === 'function';
      */},
      res: {
        edge13:    flag,
        firefox48: firefox.nightly,
      }
    },
    {
      name: 'SIMD.%booleanType%.xor',
      exec: function(){/*
        return typeof SIMD.Bool16x8.xor === 'function';
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.fromTIMDBits',
      exec: function(){/*
        return 'Float32x4,Int32x4,Int8x16,Uint32x4,Uint16x8,Uint8x16'.split(',').every(function(type){
          return typeof SIMD.Int16x8['from' + type + 'Bits'] === 'function';
        });
      */},
      res: {
        firefox48: firefox.nightly,
        edge14:    flag,
      }
    },
    {
      name: 'SIMD.%type%.fromTIMD',
      exec: function(){/*
        return 'Float32x4,Uint32x4'.split(',').every(function(type){
          return typeof SIMD.Int32x4['from' + type] === 'function';
        });
      */},
      res: {
      }
    }
  ]
},
{
  name: 'class decorators',
  category: 'proposal (stage 1)',
  significance: 'medium',
  link: 'https://github.com/wycats/javascript-decorators',
  exec: function(){/*
    class A {
      @nonconf
      get B() {}
    }
    function nonconf(target, name, descriptor) {
      descriptor.configurable = false;
      return descriptor;
    }
    return Object.getOwnPropertyDescriptor(A.prototype, "B").configurable === false;
  */},
  res: {
    babel:       {val: false, note_id: "babel-decorators-legacy", note_html: "Babel 6 still has no official support decorators, but you can use <a href='https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy'>this plugin</a>."},
    typescript:  true,
  }
},
{
  name: 'class properties',
  category: 'proposal (stage 1)',
  significance: 'medium',
  link: 'https://github.com/jeffmo/es-class-properties',
  exec: function () {/*
    class C {
      x = 'x';
      static y = 'y';
    }
    return new C().x + C.y === 'xy';
  */},
  res: {
    babel:       true,
    tr:          true,
    typescript:  true,
  }
},
{
  name: 'Realms',
  category: 'strawman (stage 0)',
  significance: 'large',
  link: 'https://github.com/caridy/proposal-realms',
  exec: function () {/*
    return typeof Realm === "function"
      && ["eval", "global", "intrinsics", "stdlib", "directEval", "indirectEval", "initGlobal", "nonEval"].every(function(key){
        return key in Realm.prototype;
      });
  */},
  res: {
  }
},
{
  name: 'object rest properties',
  significance: 'small',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  category: 'draft (stage 2)',
  exec: function () {/*
    var {a, ...rest} = {a: 1, b: 2, c: 3};
    return a === 1 && rest.a === undefined && rest.b === 2 && rest.c === 3;
  */},
  res: {
    babel:       true,
    jsx:         true,
  }
},
{
  name: 'object spread properties',
  category: 'draft (stage 2)',
  significance: 'medium',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  exec: function () {/*
    var spread = {b: 2, c: 3};
    var O = {a: 1, ...spread};
    return O.a + O.b + O.c === 6;
  */},
  res: {
    babel:       true,
    jsx:         true,
  }
},
{
  name: 'String.prototype.at',
  significance: 'small',
  link: 'https://github.com/mathiasbynens/String.prototype.at',
  category: 'strawman (stage 0)',
  exec: function () {/*
    return 'a𠮷b'.at(1) === '𠮷';
  */},
  res: {
    babel:       true,
    typescript:  typescript.corejs,
    es7shim:     true,
  }
},
{
  name: 'String padding',
  category: 'candidate (stage 3)',
  significance: 'small',
  link: 'https://github.com/tc39/proposal-string-pad-start-end',
  subtests: [
    {
      name: 'String.prototype.padStart',
      exec: function(){/*
        return 'hello'.padStart(10) === '     hello'
          && 'hello'.padStart(10, '1234') === '12341hello'
          && 'hello'.padStart() === 'hello'
          && 'hello'.padStart(6, '123') === '1hello';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        es7shim:     true,
        firefox48:   firefox.nightly,
        edge14:      flag,
        chrome52:    flag,
        safaritp:    true,
        webkit:      true,
      }
    },
    {
      name: 'String.prototype.padEnd',
      exec: function(){/*
        return 'hello'.padEnd(10) === 'hello     '
          && 'hello'.padEnd(10, '1234') === 'hello12341'
          && 'hello'.padEnd() === 'hello'
          && 'hello'.padEnd(6, '123') === 'hello1';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        es7shim:     true,
        firefox48:   firefox.nightly,
        edge14:      flag,
        chrome52:    flag,
        safaritp:    true,
        webkit:      true,
      }
    }
  ]
},
{
  name: 'string trimming',
  category: 'proposal (stage 1)',
  significance: 'small',
  link: 'https://github.com/sebmarkbage/ecmascript-string-left-right-trim',
  subtests: [
    {
      name: 'String.prototype.trimLeft',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimLeft() === 'abc   \t\n';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        edge12:      true,
        firefox31:   true,
        chrome30:    true,
        node:        true,
        iojs:        true,
        safari51:    true,
        safari9:     true,
        safaritp:    true,
        webkit:      true,
        es7shim:     true,
        android40:   true,
        ios51:       true,
      }
    },
    {
      name: 'String.prototype.trimRight',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimRight() === ' \t \n abc';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        edge12:      true,
        firefox31:   true,
        chrome30:    true,
        node:        true,
        iojs:        true,
        safari51:    true,
        safari9:     true,
        safaritp:    true,
        webkit:      true,
        es7shim:     true,
        android40:   true,
        ios51:       true,
      }
    },
    {
      name: 'String.prototype.trimStart',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimStart() === 'abc   \t\n';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
    {
      name: 'String.prototype.trimEnd',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimEnd() === ' \t \n abc';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    }
  ]
},
{
  name: 'generator functions can\'t be used with "new"',
  category: '2016 misc',
  significance: 'tiny',
  link: 'https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#67-new--generatorfunction',
  exec: function(){/*
    function * generator() {
      yield 3;
    }
    try {
      new generator();
    } catch(e) {
      return true;
    }
  */},
  res: {
      edge13:    true,
      firefox43: true,
      chrome50:  true,
      safaritp:  true,
      webkit:    true,
  }
},
{
  name: 'generator throw() caught by inner generator',
  category: '2016 misc',
  significance: 'tiny',
  link: 'https://github.com/tc39/ecma262/issues/293',
  exec: function(){/*
    function * generator() {
      yield * (function * () {
        try {
          yield 'foo';
        }
        catch(e) {
          return;
        }
      }());
      yield 'bar';
    }
    var iter = generator();
    iter.next();
    return iter['throw']().value === 'bar';
  */},
  res: {
      firefox31: true,
      chrome39:  true,
      node:      flag,
      node4:     true,
      safaritp:  true,
      webkit:    true,
  }
},
{
  name: 'strict fn w/ non-strict non-simple params is error',
  category: '2016 misc',
  significance: 'tiny',
  link: 'https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-29.md#611-the-scope-of-use-strict-with-respect-to-destructuring-in-parameter-lists',
  exec: function(){/*
    function foo(...a){}
    try {
      Function("function bar(...a){'use strict';}")();
    } catch(e) {
      return true;
    }
  */},
  res: {
    edge12:      true,
    chrome47:    true,
  }
},
{
  name: 'nested rest destructuring, declarations',
  category: '2016 misc',
  significance: 'tiny',
  link: 'https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#66-bindingrestelement-should-allow-a-bindingpattern-ala-assignmentrestelement',
  exec: function(){/*
    var [x, ...[y, ...z]] = [1,2,3,4];
    return x === 1 && y === 2 && z + '' === '3,4';
  */},
  res: {
    babel:       true,
    edge13:      flag,
    edge14:      true,
    firefox47:   true,
    typescript:  true,
    chrome49:    true,
  }
},
{
  name: 'nested rest destructuring, parameters',
  category: '2016 misc',
  significance: 'tiny',
  link: 'https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#66-bindingrestelement-should-allow-a-bindingpattern-ala-assignmentrestelement',
  exec: function(){/*
    return function([x, ...[y, ...z]]) {
      return x === 1 && y === 2 && z + '' === '3,4';
    }([1,2,3,4]);
  */},
  res: {
    babel:       true,
    edge13:      flag,
    edge14:      true,
    firefox47:   true,
    typescript:  true,
    chrome49:    true,
  }
},
{
  name: 'Proxy, "enumerate" handler removed',
  category: '2016 misc',
  significance: 'tiny',
  link: 'https://github.com/tc39/ecma262/pull/367',
  exec: function() {/*
    var passed = true;
    var proxy = new Proxy({}, {
      enumerate: function() {
        passed = false;
      }
    });
    for(var key in proxy); // Should not throw, nor execute the 'enumerate' method.
    return passed;
  */},
  res: {
    firefox47:   true,
    chrome50:    true,
    safaritp:    true,
    webkit:      true,
  },
},
{
  name: 'Proxy internal calls, Array.prototype.includes',
  category: '2016 misc',
  significance: 'tiny',
  link: 'https://tc39.github.io/ecma262/#sec-array.prototype.includes',
  exec: function() {/*
    // Array.prototype.includes -> Get -> [[Get]]
    var get = [];
    var p = new Proxy({length: 3, 0: '', 1: '', 2: '', 3: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
    Array.prototype.includes.call(p, {});
    if (get + '' !== "length,0,1,2") return;

    get = [];
    p = new Proxy({length: 4, 0: NaN, 1: '', 2: NaN, 3: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
    Array.prototype.includes.call(p, NaN, 1);
    return (get + '' === "length,1,2");
  */},
  res: {
    firefox43:       true,
    chrome49:        true,
    edge14:          true,
    safaritp:        true,
    webkit:          true,
  },
},
{
  name: 'System.global',
  category: 'draft (stage 2)',
  significance: 'small',
  link: 'https://github.com/tc39/proposal-global',
  exec: function(){/*
    Function('return this')().__system_global_test__ = 42;
    return System.global.__system_global_test__ === 42;
  */},
  res: {
    babel:       true,
    typescript:  typescript.corejs,
  }
},
{
  name: 'Math methods for 64-bit integers',
  category: 'strawman (stage 0)',
  significance: 'tiny',
  link: 'https://gist.github.com/BrendanEich/4294d5c212a6d2254703',
  subtests: [
    {
      name: 'Math.iaddh',
      exec: function(){/*
        return Math.iaddh(0xffffffff, 1, 1, 1) === 3;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
    {
      name: 'Math.isubh',
      exec: function(){/*
        return Math.isubh(0, 4, 1, 1) === 2;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
    {
      name: 'Math.imulh',
      exec: function(){/*
        return Math.imulh(0xffffffff, 7) === -1;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
    {
      name: 'Math.umulh',
      exec: function(){/*
        return Math.umulh(0xffffffff, 7) === 6;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
  ]
},
{
  name: 'Observable',
  category: 'proposal (stage 1)',
  significance: 'medium',
  link: 'https://github.com/zenparsing/es-observable',
  'subtests': [
    {
      name: 'basic support',
      exec: function () {/*
        return typeof Observable !== 'undefined';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Symbol.observable well known symbol',
      exec: function () {/*
        return typeof Symbol.observable === 'symbol';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.prototype.subscribe',
      exec: function () {/*
        return 'subscribe' in Observable.prototype;
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable constructor behavior',
      exec: function () {/*
        if(!(new Observable(function(){}) instanceof Observable))return false;

        var nonCallableCheckPassed,
            primitiveCheckPassed,
            newCheckPassed;

        try { new Observable({ }) } catch(e) { nonCallableCheckPassed = true }
        try { new Observable(false) } catch(e) { primitiveCheckPassed = true }
        try { Observable(function() { }) } catch(e) { newCheckPassed = true }

        return nonCallableCheckPassed && primitiveCheckPassed && newCheckPassed;
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.prototype.forEach',
      exec: function () {/*
        var o = new Observable(function() { });
        return 'forEach' in Observable.prototype && o.forEach(function(e){return true}) instanceof Promise;
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.prototype[Symbol.observable]',
      exec: function () {/*
        var o = new Observable(function() { });
        return Symbol.observable in Observable.prototype && o[Symbol.observable]() === o;
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.of',
      exec: function () {/*
        return Observable.of(1, 2, 3) instanceof Observable;
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Observable.from',
      exec: function () {/*
        return (Observable.from([1,2,3,4]) instanceof Observable) && (Observable.from(new Set([1, 2, 3])) instanceof Observable);
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    }
  ]
},
{
  name: 'String.prototype.matchAll',
  category: 'proposal (stage 1)',
  significance: 'small',
  link: 'https://github.com/tc39/String.prototype.matchAll',
  exec: function(){/*
    var iterator = '11a2bb'.matchAll(/(\d)(\D)/);
    if(iterator[Symbol.iterator]() !== iterator)return false;
    var a = '', b = '', c = '', step;
    while(!(step = iterator.next()).done){
      a += step.value[0];
      b += step.value[1];
      c += step.value[2];
    }
    return a === '1a2b'
      && b === '12'
      && c === 'ab';
  */},
  res: {
    babel:       true,
    typescript:  typescript.corejs,
  }
},
{
  name: 'shared memory and atomics',
  category: 'draft (stage 2)',
  significance: 'large',
  link: 'https://github.com/tc39/ecmascript_sharedmem',
  'subtests': [
    {
      name: 'SharedArrayBuffer',
      exec: function () {/*
        return typeof SharedArrayBuffer === 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'SharedArrayBuffer[Symbol.species]',
      exec: function () {/*
        return SharedArrayBuffer[Symbol.species]() === SharedArrayBuffer;
      */},
      res: {
      }
    },
    {
      name: 'SharedArrayBuffer.prototype.byteLength',
      exec: function () {/*
        return 'byteLength' in SharedArrayBuffer.prototype;
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'SharedArrayBuffer.prototype.slice',
      exec: function () {/*
        return typeof SharedArrayBuffer.prototype.slice === 'function';
      */},
      res: {
      }
    },
    {
      name: 'SharedArrayBuffer.prototype[Symbol.toStringTag]',
      exec: function () {/*
        return SharedArrayBuffer.prototype[Symbol.toStringTag] === 'SharedArrayBuffer';
      */},
      res: {
      }
    },
    {
      name: 'Atomics.add',
      exec: function () {/*
        return typeof Atomics.add == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.and',
      exec: function () {/*
        return typeof Atomics.and == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.compareExchange',
      exec: function () {/*
        return typeof Atomics.compareExchange == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.exchange',
      exec: function () {/*
        return typeof Atomics.exchange == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.wait',
      exec: function () {/*
        return typeof Atomics.wait == 'function';
      */},
      res: {
        firefox48:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.wake',
      exec: function () {/*
        return typeof Atomics.wake == 'function';
      */},
      res: {
        firefox48:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.isLockFree',
      exec: function () {/*
        return typeof Atomics.isLockFree == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.load',
      exec: function () {/*
        return typeof Atomics.load == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.or',
      exec: function () {/*
        return typeof Atomics.or == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.store',
      exec: function () {/*
        return typeof Atomics.store == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.sub',
      exec: function () {/*
        return typeof Atomics.sub == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    },
    {
      name: 'Atomics.xor',
      exec: function () {/*
        return typeof Atomics.xor == 'function';
      */},
      res: {
        firefox46:    firefox.nightly,
      }
    }
  ]
},
{
  name: 'additional meta properties',
  category: 'strawman (stage 0)',
  significance: 'medium',
  link: 'https://github.com/allenwb/ESideas/blob/master/ES7MetaProps.md',
  subtests: [
    {
      name: 'function.callee',
      exec: function(){/*
        var f = _ => function.callee === f;
        return f();
      */},
      res: {
      }
    },
    {
      name: 'function.count',
      exec: function(){/*
        return (_ => function.count)(1, 2, 3) === 3;
      */},
      res: {
      }
    },
    {
      name: 'function.arguments',
      exec: function(){/*
        var arr =  (_ => function.arguments)(1, 2, 3);
        return Array.isArray(arr)
          && arr.length === 3
          && arr[0] === 1
          && arr[1] === 2
          && arr[2] === 3;
      */},
      res: {
      }
    }
  ]
},
{
  name: 'method parameter decorators',
  link: 'https://docs.google.com/document/d/1Qpkqf_8NzAwfD8LdnqPjXAQ2wwh8BBUGynhn-ZlCWT0',
  category: 'strawman (stage 0)',
  significance: 'small',
  exec: function(){/*
    var target, key, index;
    function decorator(_target, _key, _index){
      target = _target;
      key    = _key;
      index  = _index;
    }
    class C {
      method(@decorator foo){ }
    }
    return target === C.prototype
      && key === 'method'
      && index === 0;
  */},
  res : {
    typescript:  true,
  }
},
{
  name: 'function expression decorators',
  link: 'https://docs.google.com/document/d/1ikxIP5-RVYq6d_f8lAvf3pKC00W78ueyp-xIZ6q67uU/edit?pref=2&pli=1#',
  category: 'strawman (stage 0)',
  significance: 'small',
  exec: function(){/*
    function inverse(f){
      return function(){
        return !f.apply(this, arguments);
      };
    }
    return (@inverse function(it){
      return it % 2;
    })(2);
  */},
  res : {
  }
},
{
  name: 'Object.prototype getter/setter methods',
  link: 'https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__',
  category: '2017 annex b',
  significance: 'tiny',
  subtests: [{
      name: '__defineGetter__',
      exec: function () {/*
        var obj = {};
        function bar() { return "bar"; }
        Object.prototype.__defineGetter__.call(obj, "foo", bar);
        var prop = Object.getOwnPropertyDescriptor(obj, "foo");
        return prop.get === bar && !prop.writable && prop.configurable
          && prop.enumerable;
      */},
      res: (temp.basicDefineGetterResults = {
        babel:       true,
        typescript:  typescript.corejs,
        ie11:        true,
        firefox31:   true,
        chrome30:    true,
        node:        true,
        iojs:        true,
        safari51:    true,
        safari9:     true,
        safaritp:    true,
        webkit:      true,
        android40:   true,
        ios51:       true,
      })
    },
    {
      name: '__defineGetter__, symbols',
      exec: function () {/*
        var obj = {};
        var sym = Symbol();
        function bar() { return "bar"; }
        Object.prototype.__defineGetter__.call(obj, sym, bar);
        var prop = Object.getOwnPropertyDescriptor(obj, sym);
        return prop.get === bar && !prop.writable && prop.configurable
          && prop.enumerable;
      */},
      res: (temp.defineGetterSymbolsResults = {
        babel:       true,
        typescript:  typescript.corejs,
        edge12:      true,
        firefox36:   true,
        chrome30:    flag,
        chrome38:    true,
        node:        true,
        iojs:        true,
        safari9:     true,
        safaritp:    true,
        webkit:      true,
        android40:   true,
      })
    },
    {
      name: '__defineGetter__, ToObject(this)',
      exec: function () {/*
        var key = '__accessors_test__';
        __defineGetter__.call(1, key, function(){});
        try {
          __defineGetter__.call(null, key, function(){});
        } catch(e){
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        firefox48:   true,
        safari51:    true,
        safari9:     true,
        safaritp:    true,
        webkit:      true,
      },
    },
    {
      name: '__defineSetter__',
      exec: function () {/*
        var obj = {};
        function bar() {}
        Object.prototype.__defineSetter__.call(obj, "foo", bar);
        var prop = Object.getOwnPropertyDescriptor(obj, "foo");
        return prop.set === bar && !prop.writable && prop.configurable
          && prop.enumerable;
      */},
      res: temp.basicDefineGetterResults,
    },
    {
      name: '__defineSetter__, symbols',
      exec: function () {/*
        var obj = {};
        var sym = Symbol();
        function bar(baz) {}
        Object.prototype.__defineSetter__.call(obj, sym, bar);
        var prop = Object.getOwnPropertyDescriptor(obj, sym);
        return prop.set === bar && !prop.writable && prop.configurable
          && prop.enumerable;
      */},
      res: temp.defineGetterSymbolsResults,
    },
    {
      name: '__defineSetter__, ToObject(this)',
      exec: function () {/*
        var key = '__accessors_test__';
        __defineSetter__.call(1, key, function(){});
        try {
          __defineSetter__.call(null, key, function(){});
        } catch(e){
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        firefox48:   true,
        safari51:    true,
        safari9:     true,
        safaritp:    true,
        webkit:      true,
      },
    },
    {
      name: '__lookupGetter__',
      exec: function () {/*
        var obj = {
          get foo() { return "bar"},
          qux: 1
        };
        var foo = Object.prototype.__lookupGetter__.call(obj, "foo");
        return foo() === "bar"
          && Object.prototype.__lookupGetter__.call(obj, "qux") === undefined
          && Object.prototype.__lookupGetter__.call(obj, "baz") === undefined;
      */},
      res: temp.basicDefineGetterResults,
    },
    {
      name: '__lookupGetter__, prototype chain',
      exec: function () {/*
        var obj = {
          get foo() { return "bar"},
          qux: 1
        };
        var foo = Object.prototype.__lookupGetter__.call(Object.create(obj), "foo");
        return foo() === "bar"
          && Object.prototype.__lookupGetter__.call(obj, "qux") === undefined
          && Object.prototype.__lookupGetter__.call(obj, "baz") === undefined;
      */},
      res: temp.basicDefineGetterResults,
    },
    {
      name: '__lookupGetter__, symbols',
      exec: function () {/*
        var sym = Symbol();
        var sym2 = Symbol();
        var obj = {};
        Object.defineProperty(obj, sym, { get: function() { return "bar"; }});
        Object.defineProperty(obj, sym2, { value: 1 });
        var foo = Object.prototype.__lookupGetter__.call(obj, sym);
        return foo() === "bar"
          && Object.prototype.__lookupGetter__.call(obj, sym2) === undefined
          && Object.prototype.__lookupGetter__.call(obj, Symbol()) === undefined;
      */},
      res: temp.defineGetterSymbolsResults,
    },
    {
      name: '__lookupGetter__, ToObject(this)',
      exec: function () {/*
        __lookupGetter__.call(1, 'key');
        try {
          __lookupGetter__.call(null, 'key');
        } catch(e){
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ie11:        true,
        firefox31:   true,
        safari51:    true,
        safari9:     true,
        safaritp:    true,
        webkit:      true,
      },
    },
    {
      name: '__lookupSetter__',
      exec: function () {/*
        var obj = {
          set foo(baz) { return "bar"; },
          qux: 1
        };
        var foo = Object.prototype.__lookupSetter__.call(obj, "foo");
        return foo() === "bar"
          && Object.prototype.__lookupSetter__.call(obj, "qux") === undefined
          && Object.prototype.__lookupSetter__.call(obj, "baz") === undefined;
      */},
      res: temp.basicDefineGetterResults,
    },
    {
      name: '__lookupSetter__, prototype chain',
      exec: function () {/*
        var obj = {
          set foo(baz) { return "bar"; },
          qux: 1
        };
        var foo = Object.prototype.__lookupSetter__.call(Object.create(obj), "foo");
        return foo() === "bar"
          && Object.prototype.__lookupSetter__.call(obj, "qux") === undefined
          && Object.prototype.__lookupSetter__.call(obj, "baz") === undefined;
      */},
      res: temp.basicDefineGetterResults,
    },
    {
      name: '__lookupSetter__, symbols',
      exec: function () {/*
        var sym = Symbol();
        var sym2 = Symbol();
        var obj = {};
        Object.defineProperty(obj, sym, { set: function(baz) { return "bar"; }});
        Object.defineProperty(obj, sym2, { value: 1 });
        var foo = Object.prototype.__lookupSetter__.call(obj, sym);
        return foo() === "bar"
          && Object.prototype.__lookupSetter__.call(obj, sym2) === undefined
          && Object.prototype.__lookupSetter__.call(obj, Symbol()) === undefined;
      */},
      res: temp.defineGetterSymbolsResults,
    },
    {
      name: '__lookupSetter__, ToObject(this)',
      exec: function () {/*
        __lookupSetter__.call(1, 'key');
        try {
          __lookupSetter__.call(null, 'key');
        } catch(e){
          return true;
        }
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        ie11:        true,
        firefox31:   true,
        safari51:    true,
        safari9:     true,
        safaritp:    true,
        webkit:      true,
      },
    }
  ]
},
{
  name: 'Proxy internal calls, getter/setter methods',
  link: 'https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__',
  category: '2017 annex b',
  significance: 'tiny',
  subtests: [{
      name: '__defineGetter__',
      exec: function () {/*
        // Object.prototype.__defineGetter__ -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
        var def = [];
        var p = new Proxy({}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
        Object.prototype.__defineGetter__.call(p, "foo", Object);
        return def + '' === "foo";
      */},
      res: {
        firefox31:   true,
        edge14:      true,
        chrome52:    true,
        safaritp:    true,
        webkit:      true,
      }
    },
    {
      name: '__defineSetter__',
      exec: function () {/*
        // Object.prototype.__defineSetter__ -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
        var def = [];
        var p = new Proxy({}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
        Object.prototype.__defineSetter__.call(p, "foo", Object);
        return def + '' === "foo";
      */},
      res: {
        firefox31:   true,
        edge14:      true,
        chrome52:    true,
        safaritp:    true,
        webkit:      true,
      }
    },
    {
      name: '__lookupGetter__',
      exec: function () {/*
        // Object.prototype.__lookupGetter__ -> [[GetOwnProperty]]
        // Object.prototype.__lookupGetter__ -> [[GetPrototypeOf]]
        var gopd = [];
        var gpo = false;
        var p = new Proxy({}, {
          getPrototypeOf: function(o) { gpo = true; return Object.getPrototypeOf(o); },
          getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }
        });
        Object.prototype.__lookupGetter__.call(p, "foo");
        return gopd + '' === "foo" && gpo;
      */},
      res: {
        firefox49:   true,
      }
    },
    {
      name: '__lookupSetter__',
      exec: function () {/*
        // Object.prototype.__lookupSetter__ -> [[GetOwnProperty]]
        // Object.prototype.__lookupSetter__ -> [[GetPrototypeOf]]
        var gopd = [];
        var gpo = false;
        var p = new Proxy({}, {
          getPrototypeOf: function(o) { gpo = true; return Object.getPrototypeOf(o); },
          getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }
        });
        Object.prototype.__lookupSetter__.call(p, "foo");
        return gopd + '' === "foo" && gpo;
      */},
      res: {
        firefox49:   true,
      }
    }
  ]
},
{
  name: 'weak references',
  link: 'https://github.com/tc39/proposal-weakrefs',
  category: 'proposal (stage 1)',
  significance: 'large',
  exec: function(){/*
    var O = {};
    var weakref = System.makeWeakRef(O);
    var works = weakref.get() === O;
    weakref.clear();
    return works && weakref.get() === undefined;
  */},
  res : {
  }
},
{
  name: 'Async iteration',
  category: 'draft (stage 2)',
  significance: 'medium',
  link: 'https://github.com/tc39/proposal-async-iteration',
  subtests: [
    {
      name: 'async generators',
      exec: function(){/*
        async function*generator(){
          yield 42;
        }

        var iterator = generator();
        iterator.next().then(function(step){
          if(iterator[Symbol.asyncIterator]() === iterator && step.done === false && step.value === 42)asyncTestPassed();
        });
      */},
      res: {
      }
    },
    {
      name: 'for-await-of loops',
      exec: function(){/*
        var asyncIterable = {};
        asyncIterable[Symbol.asyncIterator] = function(){
          var i = 0;
          return {
            next: function(){
              switch(i++){
                case 1: return Promise.resolve({done: false, value: 'a'});
                case 2: return Promise.resolve({done: false, value: 'b'});
              } return Promise.resolve({done: true});
            }
          };
        };

        (async function(){
          var result = '';
          for await(var value of asyncIterable)result += value;
          if(result === 'ab')asyncTestPassed();
        })();
      */},
      res: {
      }
    }
  ]
},
{
  name: 'RegExp named capture groups',
  link: 'https://github.com/goyakin/es-regexp-named-groups',
  category: 'strawman (stage 0)',
  significance: 'small',
  exec: function(){/*
    var result = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2016-03-11');
    return result.groups.year === '2016'
      && result.groups.month === '03'
      && result.groups.day === '11'
      && result.groups[0] === '2016-03-11'
      && result.groups[1] === '2016'
      && result.groups[2] === '03'
      && result.groups[3] === '11';
  */},
  res : {
  }
},
{
  name: 'RegExp lookbehind',
  link: 'https://github.com/goyakin/es-regexp-lookbehind',
  category: 'strawman (stage 0)',
  significance: 'small',
  exec: function(){/*
    return /(?<=a)b/.test('ab') && /(?<!a)b/.test('cb');
  */},
  res : {
    chrome50:    flag,
  }
},
{
  name: 'Reflect.isCallable / Reflect.isConstructor',
  category: 'strawman (stage 0)',
  significance: 'small',
  link: 'https://github.com/caitp/TC39-Proposals/blob/master/tc39-reflect-isconstructor-iscallable.md',
  subtests: [
    {
      name: 'Reflect.isCallable',
      exec: function(){/*
        return Reflect.isCallable(function(){})
          && Reflect.isCallable(_ => _)
          && !Reflect.isCallable(class {});
      */},
      res: {
      }
    },
    {
      name: 'Reflect.isConstructor',
      exec: function(){/*
        return Reflect.isConstructor(function(){})
          && !Reflect.isConstructor(_ => _)
          && Reflect.isConstructor(class {});
      */},
      res: {
      }
    }
  ]
},
{
  name: 'Metadata reflection API',
  category: 'pre-strawman',
  significance: 'medium',
  link: 'https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md',
  subtests: [
    {
      name: 'Reflect.defineMetadata',
      exec: function(){/*
        return typeof Reflect.defineMetadata == 'function';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.hasMetadata',
      exec: function(){/*
        return typeof Reflect.hasMetadata == 'function';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.hasOwnMetadata',
      exec: function(){/*
        return typeof Reflect.hasOwnMetadata == 'function';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.getMetadata',
      exec: function(){/*
        return typeof Reflect.getMetadata == 'function';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.getOwnMetadata',
      exec: function(){/*
        return typeof Reflect.getOwnMetadata == 'function';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.getMetadataKeys',
      exec: function(){/*
        return typeof Reflect.getMetadataKeys == 'function';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.getOwnMetadataKeys',
      exec: function(){/*
        return typeof Reflect.getOwnMetadataKeys == 'function';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.deleteMetadata',
      exec: function(){/*
        return typeof Reflect.deleteMetadata == 'function';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    },
    {
      name: 'Reflect.metadata',
      exec: function(){/*
        return typeof Reflect.metadata == 'function';
      */},
      res: {
        babel:      true,
        typescript: typescript.corejs,
      }
    }
  ]
},
{
  name: 'zones',
  category: 'proposal (stage 1)',
  significance: 'large',
  link: 'https://github.com/domenic/zones',
  subtests: [
    {
      name: 'Zone',
      exec: function(){/*
        return typeof Zone == 'function';
      */},
      res: {
      }
    },
    {
      name: 'Zone.current',
      exec: function(){/*
        return 'current' in Zone;
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.name',
      exec: function(){/*
        return 'name' in Zone.prototype;
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.parent',
      exec: function(){/*
        return 'parent' in Zone.prototype;
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.fork',
      exec: function(){/*
        return typeof Zone.prototype.fork == 'function';
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.run',
      exec: function(){/*
        return typeof Zone.prototype.run == 'function';
      */},
      res: {
      }
    },
    {
      name: 'Zone.prototype.wrap',
      exec: function(){/*
        return typeof Zone.prototype.wrap == 'function';
      */},
      res: {
      }
    }
  ]
},
{
  name: 'frozen realms',
  category: 'proposal (stage 1)',
  significance: 'medium',
  link: 'https://github.com/FUDCo/frozen-realms',
  exec: function () {/*
    return typeof Reflect.Realm.immutableRoot === 'function'
      && typeof Reflect.Realm.prototype.spawn === 'function';
  */},
  res: {
  }
},
{
  name: 'private fields',
  category: 'proposal (stage 1)',
  significance: 'medium',
  link: 'https://github.com/zenparsing/es-private-fields',
  subtests: [
    {
      name: 'basic support',
      exec: function () {/*
        class C {
          #x;
          constructor(x){
            this.#x = x;
          }
          x(){
            return this.#x;
          }
        }
        return new C(42).x() === 42;
      */},
      res: {
      }
    },
    {
      name: 'initializers',
      exec: function () {/*
        class C {
          #x = 42;
          x(){
            return this.#x;
          }
        }
        return new C().x() === 42;
      */},
      res: {
      }
    },
  ]
},
{
  name: 'asap',
  link: 'https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask',
  category: 'strawman (stage 0)',
  significance: 'medium',
  exec: function(){/*
    var passed = false;
    setTimeout(function(){ passed = false; }, 1);
    asap(function(){ if(passed)asyncTestPassed(); });
    passed = true;
  */},
  res : {
    babel:      true,
    typescript: typescript.corejs,
  }
},
{
  name: 'syntactic tail calls',
  category: 'strawman (stage 0)',
  significance: 'medium',
  link: 'https://github.com/tc39/proposal-ptc-syntax',
  subtests: [
    {
      name: 'direct recursion',
      exec: function() {/*
        "use strict";
        return (function f(n){
          if (n <= 0) {
            return  "foo";
          }
          return continue f(n - 1);
        }(1e6)) === "foo";
      */},
      res: {},
    },
    {
      name: 'mutual recursion',
      exec: function() {/*
        "use strict";
        function f(n){
          if (n <= 0) {
            return  "foo";
          }
          return continue g(n - 1);
        }
        function g(n){
          if (n <= 0) {
            return  "bar";
          }
          return continue f(n - 1);
        }
        return f(1e6) === "foo" && f(1e6+1) === "bar";
      */},
      res: {},
    }
  ]
},
{
  name: 'class extends null',
  category: '2017 misc',
  significance: 'tiny',
  link: 'https://github.com/tc39/ecma262/issues/543',
  subtests: [
    {
      name: 'proper default constructor',
      exec: function() {/*
        class C extends null {}
        return new C instanceof C;
      */},
      res: {},
    },
    {
      name: 'proper "this" binding',
      exec: function() {/*
        var passed = false;
        new class C extends null {
          constructor() {
            passed = (this instanceof C && !(this instanceof Object));
            return this;
          }
        };
        return passed;
      */},
      res: {},
    },
  ]
},
{
  name: 'Object enumerables',
  category: 'strawman (stage 0)',
  significance: 'small',
  link: 'https://github.com/leobalter/object-enumerables',
  subtests: [
    {
      name: 'Object.enumerableKeys',
      exec: function() {/*
        var O = Object.create({a: 1}, {c: {value: 3}});
        O.b = 2;
        var keys = Object.enumerableKeys(O);
        return keys.length === 2
          && !!~keys.indexOf('a')
          && !!~keys.indexOf('b');
      */},
      res: {
      },
    },
    {
      name: 'Object.enumerableValues',
      exec: function() {/*
        var O = Object.create({a: 1}, {c: {value: 3}});
        O.b = 2;
        var values = Object.enumerableValues(O);
        return values.length === 2
          && !!~values.indexOf(1)
          && !!~values.indexOf(2);
      */},
      res: {
      },
    },
    {
      name: 'Object.enumerableEntries',
      exec: function() {/*
        var O = Object.create({a: 1}, {c: {value: 3}});
        O.b = 2;
        var entries = Object.enumerableEntries(O);
        entries.sort(function(x, y){
          return x[1] - y[1];
        });
        return entries.length === 2
          && entries[0][0] === 'a'
          && entries[0][1] === 1
          && entries[1][0] === 'b'
          && entries[1][1] === 2;
      */},
      res: {
      },
    },
  ]
},
];

//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = ['2016 features', '2016 misc', '2017 misc', '2017 annex b', 'finished (stage 4)', 'candidate (stage 3)', 'draft (stage 2)', 'proposal (stage 1)', 'strawman (stage 0)', 'pre-strawman'].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ESnext category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
