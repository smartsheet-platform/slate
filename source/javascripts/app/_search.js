//= require ../lib/_lunr
//= require ../lib/_jquery
//= require ../lib/_jquery.highlight
(function() {
  "use strict";

  var idx, content, searchResults;
  var highlightOpts = { element: "span", className: "search-highlight" };
  var searchDelay = 150;
  var timeoutHandle = 0;

  $(createIndex);
  $(bind);

  function createIndex() {
    idx = lunr(function () {
      var index = this;
      index.ref("id");
      index.field("title", { boost: 10 });
      index.field("body");
      index.pipeline.reset();
      index.pipeline.add(
        lunr.trimmer,
        lunr.stemmer
      );

      populate(index);
    });
  }

  function populate(index) {
    var headerSelector = "h1, h2, h3";
    $(headerSelector).each(function() {
      var title = $(this);
      var body = title.nextUntil(headerSelector);

      index.add({
        id: title.prop("id"),
        title: title.text(),
        body: body.text()
      });
    });
  }

  function bind() {
    content = $(".content");
    searchResults = $(".search-results");

    $("#input-search").on("keyup", function(e) {
      var wait = (function() {
        return function(executingFunction, waitTime) {
          clearTimeout(timeoutHandle);
          timeoutHandle = setTimeout(executingFunction, waitTime);
        };
      })();
      wait(function() {
        search(e);
      }, searchDelay);
    });
  }

  function search(event) {
    var searchInput = $("#input-search")[0];

    unhighlight();
    searchResults.addClass("visible");

    // ESC clears the field
    if (event.keyCode === 27) searchInput.value = "";

    if (searchInput.value) {
      var results = idx.search(searchInput.value).filter(function(r) {
        return r.score > 0.0001;
      });

      if (results.length) {
        searchResults.empty();
        $.each(results, function(index, result) {
          var elem = document.getElementById(result.ref);
          searchResults.append(
            "<li><a href='#" + result.ref + "'>" + $(elem).text() + "</a></li>"
          );
        });
        highlight.call(searchInput);
      } else {
        searchResults.html("<li></li>");
        $(".search-results li").text(
          'No Results Found for "' + searchInput.value + '"'
        );
      }
    } else {
      unhighlight();
      searchResults.removeClass("visible");
    }
  }

  function highlight() {
    if (this.value) content.highlight(this.value, highlightOpts);
  }

  function unhighlight() {
    content.unhighlight(highlightOpts);
  }
})();
