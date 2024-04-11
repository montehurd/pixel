module.exports = {
  "id": "MediaWiki",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "width": 720,
      "height": 768
    },
    {
      "label": "desktop",
      "width": 1000,
      "height": 900
    },
    {
      "label": "desktop-wide",
      "width": 1200,
      "height": 900
    },
    {
      "label": "desktop-widest",
      "width": 1920,
      "height": 900
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Main_Page",
      "misMatchThreshold": 0.04,
      "label": "Main page (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/User:Admin",
      "misMatchThreshold": 0.04,
      "label": "User page (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/User:Admin/common.js",
      "misMatchThreshold": 0.04,
      "label": "User sub pages (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/User:Echo1",
      "misMatchThreshold": 0.04,
      "label": "Empty user page (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Special:BlankPage",
      "misMatchThreshold": 0.04,
      "label": "Special page (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Special:BlankPage",
      "misMatchThreshold": 0.04,
      "label": "Special page full width (#vector-2022, #limited-width-disabled)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Full article page (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/w/index.php?title=Test&action=history",
      "misMatchThreshold": 0.04,
      "label": "Article history page (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Talk:Test",
      "misMatchThreshold": 0.04,
      "label": "Article talk page (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Talk:Test?dtenable=0",
      "misMatchThreshold": 0.04,
      "label": "Article talk page DT Disabled (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Talk:Test?useparsoid=1",
      "misMatchThreshold": 0.04,
      "label": "Talk page discussions Parsoid (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "3 column (#vector-2022, #logged-in)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "3 column full width (#vector-2022, #logged-in, #limited-width-disabled)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "2 column (#vector-2022, #logged-in, #toc-unpinned, #main-menu-unpinned)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "2 column full width (#vector-2022, #logged-in, #toc-unpinned, #main-menu-unpinned, #limited-width-disabled)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "1 column (#vector-2022, #logged-in, #toc-unpinned, #main-menu-unpinned, #page-tools-unpinned)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "1 column full width (#vector-2022, #logged-in, #toc-unpinned, #main-menu-unpinned, #page-tools-unpinned, #limited-width-disabled)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "TOC pinned with hidden subsections (#vector-2022, #toggle-toc-subsections)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "TOC unpinned in page title (#vector-2022, #toc-unpinned, #toc-open)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "TOC unpinned below page title (#vector-2022, #scroll, #toc-unpinned, #toc-open)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "TOC pinned below page title (#vector-2022, #scroll)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Sticky header with pinned TOC (#vector-2022, #logged-in, #scroll)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Sticky header with unpinned TOC (#vector-2022, #logged-in, #scroll, #toc-unpinned, #toc-open)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Sticky header full width (#vector-2022, #logged-in, #scroll, #limited-width-disabled)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Search in header (#vector-2022, #search-focus)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Search in sticky header (#logged-in, #vector-2022, #scroll, #search-sticky, #search-focus)",
      "delay": 0,
      "viewports": [
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Anon user links dropdown (#vector-2022, #user-links-open)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Logged in user links dropdown (#vector-2022, #logged-in, #user-links-open)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Main menu dropdown (#vector-2022, #logged-in, #main-menu-unpinned, #main-menu-open)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test",
      "misMatchThreshold": 0.04,
      "label": "Page tools dropdown (#vector-2022, #logged-in, #page-tools-unpinned, #page-tools-open)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Test?useskin=vector",
      "misMatchThreshold": 0.04,
      "label": "Legacy Vector article page (#vector)",
      "delay": 1500,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/w/index.php?title=Test&action=history&useskin=vector",
      "misMatchThreshold": 0.04,
      "label": "Legacy Vector article history page (#vector)",
      "delay": 1500,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Talk:Test?useskin=vector",
      "misMatchThreshold": 0.04,
      "label": "Legacy Vector article talk page (#vector)",
      "delay": 1500,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Talk:Test?useskin=vector",
      "misMatchThreshold": 0.04,
      "label": "Talk page discussions (#vector)",
      "delay": 1500,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Talk:Test?useskin=vector&useparsoid=1",
      "misMatchThreshold": 0.04,
      "label": "Talk page discussions Parsoid (#vector)",
      "delay": 1500,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/Talk:Test?dtenable=0",
      "misMatchThreshold": 0.04,
      "label": "Article talk page DT Disabled (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    },
    {
      "selectors": [
        "viewport"
      ],
      "url": "http://localhost:3000/wiki/MathTestNative",
      "misMatchThreshold": 0.04,
      "label": "MathML (#vector-2022)",
      "delay": 0,
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 720,
          "height": 768
        },
        {
          "label": "desktop",
          "width": 1000,
          "height": 900
        },
        {
          "label": "desktop-wide",
          "width": 1200,
          "height": 900
        },
        {
          "label": "desktop-widest",
          "width": 1920,
          "height": 900
        }
      ]
    }
  ],
  "paths": {
    "bitmaps_reference": "report/reference-screenshots-desktop",
    "bitmaps_test": "report/test-screenshots-desktop",
    "engine_scripts": "src/engine-scripts",
    "html_report": "report/desktop",
    "ci_report": "report/ci-report-dev",
    "json_report": "report/json-report-dev"
  },
  "report": [],
  "engine": "puppeteer",
  "engineOptions": {
    "headless": "new",
    "args": [
      "--no-sandbox"
    ]
  },
  "asyncCaptureLimit": 10,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false,
  "jsonFilePath": "/pixel/config/configDesktop.json"
}
