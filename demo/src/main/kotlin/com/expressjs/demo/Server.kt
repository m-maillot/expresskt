package com.expressjs.demo

import com.expressjs.Express

fun main(args: Array<String>) {
    println("Hello JavaScript!")

    val app = Express()


    app.get("/", { req, res ->
        res.type("text/plain")
        res.send("i am a beautiful butterfly")
    })

    app.listen(3000, {
        println("Listening on port 3000")
    })
}