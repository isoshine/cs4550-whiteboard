package com.example.cs455020su1shinekimserverjava.models;

public class Widget {
  private Integer id;
  private String name;
  private String type;
  private String topicId;

  //no argument constructor
  public Widget() {
  }

  public Widget(Integer id, String name, String type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  public Widget(Integer id, String name, String type, String tId) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.topicId = tId;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public String getTopicId() {
    return topicId;
  }

  public void setTopicId(String topicId) {
    this.topicId = topicId;
  }
}
