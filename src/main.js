import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
// import "./scripts/parallax1";
// import "./scripts/parallax2";