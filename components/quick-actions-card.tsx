import { PersonIcon } from "@radix-ui/react-icons";
import { Car, MoveRight, Truck, User } from "lucide-react";

export default function QuickActionsCard() {
  return (
    <div className="grid grid-cols-4 rounded-md bg-background py-6">
      <div className="flex items-center flex-col justify-center border-r ">
        <MoveRight />
        <span>Create incidents</span>
      </div>
      <div className="flex items-center flex-col justify-center">
        <Truck />
        <span>Add Vechile</span>
      </div>
      <div className="flex items-center flex-col justify-center">
        <Car />
        <span>Add car</span>
      </div>
      <div className="flex items-center flex-col justify-center">
        <User />
        <span>Add person</span>
      </div>
    </div>
  );
}
