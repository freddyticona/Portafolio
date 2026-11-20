import React, { useState, useMemo, useEffect } from 'react';
import { BlogPost } from '../types';
import { Search, Calendar, ArrowRight, Tag, Mail, TrendingUp, BookOpen } from 'lucide-react';
import BlogCard from './BlogCard';
import NewsletterSignup from './NewsletterSignup';
import { formatPostDate, postDateTimestamp } from '../lib/date';

interface BlogLayoutProps {
  posts: BlogPost[];
  guides?: BlogPost[];
  lang: 'es' | 'en';
  t: any;
  onArticleClick: (post: BlogPost) => void;
  title: string;
  subtitle: string;
  label: string;
}

export default function BlogLayout({ posts, guides = [], lang, t, onArticleClick, title, subtitle, label }: BlogLayoutProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    const catSet = new Set<string>();
    posts.forEach(p => {
      const cat = lang === 'es' ? p.categoryEs : p.categoryEn;
      if (cat) catSet.add(cat);
    });
    return ['all', ...Array.from(catSet)];
  }, [posts, lang]);

  const filteredPosts = useMemo(() => {
    return posts
      .filter(p => {
        const title = (lang === 'es' ? p.titleEs : p.titleEn).toLowerCase();
        const excerpt = (lang === 'es' ? p.excerptEs : p.excerptEn).toLowerCase();
        const cat = lang === 'es' ? p.categoryEs : p.categoryEn;
        const matchesSearch = !searchTerm || title.includes(searchTerm.toLowerCase()) || excerpt.includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || cat === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => postDateTimestamp(b.date) - postDateTimestamp(a.date));
  }, [posts, searchTerm, selectedCategory, lang]);

  const recentPosts = useMemo(() => {
    return [...posts].sort((a, b) => postDateTimestamp(b.date) - postDateTimestamp(a.date)).slice(0, 4);
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

  // ─── Rutas de aprendizaje: 3 puntos de entrada según el interés ─────────
  // El listado tiene 73 artículos; sin una entrada clara el visitante rebota
  // (95 % de rebote medido en GA4). Estas rutas le dan un primer clic fácil.
  const learningPaths = useMemo(() => {
    const paths = lang === 'es'
      ? [
          { title: 'Filmación y técnica', desc: 'Cámara, luz, sonido y decisiones de rodaje.', keys: ['film', 'cámara', 'camara', 'luz', 'sonido', 'corte', 'grabación', 'grabacion', 'cámara', 'lente', 'ilumin'] },
          { title: 'Edición y postproducción', desc: 'Montaje, color, sonido y entrega final.', keys: ['edición', 'edicion', 'davinci', 'color', 'montaje', 'subtít', 'subtit', 'export', 'postproduc'] },
          { title: 'Tecnología y creación', desc: 'Herramientas, IA y flujos de trabajo.', keys: ['ia', 'inteligencia', 'herramient', 'workflow', 'automat', 'mcp', 'artcraft', 'software'] },
        ]
      : [
          { title: 'Shooting & technique', desc: 'Camera, light, sound and on-set decisions.', keys: ['film', 'camera', 'light', 'sound', 'cut', 'lens', 'shoot', 'lighting'] },
          { title: 'Editing & post-production', desc: 'Assembly, color, sound and final delivery.', keys: ['edit', 'davinci', 'color', 'subtitle', 'export', 'post-production'] },
          { title: 'Tech & creation', desc: 'Tools, AI and production workflows.', keys: ['ai', 'tool', 'workflow', 'automat', 'mcp', 'artcraft', 'software'] },
        ];

    const used = new Set<string>();
    return paths.map(path => {
      const match = posts.find(p => {
        if (used.has(p.id)) return false;
        const hay = `${p.titleEs} ${p.titleEn} ${p.excerptEs} ${p.excerptEn} ${p.categoryEs} ${p.categoryEn}`.toLowerCase();
        return path.keys.some(k => hay.includes(k.toLowerCase()));
      });
      if (match) used.add(match.id);
      return { ...path, post: match ?? null };
    });
  }, [posts, lang]);

  const featuredGuides = useMemo(
    () => [...guides].sort((a, b) => postDateTimestamp(b.date) - postDateTimestamp(a.date)).slice(0, 3),
    [guides]
  );

  // Carga progresiva: el listado completo tiene 73 artículos; renderizarlo todo
  // de una vez penaliza el LCP en móvil (y el HTML queda enormous para el crawler).
  const PAGE_SIZE = 18;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visiblePosts = filteredPosts.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchTerm, selectedCategory, lang, filteredPosts.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="text-center space-y-3 mb-12 gsap-fade">
        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">{label}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">{title}</h1>
        <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">{subtitle}</p>
        <a
          href="/servicios"
          className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold text-[11px] font-mono font-bold uppercase tracking-widest rounded-sm transition-all duration-300"
        >
          {lang === 'es' ? 'Ver servicios y precios' : 'See services and prices'}
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="/guias"
          className="group mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-left sm:text-center bg-white/[0.02] border border-white/5 hover:border-gold/30 rounded-sm px-5 py-4 transition-colors duration-300"
        >
          <BookOpen className="w-5 h-5 text-gold shrink-0" />
          <span className="space-y-1">
            <span className="block text-xs font-bold text-white group-hover:text-gold transition-colors font-display">
              {lang === 'es' ? 'Guías de trámites en Bolivia' : 'Bolivia procedure guides'}
            </span>
            <span className="block text-[11px] text-stone-400">
              {lang === 'es'
                ? 'Requisitos, costos actualizados y enlaces oficiales de trámites.'
                : 'Requirements, updated costs and official links.'}
            </span>
          </span>
          <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 shrink-0" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content — Posts */}
        <div className="lg:col-span-2 space-y-8">
          {/* Empieza aquí — rutas de aprendizaje */}
          <section className="space-y-4">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg md:text-xl font-extrabold text-white font-display">
                {lang === 'es' ? 'Empieza aquí' : 'Start here'}
              </h2>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                {lang === 'es' ? '3 rutas · 1 clic' : '3 paths · 1 click'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {learningPaths.map(path => (
                <div key={path.title} className="bg-white/[0.02] border border-white/5 rounded-sm p-4 flex flex-col gap-2">
                  <span className="text-xs font-bold text-white font-display">{path.title}</span>
                  <span className="text-[11px] text-stone-400 leading-relaxed">{path.desc}</span>
                  {path.post ? (
                    <button
                      onClick={() => onArticleClick(path.post!)}
                      className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-gold hover:text-gold-hover transition-colors text-left cursor-pointer"
                    >
                      {lang === 'es' ? 'Leer' : 'Read'}
                      <ArrowRight className="w-3 h-3 shrink-0" />
                    </button>
                  ) : (
                    <span className="mt-1 text-[11px] font-mono text-stone-600">
                      {lang === 'es' ? 'Próximamente' : 'Coming soon'}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Guías destacadas — tráfico de intención local */}
          {featuredGuides.length > 0 && (
            <section className="space-y-4 bg-white/[0.01] border border-white/5 rounded-sm p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-base font-extrabold text-white font-display flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gold" />
                  {lang === 'es' ? 'Guías de trámites más recientes' : 'Latest procedure guides'}
                </h2>
                <a href="/guias" className="text-[11px] font-mono uppercase tracking-widest text-gold hover:text-gold-hover transition-colors">
                  {lang === 'es' ? 'Ver todas' : 'See all'}
                </a>
              </div>
              <ul className="space-y-2">
                {featuredGuides.map(g => (
                  <li key={g.id}>
                    <a
                      href={`/guias/${g.slug}`}
                      className="flex items-start gap-2 text-sm text-stone-300 hover:text-gold transition-colors leading-snug"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-gold/60 shrink-0 mt-1" />
                      <span>{lang === 'es' ? g.titleEs : g.titleEn}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Categorías como chips (scroll horizontal) */}
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {categories.map(cat => {
              const count = cat === 'all' ? posts.length : posts.filter(p => (lang === 'es' ? p.categoryEs : p.categoryEn) === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-3 py-1.5 rounded-sm text-[11px] font-mono border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gold text-black border-gold font-bold'
                      : 'text-stone-400 border-white/10 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {categoryLabel(cat)} · {count}
                </button>
              );
            })}
          </div>
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gsap-stagger">
                {visiblePosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    lang={lang}
                    t={t}
                    onClick={() => onArticleClick(post)}
                  />
                ))}
              </div>

              {visibleCount < filteredPosts.length && (
                <div className="text-center pt-2">
                  <button
                    onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-gold hover:bg-gold text-stone-300 hover:text-black rounded-sm text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                  >
                    {lang === 'es'
                      ? `Cargar más (${filteredPosts.length - visibleCount} restantes)`
                      : `Load more (${filteredPosts.length - visibleCount} remaining)`}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </>
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
                      <span className={`text-[11px] font-bold ${isActive ? 'text-gold' : 'text-stone-600'}`}>{count}</span>
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
                        <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatPostDate(post.date, lang === 'es' ? 'es-BO' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-sm border transition-all duration-200 cursor-pointer ${
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
            <NewsletterSignup lang={lang} source="listado-blog" compact />
          </div>
        </aside>
      </div>
    </div>
  );
}
