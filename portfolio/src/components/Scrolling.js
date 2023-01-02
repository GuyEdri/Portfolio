import { animateScroll as scroll } from "react-scroll";
const Scrolling = (props) => {
  var Scroll = require("react-scroll");
  var scroll = Scroll.animateScroll;
  scroll.scrollTo(props.position);
};
export default Scrolling;
