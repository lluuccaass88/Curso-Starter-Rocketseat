"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*1*/
function exc1() {
  var usuario = /*#__PURE__*/function () {
    function usuario(email, senha) {
      _classCallCheck(this, usuario);

      this.email = email;
      this.senha = senha;
    }

    _createClass(usuario, [{
      key: "isAdmin",
      value: function isAdmin() {
        return this.admin === true;
      }
    }]);

    return usuario;
  }();

  var admin = /*#__PURE__*/function (_usuario) {
    _inherits(admin, _usuario);

    var _super = _createSuper(admin);

    function admin(email, senha) {
      var _this;

      _classCallCheck(this, admin);

      _this = _super.call(this, email, senha);
      _this.admin = true;
      return _this;
    }

    return admin;
  }(usuario);

  var User1 = new usuario("emlail@teste.com", "senha123");
  var Adm1 = new admin("email@teste.com", "senha123");
  console.log("Usuario " + User1.isAdmin());
  console.log("Admin " + Adm1.isAdmin());
}
/*2*/


function exc2() {
  var usuarios = [{
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
  }, {
    nome: 'Gabriel',
    idade: 15,
    empresa: 'Rocketseat'
  }, {
    nome: 'Lucas',
    idade: 30,
    empresa: 'Facebook'
  }];
  var idadeUsers = usuarios.map(function (item) {
    return item.idade;
  });
  console.log(idadeUsers);
  var rocket18 = usuarios.filter(function (item) {
    return item.idade > 18 && item.empresa === 'Rocketseat';
  });
  console.log(rocket18);
  var trabalhaGoogle = usuarios.find(function (item) {
    return item.empresa === 'Google';
  });
  console.log(trabalhaGoogle);
  var usuariosVezesDois = usuarios.filter(function (item) {
    return item.idade * 2 < 50;
  });
  console.log(usuariosVezesDois);
}
/*3*/

/*
const arr = [1, 2, 3, 4, 5];

arr.map((item) => {
 return item + 10;
});

const user = { nome: 'Diego', idade: 23 };
const mostraIdade = (user) => {
 return usuario.idade;
}
mostraIdade(usuario);

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => {
 return { nome, idade };
}
mostraUsuario(nome, idade);

const promise = function() {
    return new Promise((resolve, reject) => {
    return resolve();
    })
}
*/

/*4*/


function exc4() {
  var empresa = {
    nome: 'Rocketseat',
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC'
    }
  };
  var nome = empresa.nome,
      _empresa$endereco = empresa.endereco,
      cidade = _empresa$endereco.cidade,
      estado = _empresa$endereco.estado;

  function mostraInfo(usuario) {
    return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
  }

  mostraInfo({
    nome: 'Diego',
    idade: 23
  });
  console.log("Nome ".concat(nome, ", Cidade: ").concat(cidade, ", Estado:").concat(estado));

  function mostraInfo(usuario) {
    var nome = usuario.nome,
        idade = usuario.idade;
    return "".concat(nome, " tem ").concat(idade, " anos.");
  }

  mostraInfo({
    nome: 'Diego',
    idade: 23
  });
}
/*5*/


function exc5() {
  var arr = [1, 2, 3, 4, 5, 6];
  var x = arr[0],
      y = arr.slice(1);
  console.log("x: ".concat(x, "\ny: ").concat(y));

  function soma() {
    for (var _len = arguments.length, num = new Array(_len), _key = 0; _key < _len; _key++) {
      num[_key] = arguments[_key];
    }

    var resultado = num.reduce(function (total, next) {
      return total + next;
    });
    console.log(resultado);
  }

  soma(1, 2, 5);
  var usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil'
    }
  };

  var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
    nome: 'Gabriel'
  });

  console.log(usuario2);
}
/*6*/


function exc6() {
  var usuario = 'Diego';
  var idade = 23;
  console.log("O usu\xE1rio ".concat(usuario, " possui ").concat(idade, " anos"));
}
/*7*/


function exc7() {
  var nome = 'Diego';
  var idade = 23;
  var usuario = {
    nome: nome,
    idade: idade,
    cidade: 'Rio do Sul'
  };
  console.log(usuario);
}
