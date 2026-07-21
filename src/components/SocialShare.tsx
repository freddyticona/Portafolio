/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Share2,
  Link as LinkIcon,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MessageCircle
} from 'lucide-react';

interface SocialShareProps {
  title: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  lang?: 'es' | 'en';
  showLabels?: boolean;
  variant?: 'buttons' | 'icon-bar' | 'dropdown';
}

export default function SocialShare({
  title,
  description,
  url = typeof window !== 'undefined' ? window.location.href : '',
  imageUrl,
  lang = 'es',
  showLabels = false,
  variant = 'buttons'
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const shareData = {
    title,
    text: description,
    url
  };

  // Native Web Share API
  const handleNativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy link
        copyToClipboard();
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const text = `${title} - ${description || ''}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description || '')}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const shareOnMessageCircle = () => {
    const text = `${title} - ${url}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  };

  const shareByEmail = () => {
    const subject = title;
    const body = `${description || ''}\n\n${url}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const buttons = [
    {
      icon: <Share2 className="w-5 h-5" />,
      label: lang === 'es' ? 'Compartir' : 'Share',
      onClick: handleNativeShare,
      color: 'bg-gold hover:bg-gold-hover text-black',
      primary: true
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      onClick: shareOnFacebook,
      color: 'bg-[#1877F2] hover:bg-[#0d65d9] text-white'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      onClick: shareOnTwitter,
      color: 'bg-[#1DA1F2] hover:bg-[#0c85d0] text-white'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      onClick: shareOnLinkedIn,
      color: 'bg-[#0A66C2] hover:bg-[#004182] text-white'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'MessageCircle',
      onClick: shareOnMessageCircle,
      color: 'bg-[#25D366] hover:bg-[#128C7E] text-white'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      onClick: shareByEmail,
      color: 'bg-stone-700 hover:bg-stone-600 text-white'
    },
    {
      icon: copied ? <Check className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />,
      label: copied ? (lang === 'es' ? 'Copiado' : 'Copied') : (lang === 'es' ? 'Copiar link' : 'Copy link'),
      onClick: copyToClipboard,
      color: copied ? 'bg-green-600 text-white' : 'bg-stone-700 hover:bg-stone-600 text-white'
    }
  ];

  if (variant === 'icon-bar') {
    return (
      <div className="flex items-center gap-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={`p-2 rounded-full transition-all ${button.color} ${button.primary ? '' : 'opacity-70 hover:opacity-100'}`}
            title={button.label}
          >
            {button.icon}
          </button>
        ))}
      </div>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-4 py-2 bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold rounded-sm transition-all"
        >
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-mono">{lang === 'es' ? 'Compartir' : 'Share'}</span>
        </button>

        {showDropdown && (
          <div className="absolute top-full mt-2 right-0 bg-[#0a0a0a] border border-white/10 rounded-sm shadow-2xl overflow-hidden z-50">
            <div className="p-2 grid grid-cols-1 gap-1">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => {
                    button.onClick();
                    if (index !== 6) setShowDropdown(false); // Keep dropdown open for copy
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-all ${button.color} ${
                    button.primary ? '' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  {button.icon}
                  {showLabels && <span className="text-sm">{button.label}</span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default buttons variant
  return (
    <div className="flex flex-wrap items-center gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`flex items-center gap-2 px-4 py-2 rounded-sm transition-all ${button.color} ${
            button.primary ? 'font-bold' : ''
          }`}
        >
          {button.icon}
          {showLabels && <span className="text-sm">{button.label}</span>}
        </button>
      ))}
    </div>
  );
}

// Quick share button for inline use
export function QuickShareButton({
  url,
  lang = 'es'
}: {
  url?: string;
  lang?: 'es' | 'en';
}) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    const linkToCopy = url || (typeof window !== 'undefined' ? window.location.href : '');
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <button
      onClick={copyLink}
      className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-all text-sm font-mono ${
        copied
          ? 'bg-green-600 text-white'
          : 'bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold'
      }`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>{lang === 'es' ? 'Copiado' : 'Copied'}</span>
        </>
      ) : (
        <>
          <LinkIcon className="w-4 h-4" />
          <span>{lang === 'es' ? 'Copiar link' : 'Copy link'}</span>
        </>
      )}
    </button>
  );
}
