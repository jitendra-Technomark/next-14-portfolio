// import { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';

// function ScrollToTop({ history }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     }
//   });

//   return (null);
// }

// export default withRouter(ScrollToTop);

'use client'
import { useEffect } from "react";
import { useRouter } from "next/router";

function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Set up event listener for route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Remove the event listener when the component is unmounted
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
}

export default ScrollToTop;
