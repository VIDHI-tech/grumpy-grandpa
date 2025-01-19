const About = () => {
  return (
    <>
      <section
        style={{ backgroundImage: "url('/assets/aboutbg.png')" }}
        className="bg-cover bg-center h-screen overflow-hidden -my-6 relative"
      >
        <span className="absolute w-full h-full overflow-hidden hidden md:block">
          <img
            src="/assets/computer.gif"
            alt="Grumpy Grandpa Coin"
            className="w-full h-full"
          />
        </span>
        <span className="absolute w-full h-full overflow-hidden md:hidden pt-48">
          <img
            src="/assets/computer - mobile.gif"
            alt="Grumpy Grandpa Coin"
            className="w-full h-full"
          />
        </span>
        <div className="uppercase absolute w-full md:w-2/3 lg:w-1/2 px-3 md:px-0 md:pr-20 flex flex-col items-center md:items-start md:top-1/3 lg:top-40 xl:top-1/3 md:right-0 gap-4">
          <h1 className="pt-10 pb-5 lg:pt-0 lg:pb-3 2xl:pb-7 text-[#FF1D0F] comic-heading-text">
            About the coin
          </h1>
          <p className="text-white text-center comic-paragraph-text max-w-3xl md:text-justify break-normal">
            Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a
            rebellion, a complaint, and a force of sheer stubbornness. GOMC is
            built to shake up the meme coin world, mixing dry humor with sharp
            cryptocurrency innovation. With the grouchy determination of the
            Grumpy Old Man leading the charge, GOMC is set to outsmart the
            competition and claim its rightful spot at the top—grumbling all the
            way there!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
