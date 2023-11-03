$(function () {
  $("main h3").each(function () {
    $(".headings-nav ul").append(
      "<li><a href='#" +
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
  });
});
