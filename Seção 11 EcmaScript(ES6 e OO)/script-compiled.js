"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Cachorro = /*#__PURE__*/function () {
  function Cachorro() {
    _classCallCheck(this, Cachorro);
    this.cor = "Branco e Marrom";
    this.tamanho = 30;
    this.orelhas = "Grandes e Caídas";
  }
  return _createClass(Cachorro, [{
    key: "correr",
    value: function correr() {
      console.log('Correr');
    }
  }, {
    key: "dormir",
    value: function dormir() {
      console.log('Dormir');
    }
  }, {
    key: "rosnar",
    value: function rosnar() {
      console.log('Rosnar');
    }
  }]);
}();
var Passaro = /*#__PURE__*/function () {
  function Passaro() {
    _classCallCheck(this, Passaro);
    this.cor = "Branco e Marrom";
    this.tamanho = 20;
    this.bico = "Fino e Amarelo";
  }
  return _createClass(Passaro, [{
    key: "voar",
    value: function voar() {
      console.log('Voar');
    }
  }, {
    key: "dormir",
    value: function dormir() {
      console.log('Dormir');
    }
  }]);
}();
var cachorro = new Cachorro();
var passaro = new Passaro();
console.log(cachorro);
console.log(passaro);
