package com.example.cs455020su1shinekimserverjava.services;

import com.example.cs455020su1shinekimserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class WidgetService {
  private List<Widget> widgets = new ArrayList<Widget>();


  public List<Widget> findWidgetsForTopic(String tId) {
    List<Widget> result = new ArrayList<Widget>();
    for (Widget w: widgets) {
      if (w.getTopicId().equals(tId)) {
        result.add(w);
      }
    }
    return result;
  }

  public List<Widget> findAllWidgets() {
    return widgets;
  }

  public Widget findWidgetById(String wId) {
    for (Widget w: widgets) {
      if(w.getId().equals(wId)) {
        return w;
      }
    }
    return null;
  }

  public Integer deleteWidget(String wId) {
    int prevSize = widgets.size();
    List<Widget> result = new ArrayList<Widget>();
    for (Widget w: widgets) {
      if (!w.getId().equals(wId)) {
        result.add(w);
      }
    }
    this.widgets = result;
    if (widgets.size() == prevSize-1) {
      return 1;
    }
    return 0;
  }

  public Widget createWidget(String topicId, Widget newWidget) {
    newWidget.setId(UUID.randomUUID().toString());
    newWidget.setTopicId(topicId);
    newWidget.setWidgetOrder(widgets.size()+1);
    this.widgets.add(newWidget);

    return newWidget;
  }

  //return int : 1 if successful, 0 if not successful
  public Integer updateWidget(String wId, Widget updatedWidget) {
    for(int i = 0; i < widgets.size(); i++) {
      if (widgets.get(i).getId().equals(wId)) {
        updatedWidget.setId(wId);
        widgets.set(i, updatedWidget);
        if (updatedWidget.equals(widgets.get(i))) {
          return 1;
        }
      }
    }
    return 0;
  }
}
