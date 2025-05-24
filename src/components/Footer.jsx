import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-10 px-4 bg-card border-t border-border mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} Simce Creators. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <a
                    href="#contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    Contact
                </a>
                <a
                    href="#projects"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    Projects
                </a>
                <a
                    href="#hero"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    title="Back to top"
                >
                    <ArrowUp size={20} />
                </a>
            </div>
        </footer>
    );
};
