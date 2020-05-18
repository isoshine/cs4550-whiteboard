package com.example.cs455020su1shinekimserverjava.models;

public class User {
  private String username;
  private String password;
  private String firstName;
  private String lastName;

  public User(String un, String pw, String fn, String ln) {
    this.username = un;
    this.password = pw;
    this.firstName = fn;
    this.lastName = ln;
  }

  public User() {
    super();
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }
}
