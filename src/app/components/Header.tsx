import { header } from "../utils/helper";

export const Header = () => {
  return (
    <header className="sticky flex-wrap top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md px-8 py-4 flex justify-center items-center gap-6">
      {header?.map((item, index) => (
        <span
          key={index}
          className="text-base font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:underline underline-offset-4 cursor-pointer relative group"
        >
          {item}

          {/* Animated underline effect */}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </span>
      ))}
    </header>
  );
};
