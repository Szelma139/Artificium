import { ReactNode } from "react";

type PropType = {
  children?: ReactNode;
};
export const Modal = ({ children }: PropType) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 max-w-[540px] shadow-gray-shade border-1 border-solid border-grayish rounded-t-2xl"  >
      <div className="flex flex-col gap-10">
        {children}
      </div>
    </div>
  );
};