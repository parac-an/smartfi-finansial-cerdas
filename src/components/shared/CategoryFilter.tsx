import { cn } from '@/lib/utils';

interface Category {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onChange: (category: string) => void;
  className?: string;
}

export const CategoryFilter = ({ categories, activeCategory, onChange, className }: CategoryFilterProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeCategory === category.id
              ? "bg-primary text-primary-foreground glow-sm"
              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};
