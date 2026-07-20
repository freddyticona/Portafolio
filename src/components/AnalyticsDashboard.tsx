/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  BarChart3,
  Calendar,
  RefreshCw,
  Download,
  FileText,
  Video,
  Image
} from 'lucide-react';
import { analytics } from '../analytics';

interface AnalyticsDashboardProps {
  lang?: 'es' | 'en';
}

export default function AnalyticsDashboard({ lang = 'es' }: AnalyticsDashboardProps) {
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month'>('week');
  const [stats, setStats] = useState({
    sessions: 0,
    pageViews: 0,
    events: 0,
    topPages: [] as Array<{ page: string; views: number }>,
    popularContent: [] as Array<{ type: string; count: number }>
  });
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadStats();
  }, [timeframe]);

  const loadStats = () => {
    setRefreshing(true);

    const days = timeframe === 'day' ? 1 : timeframe === 'week' ? 7 : 30;
    const sessions = analytics.getSessions(days);
    const pageViews = analytics.getPageViews(days);
    const topPages = analytics.getTopPages(days, 8);

    // Calcular eventos por tipo
    const popularContent: Array<{ type: string; count: number }> = [
      { type: lang === 'es' ? 'Vistas de página' : 'Page views', count: Object.values(pageViews).reduce((a, b) => a + b, 0) },
      { type: lang === 'es' ? 'Clics en portafolio' : 'Portfolio clicks', count: sessions.filter(s => s.events.some(e => e.element === 'portfolio')).length },
      { type: lang === 'es' ? 'Formularios enviados' : 'Forms submitted', count: sessions.filter(s => s.events.some(e => e.type === 'form_submit')).length },
      { type: lang === 'es' ? 'Videos reproducidos' : 'Videos played', count: sessions.filter(s => s.events.some(e => e.type === 'video_play')).length }
    ];

    setStats({
      sessions: sessions.length,
      pageViews: Object.values(pageViews).reduce((a, b) => a + b, 0),
      events: sessions.reduce((acc, s) => acc + s.events.length, 0),
      topPages,
      popularContent
    });

    setRefreshing(false);
  };

  const exportData = () => {
    const data = {
      exportDate: new Date().toISOString(),
      timeframe,
      stats
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics_${timeframe}_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat(lang === 'es' ? 'es-BO' : 'en-US').format(num);
  };

  const getPageIcon = (page: string) => {
    if (page.includes('blog')) return <FileText className="w-4 h-4" />;
    if (page.includes('portafolio')) return <Image className="w-4 h-4" />;
    if (page.includes('cv')) return <FileText className="w-4 h-4" />;
    return <Eye className="w-4 h-4" />;
  };

  const getPageLabel = (page: string) => {
    const labels: Record<string, { es: string; en: string }> = {
      inicio: { es: 'Inicio', en: 'Home' },
      'sobre-mi': { es: 'Sobre Mí', en: 'About' },
      portafolio: { es: 'Portafolio', en: 'Portfolio' },
      cv: { es: 'CV', en: 'CV' },
      blog: { es: 'Blog', en: 'Blog' },
      contacto: { es: 'Contacto', en: 'Contact' }
    };

    return labels[page]?.[lang] || page;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-gold" />
            {lang === 'es' ? 'Analytics' : 'Analytics'}
          </h2>
          <p className="text-stone-400 text-sm mt-1">
            {lang === 'es' ? 'Estadísticas de uso del portafolio' : 'Portfolio usage statistics'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Timeframe selector */}
          <div className="flex items-center bg-white/5 rounded-sm border border-white/10">
            {[
              { value: 'day', label: lang === 'es' ? '24h' : '24h' },
              { value: 'week', label: lang === 'es' ? '7d' : '7d' },
              { value: 'month', label: lang === 'es' ? '30d' : '30d' }
            ].map(option => (
              <button
                key={option.value}
                onClick={() => setTimeframe(option.value as any)}
                className={`px-3 py-1.5 text-xs font-mono uppercase transition-colors ${
                  timeframe === option.value
                    ? 'bg-gold text-black'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <button
            onClick={loadStats}
            className={`p-2 rounded-sm transition-colors ${refreshing ? 'animate-spin' : ''}`}
          >
            <RefreshCw className="w-4 h-4 text-stone-400" />
          </button>

          <button
            onClick={exportData}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-stone-400 hover:text-white transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'es' ? 'Exportar' : 'Export'}</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sessions */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-4 hover:border-gold/20 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-blue-500/10 rounded-sm">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xs text-stone-500 font-mono">{timeframe}</span>
          </div>
          <div className="text-2xl font-bold text-white font-display">
            {formatNumber(stats.sessions)}
          </div>
          <div className="text-xs text-stone-400 mt-1">
            {lang === 'es' ? 'Sesiones' : 'Sessions'}
          </div>
        </div>

        {/* Page Views */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-4 hover:border-gold/20 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-green-500/10 rounded-sm">
              <Eye className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xs text-stone-500 font-mono">{timeframe}</span>
          </div>
          <div className="text-2xl font-bold text-white font-display">
            {formatNumber(stats.pageViews)}
          </div>
          <div className="text-xs text-stone-400 mt-1">
            {lang === 'es' ? 'Vistas de página' : 'Page views'}
          </div>
        </div>

        {/* Events */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-4 hover:border-gold/20 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-purple-500/10 rounded-sm">
              <MousePointer className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-xs text-stone-500 font-mono">{timeframe}</span>
          </div>
          <div className="text-2xl font-bold text-white font-display">
            {formatNumber(stats.events)}
          </div>
          <div className="text-xs text-stone-400 mt-1">
            {lang === 'es' ? 'Eventos' : 'Events'}
          </div>
        </div>

        {/* Engagement Rate */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-4 hover:border-gold/20 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-gold/10 rounded-sm">
              <TrendingUp className="w-5 h-5 text-gold" />
            </div>
            <span className="text-xs text-stone-500 font-mono">{timeframe}</span>
          </div>
          <div className="text-2xl font-bold text-white font-display">
            {stats.sessions > 0 ? formatNumber(Math.round(stats.pageViews / stats.sessions * 10) / 10) : '0'}
          </div>
          <div className="text-xs text-stone-400 mt-1">
            {lang === 'es' ? 'Páginas/sesión' : 'Pages/session'}
          </div>
        </div>
      </div>

      {/* Top Pages & Popular Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-5">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-gold" />
            {lang === 'es' ? 'Páginas más visitadas' : 'Top Pages'}
          </h3>

          {stats.topPages.length === 0 ? (
            <div className="text-center py-8 text-stone-500 text-sm">
              {lang === 'es' ? 'Sin datos aún' : 'No data yet'}
            </div>
          ) : (
            <div className="space-y-3">
              {stats.topPages.map((item, index) => (
                <div
                  key={item.page}
                  className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-sm transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center bg-gold/10 rounded-sm text-xs font-bold text-gold font-mono">
                    {index + 1}
                  </div>
                  {getPageIcon(item.page)}
                  <span className="flex-1 text-sm text-white">
                    {getPageLabel(item.page)}
                  </span>
                  <span className="text-sm text-stone-400 font-mono">
                    {formatNumber(item.views)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Popular Content */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-5">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-gold" />
            {lang === 'es' ? 'Contenido popular' : 'Popular Content'}
          </h3>

          {stats.popularContent.length === 0 ? (
            <div className="text-center py-8 text-stone-500 text-sm">
              {lang === 'es' ? 'Sin datos aún' : 'No data yet'}
            </div>
          ) : (
            <div className="space-y-3">
              {stats.popularContent.map((item, index) => (
                <div
                  key={item.type}
                  className="flex items-center justify-between p-2 hover:bg-white/5 rounded-sm transition-colors"
                >
                  <span className="text-sm text-white">{item.type}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold rounded-full"
                        style={{
                          width: `${Math.min((item.count / Math.max(...stats.popularContent.map(c => c.count))) * 100, 100)}%`
                        }}
                      />
                    </div>
                    <span className="text-sm text-stone-400 font-mono w-8 text-right">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer note */}
      <div className="text-xs text-stone-500 text-center py-4">
        {lang === 'es'
          ? 'Datos almacenados localmente en tu navegador. No se comparte información con servicios externos.'
          : 'Data stored locally in your browser. No information is shared with external services.'
        }
      </div>
    </div>
  );
}
