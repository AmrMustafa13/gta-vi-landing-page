import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FirstVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", {
      marginTop: "-150vh",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200% top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".hero-section", {
      opacity: 0,
      delay: 0.5,
      ease: "power1.inOut",
    });

    tl.to(".first-vd-wrapper", {
      opacity: 1,
      delay: 0.5,
      duration: 2,
      ease: "power1.inOut",
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);
  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          src="/videos/output1.mp4"
          muted
          playsInline
          preload="auto"
          className="first-vd"
        ></video>
      </div>
    </section>
  );
};

export default FirstVideo;
