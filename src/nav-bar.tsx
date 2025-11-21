import { useState, useEffect } from "react";
import { SearchQuery } from "./search-query";
import type { SearchTerm } from "./search-term";
import site_logo from "../public/site-logo.jpg";

type NavProps = {
  term: SearchTerm;
  onChange: React.Dispatch<React.SetStateAction<SearchTerm>>;
};

export function NavBar(props: NavProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "the new standard in book searching!";

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const pauseTime = isDeleting ? 500 : 2000; // Pause at end and beginning

    const timer = setTimeout(
      () => {
        if (!isDeleting && currentIndex < fullText.length) {
          // Typing forward
          setDisplayText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else if (isDeleting && currentIndex > 0) {
          // Deleting backward
          setDisplayText(fullText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Switch between typing and deleting
          setIsDeleting(!isDeleting);
          // If we just finished typing, pause before deleting
          if (!isDeleting) {
            setTimeout(() => {}, pauseTime);
          }
        }
      },
      isDeleting
        ? typeSpeed
        : currentIndex === fullText.length
        ? pauseTime
        : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullText]);

  return (
    <>
      <div className="flex justify-between items-center mb-15 h-10">
        <SearchQuery query={props.term} onChange={props.onChange} />
        <div className="flex items-center gap-3 font-bold text-xl  cursor-pointer">
          <div className="flex flex-col items-end">
            {/* Site Name - Fixed position with darker gradient */}
            <h1 className="text-4xl font-black bg-gradient-to-r from-[#01cdce] via-cyan-700 to-[#1a5f7f] bg-clip-text text-transparent drop-shadow-xl text-center w-full">
              Booker.com
            </h1>

            {/* Typewriter effect with fixed width container */}
            <div className="min-w-[350px] text-right">
              <p className="text-lg text-cyan-700 font-mono mt-1 min-h-[20px] border-r-2 border-cyan-600">
                {displayText}
              </p>
            </div>
          </div>
          <img
            src={site_logo}
            alt="Booker.com Logo"
            className="w-22 h-full rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}
