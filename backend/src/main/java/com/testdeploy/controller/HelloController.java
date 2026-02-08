package com.testdeploy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private static final String COUNT_KEY = "visit_count";

    @Autowired
    private StringRedisTemplate redisTemplate;

    @GetMapping("/hello")
    public String hello() {
        Long count = redisTemplate.opsForValue().increment(COUNT_KEY);
        return """
                <h1> Hello World! </h1>
                <p> 这是第 %d 次访问 </p>
                """.formatted(count);
    }

    @GetMapping("/count")
    public Long count() {
        return redisTemplate.opsForValue().increment(COUNT_KEY);
    }

}
