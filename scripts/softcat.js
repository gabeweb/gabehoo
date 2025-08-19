const tableData = [
  {
    id: "table-01",
    title: "Accessibility",
    name: "Accessibility",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "LightBulb",
        "Accessibility",
        { name: "desktop_windows", title: "Windows" },
        { name: "GitHub", url: "https://github.com/Tyrrrz/LightBulb" },
        { name: "attribution", title: "Open Source" },
        ["#display"],
      ],
      [
        "Night Mode for Windows",
        "Accessibility",
        { name: "desktop_windows", title: "Windows" },
        {
          name: "SourceForge",
          url: "https://sourceforge.net/projects/night-mode-for-windows/",
        },
        { name: "attribution", title: "Open Source" },
        ["#display"],
      ],
      [
        "Windows Auto Dark Mode",
        "Accessibility",
        { name: "desktop_windows", title: "Windows" },
        {
          name: "GitHub",
          url: "https://github.com/AutoDarkMode/Windows-Auto-Night-Mode",
        },
        { name: "attribution", title: "Open Source" },
        ["#display"],
      ],
    ],
  },
  {
    id: "table-02",
    title: "Development",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        ".NET",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "Web", url: "https://dotnet.microsoft.com/download/dotnet" },
        { name: "attribution", title: "Open Source" },
        ["#runtime"],
      ],
      [
        "BowPad",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "GitHub", url: "https://github.com/stefankueng/BowPad" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "Codium",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/Alex313031/codium" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "ConEmu",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "GitHub", url: "https://github.com/ConEmu/ConEmu" },
        { name: "attribution", title: "Open Source" },
        ["#terminal"],
      ],
      [
        "CudaText",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "SourceForge",
          url: "https://sourceforge.net/projects/cudatext/",
        },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "DB Browser for SQLite",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/sqlitebrowser/sqlitebrowser/",
        },
        { name: "attribution", title: "Open Source" },
        ["#database"],
      ],
      [
        "DBeaver",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/dbeaver/dbeaver/" },
        {
          name: "attribution monetization_on",
          title: "Open Source, Commercial",
        },
        ["#database"],
      ],
      [
        "Edit",
        "Development",
        {
          name: ["flutter_dash  desktop_windows"],
          title: ["Linux, Windows"],
        },
        { name: "GitHub", url: "https://github.com/microsoft/edit/" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "goneovim",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/akiyosi/goneovim/" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "KompoZer",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "SourceForge",
          url: "https://sourceforge.net/projects/kompozer/",
        },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "Lapce",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/lapce/lapce" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "Lite XL",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/lite-xl/lite-xl" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "Microsoft Visual C++ Redistributable ",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "Web",
          url: "https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#runtime"],
      ],
      [
        "Neovim",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/neovim/neovim/" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "Notepad++",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/notepad-plus-plus/notepad-plus-plus/",
        },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "Notepad3",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "GitHub", url: "https://github.com/rizonesoft/Notepad3" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "NotepadNext",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/dail8859/NotepadNext/" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "Oh My Posh",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/JanDeDobbeleer/oh-my-posh" },
        { name: "attribution", title: "Open Source" },
        ["#terminal"],
      ],
      [
        "PowerShell",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/PowerShell/PowerShell" },
        { name: "attribution", title: "Open Source" },
        ["#terminal"],
      ],
      [
        "PSPad",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "Web", url: "https://www.pspad.com/" },
        { name: "monetization_on", title: "Freeware" },
        ["#text-editor"],
      ],
      [
        "Python",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://www.python.org" },
        { name: "attribution", title: "Open Source" },
        ["#runtime"],
      ],
      [
        "QB64pe",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/QB64-Phoenix-Edition/QB64pe",
        },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "RJ TextEd",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "Web", url: "https://www.rj-texted.se" },
        { name: "monetization_on", title: "Freeware" },
        ["#text-editor"],
      ],
      [
        "SciTE",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "Web",
          url: "https://www.scintilla.org/SciTE.html",
        },
        {
          name: "attribution monetization_on",
          title: "Open Source, Commercial",
        },
        ["#text-editor"],
      ],
      [
        "Temurin (OpenJDK/JRE)",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/adoptium/temurin8-binaries",
        },
        { name: "attribution", title: "Open Source" },
        ["#runtime"],
      ],
      [
        "Textadept",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/orbitalquark/textadept/" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "VSCode",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "Web", url: "https://code.visualstudio.com/" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "VSCodium",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/VSCodium/vscodium/" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
      [
        "Wave Terminal",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "Web", url: "https://github.com/wavetermdev/waveterm/" },
        { name: "attribution", title: "Open Source" },
        ["#terminal"],
      ],
      [
        "Windows Terminal",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "GitHub", url: "https://github.com/microsoft/terminal" },
        { name: "attribution", title: "Open Source" },
        ["#terminal"],
      ],
      [
        "winget-cli",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "GitHub", url: "https://github.com/microsoft/winget-cli" },
        { name: "attribution", title: "Open Source" },
        ["#package-manager"],
      ],
      [
        "XmlNotepad",
        "Development",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "GitHub", url: "https://github.com/microsoft/XmlNotepad/" },
        { name: "attribution", title: "Open Source" },
        ["#xml-editor"],
      ],
      [
        "Zim",
        "Development",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "Web", url: "https://zim-wiki.org/" },
        { name: "attribution", title: "Open Source" },
        ["#text-editor"],
      ],
    ],
  },
  {
    id: "table-03",
    title: "Graphics",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "Flameshot",
        "Graphics",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/flameshot-org/flameshot" },
        { name: "attribution", title: "Open Source" },
        ["#tools"],
      ],
      [
        "GIMP",
        "Graphics",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "Web", url: "https://www.gimp.org/downloads/" },
        { name: "attribution", title: "Open Source" },
        ["#editors"],
      ],
      [
        "IconExtract",
        "Graphics",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "Web", url: "https://www.nirsoft.net/utils/iconsext.html" },
        { name: "monetization_on", title: "Freeware" },
        ["#tools"],
      ],
      [
        "IrfanView",
        "Graphics",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "Web", url: "https://www.irfanview.com/" },
        { name: "monetization_on", title: "Freeware" },
        ["#viewers"],
      ],
      [
        "Lunacy",
        "Graphics",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "Web", url: "https://icons8.com/lunacy" },
        { name: "monetization_on", title: "Freeware" },
        ["#editors"],
      ],
      [
        "Photoflare",
        "Graphics",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "Web", url: "https://photoflare.io/" },
        { name: "attribution", title: "Open Source" },
        ["#editors"],
      ],
      [
        "Pichon",
        "Graphics",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "Web", url: "https://icons8.com/app/windows-pichon" },
        { name: "monetization_on", title: "Freemiun" },
        ["#tools"],
      ],
      [
        "PicPick",
        "Graphics",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "Web", url: "https://picpick.app/" },
        { name: "monetization_on", title: "Freemiun" },
        ["#editors"],
      ],
    ],
  },
  {
    id: "table-04",
    title: "Internet",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "Beeper",
        "Internet",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://www.beeper.com/download",
        },
        { name: "attribution", title: "Open Source" },
        ["#messengers"],
      ],
      [
        "Discord",
        "Internet",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://discord.com/download",
        },
        { name: "attribution", title: "Open Source" },
        ["#messengers"],
      ],
      [
        "DuckDuckGo",
        "Internet",
        {
          name: ["desktop_mac desktop_windows android phone_iphone"],
          title: ["macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://duckduckgo.com/app",
        },
        { name: "attribution", title: "Open Source" },
        ["#internet-browsers"],
      ],
      [
        "Eclipse r3dfox",
        "Internet",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/Eclipse-Community/r3dfox",
        },
        { name: "attribution", title: "Open Source" },
        ["#internet-browsers"],
      ],
      [
        "Element",
        "Internet",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://element.io/app",
        },
        { name: "attribution", title: "Open Source" },
        ["#messengers"],
      ],
      [
        "Mail Viewer",
        "Internet",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "Web",
          url: "https://www.mitec.cz/mailview.html",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#email-clients"],
      ],
      [
        "mbox viewer",
        "Internet",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/eneam/mboxviewer",
        },
        { name: "attribution", title: "Open Source" },
        ["#email-clients"],
      ],
      [
        "Mozilla Firefox",
        "Internet",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://www.firefox.com/download/all/",
        },
        { name: "attribution", title: "Open Source" },
        ["#internet-browsers"],
      ],
      [
        "Mozilla Thunderbird",
        "Internet",
        {
          name: ["flutter_dash desktop_mac desktop_windows android"],
          title: ["Linux, macOS, Windows, Android"],
        },
        {
          name: "Web",
          url: "https://www.thunderbird.net/thunderbird/all/",
        },
        { name: "attribution", title: "Open Source" },
        ["#email-clients", "#news-clients"],
      ],
      [
        "Session",
        "Internet",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://getsession.org/download",
        },
        { name: "attribution", title: "Open Source" },
        ["#messengers"],
      ],
      [
        "Signal",
        "Internet",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://signal.org/download/",
        },
        { name: "attribution", title: "Open Source" },
        ["#messengers"],
      ],
      [
        "Telegram",
        "Internet",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://telegram.org/",
        },
        { name: "attribution", title: "Open Source" },
        ["#messengers"],
      ],
      [
        "Tor Browser",
        "Internet",
        {
          name: ["flutter_dash desktop_mac desktop_windows android"],
          title: ["Linux, macOS, Windows, Android"],
        },
        {
          name: "Web",
          url: "https://www.torproject.org/download/",
        },
        { name: "attribution", title: "Open Source" },
        ["#internet-browsers"],
      ],
      [
        "Vivaldi Browser",
        "Internet",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://vivaldi.com/download/",
        },
        { name: "attribution", title: "Open Source" },
        ["#internet-browsers", "#email-clients", "#news-clients"],
      ],
      [
        "WhatsApp",
        "Internet",
        {
          name: ["desktop_mac desktop_windows android phone_iphone"],
          title: ["macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://www.whatsapp.com/download",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#messengers"],
      ],
    ],
  },
  {
    id: "table-05",
    title: "Mobile Phone",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "Driver Store Explorer",
        "Drivers",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/lostindark/DriverStoreExplorer",
        },
        { name: "attribution", title: "Open Source" },
        ["#drivers"],
      ],
    ],
  },
  {
    id: "table-06",
    title: "Multimedia",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "fre:ac",
        "Multimedia",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/enzo1982/freac",
        },
        { name: "attribution", title: "Open Source" },
        ["#audio-converter"],
      ],
      [
        "FxSound",
        "Multimedia",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/fxsound2/fxsound-app",
        },
        { name: "attribution", title: "Open Source" },
        ["#equalizer"],
      ],
      [
        "K-Lite Codec Pack",
        "Multimedia",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "Web",
          url: "https://codecguide.com/download_kl.htm",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#codecs"],
      ],
      [
        "Last.fm",
        "Multimedia",
        {
          name: ["desktop_mac desktop_windows android phone_iphone"],
          title: ["macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://www.last.fm/about/trackmymusic",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#social"],
      ],
      [
        "Media Player Classic - Home Cinema",
        "Multimedia",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/clsid2/mpc-hc",
        },
        { name: "attribution", title: "Open Source" },
        ["#video-player"],
      ],
      [
        "Mp3Tag",
        "Multimedia",
        {
          name: ["desktop_mac desktop_windows"],
          title: ["macOS, Windows"],
        },
        {
          name: "Web",
          url: "https://www.mp3tag.de/en/index.html",
        },
        { name: "attribution", title: "Open Source" },
        ["#taggers"],
      ],
      [
        "Museeks",
        "Multimedia",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/martpie/museeks",
        },
        { name: "attribution", title: "Open Source" },
        ["#music-player"],
      ],
      [
        "Music Presence (for Discord)",
        "Multimedia",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/ungive/discord-music-presence",
        },
        { name: "attribution", title: "Open Source" },
        ["#social"],
      ],
      [
        "Tag Editor",
        "Multimedia",
        {
          name: ["flutter_dash desktop_windows"],
          title: ["Linux, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/Martchus/tageditor",
        },
        { name: "attribution", title: "Open Source" },
        ["#taggers"],
      ],
      [
        "WACUP",
        "Multimedia",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "Web",
          url: "https://getwacup.com/",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#music-player"],
      ],
      [
        "WinAmp",
        "Multimedia",
        {
          name: ["desktop_mac desktop_windows android"],
          title: ["macOS, Windows, Android"],
        },
        {
          name: "Web",
          url: "https://winamp.com/player",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#music-player"],
      ],
    ],
  },
  {
    id: "table-07",
    title: "Networking",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "NetSpeedTray",
        "Networking",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/erez-c137/NetSpeedTray",
        },
        { name: "attribution", title: "Open Source" },
        ["#network-monitor"],
      ],
      [
        "Proton VPN",
        "Networking",
        {
          name: ["flutter_dash desktop_mac desktop_windows android phone_iphone"],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://protonvpn.com/",
        },
        { name: "attribution monetization_on", title: "Open Source, Commercial" },
        ["#vpn"],
      ],
      [
        "Windscribe",
        "Networking",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://windscribe.com/",
        },
        { name: "attribution", title: "Open Source" },
        ["#vpn"],
      ],
    ],
  },
  {
    id: "table-08",
    title: "P2P",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "Syncthing",
        "P2P",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/syncthing/syncthing",
        },
        { name: "attribution", title: "Open Source" },
        ["#synchronization"],
      ],
      [
        "Syncthing-Fork",
        "P2P",
        {
          name: ["android"],
          title: ["Android"],
        },
        {
          name: "GitHub",
          url: "https://github.com/Catfriend1/syncthing-android",
        },
        { name: "attribution", title: "Open Source" },
        ["#synchronization"],
      ],
      [
        "syncthingtray",
        "P2P",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/Martchus/syncthingtray",
        },
        { name: "attribution", title: "Open Source" },
        ["#synchronization"],
      ],
    ],
  },
  {
    id: "table-09",
    title: "Productivity",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "Adobe Acrobat Reader",
        "Productivity",
        {
          name: ["desktop_mac desktop_windows android"],
          title: ["macOS, Windows, Android"],
        },
        { name: "Web", url: "https://get.adobe.com/reader/" },
        { name: "monetization_on", title: "Freeware" },
        ["#doc-viewer"],
      ],
      [
        "Anytype",
        "Productivity",
        {
          name: ["flutter_dash desktop_mac desktop_windows android"],
          title: ["Linux, macOS, Windows, Android"],
        },
        { name: "GitHub", url: "https://github.com/anyproto/anytype-ts" },
        { name: "attribution", title: "Open Source" },
        ["#note-taking"],
      ],
      [
        "barcodrod.io",
        "Productivity",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "GitHub", url: "https://github.com/MarkHopper24/barcodrod.io" },
        { name: "attribution", title: "Open Source" },
        ["#qr-codes"],
      ],
      [
        "GnuCash",
        "Productivity",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/Gnucash/gnucash" },
        { name: "attribution", title: "Open Source" },
        ["#accounting"],
      ],
      [
        "Kuro",
        "Productivity",
        {
          name: ["flutter_dash"],
          title: ["Linux"],
        },
        { name: "GitHub", url: "https://github.com/davidsmorais/kuro" },
        { name: "attribution", title: "Open Source" },
        ["#to-do"],
      ],
      [
        "LibreOffice",
        "Productivity",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "Web",
          url: "https://www.libreoffice.org/",
        },
        {
          name: "attribution",
          title: "Open Source",
        },
        ["#office-suite"],
      ],
      [
        "Microsoft 365 Copilot",
        "Productivity",
        {
          name: ["desktop_mac desktop_windows android phone_iphone"],
          title: ["macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://www.office.com/",
        },
        {
          name: "monetization_on",
          title: "Commercial",
        },
        ["#office-suite"],
      ],
      [
        "NAPS2",
        "Productivity",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/cyanfish/naps2",
        },
        {
          name: "attribution",
          title: "Open Source",
        },
        ["#scanners"],
      ],
      [
        "NotesHub",
        "Productivity",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://about.noteshub.app/",
        },
        {
          name: "monetization_on",
          title: "Freemium",
        },
        ["#note-taking"],
      ],
      [
        "Obsidian",
        "Productivity",
        {
          name: [
            "flutter_dash desktop_mac desktop_windows android phone_iphone",
          ],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "GitHub",
          url: "https://github.com/obsidianmd/obsidian-releases",
        },
        {
          name: "attribution monetization_on",
          title: "Open Source, Commercial",
        },
        ["#note-taking"],
      ],
      [
        "ONLYOFFICE",
        "Productivity",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/ONLYOFFICE/DesktopEditors/",
        },
        {
          name: "attribution monetization_on",
          title: "Open Source, Commercial",
        },
        ["#office-suite"],
      ],
      [
        "QOwnNotes",
        "Productivity",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/pbek/QOwnNotes/" },
        { name: "attribution", title: "Open Source" },
        ["#note-taking"],
      ],
      [
        "Text-Grab",
        "Productivity",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "GitHub", url: "https://github.com/TheJoeFin/Text-Grab/" },
        {
          name: "attribution monetization_on",
          title: "Open Source, Commercial",
        },
        ["#ocr"],
      ],
      [
        "VNote",
        "Productivity",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/vnotex/vnote" },
        { name: "attribution", title: "Open Source" },
        ["#note-taking"],
      ],
      [
        "WordTsar",
        "Productivity",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "SourceForge",
          url: "https://sourceforge.net/projects/wordtsar/",
        },
        {
          name: "attribution",
          title: "Open Source",
        },
        ["#word-processor"],
      ],
      [
        "Zettlr",
        "Productivity",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/Zettlr/Zettlr" },
        { name: "attribution", title: "Open Source" },
        ["#note-taking"],
      ],
      [
        "Zint",
        "Productivity",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "SourceForge", url: "https://sourceforge.net/projects/zint/" },
        { name: "attribution", title: "Open Source" },
        ["#barcodes"],
      ],
    ],
  },
  {
    id: "table-10",
    title: "Security",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "Authme",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/Levminer/authme",
        },
        { name: "attribution", title: "Open Source" },
        ["#2fa-auth"],
      ],
      [
        "Bitwarden",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows android phone_iphone"],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "GitHub",
          url: "https://github.com/bitwarden/clients",
        },
        { name: "attribution monetization_on", title: "Open Source, Commercial" },
        ["#password-manager"],
      ],
      [
        "Bitwarden Authenticator",
        "Security",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        {
          name: "Web",
          url: "https://bitwarden.com/products/authenticator/",
        },
        { name: "attribution", title: "Open Source" },
        ["#password-manager"],
      ],
      [
        "Emsisoft Emergency Kit",
        "Security",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "Web",
          url: "https://www.emsisoft.com/en/home/emergency-kit/",
        },
        { name: "monetization_on", title: "Freemium" },
        ["#anti-malware"],
      ],
      [
        "Enpass",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows android phone_iphone"],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://www.enpass.io/downloads/",
        },
        { name: "monetization_on", title: "Freemium" },
        ["#password-manager"],
      ],
      [
        "ESET Tools and Utilities",
        "Security",
        {
          name: ["desktop_mac desktop_windows"],
          title: ["macOS, Windows"],
        },
        {
          name: "Web",
          url: "https://www.eset.com/us/download/tools-and-utilities/",
        },
        { name: "monetization_on", title: "Freemium" },
        ["#anti-malware"],
      ],
      [
        "Glarysoft Free Tools",
        "Security",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "Web",
          url: "https://www.glarysoft.com/downloads/?p=free-page",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#privacy-tools"],
      ],
      [
        "Kaspersky Free Recovery Tools",
        "Security",
        {
          name: ["flutter_dash desktop_windows"],
          title: ["Linux, Windows"],
        },
        {
          name: "Web",
          url: "https://support.kaspersky.com/utility/",
        },
        { name: "monetization_on", title: "Freemium" },
        ["#anti-malware"],
      ],
      [
        "KeePass",
        "Security",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "SourceForge",
          url: "https://sourceforge.net/projects/keepass/",
        },
        { name: "attribution", title: "Open Source" },
        ["#password-manager"],
      ],
      [
        "KeePassDX",
        "Security",
        {
          name: ["android"],
          title: ["Android"],
        },
        {
          name: "GitHub",
          url: "https://github.com/Kunzisoft/KeePassDX",
        },
        { name: "attribution", title: "Open Source" },
        ["#password-manager"],
      ],
      [
        "KeePassXC",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/keepassxreboot/keepassxc",
        },
        { name: "attribution", title: "Open Source" },
        ["#password-manager"],
      ],
      [
        "KeeWeb",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/keeweb/keeweb",
        },
        { name: "attribution", title: "Open Source" },
        ["#password-manager"],
      ],
      [
        "Norton Power Eraser",
        "Security",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "Web",
          url: "https://support.norton.com/sp/static/external/tools/npe.html",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#anti-malware"],
      ],
      [
        "Password Safe",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows android phone_iphone"],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "GitHub",
          url: "https://github.com/pwsafe/pwsafe",
        },
        { name: "attribution monetization_on", title: "Open Source, Commercial" },
        ["#password-manager"],
      ],
      [
        "Proton Authenticator",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows android phone_iphone"],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://proton.me/authenticator",
        },
        { name: "attribution", title: "Open Source" },
        ["#password-manager"],
      ],
      [
        "Proton Pass",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows android phone_iphone"],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://proton.me/pass",
        },
        { name: "attribution monetization_on", title: "Open Source, Commercial" },
        ["#password-manager"],
      ],
      [
        "Sophos Free Tools",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows android phone_iphone"],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://www.sophos.com/en-us/free-tools",
        },
        { name: "monetization_on", title: "Freemium" },
        ["#anti-malware"],
      ],
      [
        "Trellix Stinger",
        "Security",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "Web",
          url: "https://www.trellix.com/downloads/free-tools/stinger/",
        },
        { name: "monetization_on", title: "Freeware" },
        ["#anti-malware"],
      ],
      [
        "Trend Micro Free Tools",
        "Security",
        {
          name: ["desktop_mac desktop_windows android phone_iphone"],
          title: ["macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://www.trendmicro.com/en_us/forHome/products/free-tools.html",
        },
        { name: "monetization_on", title: "Freemium" },
        ["#anti-malware"],
      ],
      [
        "TunnelBear",
        "Security",
        {
          name: ["desktop_mac desktop_windows android phone_iphone"],
          title: ["macOS, Windows, Android, iOS"],
        },
        {
          name: "Web",
          url: "https://www.tunnelbear.com/download-devices",
        },
        { name: "monetization_on", title: "Freemium" },
        ["#vpn"],
      ],
      [
        "Windscribe",
        "Security",
        {
          name: ["flutter_dash desktop_mac desktop_windows android phone_iphone"],
          title: ["Linux, macOS, Windows, Android, iOS"],
        },
        {
          name: "GitHub",
          url: "https://github.com/windscribe",
        },
        { name: "attribution monetization_on", title: "Open Source, Commercial" },
        ["#vpn"],
      ],
    ],
  },
  {
    id: "table-11",
    title: "Themes",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [

    ],
  },
  {
    id: "table-12",
    title: "Utilities",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "7Zip",
        "Utilities",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/ip7z/7zip" },
        { name: "attribution", title: "Open Source" },
        ["#file-manager"],
      ],
      [
        "Dark7zip for 7Zip",
        "Utilities",
        {
          name: ["flutter_dash desktop_windows"],
          title: ["Linux, Windows"],
        },
        { name: "GitHub", url: "https://github.com/ozone10/7zip-Dark7zip" },
        { name: "attribution", title: "Open Source" },
        ["#file-manager"],
      ],
      [
        "Driver Store Explorer",
        "Utilities",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        {
          name: "GitHub",
          url: "https://github.com/lostindark/DriverStoreExplorer",
        },
        { name: "attribution", title: "Open Source" },
        ["#drivers"],
      ],
      [
        "Fastfetch",
        "Utilities",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/fastfetch-cli/fastfetch" },
        { name: "attribution", title: "Open Source" },
        ["#system-information"],
      ],
      [
        "PeaZip",
        "Utilities",
        {
          name: ["flutter_dash desktop_mac desktop_windows"],
          title: ["Linux, macOS, Windows"],
        },
        { name: "GitHub", url: "https://github.com/peazip/PeaZip/" },
        { name: "attribution", title: "Open Source" },
        ["#file-manager"],
      ],
      [
        "PowerToys",
        "Utilities",
        {
          name: ["desktop_windows"],
          title: ["Windows"],
        },
        { name: "GitHub", url: "https://github.com/microsoft/PowerToys" },
        { name: "attribution", title: "Open Source" },
        ["#tweaks"],
      ],
      [
        "WinRAR",
        "Utilities",
        {
          name: ["flutter_dash desktop_mac desktop_windows android"],
          title: ["Linux, macOS, Windows, Android"],
        },
        { name: "Web", url: "https://www.rarlab.com/" },
        { name: "monetization_on", title: "Shareware" },
        ["#file-manager"],
      ],
    ],
  },
  {
    id: "table-13",
    title: "Wallets",
    columns: [
      "Application",
      "Category",
      "Platform",
      "Website",
      "License",
      "Tags",
    ],
    rows: [
      [
        "BitPay",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://bitpay.com/id/home/" },
        { name: "monetization_on", title: "Freeware" },
        ["#wallets"],
      ],
      [
        "Leather",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://leather.io/wallet" },
        { name: "attribution", title: "Open Source" },
        ["#wallets"],
      ],
      [
        "Metamask",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://metamask.io/download" },
        { name: "attribution", title: "Open Source" },
        ["#wallets"],
      ],
      [
        "MEW wallet",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://www.mewwallet.com/" },
        { name: "attribution", title: "Open Source" },
        ["#wallets"],
      ],
      [
        "MyMonero",
        "Wallets",
        {
          name: ["flutter_dash desktop_mac desktop_windows android phone_iphone"],
          title: ["Linus, macOS, Windows, Android, iOS"],
        },
        { name: "Web", url: "https://mymonero.com/" },
        { name: "attribution", title: "Open Source" },
        ["#wallets"],
      ],
      [
        "Pera Wallet",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://perawallet.app/" },
        { name: "attribution", title: "Open Source" },
        ["#wallets"],
      ],
      [
        "Phantom",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://phantom.com/download" },
        { name: "monetization_on", title: "Freeware" },
        ["#wallets"],
      ],
      [
        "Proton Wallet",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://proton.me/wallet/download" },
        { name: "attribution", title: "Open Source" },
        ["#wallets"],
      ],
      [
        "Ronin Wallet",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://wallet.roninchain.com/" },
        { name: "attribution", title: "Open Source" },
        ["#wallets"],
      ],
      [
        "Solflare",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://www.solflare.com/download/" },
        { name: "attribution", title: "Open Source" },
        ["#wallets"],
      ],
      [
        "Yoroi Wallet",
        "Wallets",
        {
          name: ["android phone_iphone"],
          title: ["Android, iOS"],
        },
        { name: "Web", url: "https://yoroiwallet.com/" },
        { name: "attribution", title: "Open Source" },
        ["#wallets"],
      ],
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  tableData.forEach((data) => {
    generateTable(data.id, data.title, data.columns, data.rows);
  });
});

function generateTable(containerId, tableTitle, columnHeaders, rowData) {
  const container = document.getElementById(containerId);
  const table = document.createElement("table");

  // Main header row (title)
  const thead = document.createElement("thead");
  thead.id = "main-header";
  const titleRow = document.createElement("tr");
  const titleCell = document.createElement("th");
  titleCell.colSpan = columnHeaders.length;
  titleCell.className = "table-title";

  // Create the h3 element
  const h3Title = document.createElement("h3");
  h3Title.textContent = tableTitle;

  // Append the h3 inside the th
  titleCell.appendChild(h3Title);

  titleRow.appendChild(titleCell);
  thead.appendChild(titleRow);

  // Column headers row
  const headersRow = document.createElement("tr");
  headersRow.className = "column-headers-row";
  columnHeaders.forEach((header) => {
    const cell = document.createElement("th");
    cell.textContent = header;
    cell.className = "column-header-cell";
    headersRow.appendChild(cell);
  });
  thead.appendChild(headersRow);
  table.appendChild(thead);

  // Table body (data rows)
  const tbody = document.createElement("tbody");
  rowData.forEach((row) => {
    const tableRow = document.createElement("tr");
    row.forEach((cellData, index) => {
      const cell = document.createElement("td");

      // Logic to create cell content
      switch (index) {
        // "Platform" and "License" columns (indices 2 and 4)
        case 2:
        case 4:
          const spanIcon = document.createElement("span");
          spanIcon.className = "material-icon";
          // Check if data is an object and extract the info
          if (typeof cellData === "object" && cellData !== null) {
            spanIcon.textContent = cellData.name;
            spanIcon.title = cellData.title;
          } else {
            spanIcon.textContent = cellData;
          }
          cell.appendChild(spanIcon);
          break;
        // "Website" column (index 3)
        case 3:
          const link = document.createElement("a");
          link.href = cellData.url;
          link.target = "_blank";
          link.textContent = cellData.name;
          cell.appendChild(link);
          break;
        // "Tags" column (index 5)
        case 5:
          // Check if cellData is an array before iterating
          if (Array.isArray(cellData)) {
            cellData.forEach((tagText) => {
              const divTag = document.createElement("div");
              divTag.className = "tags"; // CSS class for styling the tags
              divTag.textContent = tagText;
              cell.appendChild(divTag);
            });
          } else {
            cell.textContent = cellData;
          }
          break;
        // Default: any other column is plain text
        default:
          cell.textContent = cellData;
          break;
      }
      tableRow.appendChild(cell);
    });
    tbody.appendChild(tableRow);
  });
  table.appendChild(tbody);

  // Append the table to the container
  container.appendChild(table);
}
