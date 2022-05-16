// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función producto', function() {
  operaciones.producto.should.be.a.Function();
  should.equal(operaciones.producto(7,4), 28);
  should.equal(operaciones.producto(1,3), 3);
	should.equal(operaciones.producto(1,-3), -3);
});
