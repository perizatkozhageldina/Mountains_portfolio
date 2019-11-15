import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/mainparallax";
import "./scripts/fixed-menu";
import "./scripts/scroll-down";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/form";
import "./scripts/budda-parallax";