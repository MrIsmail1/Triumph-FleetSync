import { useToast } from "@/hooks/use-toast";
import { ToastInterface } from "@/types/Toast";

export function Toast({ buttonText, description }: ToastInterface) {
  const { toast } = useToast();
  return (
    <div
      onClick={() => {
        toast({
          description: description,
        });
      }}
    >
      {buttonText}
    </div>
  );
}
