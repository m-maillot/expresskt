package com.expressjs.dsl

import com.expressjs.wrapper.Request
import com.expressjs.wrapper.Response

data class Application(val routes: List<Route>)

data class Route(val path: String, val endpoints: List<Endpoint>, val subRoutes: List<Route>)

data class Endpoint(val method: Method, val handler: RoutingHttpHandler)

enum class Method {
    GET, POST, PUT, DELETE
}

typealias RoutingHttpHandler = (req: Request, res: Response) -> Unit
