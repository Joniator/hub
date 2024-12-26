package club.tazed.hub.adapter.database.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Card /* extends PanacheEntity */ {

  public String task;
  public Date completed;

  // Mocking of existing data, this would normally be in your DB and go via
  // Hibernate/Panache
  private static final List<Card> all = new ArrayList<>();

  public static List<Card> listAll() {
    return all;
  }

  public void persist() {
    all.add(this);
  }
}
