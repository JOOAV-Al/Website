import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import NavButton from "@/components/ui/NavButton"; // Import NavButton
import { Mail } from "lucide-react";

export function SuccessDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (s: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col gap-6 items-center">
          <div className="h-12 w-12 flex justify-center items-center bg-blue-100 rounded-full">
            <Mail className="text-app-primary" />
          </div>
          <DialogTitle className="text-center text-lg font-semibold text-green-600">
            Success!
          </DialogTitle>
          <DialogDescription className="text-center">
            Your email has been successfully added to our mailing list. Thank
            you for subscribing!
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-center">
          <DialogClose asChild>
            <NavButton route="/" className="w-full" variant={"primary"}>
              Go to Home
            </NavButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
