import React, { useState, useMemo } from 'react';
import { BlogPost } from '../types';
import { Search, Calendar, ArrowRight, Tag, Mail, Send, TrendingUp } from 'lucide-react';
import BlogCard from './BlogCard';

interface BlogLayoutProps {
  posts: BlogPost[];
  lang: 'es' | 'en';
  t: any;
  onArticleClick: (post: BlogPost) => void;
  title: string;
  subtitle: string;
  label: string;
}

export default function BlogLayout({ posts, lang, t, onArticleClick, title, subtitle, label }: BlogLayoutProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = useMemo(() => {
    const catSet = new Set<string>();
    posts.forEach(p => {
      const cat = lang === 'es' ? p.categoryEs : p.categoryEn;
      if (cat) catSet.add(cat);
    });
    return ['all', ...Array.from(catSet)];
  }, [posts, lang]);

  const filteredPosts = useMemo(() => {
    return posts.filter(p => {
      const title = (lang === 'es' ? p.titleEs : p.titleEn).toLowerCase();
      const excerpt = (lang === 'es' ? p.excerptEs : p.excerptEn).toLowerCase();
      const cat = lang === 'es' ? p.categoryEs : p.categoryEn;
      const matchesSearch = !searchTerm || title.includes(searchTerm.toLowerCase()) || excerpt.includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || cat === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory, lang]);

  const recentPosts = useMemo(() => {
    return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);
  }, [posts]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(p => {
      const cat = lang === 'es' ? p.categoryEs : p.categoryEn;
      if (cat) tagSet.add(cat);
      if (p.source) tagSet.add(p.source);
      if (p.location) tagSet.add(p.location);
    });
    return Array.from(tagSet).slice(0, 12);
  }, [posts, lang]);

  const categoryLabel = (cat: string) => {
    if (cat === 'all') return lang === 'es' ? 'Todas las Categorías' : 'All Categories';
    return cat;
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="text-center space-y-3 mb-12 gsap-fade">
        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">{label}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">{title}</h1>
        <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content — Posts */}
        <div className="lg:col-span-2 space-y-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gsap-stagger">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  lang={lang}
                  t={t}
                  onClick={() => onArticleClick(post)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/[0.01] rounded-sm border border-white/5">
              <p className="text-stone-400 font-mono text-sm">
                {lang === 'es' ? 'No se encontraron artículos.' : 'No articles found.'}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 gsap-fade">
          {/* Search Widget */}
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
              <Search className="w-3.5 h-3.5" />
              {lang === 'es' ? 'Buscar' : 'Search'}
            </h3>
            <div className="relative">
              <label htmlFor="blog-search" className="sr-only">{lang === 'es' ? 'Buscar artículos' : 'Search articles'}</label>
              <input
                id="blog-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'es' ? 'Buscar artículos...' : 'Search articles...'}
                className="w-full pl-9 pr-4 py-2.5 bg-[#020202] border border-white/10 rounded-sm text-sm text-stone-300 placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-500" />
            </div>
          </div>

          {/* Categories Widget */}
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
              <Tag className="w-3.5 h-3.5" />
              {lang === 'es' ? 'Categorías' : 'Categories'}
            </h3>
            <ul className="space-y-1">
              {categories.map((cat) => {
                const count = cat === 'all' ? posts.length : posts.filter(p => (lang === 'es' ? p.categoryEs : p.categoryEn) === cat).length;
                const isActive = selectedCategory === cat;
                return (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-sm text-xs font-mono transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-gold/10 text-gold border border-gold/20'
                          : 'text-stone-400 hover:text-gold hover:bg-white/[0.03] border border-transparent'
                      }`}
                    >
                      <span>{categoryLabel(cat)}</span>
                      <span className={`text-[10px] font-bold ${isActive ? 'text-gold' : 'text-stone-600'}`}>{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Recent Posts Widget */}
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" />
              {lang === 'es' ? 'Recientes' : 'Recent Posts'}
            </h3>
            <ul className="space-y-3">
              {recentPosts.map((post) => {
                const pTitle = lang === 'es' ? post.titleEs : post.titleEn;
                const pCat = lang === 'es' ? post.categoryEs : post.categoryEn;
                return (
                  <li key={post.id}>
                    <button
                      onClick={() => onArticleClick(post)}
                      className="group flex items-start gap-3 text-left w-full cursor-pointer"
                    >
                      <div className="w-14 h-14 shrink-0 rounded-sm overflow-hidden bg-[#0a0a0a] border border-white/5">
                        <img
                          src={post.imageUrl}
                          alt={pTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <p className="text-[11px] font-semibold text-white leading-snug line-clamp-2 group-hover:text-gold transition-colors">
                          {pTitle}
                        </p>
                        <span className="text-[9px] font-mono text-stone-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-BO' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Tags Widget */}
          {allTags.length > 0 && (
            <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" />
                {lang === 'es' ? 'Etiquetas' : 'Tags'}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedCategory(tag)}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded-sm border transition-all duration-200 cursor-pointer ${
                      selectedCategory === tag
                        ? 'bg-gold/10 text-gold border-gold/20'
                        : 'bg-white/[0.03] text-stone-400 border-white/5 hover:text-gold hover:border-white/10'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Widget */}
          <div className="bg-gradient-to-br from-gold/[0.04] to-transparent border border-gold/10 rounded-sm p-5 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gold flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              {lang === 'es' ? 'Newsletter' : 'Newsletter'}
            </h3>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              {lang === 'es'
                ? 'Recibí los nuevos artículos directo en tu correo.'
                : 'Get new articles delivered to your inbox.'}
            </p>
            {subscribed ? (
              <p className="text-xs text-emerald-400 font-mono">
                {lang === 'es' ? '¡Gracias por suscribirte!' : 'Thanks for subscribing!'}
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'}
                  className="w-full px-3 py-2 bg-[#020202] border border-white/10 rounded-sm text-xs text-white placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  {lang === 'es' ? 'Suscribirme' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
