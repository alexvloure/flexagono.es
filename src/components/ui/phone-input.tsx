import { Button } from "./button";
import { Input } from "./input";

type PhoneInputProps = {
  placeholder: string;
  buttonLabel: string;
  action: () => void;
};

const PhoneInput = ({ placeholder, buttonLabel, action }: PhoneInputProps) => {
  return (
    <div className="relative w-full max-w-sm">
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
