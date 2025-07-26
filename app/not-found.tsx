import Link from "next/link";
import Button from "@/app/components/ui/common/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh]">
      <div className="main-container text-center space-y-6">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
