/* @ds-bundle: {"format":3,"namespace":"RoundaboutDesignSystem_cec0c2","components":[],"sourceHashes":{"ui_kits/app/EventCard.jsx":"e7419f434f3a","ui_kits/app/Icon.jsx":"1bff3fea6bad","ui_kits/app/PostCard.jsx":"84f770d4882d","ui_kits/app/Primitives.jsx":"7422e854051c","ui_kits/app/ios-frame.jsx":"d67eb3ffe562"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RoundaboutDesignSystem_cec0c2 = window.RoundaboutDesignSystem_cec0c2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/EventCard.jsx
try { (() => {
// EventCard.jsx — event preview card

function EventCard({
  ev,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      background: '#fff',
      border: '1px solid #e1ebef',
      borderRadius: 12,
      overflow: 'hidden',
      display: 'flex',
      cursor: 'pointer',
      margin: '0 12px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 70,
      flexShrink: 0,
      background: ev.dateBg || '#faede3',
      color: ev.dateFg || '#66381e',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 8px',
      fontFamily: '"Tarnac Sans", sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: 0.7
    }
  }, ev.month), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Tarnac", serif',
      fontSize: 28,
      lineHeight: 1,
      marginTop: 4
    }
  }, ev.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      marginTop: 4,
      opacity: 0.7
    }
  }, ev.weekday)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '10px 12px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Tarnac Sans", sans-serif',
      fontSize: 15,
      fontWeight: 700,
      color: '#1a292e',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, ev.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#516a74',
      marginTop: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "location",
    size: 12,
    color: "#88a4ae"
  }), " ", ev.location), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#516a74',
      marginTop: 2
    }
  }, ev.time, " \xB7 ", ev.going, " going")));
}
window.EventCard = EventCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/EventCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Icon.jsx — Carbon-style stroke icons inline. Imported by other components.

function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  style
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style
  };
  switch (name) {
    case 'home':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 11 12 4l9 7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 10v10h14V10"
      }));
    case 'feed':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M4 6h16M4 12h16M4 18h10"
      }));
    case 'calendar':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 9h18M8 3v4M16 3v4"
      }));
    case 'bell':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M6 17V11a6 6 0 1 1 12 0v6l1.5 2h-15L6 17Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 20a2 2 0 0 0 4 0"
      }));
    case 'user':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "8",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 20c0-4 4-6 8-6s8 2 8 6"
      }));
    case 'heart':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"
      }));
    case 'heart-fill':
      return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
        fill: color
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"
      }));
    case 'reply':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M9 10 4 15l5 5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 15h9a7 7 0 0 0 7-7V5"
      }));
    case 'more':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "5",
        cy: "12",
        r: "1.2",
        fill: color
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1.2",
        fill: color
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "19",
        cy: "12",
        r: "1.2",
        fill: color
      }));
    case 'plus':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 5v14M5 12h14"
      }));
    case 'search':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m20 20-4-4"
      }));
    case 'close':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M6 6l12 12M18 6 6 18"
      }));
    case 'arrow-left':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M19 12H5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 5 5 12l7 7"
      }));
    case 'chevron-r':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m9 6 6 6-6 6"
      }));
    case 'chevron-d':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m6 9 6 6 6-6"
      }));
    case 'image':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "10",
        r: "1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m3 17 5-5 6 6 4-4 3 3"
      }));
    case 'pin':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 2v6l4 4v2H8v-2l4-4V2Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 14v8"
      }));
    case 'send':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M4 12 20 4l-6 16-3-7-7-1Z"
      }));
    case 'event':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 10h18"
      }));
    case 'map':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 4v14M15 6v14"
      }));
    case 'location':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "10",
        r: "2.5"
      }));
    case 'sparkle':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"
      }));
    case 'bookmark':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M6 3h12v18l-6-4-6 4V3Z"
      }));
    case 'check':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M4 12l5 5 11-11"
      }));
    case 'settings':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.2.48.65.83 1.18.94.2.04.41.06.63.06H21a2 2 0 1 1 0 4h-.09c-.22 0-.43.02-.63.06-.53.11-.98.46-1.18.94Z"
      }));
    default:
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "8"
      }));
  }
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/PostCard.jsx
try { (() => {
// PostCard.jsx — the core feed card

function PostCard({
  post,
  onOpen,
  onReact
}) {
  const {
    author,
    avatarTone,
    meta,
    role,
    title,
    body,
    image,
    reactions = [],
    reactionCount = 0,
    replyCount = 0,
    categoryTone,
    category
  } = post;
  return /*#__PURE__*/React.createElement("article", {
    onClick: onOpen,
    style: {
      background: '#fff',
      borderRadius: 12,
      border: '1px solid #e1ebef',
      margin: '0 12px 10px',
      padding: 14,
      cursor: 'pointer',
      fontFamily: '"Tarnac Sans", sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: author,
    tone: avatarTone,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#1a292e'
    }
  }, author), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#516a74'
    }
  }, meta)), role && /*#__PURE__*/React.createElement(Tag, {
    tone: "beige"
  }, role)), category && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: categoryTone || 'green'
  }, category)), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '2px 0 6px',
      fontFamily: '"Tarnac Sans", sans-serif',
      fontSize: 17,
      fontWeight: 700,
      color: '#1a292e',
      lineHeight: 1.3
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      lineHeight: 1.5,
      color: '#1a292e'
    }
  }, body), image && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      borderRadius: 10,
      overflow: 'hidden',
      aspectRatio: '16 / 10',
      background: `linear-gradient(135deg, ${image.c1}, ${image.c2})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: '"Tarnac", serif',
      fontSize: 14,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, image.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 12,
      paddingTop: 10,
      borderTop: '1px solid #e1ebef'
    }
  }, /*#__PURE__*/React.createElement(ReactionRow, {
    items: reactions,
    count: reactionCount
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onReact?.();
    },
    style: {
      background: 'transparent',
      border: 'none',
      padding: 4,
      cursor: 'pointer',
      color: '#516a74'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    color: "#516a74"
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      border: 'none',
      padding: 4,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      color: '#516a74',
      fontSize: 12,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "reply",
    size: 20,
    color: "#516a74"
  }), " ", replyCount)));
}
window.PostCard = PostCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/PostCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Primitives.jsx
try { (() => {
// Primitives.jsx — shared small components

function Avatar({
  name,
  tone = 'neutral',
  size = 40,
  style
}) {
  const tones = {
    neutral: {
      bg: '#cbdbe1',
      fg: '#1a292e'
    },
    beige: {
      bg: '#faede3',
      fg: '#a3663d'
    },
    green: {
      bg: '#eef2eb',
      fg: '#5a6b51'
    },
    pink: {
      bg: '#fee9f4',
      fg: '#7d516d'
    },
    purple: {
      bg: '#f4eef7',
      fg: '#745a81'
    },
    yellow: {
      bg: '#fff9e6',
      fg: '#9d6e00'
    },
    rust: {
      bg: '#66381e',
      fg: '#fff'
    }
  };
  const t = tones[tone] || tones.neutral;
  const initials = (name || '?').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: t.bg,
      color: t.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Tarnac Sans", sans-serif',
      fontWeight: 700,
      fontSize: Math.round(size * 0.38),
      flexShrink: 0,
      ...style
    }
  }, initials);
}
function Tag({
  children,
  tone = 'beige',
  size = 'sm'
}) {
  const tones = {
    beige: {
      bg: '#faede3',
      fg: '#a3663d'
    },
    pink: {
      bg: '#fee9f4',
      fg: '#7d516d'
    },
    green: {
      bg: '#eef2eb',
      fg: '#5a6b51'
    },
    purple: {
      bg: '#f4eef7',
      fg: '#745a81'
    },
    yellow: {
      bg: '#fff9e6',
      fg: '#9d6e00'
    },
    rust: {
      bg: '#66381e',
      fg: '#fff'
    },
    neutral: {
      bg: '#ebf2f5',
      fg: '#1a292e'
    }
  };
  const t = tones[tone] || tones.beige;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: size === 'sm' ? '3px 8px' : '5px 10px',
      borderRadius: 4,
      fontFamily: '"Tarnac Sans", sans-serif',
      fontSize: size === 'sm' ? 11 : 12,
      fontWeight: 700,
      background: t.bg,
      color: t.fg,
      lineHeight: 1.2
    }
  }, children);
}

// Small reaction badge pill
function ReactionRow({
  items = [],
  count = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 22,
      height: 22,
      borderRadius: 999,
      background: it.bg,
      color: it.fg,
      border: '2px solid #fff',
      boxShadow: '0 0 0 1px #e1ebef',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      marginLeft: i === 0 ? 0 : -7
    }
  }, it.glyph))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Tarnac Sans", sans-serif',
      fontSize: 12,
      color: '#516a74'
    }
  }, count));
}
Object.assign(window, {
  Avatar,
  Tag,
  ReactionRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

})();
