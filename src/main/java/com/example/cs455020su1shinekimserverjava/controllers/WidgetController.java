package com.example.cs455020su1shinekimserverjava.controllers;

import com.example.cs455020su1shinekimserverjava.models.Widget;
import com.example.cs455020su1shinekimserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class WidgetController {
  @Autowired
  WidgetService widgetService;

  @GetMapping("/api/widgets")
  public List<Widget> findAllWidgets() {
    return widgetService.findAllWidgets();
  }

  @GetMapping("api/widgets/{widgetId}")
  public Widget findWidgetById(@PathVariable("widgetId") Integer wId) {
    return widgetService.findWidgetById(wId);
  }

  @GetMapping("/api/topics/{topicId}/widgets/")
  public List<Widget> findWidgetsForTopic(@PathVariable("topicId") String tId) {
    return widgetService.findWidgetsForTopic(tId);
  }
}
