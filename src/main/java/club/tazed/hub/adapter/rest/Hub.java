package club.tazed.hub.adapter.rest;

import jakarta.ws.rs.Path;

import io.quarkus.qute.TemplateInstance;
import io.quarkus.qute.CheckedTemplate;
import io.quarkiverse.renarde.Controller;

public class Hub extends Controller {

  @CheckedTemplate
  public static class Templates {
    public static native TemplateInstance index();
  }

  @Path("/")
  public TemplateInstance index() {
    return Templates.index();
  }
}
