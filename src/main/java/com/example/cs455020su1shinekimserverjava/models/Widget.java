package com.example.cs455020su1shinekimserverjava.models;

public class Widget {
  private String id;
  private String name;
  private String type;
  private Integer widgetOrder;
  private String text;
  private String url;
  private Integer size;
  private Integer width, height;
  private String cssClass;
  private String style;
  private String value;

  private String topicId;

  //no argument constructor
  public Widget() {
  }

  public Widget(String id, String name, String type, Integer widgetOrder, String text, String url,
                Integer size, Integer width, Integer height, String cssClass, String style, String value) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.widgetOrder = widgetOrder;
    this.text = text;
    this.url = url;
    this.size = size;
    this.width = width;
    this.height = height;
    this.cssClass = cssClass;
    this.style = style;
    this.value = value;
  }

  public Widget(String id, String name, String type, Integer widgetOrder, String text, String url,
                Integer size, Integer width, Integer height, String cssClass, String style, String value,
                String topicId) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.widgetOrder = widgetOrder;
    this.text = text;
    this.url = url;
    this.size = size;
    this.width = width;
    this.height = height;
    this.cssClass = cssClass;
    this.style = style;
    this.value = value;
    this.topicId = topicId;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
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

  public Integer getWidgetOrder() {
    return widgetOrder;
  }

  public void setWidgetOrder(Integer widgetOrder) {
    this.widgetOrder = widgetOrder;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public Integer getSize() {
    return size;
  }

  public void setSize(Integer size) {
    this.size = size;
  }

  public Integer getWidth() {
    return width;
  }

  public void setWidth(Integer width) {
    this.width = width;
  }

  public Integer getHeight() {
    return height;
  }

  public void setHeight(Integer height) {
    this.height = height;
  }

  public String getCssClass() {
    return cssClass;
  }

  public void setCssClass(String cssClass) {
    this.cssClass = cssClass;
  }

  public String getStyle() {
    return style;
  }

  public void setStyle(String style) {
    this.style = style;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }
}
