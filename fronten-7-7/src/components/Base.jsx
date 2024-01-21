import Detective from "./Detective";
import Heroes from "./Heroes";
import logo from "./i.webp";
function Base() {
  return (
    <div>
      <Detective />
      <Heroes />
      <img src={logo} alt="111" />
      <h1>hello world</h1>
    </div>
  );
}
export default Base;
