import Link from "next/link";
import { Button } from "./button"; // Adjust the import based on your button component's path

interface NavButtonProps {
  route: string;
  children: React.ReactNode;
  variant?:
    | "link"
    | "default"
    | "secondary"
    | "primary"
    | "accent"
    | "destructive"
    | "outline"
    | "ghost"
    | null
    | undefined;
  className?: string; // Additional styles
}

const NavButton: React.FC<NavButtonProps> = ({
  route,
  children,
  variant,
  className,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (route.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(route);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link href={route} passHref>
      <Button
        variant={variant}
        className={`w-full ${className}`}
        onClick={handleClick}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavButton;
