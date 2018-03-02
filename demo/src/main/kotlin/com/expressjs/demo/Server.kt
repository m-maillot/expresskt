package com.expressjs.demo

import com.expressjs.ExpressKt
import com.expressjs.dsl.Method
import com.expressjs.dsl.application

fun main(args: Array<String>) {
    val app = ExpressKt()

    app.initRoutes(application {
        "/test" bind {
            Method.GET to { req, res ->
                res.sendStatus(200).send("Hello world!")
            }
        }
    })

    app.listen(3000, {
        println("Listening on port 3000")
    })

}