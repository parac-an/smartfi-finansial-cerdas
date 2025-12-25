import { MessageCircle, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const { toast } = useToast();
  const fullUrl = window.location.origin + url;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'hover:bg-green-500/20 hover:text-green-500 hover:border-green-500/30'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-blue-500/20 hover:text-blue-500 hover:border-blue-500/30'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:bg-sky-500/20 hover:text-sky-500 hover:border-sky-500/30'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast({
        title: "Link disalin!",
        description: "Link artikel telah disalin ke clipboard.",
      });
    } catch (err) {
      toast({
        title: "Gagal menyalin",
        description: "Tidak dapat menyalin link.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-1">Bagikan:</span>
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="icon"
          asChild
          className={`w-9 h-9 transition-all duration-300 ${link.color}`}
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer" title={`Bagikan ke ${link.name}`}>
            <link.icon className="w-4 h-4" />
          </a>
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        onClick={copyToClipboard}
        className="w-9 h-9 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300"
        title="Salin link"
      >
        <LinkIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};
