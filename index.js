import { Router } from "express";
import { t } from "marko/dist/runtime/html/index.js";
import _marko_self_iterator from "marko/dist/runtime/helpers/self-iterator.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import { x } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _marko_dynamic_tag from "marko/dist/runtime/helpers/dynamic-tag.js";
import copy from "copy-to-clipboard";
import _marko_attr from "marko/dist/runtime/html/helpers/attr.js";
import _marko_to_string from "marko/dist/runtime/helpers/to-string.js";
import _initComponents from "marko/dist/core-tags/components/init-components-tag.js";
import _awaitReorderer from "marko/dist/core-tags/core/await/reorderer-renderer.js";
import _preferredScriptLocation from "marko/dist/core-tags/components/preferred-script-location-tag.js";
import _flush_here_and_after__ from "marko/dist/core-tags/core/__flush_here_and_after__.js";
const _marko_componentType$d = "mXYOLY8c", _marko_template$d = t(_marko_componentType$d);
const _marko_component$d = {};
_marko_template$d._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.w('<svg xmlns=http://www.w3.org/2000/svg height=48 viewBox="0 -960 960 960" width=48 aria-hidden=true><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" /></svg>');
}, {
  t: _marko_componentType$d,
  i: true
}, _marko_component$d);
const _marko_componentType$c = "9/soOPf8", _marko_template$c = t(_marko_componentType$c);
const _marko_component$c = {
  onSubmit(event) {
    event.preventDefault();
    const searchTerm = document.getElementById("search").value;
    if (searchTerm && searchTerm.length > 1) {
      this.emit("submit-search", searchTerm);
    }
  }
};
_marko_template$c._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.w('<form class=searchBar><input type=search aria-label=Search placeholder="Search gifs..." id=search><button type=submit aria-label="Submit Search">');
  _marko_tag(_marko_template$d, {}, out, _componentDef, "3");
  out.w("</button></form>");
}, {
  t: _marko_componentType$c
}, _marko_component$c);
const _marko_componentType$b = "2C/hXRxZ", _marko_template$b = t(_marko_componentType$b);
const _marko_component$b = {};
_marko_template$b._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.w('<svg xmlns=http://www.w3.org/2000/svg height=48 viewBox="0 -960 960 960" width=48 aria-hidden=true><path d="M332.976-213.128Q322-207 310-211.5q-12-4.5-17-15.5l-60-120q-5-11-1.5-23t14.5-17q11-5 23.5-1.5T287-374l60 120q5 11 .976 22.872-4.025 11.873-15 18Zm360 0Q682-207 670-211.5q-12-4.5-17-15.5L473-587q-5-11-1.5-23t14.5-17q11-5 23.5-1.5T527-614l180 360q5 11 .976 22.872-4.025 11.873-15 18ZM509.825-210Q497-210 488.5-218.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm383.151-3.128Q882-207 870-211.5q-12-4.5-17-15.5l-20-40q-5-11-1.5-23t14.5-17q11-5 23.5-1.5T887-294l20 40q5 11 .976 22.872-4.025 11.873-15 18Zm-440-120Q442-327 430-331q-12-4-17-15L233-706q-5-11-1.5-23.5T246-747q11-5 23.5-1.5T287-734l180 360q5 11 .976 22.872-4.025 11.873-15 18ZM799.825-370Q787-370 778.5-378.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm-600-80Q187-450 178.5-458.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm553.151-43.128Q742-487 730.5-491.5 719-496 713-507L613-707q-5-11-1.5-23t14.5-17q11-5 23.5-1.5T667-734l100 200q5 11 .976 22.872-4.025 11.873-15 18Zm-600-80Q142-567 130-571q-12-4-17-15L53-706q-5-11-1.5-23.5T66-747q11-5 23.5-1.5T107-734l60 120q5 11 .976 22.872-4.025 11.873-15 18ZM449.825-690Q437-690 428.5-698.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Z" /></svg>');
}, {
  t: _marko_componentType$b,
  i: true
}, _marko_component$b);
const _marko_componentType$a = "XqZ+DgTC", _marko_template$a = t(_marko_componentType$a);
const _marko_component$a = {};
_marko_template$a._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.w("<header><div class=flex><a href=/  class=logo>");
  _marko_tag(_marko_template$b, {}, out, _componentDef, "3");
  out.w(`<span>${x(input.title)}</span></a></div>`);
  _marko_dynamic_tag(out, input.renderBody, null, null, null, null, _componentDef, "5");
  out.w("</header>");
}, {
  t: _marko_componentType$a,
  i: true
}, _marko_component$a);
const GIPHY_API_KEY = "R3MubWsDVaNsLg6YiSZV1x5yEO4jSlwq";
const GIPHY_SEARCH_API_ENDPOINT = `https://api.giphy.com/v1/gifs/search?apiKey=${GIPHY_API_KEY}`;
const getGifs = async (query, options) => {
  const queryParams = new URLSearchParams({ q: query, limit: 18, rating: "g", ...options }).toString();
  const queryUrl = `${GIPHY_SEARCH_API_ENDPOINT}&${queryParams}`;
  try {
    const response = await fetch(queryUrl, {
      mode: "cors"
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
const getGifById = async (id) => {
  const queryUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=${GIPHY_API_KEY}`;
  try {
    const response = await fetch(queryUrl, {
      mode: "cors"
    });
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
const _marko_componentType$9 = "qAODYoAe", _marko_template$9 = t(_marko_componentType$9);
const _marko_component$9 = {};
_marko_template$9._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.w('<svg xmlns=http://www.w3.org/2000/svg height=48 viewBox="0 -960 960 960" width=48 aria-hidden=true><path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z" /></svg>');
}, {
  t: _marko_componentType$9,
  i: true
}, _marko_component$9);
const _marko_componentType$8 = "fkBLokYO", _marko_template$8 = t(_marko_componentType$8);
const _marko_component$8 = {
  copyLink() {
    copy(this.input.gif.bitly_url);
  }
};
_marko_template$8._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.w(`<div class=gif-container><picture><source media="(prefers-reduced-motion) and (max-width: 500px)"${_marko_attr("srcset", input.gif.images.fixed_height_still.url)}><source media="(max-width: 500px)"${_marko_attr("srcset", input.gif.images.fixed_height.url)}><source media=(prefers-reduced-motion)${_marko_attr("srcset", input.gif.images.original_still.url)}><img${_marko_attr("src", input.gif.images.original.url)}${_marko_attr("alt", input.gif.title)}></picture>`);
  if (input.copyToClipboard) {
    out.w(`<button${_marko_attr("aria-label", `Copy link${input.gif.title && " to " + input.gif.title}`)} title="Copy link" class=button>`);
    _marko_tag(_marko_template$9, {}, out, _componentDef, "7");
    out.w("</button>");
  }
  out.w("</div>");
}, {
  t: _marko_componentType$8
}, _marko_component$8);
const _marko_componentType$7 = "JJ3swrWf", _marko_template$7 = t(_marko_componentType$7);
const _marko_component$7 = {
  onInput(input) {
    this.state = {
      loading: false,
      gif: void 0
    };
    this.pending = Promise.resolve();
    this.loadGif();
  },
  async loadGif() {
    const {
      state
    } = this;
    state.loading = true;
    await this.pending;
    try {
      const gif = await (this.pending = getGifById("y65VoOlimZaus"));
      if (gif) {
        state.gif = gif;
      }
    } catch (err) {
      console.log("Fetch failed:", err);
    }
    state.loading = false;
  }
};
_marko_template$7._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.w("<div>");
  if (state.gif) {
    _marko_tag(_marko_template$8, {
      "gif": state.gif
    }, out, _componentDef, "1");
  }
  out.w("<p>Sorry, couldn't find anything by that name!</p></div>");
}, {
  t: _marko_componentType$7
}, _marko_component$7);
const _marko_componentType$6 = "lY3mH+Q8", _marko_template$6 = t(_marko_componentType$6);
const _marko_component$6 = {
  onInput(input) {
    this.state = {
      searchTerm: input.searchTerm,
      loading: false,
      pagination: {},
      gifs: []
    };
    this.pending = Promise.resolve();
    this.loadInitialGifs();
  },
  async loadInitialGifs() {
    const {
      state
    } = this;
    state.loading = true;
    await this.pending;
    try {
      const gifsResponse = await (this.pending = getGifs(state.searchTerm));
      if (gifsResponse) {
        state.gifs = gifsResponse.data;
        state.pagination = gifsResponse.pagination;
      }
    } catch (err) {
      console.log("Fetch failed:", err);
    }
    state.loading = false;
  },
  async loadMoreGifs() {
    const {
      state
    } = this;
    state.loading = true;
    await this.pending;
    try {
      const gifsResponse = await (this.pending = getGifs(state.searchTerm, {
        offset: state.gifs.length
      }));
      if (gifsResponse && gifsResponse.data) {
        state.gifs = state.gifs.concat(gifsResponse.data);
        state.pagination = gifsResponse.pagination;
      }
    } catch (err) {
      console.log("Fetch failed:", err);
    }
    state.loading = false;
  }
};
_marko_template$6._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.w(`<h1><span>${x(state.pagination.total_count)} gifs for</span>${x(input.searchTerm)}</h1>`);
  if (state.loading) {
    out.w("Loading...");
  } else if (state.gifs.length == 0) {
    _marko_tag(_marko_template$7, {}, out, _componentDef, "2");
  }
  if (state.gifs.length > 0) {
    out.w("<div class=grid>");
    {
      let _keyValue = 0;
      for (const gif of state.gifs) {
        const _keyScope = `[${_keyValue++}]`;
        _marko_tag(_marko_template$8, {
          "gif": gif,
          "copyToClipboard": true
        }, out, _componentDef, "4" + _keyScope);
      }
    }
    out.w("</div><div class=center>");
    if (state.gifs.length < state.pagination.total_count) {
      out.w("<button class=button>Load more</button>");
    } else {
      out.w(`<p>(Pssst... You reached the end of results for "${x(input.searchTerm)}." Try searching for something else?)</p>`);
    }
    out.w("</div>");
  }
}, {
  t: _marko_componentType$6
}, _marko_component$6);
const _marko_componentType$5 = "i9/efv9i", _marko_template$5 = t(_marko_componentType$5);
const _marko_component$5 = {};
_marko_template$5._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  const credits = [{
    url: "https://fonts.google.com/icons",
    context: "Icons by",
    linkText: "Material"
  }, {
    url: "http://giphy.com",
    context: "Powered by",
    linkText: "Giphy"
  }, {
    url: "https://markojs.com/docs/",
    context: "Built on",
    linkText: "Marko"
  }, {
    url: "https://github.com/cordeliadillon",
    context: "Made by",
    linkText: "cordeliadillon"
  }];
  out.w(`<footer>&copy; ${x((/* @__PURE__ */ new Date()).getFullYear())} In A Giphy <p class=credits>`);
  {
    let _index = 0;
    for (const credit of credits) {
      let index = _index++;
      if (index !== 0) {
        out.w("<span aria-hidden=true class=divider>&middot;</span>");
      }
      out.w(`<span>${x(credit.context)} <a${_marko_attr("href", credit.url)}>${x(credit.linkText)}</a></span>`);
    }
  }
  out.w("</p></footer>");
}, {
  t: _marko_componentType$5,
  i: true
}, _marko_component$5);
const _marko_componentType$4 = "v3wzLH/J", _marko_template$4 = t(_marko_componentType$4);
const _marko_component$4 = {
  onInput(input) {
    const currentHour = Number((/* @__PURE__ */ new Date()).toTimeString().substring(0, 2));
    let defaultSearch = "Good night";
    if (currentHour < 4) {
      defaultSearch = "Go to bed";
    } else if (currentHour < 12) {
      defaultSearch = "Good morning";
    } else if (currentHour < 17) {
      defaultSearch = "Good afternoon";
    } else if (currentHour < 22) {
      defaultSearch = "Good evening";
    }
    this.state = {
      searchTerm: input.searchTerm || defaultSearch,
      results: [],
      filters: []
    };
  },
  handleSearch(searchTerm) {
    this.state.searchTerm = searchTerm;
  }
};
_marko_template$4._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  _marko_tag(_marko_template$a, {
    "title": "In a Giphy",
    "renderBody": (out2) => {
      _marko_tag(_marko_template$c, {}, out2, _componentDef, "1", [["submit-search", "handleSearch", false]]);
    }
  }, out, _componentDef, "0");
  out.w("<main>");
  _marko_tag(_marko_template$6, {
    "searchTerm": state.searchTerm
  }, out, _componentDef, "3");
  out.w("</main>");
  _marko_tag(_marko_template$5, {}, out, _componentDef, "4");
}, {
  t: _marko_componentType$4
}, _marko_component$4);
const favicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAABiZJREFUWMPtlmuMXVUVx3/7cc69d+bO9N559DGlj6lTqZSmtYJatEnHKKAxMRIoCVGrxbYUyFCCiCbGGD+oIaGZ0sEURII8wkBEDBbpk0psoJa0tqU0CFRKsKXtvOc+zj33nH2WH3rvMGiaxsT4xf6Tk+ysc85a//9ae6294SIu4v8d6r/tsLDsYRCHMs0gjuwr3/jPCGzYvZ8DJ08u755/6Zeb0mlEAEhQ8oxS6sjdS+YB8PPHPkMUqzkrl418q7MtzCSiBNDGJNv/segH+83MsZuBDiABFMLzSql9s1+75/wEOh7oxyWSt7j+z3fOvrqrNY8IKJOQ6Pg3hbi43iob2MN3oX2n4sC/99PzSt/rvrSAUpDSCY02fs2VvJtOr1z1XUx8T10BJC9C9E1QQ3MO3DsR09QXXb/ehpOYhlTjbcr4awqR076NCKVMSRUIkvLHw6T6piBvNBdfwhp9tbbyk5HAZJttTINyZFWEdclMbaJC4fm5DxIFV0F5JgRAZR6EJ33j71/X3sXmM4cBsHUCueY2tGpbXI2ra0XEguJkEEizHURFTgENgtwZJG5fV+PwSDnJbbDCNBE4NpKWuamypFWka3rXdjzSv+Pk9V/ZhBc9DJI5J1Z6wnhob0qrQx/JwPW732dqNudrbX/akGr4UjbdSDadRZv0b0c5dqboip1lF1B2wSVlF4wtsG8tMJZbjIexPgToA0vTY680JvFCIgEnjRKSk/axvupf03MgWAQVoNKqCLXI8M4N0+e53jMnsKv/9D7ONmCN/ppnvRtE6jtD3kuS/C/eHR9oT0QWi9AKkNHRreOZKdU2Pe7V1IaJqE0zkvLeKNDzgSU1cV/NXvHBC4UtrRtVqvpZRDoBBG4Ct00p/dybl1+Ozmen0J72pmWt6cn5fnM+5ZNP+ZLzU1tymcGDw+WBXaW4/FTZlSm7Mm16oL2oMjPxPIxnMZ591vrq9+9Wsyckkj6JJJRIkEg8VeXOGVuOliWuPCRURKggVLJCtCGRsCOlDfov5UYajFrTZPhck4UmC1nDnpTm0UY9A89vdMD9gjoyyyuyKD2EUZogyQDmFJg+hVfsSEoIPI3iBVQti4qFSrPOzqo+Brz8oZnlGll1KD0XfVVDcZkTWT2pJStW8UDaqNMtwSCSOBakx95u1NGmT2YGj87wykdbTHhUK30swd5nifYlokl/YRgCXZRIbUrGzNlkxJCMGJIBs6pt9cBllchuHsMPRvEZxVdDpG+ZGg4stycCKVZFShPtCsZB1ipFsdLA2es2snLPdXR5o48vSI38QStRAIkoBDteoUnuXr4TgNLWJoBmNN6kCVPxPFfaZmdfYpUzdbOCkkFKNsC87hK3BeittaUH9FRF9vp+5u8Afd2/A4iAgfON1NEfzwIVt0qoNpCQn5h0orZs3b7gdE6FfSL4NXPsUJtbVHxQO+cAngB2TPL3KWBNtTyqr9l5lgth5P7p2EShm5LvmBa3wrQ5TJvDtLhXJSOPNki8Lke4NE9InpAc4YtZov5IBPvHFTmu3TE4prTuTZy7ApGpNb83a0nvlEheuhCB9BQhyYVLTKTWipybLQrKSrHx8H2d8/K2+u0PK8ygQ/VqGOk+8mc0QFQoE5VKu+NC8GQ0HlB72qNi0FMdLuRXPHn8vMFL21pxMyNfT3E9uiWeb1pjTGuManH9Q7um7M3Zyl05wml5QloIyVF9JBJ5OS3V+l44hxVPHEeS5GNJ7J5BZGm9VpLI7TaTerAyNMa+O5Z+JPhbTzfT2e7hkBuV8CuEpprX98STr59aP2cZht7avgI46FA3KuSdriOHgElnQfnUMNo3x5XWv5Qk6UMkXXt/R3W0tFfBG/+qfvZUSyzSoaEHRVNNjmDoO3XrnIoyctuk4KGCXq14x4ib8KHri/3fvxJXqeKC8KmoEGytniuDROPBJ+JSZX0wOOot+dGeiR8LO/Oku4fRsBZYNonXruoHtl8puR24DKiX/1mB50SEWUden/j43y4ki3+4G6X0QpArQdVPhnFgO1A69LPucxnbnQeUZxRfBKZTv3hoDpy4ofNtf0Z8LZCrEVAKXkWpv809fOiCXXURF3ER/1P8E+oo2XFV0bPuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA4LTI2VDE2OjM2OjAyKzAwOjAwgXV1bQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0wOC0yNlQxNjozNjowMiswMDowMPAozdEAAABGdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuNy44LTkgMjAxNC0wNS0xMiBRMTYgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmfchu0AAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OmhlaWdodAAxOTIPAHKFAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE5MtOsIQgAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTQ0MDYwNjk2MuwEGPsAAAAPdEVYdFRodW1iOjpTaXplADBCQpSiPuwAAABWdEVYdFRodW1iOjpVUkkAZmlsZTovLy9tbnRsb2cvZmF2aWNvbnMvMjAxNS0wOC0yNi9kYWI1YTMzYmM4MDI5OWQ2YmFhNmQ1NGIyZmI5MTEwMy5pY28ucG5nBTJ6eQAAAABJRU5ErkJggg==";
const _marko_componentType$3 = "Hi9mQ2S5", _marko_template$3 = t(_marko_componentType$3);
const _marko_component$3 = {};
_marko_template$3._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.w(`<!doctype html><html lang=en><head>${_marko_to_string(out.global.___viteRenderAssets("head-prepend"))}<meta charset=UTF-8><link rel=icon type=image/png sizes=32x32${_marko_attr("href", favicon)}><meta name=description content="An example application showcasing Vite & Marko."><meta name=viewport content="width=device-width, initial-scale=1.0">`);
  _marko_dynamic_tag(out, input.head, null, null, null, null, _componentDef, "6");
  out.w(`${_marko_to_string(out.global.___viteRenderAssets("head"))}</head><body>${_marko_to_string(out.global.___viteRenderAssets("body-prepend"))}`);
  _marko_dynamic_tag(out, input.body, null, null, null, null, _componentDef, "8");
  out.w(_marko_to_string(out.global.___viteRenderAssets("body")));
  _marko_tag(_initComponents, {}, out, _componentDef, "9");
  _marko_tag(_awaitReorderer, {}, out, _componentDef, "10");
  _marko_tag(_preferredScriptLocation, {}, out, _componentDef, "11");
  out.w("</body></html>");
}, {
  t: _marko_componentType$3,
  i: true
}, _marko_component$3);
const _marko_componentType$2 = "lcNWi5WD", _marko_template$2 = t(_marko_componentType$2);
const _marko_component$2 = {};
_marko_template$2._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  _marko_tag(_marko_template$3, {
    "head": {
      "renderBody": (out2) => {
        out2.w("<title>InaGiphy</title><link href=https://fonts.googleapis.com/css?family=Nunito:300,400,700 media=all rel=stylesheet>");
      },
      [Symbol.iterator]: _marko_self_iterator
    },
    "body": {
      "renderBody": (out2) => {
        _marko_tag(_marko_template$4, {}, out2, _componentDef, "3");
      },
      [Symbol.iterator]: _marko_self_iterator
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType$2,
  i: true
}, _marko_component$2);
const _marko_componentType$1 = "rpLKBJsQ", _marko_template$1 = t(_marko_componentType$1);
function renderAssets(slot) {
  const entries = this.___viteEntries;
  let html = "";
  if (entries) {
    const slotWrittenEntriesKey = `___viteWrittenEntries-${slot}`;
    const lastWrittenEntry = this[slotWrittenEntriesKey] || 0;
    const writtenEntries = this[slotWrittenEntriesKey] = entries.length;
    for (let i = lastWrittenEntry; i < writtenEntries; i++) {
      let entry = entries[i];
      if (typeof __MARKO_MANIFEST__ === "object") {
        entry = __MARKO_MANIFEST__[entry] || {};
      } else if (slot === "head") {
        const {
          entries: entries2
        } = entry;
        if (entries2) {
          let sep = "";
          html += `<script${this.___viteInjectAttrs}>((root=document.documentElement)=>{`;
          html += "root.style.visibility='hidden';";
          html += "document.currentScript.remove();";
          html += "Promise.allSettled([";
          for (const id of entries2) {
            html += `${sep}import(${JSON.stringify(this.___viteBasePath + id)})`;
            sep = ",";
          }
          html += "]).then(()=>{";
          html += "root.style.visibility='';";
          html += "if(root.getAttribute('style')==='')root.removeAttribute('style')";
          html += "})})()<\/script>";
        }
      }
      const parts = entry[slot];
      if (parts) {
        for (const part of parts) {
          html += part === 0 ? this.___viteInjectAttrs : part === 1 ? this.___viteBasePath : part;
        }
      }
    }
  }
  return html;
}
const _marko_component$1 = {};
_marko_template$1._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  if (!out.global.___viteRenderAssets) {
    out.global.___viteInjectAttrs = out.global.cspNonce ? ` nonce="${out.global.cspNonce.replace(/"/g, "&#39;")}"` : "";
    out.global.___viteRenderAssets = renderAssets;
    out.global.___viteBasePath = input.base || "/in-a-giphy";
  }
  _marko_tag(_flush_here_and_after__, {
    "renderBody": (out2) => {
      if (input.base && !out2.global.___flushedMBP) {
        out2.global.___flushedMBP = true;
        out2.w(_marko_to_string(`<script${out2.global.___viteInjectAttrs}>${out2.global.___viteBaseVar}=${JSON.stringify(input.base)}<\/script>`));
      }
      out2.w(_marko_to_string(out2.global.___viteRenderAssets(input.slot)));
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType$1,
  i: true
}, _marko_component$1);
const _marko_componentType = "XMmwkL7L", _marko_template = t(_marko_componentType);
const _marko_component = {};
_marko_template._ = _marko_renderer(function(input, out, _componentDef, _component, state, $global) {
  out.global.___viteBaseVar = "$mbp";
  (out.global.___viteEntries || (out.global.___viteEntries = [])).push("index_kgVI");
  _marko_tag(_marko_template$1, {
    "slot": "head-prepend"
  }, out, _componentDef, "0");
  _marko_tag(_marko_template$1, {
    "slot": "head"
  }, out, _componentDef, "1");
  _marko_tag(_marko_template$1, {
    "slot": "body-prepend"
  }, out, _componentDef, "2");
  _marko_tag(_marko_template$2, input, out, _componentDef, "3");
  _marko_tag(_initComponents, {}, out, _componentDef, "4");
  _marko_tag(_awaitReorderer, {}, out, _componentDef, "5");
  _marko_tag(_marko_template$1, {
    "slot": "body"
  }, out, _componentDef, "6");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
const indexPage = (req, res) => {
  res.marko(_marko_template, {});
};
const router = Router().get("/", indexPage);
export {
  router
};
//# sourceMappingURL=index.js.map
;var __MARKO_MANIFEST__={"index_kgVI":{"head-prepend":null,"head":["<script",0," async type=\"module\" crossorigin src=\"",1,"assets/template.marko-0cdfb675.js\"","></script><link",0," rel=\"stylesheet\" href=\"",1,"assets/template.marko-9efb00b2.css\"",">"],"body-prepend":null,"body":null}};
