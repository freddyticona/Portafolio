import React, { useState, useMemo } from 'react';
import { BlogPost, ContentType } from '../types';
import NewsCard from './NewsCard';
import { TrendingUp, Flame, Search, SlidersHorizontal, ChevronDown, List, Sparkles, Newspaper, Eye, Mail } from 'lucide-react';
import { TranslationT } from '../types.translation';

interface NewsPortalProps {
  posts: BlogPost[];
  lang: 'es' | 'en';
  t: TranslationT;
  onArticleClick: (post: BlogPost) => void;
}

const categoryColors: Record<string, string> = {
  'Mundo': 'bg-sky-500/15 text-sky-400 border-sky-500/25',
  'World': 'bg-sky-500/15 text-sky-400 border-sky-500/25',
  'Ciencia': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  'Science': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  'Tecnología': 'bg-violet-500/15 text-violet-400 border-violet-500/25',
  'Technology': 'bg-violet-500/15 text-violet-400 border-violet-500/25',
  'Salud': 'bg-rose-500/15 text-rose-400 border-rose-500/25',
  'Health': 'bg-rose-500/15 text-rose-400 border-rose-500/25',
  'Cultura': 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  'Culture': 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  'Deportes': 'bg-orange-500/15 text-orange-400 border-orange-500/25',
  'Sports': 'bg-orange-500/15 text-orange-400 border-orange-500/25',
  'Bolivia': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
  'Salud Pública': 'bg-pink-500/15 text-pink-400 border-pink-500/25',
  'Public Health': 'bg-pink-500/15 text-pink-400 border-pink-500/25',
  'Seguridad': 'bg-red-500/15 text-red-400 border-red-500/25',
  'Safety': 'bg-red-500/15 text-red-400 border-red-500/25',
  'Entretenimiento': 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/25',
  'Entertainment': 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/25',
  'Curiosidades': 'bg-teal-500/15 text-teal-400 border-teal-500/25',
  'Curiosities': 'bg-teal-500/15 text-teal-400 border-teal-500/25',
  'Fútbol': 'bg-lime-500/15 text-lime-400 border-lime-500/25',
  'Soccer': 'bg-lime-500/15 text-lime-400 border-lime-500/25',
};

export default function NewsPortal({ posts, lang, t, onArticleClick }: NewsPortalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeContentType, setActiveContentType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'oldest'>('recent');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const breakingPosts = posts.filter(p => p.breaking);
  const featuredPosts = posts.filter(p => p.featured && !p.breaking);
  const heroPost = breakingPosts[0] || featuredPosts[0] || posts[0];

  const categories = useMemo(() => {
    const catSet = new Set<string>();
    posts.forEach(p => {
      if (p.categoryEs) catSet.add(p.categoryEs);
    });
    return ['all', ...Array.from(catSet).sort()];
  }, [posts]);

  const contentTypeOptions = useMemo(() => {
    const types: { value: string; labelEs: string; labelEn: string }[] = [
      { value: 'all', labelEs: 'Todos', labelEn: 'All' },
      { value: 'news', labelEs: 'Noticia', labelEn: 'News' },
      { value: 'analysis', labelEs: 'Análisis', labelEn: 'Analysis' },
      { value: 'opinion', labelEs: 'Opinión', labelEn: 'Opinion' },
      { value: 'reportage', labelEs: 'Reportaje', labelEn: 'Reportage' },
      { value: 'behind-scenes', labelEs: 'Detrás de Cámaras', labelEn: 'Behind the Scenes' },
      { value: 'culture', labelEs: 'Cultura', labelEn: 'Culture' }
    ];
    const used = new Set(posts.map(p => p.contentType));
    return types.filter(t => t.value === 'all' || used.has(t.value as ContentType));
  }, [posts]);

  // Tema del día: agrupar posts con topicOfDay
  const topicOfDayPosts = useMemo(() => {
    const topicMap = new Map<string, BlogPost[]>();
    posts.forEach(p => {
      if (p.topicOfDay && p.id !== heroPost?.id) {
        const existing = topicMap.get(p.topicOfDay) || [];
        existing.push(p);
        topicMap.set(p.topicOfDay, existing);
      }
    });
    return topicMap;
  }, [posts, heroPost]);

  // Editorial picks
  const editorialPicks = useMemo(() => {
    return posts.filter(p => p.editorialPick && p.id !== heroPost?.id).slice(0, 5);
  }, [posts, heroPost]);

  // De un vistazo: posts con galería de imágenes
  const atAGlance = useMemo(() => {
    const withGallery = posts.filter(p => p.images && p.images.length > 1 && p.id !== heroPost?.id);
    const withImage = posts.filter(p => p.imageUrl && p.id !== heroPost?.id);
    const combined = [...withGallery, ...withImage.filter(p => !withGallery.find(w => w.id === p.id))];
    return combined.slice(0, 4);
  }, [posts, heroPost]);

  const categoryLabel = (cat: string) => {
    if (cat === 'all') return lang === 'es' ? 'Todas' : 'All';
    const post = posts.find(p => p.categoryEs === cat || p.categoryEn === cat);
    if (post) {
      return lang === 'es' ? (post.categoryEs || cat) : (post.categoryEn || cat);
    }
    return cat;
  };

  const getCategoryBadgeClass = (catEs?: string, catEn?: string) => {
    const cat = catEs || catEn || '';
    return categoryColors[cat] || 'bg-white/10 text-stone-400 border-white/20';
  };

  const processedPosts = useMemo(() => {
    let result = posts.filter(p => p.id !== heroPost?.id);

    if (activeCategory !== 'all') {
      result = result.filter(p => {
        const catEs = p.categoryEs || '';
        const catEn = p.categoryEn || '';
        return catEs === activeCategory || catEn === activeCategory;
      });
    }

    if (activeContentType !== 'all') {
      result = result.filter(p => p.contentType === activeContentType);
    }

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      result = result.filter(p => {
        const title = (lang === 'es' ? p.titleEs : p.titleEn).toLowerCase();
        const excerpt = (lang === 'es' ? p.excerptEs : p.excerptEn).toLowerCase();
        const source = (p.source || '').toLowerCase();
        const location = (p.location || '').toLowerCase();
        return title.includes(query) || excerpt.includes(query) || source.includes(query) || location.includes(query);
      });
    }

    return result.sort((a, b) => {
      if (sortBy === 'popular') {
        return (b.views || 0) - (a.views || 0);
      }
      if (sortBy === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [posts, heroPost, activeCategory, activeContentType, searchTerm, sortBy, lang]);

  const trendingPosts = useMemo(() => {
    return [...posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
  }, [posts]);

  const visiblePosts = processedPosts.slice(0, visibleCount);

  const dateGroups = useMemo(() => {
    const groups: { date: string; posts: BlogPost[] }[] = [];
    for (const post of visiblePosts) {
      const dateKey = post.date.split('T')[0];
      const last = groups[groups.length - 1];
      if (last && last.date === dateKey) {
        last.posts.push(post);
      } else {
        groups.push({ date: dateKey, posts: [post] });
      }
    }
    return groups;
  }, [visiblePosts]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  if (!posts.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn text-center">
        <p className="text-stone-500 text-sm font-mono">
          {lang === 'es' ? 'No hay noticias disponibles en este momento.' : 'No news articles available at the moment.'}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn text-left">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block">
          {lang === 'es' ? 'Cobertura Periodística Nacional e Internacional' : 'National & International Press Coverage'}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {lang === 'es' ? 'Portal de Noticias' : 'News Portal'}
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
          {lang === 'es'
            ? 'Análisis periodístico, historias de campo y reportajes culturales de Bolivia y el mundo.'
            : 'Journalistic analysis, field stories, and cultural reports from Bolivia and around the globe.'}
        </p>
      </div>

      {/* Hero Breaking / Featured */}
      {heroPost && !searchTerm && activeCategory === 'all' && (
        <div className="mb-10">
          <NewsCard
            post={heroPost}
            lang={lang}
            onClick={() => onArticleClick(heroPost)}
            variant="hero"
          />
        </div>
      )}

      {/* Tema del día (DW-inspired) */}
      {!searchTerm && activeCategory === 'all' && topicOfDayPosts.size > 0 && (
        Array.from(topicOfDayPosts.entries()).slice(0, 1).map(([topic, topicPosts]) => (
          <div key={topic} className="mb-10 bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5 bg-gradient-to-r from-gold/5 to-transparent">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold">
                {lang === 'es' ? `Tema del día: ${topic}` : `Topic of the day: ${topic}`}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              {topicPosts.slice(0, 3).map((post) => (
                <NewsCard
                  key={post.id}
                  post={post}
                  lang={lang}
                  onClick={() => onArticleClick(post)}
                  variant="default"
                />
              ))}
            </div>
          </div>
        ))
      )}

      {/* De un vistazo (DW-inspired at a glance gallery) */}
      {!searchTerm && activeCategory === 'all' && atAGlance.length >= 3 && (
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="w-4 h-4 text-gold" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold">
              {lang === 'es' ? 'De un vistazo' : 'At a glance'}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {atAGlance.map((post) => (
              <div
                key={post.id}
                onClick={() => onArticleClick(post)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onArticleClick(post); }}
                className="group cursor-pointer relative overflow-hidden rounded-sm aspect-[4/3] bg-[#0a0a0a] border border-white/5 hover:border-gold/30 transition-all focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <img
                  src={post.imageUrl}
                  alt={lang === 'es' ? post.titleEs : post.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm border ${getCategoryBadgeClass(post.categoryEs, post.categoryEn)}`}>
                    {lang === 'es' ? post.categoryEs : post.categoryEn}
                  </span>
                  <h4 className="text-[11px] font-semibold text-white leading-tight mt-1 line-clamp-2 group-hover:text-gold transition-colors">
                    {lang === 'es' ? post.titleEs : post.titleEn}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content Type Filter Pills */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {contentTypeOptions.map((ct) => (
            <button
              key={ct.value}
              onClick={() => {
                setActiveContentType(ct.value);
                setVisibleCount(6);
              }}
              className={`px-3 py-1.5 rounded-sm text-[9px] font-mono font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                activeContentType === ct.value
                  ? 'bg-gold text-black shadow-md'
                  : 'bg-white/[0.02] text-stone-500 hover:text-gold hover:border-gold/30 border border-white/5'
              }`}
            >
              {lang === 'es' ? ct.labelEs : ct.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Search & Sort Controls Bar */}
      <div className="bg-white/[0.02] border border-white/5 p-4 rounded-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-30 backdrop-blur-md">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVisibleCount(6);
            }}
            placeholder={lang === 'es' ? 'Buscar noticias por título, tema o fuente...' : 'Search news by title, topic or source...'}
            className="w-full pl-10 pr-4 py-2 bg-black/60 border border-white/10 rounded-sm text-xs font-sans text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          <SlidersHorizontal className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs font-mono text-stone-400">
            {lang === 'es' ? 'Ordenar:' : 'Sort:'}
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-black/60 border border-white/10 rounded-sm px-3 py-2 text-xs font-mono text-stone-200 focus:outline-none focus:border-gold transition-colors cursor-pointer"
          >
            <option value="recent">{lang === 'es' ? 'Más Recientes' : 'Most Recent'}</option>
            <option value="popular">{lang === 'es' ? 'Más Leídas' : 'Most Read'}</option>
            <option value="oldest">{lang === 'es' ? 'Más Antiguas' : 'Oldest'}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {/* Category Tabs con colores mejorados (DW-inspired) */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-white/5" role="tablist" aria-label="Categorías de noticias">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-3.5 py-2 rounded-sm text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold text-black shadow-md'
                    : `${getCategoryBadgeClass(cat)} hover:opacity-80 border`
                }`}
              >
                {categoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Result Stats Counter */}
          <div className="flex items-center justify-between text-xs font-mono text-stone-500">
            <span>
              {lang === 'es' ? `Mostrando ${visiblePosts.length} de ${processedPosts.length} noticias` : `Showing ${visiblePosts.length} of ${processedPosts.length} articles`}
            </span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-gold hover:underline text-xs"
              >
                {lang === 'es' ? 'Limpiar búsqueda' : 'Clear search'}
              </button>
            )}
          </div>

          {/* News Grid agrupado por fecha */}
          {visiblePosts.length > 0 ? (
            <div className="space-y-8">
              {dateGroups.map((group) => (
                  <div key={group.date}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-sm">
                        {new Date(group.date + 'T12:00:00').toLocaleDateString(lang === 'es' ? 'es-BO' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {group.posts.map((post) => (
                        <NewsCard
                          key={post.id}
                          post={post}
                          lang={lang}
                          onClick={() => onArticleClick(post)}
                          variant="default"
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/[0.01] border border-white/5 rounded-sm space-y-3">
              <Search className="w-8 h-8 text-stone-600 mx-auto" />
              <p className="text-stone-400 text-sm font-semibold">
                {lang === 'es' ? 'No se encontraron noticias con estos criterios.' : 'No news found matching your criteria.'}
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="px-4 py-2 bg-gold/10 border border-gold/30 text-gold rounded-sm text-xs font-mono font-bold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors"
              >
                {lang === 'es' ? 'Ver todas las noticias' : 'View all news'}
              </button>
            </div>
          )}

          {/* Load More + Load All Buttons */}
          {visibleCount < processedPosts.length && (
            <div className="text-center pt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 hover:border-gold bg-white/[0.02] hover:bg-gold text-stone-300 hover:text-black rounded-sm text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg"
              >
                <span>{lang === 'es' ? 'Cargar más noticias' : 'Load more news'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => setVisibleCount(processedPosts.length)}
                className="px-5 py-3.5 border border-white/5 hover:border-gold/50 bg-white/[0.01] hover:bg-white/[0.04] text-stone-500 hover:text-gold rounded-sm text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer"
              >
                <List className="w-3.5 h-3.5 inline mr-1.5" />
                {lang === 'es' ? `Ver todas (${processedPosts.length})` : `View all (${processedPosts.length})`}
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Trending Box */}
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold pb-2 border-b border-white/5">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span>{lang === 'es' ? 'Más Leídas' : 'Trending'}</span>
            </div>
            <div className="space-y-2">
              {trendingPosts.map((post, i) => (
                <div
                  key={post.id}
                  onClick={() => onArticleClick(post)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') onArticleClick(post); }}
                  className="group cursor-pointer flex items-start gap-3 p-2 hover:bg-white/[0.04] rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <span className="text-lg font-black text-stone-600 group-hover:text-gold font-display tabular-nums leading-none mt-0.5 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1 space-y-1">
                    <h4 className="text-xs font-semibold text-white leading-snug line-clamp-2 group-hover:text-gold transition-colors font-display">
                      {lang === 'es' ? post.titleEs : post.titleEn}
                    </h4>
                    <div className="flex items-center gap-2 text-[9px] font-mono text-stone-500">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-red-500/80" />
                        {post.views || 0} {lang === 'es' ? 'lecturas' : 'reads'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Picks (DW-inspired) */}
          {editorialPicks.length > 0 && (
            <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-400 pb-2 border-b border-white/5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{lang === 'es' ? 'Picks Editoriales' : "Editor's Picks"}</span>
              </div>
              <div className="space-y-3">
                {editorialPicks.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => onArticleClick(post)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') onArticleClick(post); }}
                    className="group cursor-pointer flex gap-3 p-2 hover:bg-white/[0.04] rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <div className="w-14 h-14 shrink-0 overflow-hidden rounded-sm bg-[#0a0a0a]">
                      <img
                        src={post.imageUrl}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-1 py-0.5 rounded-sm border ${getCategoryBadgeClass(post.categoryEs, post.categoryEn)}`}>
                        {lang === 'es' ? post.categoryEs : post.categoryEn}
                      </span>
                      <h4 className="text-[11px] font-semibold text-white leading-tight line-clamp-2 group-hover:text-amber-400 transition-colors">
                        {lang === 'es' ? post.titleEs : post.titleEn}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter CTA (DW-inspired) */}
          <div className="bg-gradient-to-br from-gold/5 to-amber-900/10 border border-gold/20 rounded-sm p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold">
              <Mail className="w-4 h-4 text-gold" />
              <span>{lang === 'es' ? 'Newsletter' : 'Newsletter'}</span>
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              {lang === 'es'
                ? 'Recibe las noticias más importantes en tu correo.'
                : 'Get the most important news delivered to your inbox.'}
            </p>
            {subscribed ? (
              <p className="text-emerald-400 text-[11px] font-mono">
                {lang === 'es' ? '¡Gracias por suscribirte!' : 'Thanks for subscribing!'}
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'}
                  required
                  className="flex-1 min-w-0 px-3 py-2 bg-black/60 border border-white/10 rounded-sm text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-gold text-black rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors shrink-0"
                >
                  OK
                </button>
              </form>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
