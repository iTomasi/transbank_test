import { useRef, useEffect } from "react";
import lottie from "lottie-web";

const LottieLoader = function() {
  const divRef = useRef();

  useEffect(() => {
    const $div = divRef.current;

    lottie.loadAnimation({
      container: $div,
      autoplay: true,
      loop: true,
      path: "/lottiexd.json"
    })
  }, [])

  return (
    <div className="w-52 h-52" ref={divRef}>
    </div>
  )
}

export default LottieLoader;