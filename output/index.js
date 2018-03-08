(function (_, Kotlin, $module$express) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  Method.prototype = Object.create(Enum.prototype);
  Method.prototype.constructor = Method;
  function ExpressKt(express) {
    if (express === void 0)
      express = new $module$express();
    this.express_0 = express;
  }
  ExpressKt.prototype.initRoutes_nspasj$ = function (application) {
    var tmp$;
    tmp$ = application.routes.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = element.endpoints.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        this.express_0.get(element.path, element_0.handler);
      }
    }
  };
  ExpressKt.prototype.listen_n53o35$ = function (port, callback) {
    this.express_0.listen(port, callback);
  };
  ExpressKt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExpressKt',
    interfaces: []
  };
  function ExpressKT() {
  }
  ExpressKT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExpressKT',
    interfaces: [Annotation]
  };
  function EndpointBuilder(initialMethod, initialRoutingHandler) {
    this.method = initialMethod;
    this.routingHandler = initialRoutingHandler;
  }
  EndpointBuilder.prototype.build = function () {
    return new Endpoint(this.method, this.routingHandler);
  };
  EndpointBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndpointBuilder',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function RouteBuilder(initialPath) {
    this.path_0 = initialPath;
    this.endpoints_0 = ArrayList_init();
    this.subRoutes_0 = ArrayList_init();
  }
  RouteBuilder.prototype.build = function () {
    return new Route(this.path_0, this.endpoints_0, this.subRoutes_0);
  };
  RouteBuilder.prototype.bind_ly26f3$ = function ($receiver, setup) {
    var routeBuilder = new RouteBuilder($receiver);
    setup(routeBuilder);
    var $receiver_0 = this.subRoutes_0;
    var element = routeBuilder.build();
    $receiver_0.add_11rb$(element);
  };
  RouteBuilder.prototype.to_ls7rjw$ = function ($receiver, routingHandler) {
    this.endpoint_idmm07$($receiver, routingHandler);
  };
  RouteBuilder.prototype.endpoint_idmm07$ = function (method, routingHandler) {
    if (method === void 0)
      method = Method$GET_getInstance();
    var endpointBuilder = new EndpointBuilder(method, routingHandler);
    var $receiver = this.endpoints_0;
    var element = endpointBuilder.build();
    $receiver.add_11rb$(element);
  };
  function RouteBuilder$route$lambda($receiver) {
    return Unit;
  }
  RouteBuilder.prototype.route_watkcc$ = function (path, setup) {
    if (setup === void 0)
      setup = RouteBuilder$route$lambda;
    this.path_0 = this.path_0 + path;
    var routeBuilder = new RouteBuilder(path);
    setup(routeBuilder);
    var $receiver = this.subRoutes_0;
    var element = routeBuilder.build();
    $receiver.add_11rb$(element);
  };
  RouteBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RouteBuilder',
    interfaces: []
  };
  function ApplicationBuilder() {
    this.routes_0 = ArrayList_init();
  }
  ApplicationBuilder.prototype.unaryPlus_se9fjb$ = function ($receiver) {
    this.routes_0.add_11rb$($receiver);
  };
  ApplicationBuilder.prototype.bind_ly26f3$ = function ($receiver, setup) {
    var routeBuilder = new RouteBuilder($receiver);
    setup(routeBuilder);
    var $receiver_0 = this.routes_0;
    var element = routeBuilder.build();
    $receiver_0.add_11rb$(element);
  };
  function ApplicationBuilder$route$lambda($receiver) {
    return Unit;
  }
  ApplicationBuilder.prototype.route_watkcc$ = function (path, setup) {
    if (setup === void 0)
      setup = ApplicationBuilder$route$lambda;
    var routeBuilder = new RouteBuilder(path);
    setup(routeBuilder);
    var $receiver = this.routes_0;
    var element = routeBuilder.build();
    $receiver.add_11rb$(element);
  };
  ApplicationBuilder.prototype.build = function () {
    return new Application(this.routes_0);
  };
  function ApplicationBuilder$application$lambda() {
    return Unit;
  }
  ApplicationBuilder.prototype.application_o14v8n$ = function (param) {
    if (param === void 0)
      param = ApplicationBuilder$application$lambda;
  };
  ApplicationBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApplicationBuilder',
    interfaces: []
  };
  function application(setup) {
    var builder = new ApplicationBuilder();
    setup(builder);
    return builder.build();
  }
  function Application(routes) {
    this.routes = routes;
  }
  Application.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Application',
    interfaces: []
  };
  Application.prototype.component1 = function () {
    return this.routes;
  };
  Application.prototype.copy_5iqp1$ = function (routes) {
    return new Application(routes === void 0 ? this.routes : routes);
  };
  Application.prototype.toString = function () {
    return 'Application(routes=' + Kotlin.toString(this.routes) + ')';
  };
  Application.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.routes) | 0;
    return result;
  };
  Application.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.routes, other.routes))));
  };
  function Route(path, endpoints, subRoutes) {
    this.path = path;
    this.endpoints = endpoints;
    this.subRoutes = subRoutes;
  }
  Route.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Route',
    interfaces: []
  };
  Route.prototype.component1 = function () {
    return this.path;
  };
  Route.prototype.component2 = function () {
    return this.endpoints;
  };
  Route.prototype.component3 = function () {
    return this.subRoutes;
  };
  Route.prototype.copy_99xyqo$ = function (path, endpoints, subRoutes) {
    return new Route(path === void 0 ? this.path : path, endpoints === void 0 ? this.endpoints : endpoints, subRoutes === void 0 ? this.subRoutes : subRoutes);
  };
  Route.prototype.toString = function () {
    return 'Route(path=' + Kotlin.toString(this.path) + (', endpoints=' + Kotlin.toString(this.endpoints)) + (', subRoutes=' + Kotlin.toString(this.subRoutes)) + ')';
  };
  Route.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.endpoints) | 0;
    result = result * 31 + Kotlin.hashCode(this.subRoutes) | 0;
    return result;
  };
  Route.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.endpoints, other.endpoints) && Kotlin.equals(this.subRoutes, other.subRoutes)))));
  };
  function Endpoint(method, handler) {
    this.method = method;
    this.handler = handler;
  }
  Endpoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Endpoint',
    interfaces: []
  };
  Endpoint.prototype.component1 = function () {
    return this.method;
  };
  Endpoint.prototype.component2 = function () {
    return this.handler;
  };
  Endpoint.prototype.copy_idmm07$ = function (method, handler) {
    return new Endpoint(method === void 0 ? this.method : method, handler === void 0 ? this.handler : handler);
  };
  Endpoint.prototype.toString = function () {
    return 'Endpoint(method=' + Kotlin.toString(this.method) + (', handler=' + Kotlin.toString(this.handler)) + ')';
  };
  Endpoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.method) | 0;
    result = result * 31 + Kotlin.hashCode(this.handler) | 0;
    return result;
  };
  Endpoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.method, other.method) && Kotlin.equals(this.handler, other.handler)))));
  };
  function Method(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Method_initFields() {
    Method_initFields = function () {
    };
    Method$GET_instance = new Method('GET', 0);
    Method$POST_instance = new Method('POST', 1);
    Method$PUT_instance = new Method('PUT', 2);
    Method$DELETE_instance = new Method('DELETE', 3);
  }
  var Method$GET_instance;
  function Method$GET_getInstance() {
    Method_initFields();
    return Method$GET_instance;
  }
  var Method$POST_instance;
  function Method$POST_getInstance() {
    Method_initFields();
    return Method$POST_instance;
  }
  var Method$PUT_instance;
  function Method$PUT_getInstance() {
    Method_initFields();
    return Method$PUT_instance;
  }
  var Method$DELETE_instance;
  function Method$DELETE_getInstance() {
    Method_initFields();
    return Method$DELETE_instance;
  }
  Method.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Method',
    interfaces: [Enum]
  };
  function Method$values() {
    return [Method$GET_getInstance(), Method$POST_getInstance(), Method$PUT_getInstance(), Method$DELETE_getInstance()];
  }
  Method.values = Method$values;
  function Method$valueOf(name) {
    switch (name) {
      case 'GET':
        return Method$GET_getInstance();
      case 'POST':
        return Method$POST_getInstance();
      case 'PUT':
        return Method$PUT_getInstance();
      case 'DELETE':
        return Method$DELETE_getInstance();
      default:throwISE('No enum constant com.expressjs.dsl.Method.' + name);
    }
  }
  Method.valueOf_61zpoe$ = Method$valueOf;
  var package$com = _.com || (_.com = {});
  var package$expressjs = package$com.expressjs || (package$com.expressjs = {});
  package$expressjs.ExpressKt = ExpressKt;
  var package$dsl = package$expressjs.dsl || (package$expressjs.dsl = {});
  package$dsl.ExpressKT = ExpressKT;
  package$dsl.EndpointBuilder = EndpointBuilder;
  package$dsl.RouteBuilder = RouteBuilder;
  package$dsl.ApplicationBuilder = ApplicationBuilder;
  package$dsl.application_49nevt$ = application;
  package$dsl.Application = Application;
  package$dsl.Route = Route;
  package$dsl.Endpoint = Endpoint;
  Object.defineProperty(Method, 'GET', {
    get: Method$GET_getInstance
  });
  Object.defineProperty(Method, 'POST', {
    get: Method$POST_getInstance
  });
  Object.defineProperty(Method, 'PUT', {
    get: Method$PUT_getInstance
  });
  Object.defineProperty(Method, 'DELETE', {
    get: Method$DELETE_getInstance
  });
  package$dsl.Method = Method;
  Kotlin.defineModule('index', _);
  return _;
}(module.exports, require('kotlin'), require('express')));

//# sourceMappingURL=index.js.map
