$(document).ready(function () {
  var waypoint = new Waypoint({
    element: $(".js--section-features"),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky-nav");
      } else {
        $("nav").removeClass("sticky-nav");
      }
    },
    offset: "60px;",
  });
});
