package com.expressjs

external interface Response {

    fun sendStatus(code: Int): Response

    fun type(type: String): Response

    fun send(data: String): Response

    fun json(data: Any): Response
}