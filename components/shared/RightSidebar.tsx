import Image from "next/image";
import React from "react";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky right-0 top-0 hidden h-screen flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none lg:flex lg:w-[330px]">
      <article className="flex min-h-[400px] flex-col gap-4 ">
        <h3 className="h3-bold text-dark200_light900">Hot Network</h3>
        <div className="text-dark500_light700 body-medium flex flex-col justify-between gap-8">
          <span className="flex justify-between gap-3">
            <p>
              Would it be appropriate to point out an error in another paper
              during a referee report?
            </p>
            <Image
              src="/assets/icons/mingcute-down-line.svg"
              alt="arrow"
              width={20}
              height={20}
              className="invert-colors h-full -rotate-90"
            />
          </span>
          <span className="flex justify-between gap-3">
            <p>How can an airconditioning machine exist?</p>
            <Image
              src="/assets/icons/mingcute-down-line.svg"
              alt="arrow"
              width={20}
              height={20}
              className="invert-colors h-full -rotate-90"
            />
          </span>
          <span className="flex justify-between gap-3">
            <p>Interrogated every time crossing UK Border as citizen</p>
            <Image
              src="/assets/icons/mingcute-down-line.svg"
              alt="arrow"
              width={20}
              height={20}
              className="invert-colors h-full -rotate-90"
            />
          </span>
          <span className="flex justify-between gap-3">
            <p>Low digit addition generator</p>
            <Image
              src="/assets/icons/mingcute-down-line.svg"
              alt="arrow"
              width={20}
              height={20}
              className="invert-colors h-full -rotate-90"
            />
          </span>
          <span className="flex justify-between gap-3">
            <p>What is an example of 3 numbers that do not make up a vector?</p>
            <Image
              src="/assets/icons/mingcute-down-line.svg"
              alt="arrow"
              width={20}
              height={20}
              className="invert-colors h-full -rotate-90"
            />
          </span>
        </div>
      </article>
      <article className="flex min-h-[400px] flex-col gap-4">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="small-medium text-dark500_light700 flex flex-col gap-4">
          <span className="flex justify-between">
            <span className="background-light800_dark300 rounded-lg px-4 py-3 text-light-400 dark:text-light-500">
              JAVASCRIPT
            </span>
            <p className="flex items-center justify-center">20152+</p>
          </span>
          <span className="flex justify-between">
            <span className="background-light800_dark300 rounded-lg px-4 py-3 text-light-400 dark:text-light-500">
              JAVASCRIPT
            </span>
            <p className="flex items-center justify-center">20152+</p>
          </span>
          <span className="flex justify-between">
            <span className="background-light800_dark300 rounded-lg px-4 py-3 text-light-400 dark:text-light-500">
              JAVASCRIPT
            </span>
            <p className="flex items-center justify-center">20152+</p>
          </span>
          <span className="flex justify-between">
            <span className="background-light800_dark300 rounded-lg px-4 py-3 text-light-400 dark:text-light-500">
              JAVASCRIPT
            </span>
            <p className="flex items-center justify-center">20152+</p>
          </span>
          <span className="flex justify-between">
            <span className="background-light800_dark300 rounded-lg px-4 py-3 text-light-400 dark:text-light-500">
              JAVASCRIPT
            </span>
            <p className="flex items-center justify-center">20152+</p>
          </span>
          <span className="flex justify-between">
            <span className="background-light800_dark300 rounded-lg px-4 py-3 text-light-400 dark:text-light-500">
              JAVASCRIPT
            </span>
            <p className="flex items-center justify-center">20152+</p>
          </span>
          <span className="flex justify-between">
            <span className="background-light800_dark300 rounded-lg px-4 py-3 text-light-400 dark:text-light-500">
              JAVASCRIPT
            </span>
            <p className="flex items-center justify-center">20152+</p>
          </span>
        </div>
      </article>
    </section>
  );
};

export default RightSidebar;
