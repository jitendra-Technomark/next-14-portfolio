// import React, { useContext } from "react";
// import { NavHashLink as NavLink } from "react-router-hash-link";
// import "./Footer.css";
// import { ThemeContext } from "../../contexts/ThemeContext";
// import { headerData } from "../../data/headerData";

// function Footer() {
//   const shortname = (name) => {
//     if (name.length > 10) {
//       return name.split(" ")[0];
//     } else {
//       return name;
//     }
//   };

//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className="footer" style={{ backgroundColor: theme.secondary }}>
//       <p style={{ color: theme.tertiary }}>
//         Designed by{" "}
//         <NavLink to="/" smooth={true} spy="true" duration={3000}>
//           <span>{shortname(headerData.name)} Suthar</span>
//         </NavLink>
//       </p>
//     </div>
//   );
// }

// export default Footer;

import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import styles from "./Footer.css";

function Footer() {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.footer} style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
        Designed by{" "}
        <Link href="/" passHref>
          <a style={{ color: theme.tertiary }}>
            <span>{shortname(headerData.name)} Suthar</span>
          </a>
        </Link>
      </p>
    </div>
  );
}

export default Footer;
