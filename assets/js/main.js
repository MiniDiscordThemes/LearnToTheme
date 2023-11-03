$(function () {
  $("main h3").each(function () {
    $("nav ul").append(
      "<li class='tag-" +
        this.nodeName.toLowerCase() +
        "'><a href='#" +
        $(this)
          .text()
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "") +
        "'>" +
        $(this).text() +
        "</a></li>"
    );
    $(this).attr(
      "id",
      $(this)
        .text()
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")
    );
    $("nav ul li:first-child a").parent().addClass("active");
  });
});
