package com.example.cs455020su1shinekimserverjava.controllers;

import com.example.cs455020su1shinekimserverjava.models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
  private User[] users = {
          new User("alice", "passwordAlice", "Alice", "Wonderland"),
          new User("bob", "bobspassword", "Bob", "TheBuilder"),
          new User("charlie", "pwcharlies", "Charlie", "Brown")
  };

  //Request Mapping of Data
  @GetMapping("/users")
  public User[] findAllUsers() {
    return users;
  }
}
