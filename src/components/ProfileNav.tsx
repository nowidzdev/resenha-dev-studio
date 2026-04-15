import { Link } from "react-router-dom";

interface ProfileNavProps {
  name: string;
}

const ProfileNav = ({ name }: ProfileNavProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-8 md:px-16 py-6 flex items-center gap-4 bg-background/90 backdrop-blur-lg border-b border-border">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
        ← Back to Index
      </Link>
      <span className="text-primary font-bold">/{name}</span>
    </nav>
  );
};

export default ProfileNav;
