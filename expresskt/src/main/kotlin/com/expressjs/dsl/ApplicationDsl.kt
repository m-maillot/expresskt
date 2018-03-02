@file:Suppress("unused")

package com.expressjs.dsl

@DslMarker
annotation class ExpressKT

@ExpressKT
class EndpointBuilder(initialMethod: Method, initialRoutingHandler: RoutingHttpHandler) {
    var method: Method = initialMethod
    var routingHandler: RoutingHttpHandler = initialRoutingHandler

    fun build(): Endpoint {
        return Endpoint(method, routingHandler)
    }

}

@ExpressKT
class RouteBuilder(initialPath: String) {
    private var path: String = initialPath
    private val endpoints = mutableListOf<Endpoint>()
    private val subRoutes = mutableListOf<Route>()

    fun build(): Route {
        return Route(path, endpoints, subRoutes)
    }

    infix fun String.bind(setup: RouteBuilder.() -> Unit) {
        val routeBuilder = RouteBuilder(this)
        routeBuilder.setup()
        subRoutes += routeBuilder.build()
    }

    infix fun Method.to(routingHandler: RoutingHttpHandler) {
        endpoint(this, routingHandler)
    }

    fun endpoint(method: Method = Method.GET, routingHandler: RoutingHttpHandler) {
        val endpointBuilder = EndpointBuilder(method, routingHandler)
        endpoints += endpointBuilder.build()
    }

    fun route(path: String, setup: RouteBuilder.() -> Unit = {}) {
        this.path += path
        val routeBuilder = RouteBuilder(path)
        routeBuilder.setup()
        subRoutes += routeBuilder.build()
    }

}

@ExpressKT
class ApplicationBuilder {

    private val routes = mutableListOf<Route>()

    operator fun Route.unaryPlus() {
        routes += this
    }

    infix fun String.bind(setup: RouteBuilder.() -> Unit) {
        val routeBuilder = RouteBuilder(this)
        routeBuilder.setup()
        routes += routeBuilder.build()
    }

    fun route(path: String, setup: RouteBuilder.() -> Unit = {}) {
        val routeBuilder = RouteBuilder(path)
        routeBuilder.setup()
        routes += routeBuilder.build()
    }

    fun build(): Application {
        return Application(routes)
    }

    @Suppress("UNUSED_PARAMETER")
    @Deprecated(level = DeprecationLevel.ERROR,
            message = "Applications can't be nested.")
    fun application(param: () -> Unit = {}) {
    }

}

fun application(setup: ApplicationBuilder.() -> Unit): Application {
    val builder = ApplicationBuilder()
    builder.setup()
    return builder.build()
}