import { useState } from 'react';
import { BlogPost } from '../types';
import NewsCard from './NewsCard';
import BlogDetail from './BlogDetail';
import { TrendingUp, Flame } from 'lucide-react';

interface NewsPortalProps {
  posts: BlogPost[];
  lang: 'es' | 'en';
  t: any;
  onBack?: () => void;
}

const CATEGORIES = ['all', 'pais', 'santa-cruz', 'mundo', 'economia', 'deportes', 'cultura', 'tecnologia'] as const;

export default function NewsPortal({ posts, lang, t, onBack }: NewsPortalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const breakingPosts = posts.filter(p => p.breaking);
  const featuredPosts = posts.filter(p => p.featured && !p.breaking);
  const heroPost = breakingPosts[0] || featuredPosts[0] || posts[0];

  const filteredPosts = activeCategory === 'all'
    ? posts.filter(p => p.id !== heroPost?.id)
    : posts.filter(p => {
        const cat = p.categoryEs?.toLowerCase().replace(/\s+/g, '-');
        return cat === activeCategory && p.id !== heroPost?.id;
      });

  const trendingPosts = [...posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);

  const categoryLabel = (cat: string) => {
    const key = `newsCategory${cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, '')}`;
    return (t as any)[key] || cat;
  };

  if (activePostId) {
    const post = newsPosts.find(p => p.id === activePostId);
    if (!post) return null;
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn">
        <BlogDetail
          post={post}
          lang={lang}
          t={t}
          onBack={() => setActivePostId(null)}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
          {lang === 'es' ? 'Cobertura Periodística' : 'Press Coverage'}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
          {t.newsTitle}
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
          {t.newsSubtitle}
        </p>
      </div>

      {/* Hero Breaking / Featured */}
      {heroPost && (
        <div className="mb-10">
          <NewsCard
            post={heroPost}
            lang={lang}
            onClick={() => setActivePostId(heroPost.id)}
            variant="hero"
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-white/5" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-sm text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold text-black'
                    : 'bg-white/[0.02] text-stone-400 hover:text-gold hover:border-gold/30 border border-white/5'
                }`}
              >
                {cat === 'all' ? t.newsAll : categoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* News Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <NewsCard
                  key={post.id}
                  post={post}
                  lang={lang}
                  onClick={() => setActivePostId(post.id)}
                  variant="default"
                />
              ))}
            </div>
          ) : (
            <p className="text-stone-500 text-sm font-mono text-center py-12">
              {t.newsEmpty}
            </p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Trending */}
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold">
              <TrendingUp className="w-4 h-4" />
              <span>{t.newsTrending}</span>
            </div>
            <div className="space-y-1">
              {trendingPosts.map((post, i) => (
                <div
                  key={post.id}
                  onClick={() => setActivePostId(post.id)}
                  className="group cursor-pointer flex items-start gap-3 p-2 hover:bg-white/[0.03] rounded-sm transition-colors"
                >
                  <span className="text-lg font-black text-stone-600 font-display tabular-nums leading-none mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[11px] font-semibold text-white leading-tight line-clamp-2 group-hover:text-gold transition-colors">
                      {lang === 'es' ? post.titleEs : post.titleEn}
                    </h4>
                    <span className="text-[9px] font-mono text-stone-500 flex items-center gap-1 mt-1">
                      <Flame className="w-3 h-3 text-red-500/70" />
                      {post.views || 0} {lang === 'es' ? 'lecturas' : 'reads'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
