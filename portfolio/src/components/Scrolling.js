import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Scrolling = (props) => {
  var Scroll = require("react-scroll");
  var scroll = Scroll.animateScroll;
  scroll.scrollTo(props.position);
};
export default Scrolling;
