import { Play, Clock, ExternalLink } from 'lucide-react';
import { Video } from '@/data/videos';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  video: Video;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const VideoCard = ({ video, isActive, onClick, className }: VideoCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group w-full text-left glass rounded-xl overflow-hidden transition-all duration-300",
        isActive 
          ? "ring-2 ring-primary bg-primary/10" 
          : "glass-hover",
        className
      )}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center glow">
            <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
          </div>
        </div>
        <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
          {video.categoryLabel}
        </Badge>
        <span className="absolute bottom-3 right-3 bg-background/80 px-2 py-1 rounded text-xs font-medium">
          {video.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {video.description}
        </p>
      </div>
    </button>
  );
};

export const VideoCardCompact = ({ video, isActive, onClick }: VideoCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group w-full text-left flex gap-3 p-3 rounded-lg transition-all duration-300",
        isActive 
          ? "bg-primary/10 border border-primary/30" 
          : "hover:bg-muted/50"
      )}
    >
      <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all",
            isActive ? "bg-primary" : "bg-background/60"
          )}>
            <Play className="w-3.5 h-3.5 text-foreground fill-foreground ml-0.5" />
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className={cn(
          "font-medium text-sm line-clamp-2 transition-colors",
          isActive && "text-primary"
        )}>
          {video.title}
        </h4>
        <span className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          <Clock className="w-3 h-3" />
          {video.duration}
        </span>
      </div>
    </button>
  );
};
