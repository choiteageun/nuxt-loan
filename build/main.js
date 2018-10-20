require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename, __dirname) {

var fs = __webpack_require__(18);
var path = __webpack_require__(19);
var Sequelize = __webpack_require__(21);
var basename = path.basename(__filename);
var env = "production" || 'development';
var config = __webpack_require__(17)[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(path.resolve(__dirname)).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize['import'](path.resolve(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
/* WEBPACK VAR INJECTION */}.call(exports, "server/models/index.js", "server/models"))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    tel: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, DataTypes) {
  var Consultation = sequelize.define('Consultation', {
    name: DataTypes.STRING,
    tel: DataTypes.STRING,
    loanAmount: DataTypes.STRING,
    InquiryContents: DataTypes.STRING,
    note: DataTypes.STRING,
    situation: DataTypes.STRING,
    route: DataTypes.STRING,
    birth: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    jobGroup: DataTypes.STRING,
    about: DataTypes.STRING,
    income: DataTypes.INTEGER,
    insurance: DataTypes.BOOLEAN,
    overdue: DataTypes.INTEGER,
    propertyA: DataTypes.BOOLEAN,
    propertyB: DataTypes.STRING,
    manager_id: DataTypes.INTEGER,
    receptionist: DataTypes.STRING,
    enrollment_date: DataTypes.DATEONLY,
    enrollment_time: DataTypes.TIME,
    reserve_date: DataTypes.DATEONLY,
    reserve_time: DataTypes.TIME,
    owner: DataTypes.STRING,
    agency: DataTypes.STRING,
    period: DataTypes.STRING,
    marry: DataTypes.BOOLEAN,
    grade: DataTypes.STRING,
    coment: DataTypes.STRING,
    record: DataTypes.STRING,
    memo: DataTypes.STRING
  }, {});
  Consultation.associate = function (models) {
    // associations can be defined here
  };
  return Consultation;
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var bDev = "production" === "development";
var host_url = bDev ? "http://localhost:3000" : "http://18.220.88.167:3000";
console.log(host_url);

module.exports = {
  head: {
    title: 'young capital',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [],
    script: []
  },
  env: {
    // HOST_URL: "http://localhost:3000",
    HOST_URL: host_url
  },
  css: [{ src: '@/assets/scss/element-ui.scss', lang: "scss" }, '@/assets/css/main.css'],
  loading: { color: '#3B8070' },
  plugins: ['@/plugins/element-ui'],
  build: {},
  modules: ["@nuxtjs/axios"],
  axios: {
    browserBaseURL: host_url
  }
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);


var models = __webpack_require__(2);
var Consultation = __webpack_require__(4);
var User = __webpack_require__(3);

var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();
var auth = __webpack_require__(13);
var consultation = __webpack_require__(15);
var user = __webpack_require__(16);

router.use("/auth", auth.routes());
router.use("/consultation", consultation.routes());
router.use("/user", user.routes());

router.get("/list", function (ctx) {
  ctx.body = ["사과", "바나나", "오렌지", 1, 3];
});

module.exports = router;

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("socket.io");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();
var models = __webpack_require__(2);

router.post("/login", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var _ctx$request$body, name, password, user;

    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$request$body = ctx.request.body, name = _ctx$request$body.name, password = _ctx$request$body.password;
            // const password = ctx.request.body.password전개연산자

            _context.next = 3;
            return models.User.findOne({ where: { name: name } });

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 8;
              break;
            }

            tx.status = 400;
            ctx.body = "유저 없음";
            return _context.abrupt("return");

          case 8:
            if (user.password === password) {
              ctx.session.logged = true;
              ctx.session.id = user.id;
              ctx.session.name = user.name;
              ctx.status = 200;
              ctx.body = ctx.session;
            } else {
              ctx.status = 401;
              ctx.body = "로그인 실패";
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

router.get("/check", function (ctx) {
  if (ctx.session.logged) {
    ctx.body = "LOGGED";
  } else {
    ctx.status = 401;
    ctx.body = "비회원";
  }
});
router.get("/logout", function (ctx) {
  ctx.session = null;
  ctx.body = "LOGOUT";
});

module.exports = router;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var models = __webpack_require__(2);
var Consultation = __webpack_require__(4);
var User = __webpack_require__(3);

var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();
router.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var res;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return models.Notememo.findAll({});

          case 2:
            res = _context.sent;

            ctx.body = res;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    var res;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return models.Notememo.findAll({});

          case 2:
            res = _context2.sent;

            ctx.body = res;

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

module.exports = router;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var models = __webpack_require__(2);
var Consultation = __webpack_require__(4);
var User = __webpack_require__(3);

var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

var consulReport = __webpack_require__(14);
router.use("/consulReport", consulReport.routes());

router.get("/", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var data;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return models.Consultation.findAll({
              order: [["id", "desc"]
              //["컬럽값", "asc or desc" asc: 오름차순 desc: 내림차순]
              ]
            });

          case 2:
            data = _context.sent;

            ctx.body = data;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

router.post("/", function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    var data, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = ctx.request.body.data;
            // const data = ctx.request.body.data = const { data } = ctx.request.body
            //const data = ctx.request.body.data = const { data , as , kk } = ctx.request.body

            _context2.next = 3;
            return models.Consultation.create(data);

          case 3:
            result = _context2.sent;


            ctx.body = result;

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

router.post("/:id", function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx) {
    var data, id, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = ctx.request.body.data;
            id = ctx.params.id;
            // const data = ctx.request.body.data = const { data } = ctx.request.body
            //const data = ctx.request.body.data = const { data , as , kk } = ctx.request.body

            _context3.next = 4;
            return models.Consultation.update(data, { where: { id: id } });

          case 4:
            result = _context3.sent;


            ctx.body = result;

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}());

router.get("/staff", function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx) {
    var result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return models.Consultation.findOne({
              where: {
                manager_id: "신현민"
              }
            });

          case 2:
            result = _context4.sent;

            ctx.body = result;

            // models.Consultation.update({name: "asd"}, {where:{id:id}})

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}());

router.get("/getAllStaff", function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx) {
    var result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return models.User.findAll({});

          case 2:
            result = _context5.sent;

            ctx.body = result;

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, _this);
  }));

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
}());

router.get("/:id", function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx) {
    var id, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = ctx.params.id;
            _context6.next = 3;
            return models.Consultation.findAll({
              where: {
                manager_id: id
              }
            });

          case 3:
            result = _context6.sent;

            ctx.body = result;

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, _this);
  }));

  return function (_x6) {
    return _ref6.apply(this, arguments);
  };
}());
module.exports = router;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var models = __webpack_require__(2);
var User = __webpack_require__(3);

var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

router.get("/", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return models.User.findAll({
              order: [["id", "desc"]]
            });

          case 2:
            result = _context.sent;

            ctx.body = result;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

router.post("/createStaff", function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    var data, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = ctx.request.body.data;
            _context2.next = 3;
            return models.User.create(data);

          case 3:
            result = _context2.sent;


            ctx.body = result;

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

router.post("/:id", function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx) {
    var data, id, result;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = ctx.request.body.data;
            id = ctx.params.id;
            _context3.next = 4;
            return models.User.update(data, { where: { id: id } });

          case 4:
            result = _context3.sent;


            ctx.body = result;

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}());

module.exports = router;

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = {"development":{"username":"root","password":"chlxorms1","database":"react","host":"127.0.0.1","dialect":"mysql","logging":false},"test":{"username":"root","password":null,"database":"database_test","host":"127.0.0.1","dialect":"mysql"},"production":{"username":"root","password":"chlxorms1","database":"react","host":"127.0.0.1","dialect":"mysql"}}

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("sequelize");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nuxt__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_session__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_session__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var app, http, io, host, port, config, nuxt, builder, sessionConfig, api, router;
    return __WEBPACK_IMPORTED_MODULE_0__Users_choetaegeun_Documents_vsCode_nuxt_loan_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            http = __webpack_require__(7).createServer(app.callback());
            io = __webpack_require__(12)(http);
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(5);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_4_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context.next = 12;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_4_nuxt__["Builder"](nuxt);
            _context.next = 12;
            return builder.build();

          case 12:

            //세션 등록
            app.keys = ["chance"];
            sessionConfig = {
              maxAge: 3600 * 24 * 1000 //1일
            };


            app.use(__WEBPACK_IMPORTED_MODULE_5_koa_session___default()(sessionConfig, app));

            app.use(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default()());
            // router.get("/number", ctx =>{
            //   ctx.body = Math.floor(Math.random() *100)
            // })
            api = __webpack_require__(6);
            router = new __WEBPACK_IMPORTED_MODULE_2_koa_router___default.a();


            router.use("/api", api.routes());

            //서버에 API 붙이기
            app.use(router.routes());
            app.use(router.allowedMethods());

            //Koa 미들웨어, app.use(( ctx, next)=>{} )
            app.use(function (ctx) {
              //상태 코드
              ctx.status = 200;
              ctx.respond = false; // Mark request as handled for Koa
              ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
              nuxt.render(ctx.req, ctx.res);
            });

            io.on("connection", function (socket) {
              console.log("유저가 접속함!");

              socket.on("chat", function (chat) {

                io.emit("chat", chat);
              });
            });

            http.listen(port, function () {
              console.log('Server listening on :' + port); // eslint-disable-line no-console
            });

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map