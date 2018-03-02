package com.expressjs

import com.expressjs.dsl.Application
import com.expressjs.wrapper.Callback
import com.expressjs.wrapper.Express

class ExpressKt(private val express: Express = Express()) {

    fun initRoutes(application: Application) {
        application.routes.forEach { route ->
            route.endpoints.forEach {
                express.get(route.path, it.handler)
            }
        }
    }

    fun listen(port: Int, callback: Callback) {
        express.listen(port, callback)
    }
}