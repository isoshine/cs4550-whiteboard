package com.example.cs455020su1shinekimserverjava.controllers;

import com.example.cs455020su1shinekimserverjava.models.Widget;
import com.example.cs455020su1shinekimserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {

  /*
  CRUD
  C-Create
  R-Read
  U-Update
  D-Delete
   */


  @Autowired
  WidgetService widgetService;

//  @PostMapping("/api/widgets")
//  public Widget createLoneWidget(@RequestBody Widget newWidget) {
//    return widgetService.createWidget(newWidget);
//  }

  @PostMapping("/api/topics/{topicId}/widgets")
  public Widget createWidget(@PathVariable("topicId") String tId,
                             @RequestBody Widget newWidget) {
    return widgetService.createWidget(tId, newWidget);
  }

  @PutMapping("/api/widgets/{widgetId}")
  public Integer updateWidget(@PathVariable("widgetId") String wId,
                             @RequestBody Widget updatedWidget) {
    return widgetService.updateWidget(wId, updatedWidget);
  }

  @GetMapping("/api/widgets")
  public List<Widget> findAllWidgets() {
    return widgetService.findAllWidgets();
  }

  @GetMapping("/api/widgets/{widgetId}")
  public Widget findWidgetById(@PathVariable("widgetId") String wId) {
    return widgetService.findWidgetById(wId);
  }

  @GetMapping("/api/topics/{topicId}/widgets")
  public List<Widget> findWidgetsForTopic(@PathVariable("topicId") String tId) {
    return widgetService.findWidgetsForTopic(tId);
  }

  //listens for incoming deletes with this pattern
  @DeleteMapping("/api/widgets/{widgetId}")
  public Integer deleteWidget(@PathVariable("widgetId") String wId) {
    return widgetService.deleteWidget(wId);
  }
}
