package com.expressjs

@JsModule("express")
external class Express {
    fun get(route: String, callback: (req: dynamic, res: Response) -> dynamic)
    fun listen(port: Int, function: dynamic)
}