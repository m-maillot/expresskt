(function (_, Kotlin, $module$expresskt) {
  'use strict';
  var ExpressKt = $module$expresskt.com.expressjs.ExpressKt;
  var Method = $module$expresskt.com.expressjs.dsl.Method;
  var Unit = Kotlin.kotlin.Unit;
  var application = $module$expresskt.com.expressjs.dsl.application_49nevt$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main$lambda$lambda$lambda(req, res) {
    res.sendStatus(200).send('Hello world!');
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.to_ls7rjw$(Method.GET, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.bind_ly26f3$('/test', main$lambda$lambda);
    return Unit;
  }
  function main$lambda_0() {
    println('Listening on port 3000');
    return Unit;
  }
  function main(args) {
    var app = new ExpressKt();
    app.initRoutes_nspasj$(application(main$lambda));
    app.listen_n53o35$(3000, main$lambda_0);
  }
  var package$com = _.com || (_.com = {});
  var package$expressjs = package$com.expressjs || (package$com.expressjs = {});
  var package$demo = package$expressjs.demo || (package$expressjs.demo = {});
  package$demo.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(module.exports, require('kotlin'), require('expresskt')));

//# sourceMappingURL=index.js.map
