"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (_Number) {
  var apiURL = 'https://allwin-prom.pp.ua/api_cyber_heat_ne';
  var isVerifiedUser = false;
  var periodAmount = 2; // кількість періодів в акції, треба для кешування інфи з табли
  var tableData = [];
  var activeWeek = null;
  var isPromoOver = false;
  var mainPage = document.querySelector(".cyberHeat"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.play-btn'),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector('#table'),
    resultsTableOther = document.querySelector('#tableOther'),
    tableTabs = document.querySelectorAll('.table__tabs-item');
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };

  // let locale = "uk"
  var locale = sessionStorage.getItem("locale") || "uk";
  var loaderBtn = false;
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;

  // let userId = null
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
    var circle = document.querySelector('.decor__circle');
    if (circle) circle.classList.add('animate-appear');
    document.querySelectorAll('.decor__arm').forEach(function (arm) {
      return arm.classList.add('animate-appear');
    });
  }
  function checkUserAuth() {
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/promouser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          isVerifiedUser = true;
        } else {
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          isVerifiedUser = false;
        }
      });
    } else {
      var _iterator2 = _createForOfIteratorHelper(redirectBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var redirectBtn = _step2.value;
          redirectBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(participateBtns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var participateBtn = _step3.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _unauthMes = _step4.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return Promise.resolve(false);
    }
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
        loadUsers("?nocache=1").then(function (res) {
          renderUsers(activeWeek, tableData);
        });
      }, 1000);
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      return Promise.reject(err);
    });
  }
  function loadUsers(parametr) {
    var requests = [];
    tableData.length = 0;
    var _loop = function _loop() {
      var week = i; // або будь-яка логіка для формування номера тижня
      var req = request("/users/".concat(week).concat(parametr ? parametr : "")).then(function (data) {
        tableData.push({
          week: week,
          data: data
        });
        if (!activeWeek) {
          activeWeek = data.activeStageNumber;
        }
        isPromoOver = data.isPromoOver;
      });
      requests.push(req);
    };
    for (var i = 1; i <= periodAmount; i++) {
      _loop();
    }
    // renderUsers(activeWeek, requests);

    return Promise.all(requests)["catch"](function (error) {
      console.error('Error loading users:', error);
    });
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass();
  }
  function refreshLocalizedClass(element, baseCssClass) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  function renderUsers(weekNum) {
    var userData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    weekNum = Number(weekNum);
    var weekObj = userData.find(function (w) {
      return w.week === weekNum;
    });
    if (!weekObj || !weekObj.data || !Array.isArray(weekObj.data.users)) {
      console.error('Невірна структура даних');
      return;
    }
    var isStageEnded = weekObj.data.isStageEnded;
    userData = weekObj.data.users;
    var currentUser = userData.find(function (user) {
      return user.userid === userId;
    });
    if (userId && !currentUser && isVerifiedUser) {
      userData = [].concat(_toConsumableArray(userData), [{
        userid: userId,
        points: 0
      }]);
    }
    populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser, isStageEnded);
  }
  function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser, isStageEnded) {
    if (!(users !== null && users !== void 0 && users.length)) return;
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !currentUser || isTopCurrentUser ? 13 : 10;
    var topUsers = users.slice(0, topUsersLength);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (isVerifiedUser && !currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
    if (!isTopCurrentUser && currentUser) {
      isVerifiedUser = false;
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userData.points, userPlace);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n           <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n               ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (index !== 10 && users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(points, place) {
    if (points == null || points < 5) return null;
    if (place >= 1 && place <= 10) return "prize_".concat(place);
    if (place >= 11 && place <= 30) return "prize_11-30";
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth().then(loadUsers).then(function () {
                if (isPromoOver) {
                  participateBtns.forEach(function (el) {
                    el.classList.add('lock');
                  });
                  redirectBtns.forEach(function (el) {
                    el.classList.add('lock');
                  });
                }
                setTimeout(hideLoader, 300);
                document.querySelectorAll(".table__tabs-item").forEach(function (tab, i) {
                  tab.classList.remove('active');
                  if (i === activeWeek - 1) tab.classList.add('active');
                });
                renderUsers(activeWeek, tableData);
                participateBtns.forEach(function (btn) {
                  return btn.addEventListener('click', participate);
                });
                tableTabs.forEach(function (tab) {
                  if (Number(tab.getAttribute("data-week")) > activeWeek) {
                    tab.style.pointerEvents = "none";
                  } else {
                    tab.style.pointerEvents = "initial";
                  }
                });
                document.addEventListener("click", function (e) {
                  if (e.target.closest(".table__tabs-item")) {
                    if (Number(e.target.closest(".table__tabs-item").getAttribute("data-week")) > activeWeek) {
                      return;
                    }
                    e.target.closest(".table__tabs-item").style.pointerEvents = "initial";
                    tableTabs.forEach(function (tab) {
                      tab.classList.remove("active");
                    });
                    var tabWeek = e.target.closest(".table__tabs-item").getAttribute("data-week");
                    e.target.closest(".table__tabs-item").classList.add("active");
                    renderUsers(tabWeek, tableData);
                  }
                });
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
    });
  }
  loadTranslations().then(init);

  // TEST

  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 || _document$querySelect2.classList.toggle("hide");
    });
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  var betBtn = document.querySelector(".btn-bet-online");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "1112");
    }
    window.location.reload();
  });
  betBtn.addEventListener("click", function () {
    sessionStorage.setItem("userId", "777");
    window.location.reload();
  });
  document.querySelector('.btn-phase').addEventListener('click', function () {
    var activeWeek = 2;
    renderUsers(activeWeek, tableData);
    document.querySelectorAll(".table__tabs-item").forEach(function (tab, i) {
      tab.classList.remove('active');
      if (i === activeWeek - 1) tab.classList.add('active');
    });
    tableTabs.forEach(function (tab) {
      if (Number(tab.getAttribute("data-week")) > activeWeek) {
        tab.style.pointerEvents = "none";
      } else {
        tab.style.pointerEvents = "initial";
      }
    });
    document.addEventListener("click", function (e) {
      if (e.target.closest(".table__tabs-item")) {
        if (Number(e.target.closest(".table__tabs-item").getAttribute("data-week")) > activeWeek) {
          return;
        }
        e.target.closest(".table__tabs-item").style.pointerEvents = "initial";
        tableTabs.forEach(function (tab) {
          tab.classList.remove("active");
        });
        var tabWeek = e.target.closest(".table__tabs-item").getAttribute("data-week");
        e.target.closest(".table__tabs-item").classList.add("active");
        renderUsers(tabWeek);
      }
    });
  });

  // iOS custom scrollbar
  var isIOS = function () {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var iOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    var isModernIpad = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    return iOS || isModernIpad;
  }();
  function initIOSScrollbars() {
    if (!isIOS) return;
    var scrollContainers = document.querySelectorAll('.drop-txt-list');
    scrollContainers.forEach(function (container) {
      var _container$closest;
      if (container.dataset.iosScrollbar) return;
      container.dataset.iosScrollbar = 'true';
      container.style.position = 'relative';

      // Hide native iOS scrollbar using overflow wrapper technique
      container.style.marginRight = '-20px';
      container.style.paddingRight = '30px';
      container.parentElement.style.overflow = 'hidden';
      var track = document.createElement('div');
      track.className = 'ios-scrollbar-track';
      var thumb = document.createElement('div');
      thumb.className = 'ios-scrollbar-thumb';
      track.appendChild(thumb);
      container.parentElement.style.position = 'relative';
      container.parentElement.appendChild(track);
      function updateThumb() {
        var scrollHeight = container.scrollHeight;
        var clientHeight = container.clientHeight;
        var scrollTop = container.scrollTop;
        if (scrollHeight <= clientHeight) {
          track.style.display = 'none';
          return;
        }
        track.style.display = 'block';
        var thumbHeight = Math.max(clientHeight / scrollHeight * clientHeight, 20);
        var maxScrollTop = scrollHeight - clientHeight;
        var thumbTop = scrollTop / maxScrollTop * (clientHeight - thumbHeight);
        thumb.style.height = thumbHeight + 'px';
        thumb.style.transform = "translateY(".concat(thumbTop, "px)");
      }
      container.addEventListener('scroll', updateThumb);
      var observer = new MutationObserver(updateThumb);
      observer.observe(container, {
        childList: true,
        subtree: true
      });
      setTimeout(updateThumb, 100);
      (_container$closest = container.closest('details')) === null || _container$closest === void 0 || _container$closest.addEventListener('toggle', function () {
        setTimeout(updateThumb, 50);
      });
    });
  }
  initIOSScrollbars();

  // anim for decor__circle
  var decorCircle = document.querySelector('.decor__circle');
  if (decorCircle) {
    decorCircle.addEventListener('animationend', function handler(e) {
      if (e.animationName === 'chains-appear' || e.animationName === 'chainsAppear') {
        decorCircle.classList.add('spinning');
        decorCircle.removeEventListener('animationend', handler);
      }
    });
  }

  //  anim for decor__arm
  document.querySelectorAll('.decor__arm').forEach(function (arm) {
    arm.addEventListener('animationend', function handler(e) {
      if (e.animationName === 'arms-appear' || e.animationName === 'armsAppear') {
        arm.classList.add('levitating');
        arm.removeEventListener('animationend', handler);
      }
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9uIiwiRiIsInRvU3RyaW5nIiwidGVzdCIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX051bWJlciIsImFwaVVSTCIsImlzVmVyaWZpZWRVc2VyIiwicGVyaW9kQW1vdW50IiwidGFibGVEYXRhIiwiYWN0aXZlV2VlayIsImlzUHJvbW9PdmVyIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwidGFibGVUYWJzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb25jYXQiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImxvYWRlckJ0biIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJyZXMiLCJvayIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInJlamVjdCIsImFkZCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiY2lyY2xlIiwiYXJtIiwiY2hlY2tVc2VyQXV0aCIsIl9pdGVyYXRvciIsIl9zdGVwIiwidW5hdXRoTWVzIiwidXNlcmlkIiwiaXRlbSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJyZWRpcmVjdEJ0biIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJwYXJ0aWNpcGF0ZUJ0biIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJwYXJ0aWNpcGF0ZSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0IiwibG9hZFVzZXJzIiwicmVuZGVyVXNlcnMiLCJwYXJhbWV0ciIsInJlcXVlc3RzIiwiX2xvb3AiLCJ3ZWVrIiwicmVxIiwiZGF0YSIsImFjdGl2ZVN0YWdlTnVtYmVyIiwiYWxsIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwic3RhY2siLCJ3YXJuIiwidHJhbnNsYXRlIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsIl9pIiwiX2FyciIsImxhbmciLCJ3ZWVrTnVtIiwidXNlckRhdGEiLCJ1bmRlZmluZWQiLCJ3ZWVrT2JqIiwiZmluZCIsInciLCJ1c2VycyIsImlzU3RhZ2VFbmRlZCIsImN1cnJlbnRVc2VyIiwidXNlciIsInBvaW50cyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJpc1RvcEN1cnJlbnRVc2VyIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJfb3B0aW9ucyRoaWdobGlnaHQiLCJoaWdobGlnaHQiLCJfb3B0aW9ucyRuZWlnaGJvciIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsImluaXQiLCJfaW5pdCIsIl9jYWxsZWUiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsIndhaXRGb3JVc2VySWQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiX3F1aWNrQ2hlY2tBbmRSZW5kZXIiLCJ0YWIiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicG9pbnRlckV2ZW50cyIsInRhcmdldCIsImNsb3Nlc3QiLCJ0YWJXZWVrIiwiX3RyeURldGVjdFVzZXJJZCIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJiZXRCdG4iLCJpc0lPUyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJpT1MiLCJNU1N0cmVhbSIsImlzTW9kZXJuSXBhZCIsInBsYXRmb3JtIiwibWF4VG91Y2hQb2ludHMiLCJpbml0SU9TU2Nyb2xsYmFycyIsInNjcm9sbENvbnRhaW5lcnMiLCJjb250YWluZXIiLCJfY29udGFpbmVyJGNsb3Nlc3QiLCJkYXRhc2V0IiwiaW9zU2Nyb2xsYmFyIiwicG9zaXRpb24iLCJtYXJnaW5SaWdodCIsInBhZGRpbmdSaWdodCIsInBhcmVudEVsZW1lbnQiLCJ0cmFjayIsInRodW1iIiwiYXBwZW5kQ2hpbGQiLCJ1cGRhdGVUaHVtYiIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbFRvcCIsImRpc3BsYXkiLCJ0aHVtYkhlaWdodCIsIk1hdGgiLCJtYXgiLCJtYXhTY3JvbGxUb3AiLCJ0aHVtYlRvcCIsImhlaWdodCIsInRyYW5zZm9ybSIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZGVjb3JDaXJjbGUiLCJoYW5kbGVyIiwiYW5pbWF0aW9uTmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFD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QUFDO0VBQ047RUFFQWIsaUJBQWlCLENBQUMsQ0FBQzs7RUFHbkI7RUFDQSxJQUFNOEIsV0FBVyxHQUFHaE8sUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDNUQsSUFBSStOLFdBQVcsRUFBRTtJQUNiQSxXQUFXLENBQUNsRSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsU0FBU21FLE9BQU9BLENBQUNoWCxDQUFDLEVBQUU7TUFDN0QsSUFBSUEsQ0FBQyxDQUFDaVgsYUFBYSxLQUFLLGVBQWUsSUFBSWpYLENBQUMsQ0FBQ2lYLGFBQWEsS0FBSyxjQUFjLEVBQUU7UUFDM0VGLFdBQVcsQ0FBQ2hOLFNBQVMsQ0FBQzhCLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDckNrTCxXQUFXLENBQUNHLG1CQUFtQixDQUFDLGNBQWMsRUFBRUYsT0FBTyxDQUFDO01BQzVEO0lBQ0osQ0FBQyxDQUFDO0VBQ047O0VBRUE7RUFDQWpPLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUNyRyxPQUFPLENBQUMsVUFBQXNKLEdBQUcsRUFBSTtJQUNwREEsR0FBRyxDQUFDMEcsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFNBQVNtRSxPQUFPQSxDQUFDaFgsQ0FBQyxFQUFFO01BQ3JELElBQUlBLENBQUMsQ0FBQ2lYLGFBQWEsS0FBSyxhQUFhLElBQUlqWCxDQUFDLENBQUNpWCxhQUFhLEtBQUssWUFBWSxFQUFFO1FBQ3ZFOUssR0FBRyxDQUFDcEMsU0FBUyxDQUFDOEIsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUMvQk0sR0FBRyxDQUFDK0ssbUJBQW1CLENBQUMsY0FBYyxFQUFFRixPQUFPLENBQUM7TUFDcEQ7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFFTixDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2FsbHdpbi1wcm9tLnBwLnVhL2FwaV9jeWJlcl9oZWF0X25lJ1xuXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgbGV0IHBlcmlvZEFtb3VudCA9IDIgLy8g0LrRltC70YzQutGW0YHRgtGMINC/0LXRgNGW0L7QtNGW0LIg0LIg0LDQutGG0ZbRlywg0YLRgNC10LHQsCDQtNC70Y8g0LrQtdGI0YPQstCw0L3QvdGPINGW0L3RhNC4INC3INGC0LDQsdC70LhcbiAgICBsZXQgdGFibGVEYXRhID0gW11cbiAgICBsZXQgYWN0aXZlV2VlayA9IG51bGxcbiAgICBsZXQgaXNQcm9tb092ZXIgPSBmYWxzZVxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN5YmVySGVhdFwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheS1idG4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZU90aGVyJyksXG4gICAgICAgIHRhYmxlVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1pdGVtJylcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwidWtcIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcblxuICAgIC8vIGxldCB1c2VySWQgPSBudWxsXG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlY29yX19jaXJjbGUnKVxuICAgICAgICBpZiAoY2lyY2xlKSBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1hcHBlYXInKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVjb3JfX2FybScpLmZvckVhY2goYXJtID0+IGFybS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWFwcGVhcicpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9wcm9tb3VzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZFVzZXJzKHBhcmFtZXRyKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgICAgIHRhYmxlRGF0YS5sZW5ndGggPSAwXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gaTsgLy8g0LDQsdC+INCx0YPQtNGMLdGP0LrQsCDQu9C+0LPRltC60LAg0LTQu9GPINGE0L7RgNC80YPQstCw0L3QvdGPINC90L7QvNC10YDQsCDRgtC40LbQvdGPXG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfSR7cGFyYW1ldHIgPyBwYXJhbWV0ciA6IFwiXCJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucHVzaCh7IHdlZWssIGRhdGE6IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgaWYoIWFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVXZWVrID0gZGF0YS5hY3RpdmVTdGFnZU51bWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc1Byb21vT3ZlciA9IGRhdGEuaXNQcm9tb092ZXJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgcmVxdWVzdHMpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB1c2VyczonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIGNvbnN0IHdlZWtPYmogPSB1c2VyRGF0YS5maW5kKHcgPT4gdy53ZWVrID09PSB3ZWVrTnVtKTtcbiAgICAgICAgaWYgKCF3ZWVrT2JqIHx8ICF3ZWVrT2JqLmRhdGEgfHwgIUFycmF5LmlzQXJyYXkod2Vla09iai5kYXRhLnVzZXJzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J3QtdCy0ZbRgNC90LAg0YHRgtGA0YPQutGC0YPRgNCwINC00LDQvdC40YUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhZ2VFbmRlZCA9IHdlZWtPYmouZGF0YS5pc1N0YWdlRW5kZWRcblxuICAgICAgICB1c2VyRGF0YSA9IHdlZWtPYmouZGF0YS51c2VycztcblxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQpIHtcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIWN1cnJlbnRVc2VyIHx8IGlzVG9wQ3VycmVudFVzZXIgPyAxMyA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJEYXRhLnBvaW50cywgdXNlclBsYWNlKTtcblxuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDEwICYmIHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocG9pbnRzLCBwbGFjZSkge1xuICAgICAgICBpZiAocG9pbnRzID09IG51bGwgfHwgcG9pbnRzIDwgNSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgaWYgKHBsYWNlID49IDEgJiYgcGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPj0gMTEgJiYgcGxhY2UgPD0gMzApIHJldHVybiBgcHJpemVfMTEtMzBgO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIC50aGVuKGxvYWRVc2VycylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNQcm9tb092ZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZm9yRWFjaCgodGFiLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IGFjdGl2ZVdlZWsgLSAxKSB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlayl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKE51bWJlcihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YWJXZWVrID0gZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2Vycyh0YWJXZWVrLCB0YWJsZURhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cbiAgICAvLyBURVNUXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBjb25zdCBiZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iZXQtb25saW5lXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTExMlwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgYmV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3N1wiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGhhc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWN0aXZlV2VlayA9IDJcbiAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmZvckVhY2goKHRhYiwgaSkgPT57XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpID09PSBhY3RpdmVXZWVrIC0gMSkgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICBpZihOdW1iZXIodGFiLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKXtcbiAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PntcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKSl7XG4gICAgICAgICAgICAgICAgaWYoTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGV0IHRhYldlZWsgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRhYldlZWspXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9KTtcblxuICAgIC8vIGlPUyBjdXN0b20gc2Nyb2xsYmFyXG4gICAgY29uc3QgaXNJT1MgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XG4gICAgICAgIGNvbnN0IGlPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVhKSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuICAgICAgICBjb25zdCBpc01vZGVybklwYWQgPSBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMTtcbiAgICAgICAgcmV0dXJuIGlPUyB8fCBpc01vZGVybklwYWQ7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGluaXRJT1NTY3JvbGxiYXJzKCkge1xuICAgICAgICBpZiAoIWlzSU9TKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wLXR4dC1saXN0Jyk7XG5cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmRhdGFzZXQuaW9zU2Nyb2xsYmFyKSByZXR1cm47XG4gICAgICAgICAgICBjb250YWluZXIuZGF0YXNldC5pb3NTY3JvbGxiYXIgPSAndHJ1ZSc7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEhpZGUgbmF0aXZlIGlPUyBzY3JvbGxiYXIgdXNpbmcgb3ZlcmZsb3cgd3JhcHBlciB0ZWNobmlxdWVcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW5SaWdodCA9ICctMjBweCc7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzMwcHgnO1xuICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRyYWNrLmNsYXNzTmFtZSA9ICdpb3Mtc2Nyb2xsYmFyLXRyYWNrJztcblxuICAgICAgICAgICAgY29uc3QgdGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRodW1iLmNsYXNzTmFtZSA9ICdpb3Mtc2Nyb2xsYmFyLXRodW1iJztcblxuICAgICAgICAgICAgdHJhY2suYXBwZW5kQ2hpbGQodGh1bWIpO1xuICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodHJhY2spO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaHVtYigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbFRvcDtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxIZWlnaHQgPD0gY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cmFjay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRodW1iSGVpZ2h0ID0gTWF0aC5tYXgoKGNsaWVudEhlaWdodCAvIHNjcm9sbEhlaWdodCkgKiBjbGllbnRIZWlnaHQsIDIwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhTY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdGh1bWJUb3AgPSAoc2Nyb2xsVG9wIC8gbWF4U2Nyb2xsVG9wKSAqIChjbGllbnRIZWlnaHQgLSB0aHVtYkhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICB0aHVtYi5zdHlsZS5oZWlnaHQgPSB0aHVtYkhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgdGh1bWIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0aHVtYlRvcH1weClgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlVGh1bWIpO1xuXG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHVwZGF0ZVRodW1iKTtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCh1cGRhdGVUaHVtYiwgMTAwKTtcblxuICAgICAgICAgICAgY29udGFpbmVyLmNsb3Nlc3QoJ2RldGFpbHMnKT8uYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodXBkYXRlVGh1bWIsIDUwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0SU9TU2Nyb2xsYmFycygpO1xuXG5cbiAgICAvLyBhbmltIGZvciBkZWNvcl9fY2lyY2xlXG4gICAgY29uc3QgZGVjb3JDaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVjb3JfX2NpcmNsZScpXG4gICAgaWYgKGRlY29yQ2lyY2xlKSB7XG4gICAgICAgIGRlY29yQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgaWYgKGUuYW5pbWF0aW9uTmFtZSA9PT0gJ2NoYWlucy1hcHBlYXInIHx8IGUuYW5pbWF0aW9uTmFtZSA9PT0gJ2NoYWluc0FwcGVhcicpIHtcbiAgICAgICAgICAgICAgICBkZWNvckNpcmNsZS5jbGFzc0xpc3QuYWRkKCdzcGlubmluZycpO1xuICAgICAgICAgICAgICAgIGRlY29yQ2lyY2xlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAgYW5pbSBmb3IgZGVjb3JfX2FybVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWNvcl9fYXJtJykuZm9yRWFjaChhcm0gPT4ge1xuICAgICAgICBhcm0uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlcihlKSB7XG4gICAgICAgICAgICBpZiAoZS5hbmltYXRpb25OYW1lID09PSAnYXJtcy1hcHBlYXInIHx8IGUuYW5pbWF0aW9uTmFtZSA9PT0gJ2FybXNBcHBlYXInKSB7XG4gICAgICAgICAgICAgICAgYXJtLmNsYXNzTGlzdC5hZGQoJ2xldml0YXRpbmcnKTtcbiAgICAgICAgICAgICAgICBhcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KSgpO1xuIl19
