import { useEffect } from "react";

const transition = () => {
  useEffect(() => {
    if (!document.startViewTransition) {
    } else {
    }
  }, []);
  return <div>transition</div>;
};

export default transition;
