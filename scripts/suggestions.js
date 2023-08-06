let suggestIndex = -1,
  suggestInput = "";
const getSettingg = (e) => !0,
  suggest = () => {
    suggestInput = document.getElementById("searchInput").value;
    let e = document.getElementById("searchInput").value;
    if (((suggestIndex = -1), "" == e))
      (document.getElementById("suggestions").style.display = "none"),
        (document.getElementById("searchbar").style.borderRadius =
          "var(--bdradius)"),
        (suggestIndex = -1);
    else {
      let t = document.createElement("script");
      (t.type = "text/javascript"),
        (t.src = `https://www.google.com/complete/search?client=firefox&q=${e}&callback=getSuggestions`),
        document.body.appendChild(t);
    }
  },
  getSuggestions = (e) => {
    e[1].length > 0
      ? ((document.getElementById("suggestions").style.display = "block"),
        (document.getElementById("searchbar").style.borderRadius =
          "var(--bdradius) var(--bdradius) 0 0"))
      : ((document.getElementById("suggestions").style.display = "none"),
        (document.getElementById("searchbar").style.borderRadius =
          "var(--bdradius)")),
      (document.getElementById("suggestions").innerHTML = "<hr>"),
      e[1].forEach((e, t) => {
        e.startsWith("https://")
          ? (document.getElementById(
              "suggestions"
            ).innerHTML += `<p id='sug${t}' onclick="location.href='${e}'">${e}</p>`)
          : (document.getElementById(
              "suggestions"
            ).innerHTML += `<p id='sug${t}' onclick="searchSuggestion(${t})">${e}</p>`);
      });
  },
  hideSearchSuggest = () => {
    document.getElementById("searchbar").addEventListener("focusout", (e) => {
      null == document.querySelector("#suggestions:hover") &&
        ((document.getElementById("suggestions").style.display = "none"),
        (document.getElementById("searchbar").style.borderRadius =
          "var(--bdradius)"),
        (suggestIndex = -1));
    }),
      document.addEventListener("click", (e) => {
        null == document.querySelector("#suggestions:hover") &&
          ((document.getElementById("suggestions").style.display = "none"),
          (document.getElementById("searchbar").style.borderRadius =
            "var(--bdradius)"),
          (suggestIndex = -1));
      }),
      document.getElementById("searchbar").addEventListener("focusin", (e) => {
        suggest();
      }),
      document.addEventListener("keydown", (e) => {
        "block" == document.getElementById("suggestions").style.display &&
          ("ArrowDown" == e.key &&
            suggestIndex < 7 &&
            ((suggestIndex += 1), applySuggestions()),
          "ArrowUp" == e.key &&
            (suggestIndex > 0
              ? (suggestIndex -= 1)
              : ((suggestIndex = -1),
                (document.getElementById("searchInput").value = suggestInput)),
            applySuggestions()),
          "ArrowRight" == e.key &&
            suggestIndex >= 0 &&
            ((suggestIndex = -1),
            (suggestInput = document.getElementById("searchInput").value),
            applySuggestions()),
          "ArrowLeft" == e.key &&
            suggestIndex >= 0 &&
            ((suggestIndex = -1),
            (document.getElementById("searchInput").value = suggestInput),
            applySuggestions()));
      });
  },
  applySuggestions = () => {
    document.querySelectorAll("#suggestions p").forEach((e) => {
      e.style.backgroundColor = "rgba(0,0,0,0)";
    }),
      suggestIndex >= 0 &&
        ((document.getElementById("searchInput").value =
          document.getElementById(`sug${suggestIndex}`).innerHTML),
        (document.getElementById(`sug${suggestIndex}`).style.backgroundColor =
          "rgba(0,0,0,0.2)")),
      setTimeout(selectionToEnd, 0);
  },
  selectionToEnd = () => {
    document.getElementById("searchInput").setSelectionRange(1e3, 1e3);
  },
  searchSuggestion = (e) => {
    (document.getElementById("searchInput").value = document.getElementById(
      `sug${e}`
    ).innerHTML),
      document.forms[0].submit();
  };
document.getElementById("searchbar").addEventListener("focusout", (e) => {
  null == document.querySelector("#suggestions:hover") &&
    ((document.getElementById("suggestions").style.display = "none"),
    (document.getElementById("searchbar").style.borderRadius =
      "var(--bdradius)"),
    (suggestIndex = -1));
}),
  document.addEventListener("click", (e) => {
    null == document.querySelector("#suggestions:hover") &&
      ((document.getElementById("suggestions").style.display = "none"),
      (document.getElementById("searchbar").style.borderRadius =
        "var(--bdradius)"),
      (suggestIndex = -1));
  }),
  document.getElementById("searchbar").addEventListener("focusin", (e) => {
    suggest();
  }),
  document.addEventListener("keydown", (e) => {
    "block" == document.getElementById("suggestions").style.display &&
      ("ArrowDown" == e.key &&
        suggestIndex < 7 &&
        ((suggestIndex += 1), applySuggestions()),
      "ArrowUp" == e.key &&
        (suggestIndex > 0
          ? (suggestIndex -= 1)
          : ((suggestIndex = -1),
            (document.getElementById("searchInput").value = suggestInput)),
        applySuggestions()),
      "ArrowRight" == e.key &&
        suggestIndex >= 0 &&
        ((suggestIndex = -1),
        (suggestInput = document.getElementById("searchInput").value),
        applySuggestions()),
      "ArrowLeft" == e.key &&
        suggestIndex >= 0 &&
        ((suggestIndex = -1),
        (document.getElementById("searchInput").value = suggestInput),
        applySuggestions()));
  });
