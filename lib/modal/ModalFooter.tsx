import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const ModalFooter = ({ children, className }: Props) => {
  return (
    <div className={twMerge("flex items-center justify-end w-full", className)}>
      {children}
    </div>
  );
};

export default ModalFooter;
