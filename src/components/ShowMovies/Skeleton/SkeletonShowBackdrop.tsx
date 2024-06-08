const SkeletonShowBackdrop = (props: { error: null | Error }) => {
  return (
    <>
      <div className="h-screen bg-neutral-800 w-full relative select-none cursor-default">
        <div className="absolute flex size-full bg-gradient-radial px-4 lg:px-14">
          <div className="self-center w-full">
            <div className="animate-pulse">
              {props.error && <p>{props.error.message}</p>}
              <p
                className={`font-bold drop-shadow-default w-5/6 lg:w-3/4 leading-[3rem] text-wrap transition-all duration-700 text-transparent bg-neutral-700/50`}
              >
                Movie title
              </p>
              <p
                className={`text-sm drop-shadow-default mt-6 w-11/12 sm:w-10/12 md:w-1/2 line-clamp-3 text-ellipsis transition-all duration-500 text-transparent bg-neutral-700/50`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                ducimus soluta quidem similique aspernatur, voluptatibus
                expedita ipsa aliquid dolor corporis rem vitae.
              </p>
            </div>
            <div className="mt-6 flex justify-between relative w-full animate-pulse">
              <div className="flex gap-2 lg:gap-4 items-center">
                <div className="px-6 lg:px-8 py-2 text-sm lg:text-lg text-transparent font-semibold rounded-md bg-neutral-700/50">
                  Play
                </div>
                <div className="px-6 lg:px-8 py-2 text-sm lg:text-lg text-transparent font-semibold rounded-md bg-neutral-700/50">
                  Play
                </div>
              </div>
              <div className="absolute -mr-14 top-12 lg:top-0 right-8 lg:right-0 h-full flex items-center">
                <p className="bg-neutral-700/50 pl-4 py-1 pr-8 text-transparent">
                  +++
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonShowBackdrop;
