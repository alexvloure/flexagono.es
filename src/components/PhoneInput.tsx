import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type PhoneInputProps = {
  placeholder: string;
  buttonLabel: string;
  action: () => void;
  className?: string;
};

const PhoneInput = ({
  placeholder,
  buttonLabel,
  action,
  className,
}: PhoneInputProps) => {
  return (
    <div className={cn(className, "relative w-full max-w-sm")}>
      <Input
        type="text"
        placeholder={placeholder}
        className="w-full pr-28 h-10"
      />
      <Button
        type="button"
        className="absolute right-1 top-1/2 -translate-y-1/2 h-8"
        onClick={action}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default PhoneInput;
