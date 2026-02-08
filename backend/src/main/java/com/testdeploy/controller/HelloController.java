package com.testdeploy.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    static int i = 0;

    @GetMapping("/hello")
    public String hello() {
        return " Hello World! " + ++i;
    }
}
