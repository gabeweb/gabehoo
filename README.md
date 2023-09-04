# GABEhoo!

[GABEhoo!](https://github.com/gabeweb/gabehoo) is a startpage developerd by [GABEweb](https://gabeweb.github.io) inspired by the old good [Yahoo!](https://www.webdesignmuseum.org/timeline/yahoo-2005 "Yahoo in 2005") frontpage.

**This is a personal project for personal purporses only.**

## Customizations

### Last.fm Now Playing widget

You must edit (in `index.html` file) the following strings:

```javascript
<script type="text/javascript">
            /*<![CDATA[*/ $(document).ready(function () {
                $("#lastBox").lastplayed({
                    apikey: "[YOU NEED TO GENERATE YOUR OWN LAST.FM API KEY]",
                    username: "[YOUR LAST.FM USER NAME]",
                    limit: 5,
                    refresh: 30,
                });
                $("#playingInfo").nowplaying({
                    apikey: "[YOUR LAST.FM API KEY]", username: "[YOUR LAST.FM USERNAME]", refresh: 60, notplayingtext: '<p class="playing-not">See recently played tracks on: <a href="https://last.fm/user/[USERNAME]" target="_blank">last.fm/user/[USERNAME]</a></p>'
                })
            }); /*]]>*/
  </script>
```

`YOUR LAST.FM API KEY` ==> You must generate a Last.fm API Key from: https://www.last.fm/api **VERY IMPORTANT**

`YOUR LAST.FM USERNAME` ==> Your Last.fm username.

<em>Advice:</em>

> If you're using an adblocker or script blocker you must give permission to access to https://ws.audioscrobbler.com in your personal filters, otherwise the Last.fm widget can't work properly.

### Weather widget

You must edit the `weather.js` file the following strings:

```javascript
/* OPEN WEATHER MAP */
xhr.open(
  "GET",
  "https://api.openweathermap.org/data/2.5/weather?q=[CITY ID]&appid=[YOUR API ID]&units=metric"
);
```

`YOUR CITY NAME OR CITY ID` ==> You can use the name of your city or the ID city. For example: If you're living on London (Great Britain), you must put the ID `2643743` (this ID number is geting from the URL `https://openweathermap.org/city/2643743` when you search on OpenWeatherMap.org).

`YOUR API ID` ==> You must generate an OpenWeatherMap API Key from https://home.openweathermap.org/api_keys **VERY IMPORTANT**.

## Credits

This page is made possible thanks to:

- [MrAlpha786](https://github.com/MrAlpha786) for the original [GetStarted](https://github.com/MrAlpha786/getstarted) startpage.
- [RowanFeely](https://github.com/RowanFeely) for [StarterPage](https://github.com/RowanFeely/StarterPage).
- [LentoLen](https://github.com/LentoLen) for [Suggestions](https://github.com/LentoLen/suggestions) script (under testing).
- [FrankFan](https://github.com/FrankFan) for [jQuery.scrollText.js](href="https://github.com/FrankFan/jQuery.scrollText.js) script.
- [mmoss](https://github.com/mmoss) for [Last.fm jQuery Plugin](https://github.com/mmoss/jquery-lastfm) (refactored).
- [OpenWeatherMap](https://openweathermap.org) for weather info.
- [Google](https://github.com/google) for [Material Design](https://github.com/google/material-design-icons/tree/master) icons.
- [IBM](https://github.com/IBM) for [IBM Plex](https://github.com/IBM/plex) font and [IBM's Carbon Design System](https://carbondesignsystem.com/guidelines/icons/library/) icons.
- [IdreesInc](https://github.com/IdreesInc) for [Monocraft](https://github.com/IdreesInc/Monocraft) font.
- [JetBrains](https://github.com/JetBrains) for [JetBrainsMono](https://github.com/JetBrains/JetBrainsMono) font.
- [Catppuccin](https://github.com/catppuccin/catppuccin) color palette.
- Password Generator is based on [Random Password Generator in HTML CSS & JavaScript by CodingNepal](https://www.codingnepalweb.com/random-password-generator-html-javascript/) but using `crypto.getRandomValues(array)` instead `Math.random()`.
- Password strength test tool is based on [password-strength-javascript](https://github.com/w3collective/password-strength-javascript) by [w3collective](https://w3collective.com/password-strength-javascript/), using [zxcvbn](https://github.com/dropbox/zxcvbn) script.

Released under a [GPL-3.0 license](https://github.com/gabeweb/gabehoo/blob/main/LICENSE).

---

[more stuff from [GABEweb @ GitHub](https://gabeweb.github.io)]
