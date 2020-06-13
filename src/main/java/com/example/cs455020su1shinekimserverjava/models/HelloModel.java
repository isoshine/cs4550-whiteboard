package com.example.cs455020su1shinekimserverjava.models;

public class HelloModel {
  private String message;
  private int id;

  public HelloModel(String m, int id) {
    this.message = m;
    this.id = id;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }
}
