"use client";

interface WrapperProps {
  children: React.ReactNode;
  noCategories?: boolean;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className=" max-w-[1440px] mx-auto  px-4 sm:px-7  md:px-10  xl:px-20 h-full relative">
      {children}
    </div>
  );
};

export default Wrapper;
