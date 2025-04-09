
import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

const AnnouncementBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioUrl = "https://interstellar.download/interstellar-main-theme-hans-zimmer.mp3";
  
  const togglePlay = () => {
    const audio = document.getElementById('announcement-audio') as HTMLAudioElement;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#18134D]/10 backdrop-blur-sm text-foreground py-2 px-4 text-center relative z-[60]">
      <div className="container flex items-center justify-center gap-3">
        <p className="text-sm md:text-base">
          Para amenizar la lectura del portfolio, dale al play, relájate y disfruta de una de las mejores bandas sonoras compuestas por Hans Zimmer. 
          <span className="hidden md:inline"> (cuando des al play, tarda unos segunditos en arrancar, no te preocupes…)</span>
        </p>
        <button 
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full transition-colors",
            isPlaying 
              ? "bg-primary/20 text-primary hover:bg-primary/30" 
              : "bg-primary text-white hover:bg-primary/90"
          )}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <audio id="announcement-audio" src={audioUrl} loop></audio>
      </div>
    </div>
  );
};

export default AnnouncementBar;
