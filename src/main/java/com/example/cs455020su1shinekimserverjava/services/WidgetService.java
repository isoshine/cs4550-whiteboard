package com.example.cs455020su1shinekimserverjava.services;

import com.example.cs455020su1shinekimserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {
  List<Widget> widgets = new ArrayList<Widget>();

  {
    widgets.add(new Widget(1234, "Widget 1", "Heading", "t1"));
    widgets.add(new Widget(2345, "Widget 1", "Paragraph", "t2"));
    widgets.add(new Widget(3456, "Widget 1", "Video", "t1"));
  }

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

  public Widget findWidgetById(Integer wId) {
    for (Widget w: widgets) {
      if(w.getId().equals(wId)) {
        return w;
      }
    }
    return null;
  }
}
