package com.example.cs455020su1shinekimserverjava.controllers;

import com.example.cs455020su1shinekimserverjava.models.HelloModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//will start listening for incoming requests
@RestController
public class HelloController {
  @GetMapping("/api/hello/{message}")
  public HelloModel sayHello(@PathVariable("message") String msg) {
    //return "Hello World " + msg;
    HelloModel hello = new HelloModel(msg, 123);
    return hello;
  }
}
