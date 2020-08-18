import React from 'react';

const Navigation = () =>
<header>
    <h1>Petrack</h1>
    <nav>
        <ul>
            <li>
                <a href="/pets">Pets</a>
            </li>
            <li>
                <a href="/owners">Owners</a>
            </li>
        </ul>
    </nav>
</header>
;

/* React.creatElement would look like this:
var Navigation = function Navigation() {
  return React.createElement("header", null, React.createElement("h1", null, "Petrack"), React.createElement("nav", null, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "/pets"
  }, "Pets")), React.createElement("li", null, React.createElement("a", {
    href: "/owners"
  }, "Owners")))));
};
*/

export default Navigation;