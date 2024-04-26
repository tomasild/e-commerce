import React, { useRef, useEffect } from "react";
import { Button } from "@nextui-org/react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Ralentiza el video a la mitad de la velocidad normal
    }
  }, []); // Se ejecuta al montar el componente

  return (
    <section className="relative w-full h-screen px-5 py-12 md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full z-10"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-20" />{" "}
      <div className="flex w-full mx-auto text-left relative z-30">
        <div className="inline-flex items-center mx-auto align-middle text-center mt-24">
          <div>
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
              Are you ready for a Tuki ?
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-200">
              Free e-commerce template for a tuki
            </p>
            <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
              <div className="mt-3 rounded-lg sm:mt-0">
                <Button
                  className="bg-azul_neon text-white"
                  radius="full"
                  size="md"
                >
                  Get Tuki
                </Button>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <Button
                  className="bg-plata_claro rounded-md"
                  radius="full"
                  size="md"
                >
                  Be a Tuki
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
