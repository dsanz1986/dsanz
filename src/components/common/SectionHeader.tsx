
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  isVisible: boolean;
  delay?: number;
}

const SectionHeader = ({ title, description, isVisible, delay = 100 }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out",
        isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-muted-foreground text-lg max-w-xl mx-auto transition-all duration-700 ease-out",
          isVisible ? "opacity-100 transform-none" : "opacity-0 transform translate-y-6"
        )} style={{ transitionDelay: `${delay}ms` }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
