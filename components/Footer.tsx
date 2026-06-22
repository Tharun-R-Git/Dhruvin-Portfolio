const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dhruvin Mehta. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
