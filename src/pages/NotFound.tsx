import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">page not found</p>
        <a href="/" className="text-foreground hover:text-muted-foreground transition-colors underline">
          return to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
