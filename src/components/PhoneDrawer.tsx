import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Input } from "./ui/input";

type PhoneDrawerProps = {
  placeholder: string;
  className?: string;
};

const PhoneDrawer = ({ placeholder, className }: PhoneDrawerProps) => {
  return (
    <div className={className}>
      <Drawer>
        <DrawerTrigger asChild>
          <Button type="button">Llámame</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Solicitar llamada</DrawerTitle>
              <DrawerDescription className="text-left">
                Introduce tu número de teléfono y te llamaremos lo antes
                posible.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <Input
                type="text"
                placeholder={placeholder}
                className="w-full pr-28 h-10"
              />
            </div>
            <DrawerFooter>
              <Button>Confirmar</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default PhoneDrawer;
