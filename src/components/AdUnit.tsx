import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (e) {
      // Silently fail if AdBlock or not loaded
    }
  }, []);

  const styleMap = {
    auto: { display: 'block' },
    rectangle: { width: 300, height: 250 },
    horizontal: { width: 728, height: 90 },
    vertical: { width: 160, height: 600 },
  };

  return (
    <div ref={adRef} className={`ad-container overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={styleMap[format]}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format === 'auto' ? 'auto' : undefined}
        data-full-width-responsive="true"
      />
    </div>
  );
}
