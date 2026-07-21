/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Save, Trash2, Plus, Edit2, Eye, X, FileText, FolderOpen, Calendar,
  Image as ImageIcon, Tag, Clock, CheckCircle, AlertCircle
} from 'lucide-react';

interface CMSItem {
  id: string;
  type: 'blog' | 'project';
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  category: string;
  tags: string[];
  thumbnail?: string;
  date: string;
  published: boolean;
  featured?: boolean;
}

interface CMSPanelProps {
  lang?: 'es' | 'en';
  onSave?: (items: CMSItem[]) => void;
}

export default function CMSPanel({ lang = 'es', onSave }: CMSPanelProps) {
  const [items, setItems] = useState<CMSItem[]>([]);
  const [editingItem, setEditingItem] = useState<CMSItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [activeTab, setActiveTab] = useState<'blog' | 'projects'>('blog');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Cargar items desde localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem('cmsItems');
    if (savedItems) {
      try {
        setItems(JSON.parse(savedItems));
      } catch (e) {
        console.error('Error loading CMS items:', e);
      }
    } else {
      // Items de ejemplo
      setItems([
        {
          id: 'blog-1',
          type: 'blog',
          title: 'La importancia del ritmo en el montaje',
          titleEn: 'The importance of pacing in editing',
          excerpt: 'Técnicas de edición para mantener la audiencia comprometida',
          excerptEn: 'Editing techniques to keep the audience engaged',
          content: 'Contenido completo del artículo...',
          contentEn: 'Full article content...',
          category: 'Producción',
          tags: ['edición', 'montaje', 'ritmo'],
          date: '2024-01-15',
          published: true,
          featured: true
        },
        {
          id: 'project-1',
          type: 'project',
          title: 'Documental: Raíces de la Tierra',
          titleEn: 'Documentary: Roots of the Earth',
          excerpt: 'Documental sobre culturas ancestrales bolivianas',
          excerptEn: 'Documentary about Bolivian ancestral cultures',
          content: 'Descripción completa del proyecto...',
          contentEn: 'Full project description...',
          category: 'Documental',
          tags: ['cultura', 'tradición', 'Bolivia'],
          date: '2023-11-20',
          published: true,
          featured: true
        }
      ]);
    }
  }, []);

  // Guardar items en localStorage
  const saveItems = (newItems: CMSItem[]) => {
    setSaveStatus('saving');
    localStorage.setItem('cmsItems', JSON.stringify(newItems));
    setItems(newItems);
    onSave?.(newItems);
    setTimeout(() => setSaveStatus('saved'), 500);
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  const handleCreate = () => {
    const newItem: CMSItem = {
      id: `${activeTab}-${Date.now()}`,
      type: activeTab === 'blog' ? 'blog' : 'project',
      title: lang === 'es' ? 'Nuevo artículo' : 'New article',
      titleEn: lang === 'es' ? 'New article' : 'New article',
      excerpt: '',
      excerptEn: '',
      content: '',
      contentEn: '',
      category: '',
      tags: [],
      date: new Date().toISOString().split('T')[0],
      published: false
    };
    setEditingItem(newItem);
    setIsCreating(true);
  };

  const handleEdit = (item: CMSItem) => {
    setEditingItem({ ...item });
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (confirm(lang === 'es' ? '¿Eliminar este elemento?' : 'Delete this item?')) {
      saveItems(items.filter(i => i.id !== id));
    }
  };

  const handleSave = () => {
    if (!editingItem) return;

    const newItems = isCreating
      ? [...items, editingItem]
      : items.map(i => i.id === editingItem.id ? editingItem : i);

    saveItems(newItems);
    setEditingItem(null);
    setIsCreating(false);
  };

  const handleTogglePublish = (id: string) => {
    const newItems = items.map(i =>
      i.id === id ? { ...i, published: !i.published } : i
    );
    saveItems(newItems);
  };

  const filteredItems = items.filter(i => i.type === activeTab);

  const getStatusBadge = (item: CMSItem) => {
    if (item.published) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-sm text-xs text-green-400 font-mono">
          <CheckCircle className="w-3 h-3" />
          {lang === 'es' ? 'Publicado' : 'Published'}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded-sm text-xs text-amber-400 font-mono">
        <Clock className="w-3 h-3" />
        {lang === 'es' ? 'Borrador' : 'Draft'}
      </span>
    );
  };

  if (editingItem) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white font-display">
              {isCreating
                ? (lang === 'es' ? 'Crear nuevo' : 'Create new')
                : (lang === 'es' ? 'Editar' : 'Edit')
              } {activeTab === 'blog' ? (lang === 'es' ? 'artículo' : 'article') : (lang === 'es' ? 'proyecto' : 'project')}
            </h2>
          </div>
          <button
            onClick={() => {
              setEditingItem(null);
              setIsCreating(false);
            }}
            className="p-2 hover:bg-white/5 rounded-sm transition-colors"
          >
            <X className="w-5 h-5 text-stone-400" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Título Español */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              Título (Español)
            </label>
            <input
              type="text"
              value={editingItem.title}
              onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:outline-none transition-colors"
              placeholder="Título en español..."
            />
          </div>

          {/* Título Inglés */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              Title (English)
            </label>
            <input
              type="text"
              value={editingItem.titleEn}
              onChange={(e) => setEditingItem({ ...editingItem, titleEn: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:outline-none transition-colors"
              placeholder="Title in English..."
            />
          </div>

          {/* Extracto Español */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              Extracto (Español)
            </label>
            <textarea
              value={editingItem.excerpt}
              onChange={(e) => setEditingItem({ ...editingItem, excerpt: e.target.value })}
              rows={2}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:outline-none transition-colors resize-none"
              placeholder="Breve descripción..."
            />
          </div>

          {/* Extracto Inglés */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              Excerpt (English)
            </label>
            <textarea
              value={editingItem.excerptEn}
              onChange={(e) => setEditingItem({ ...editingItem, excerptEn: e.target.value })}
              rows={2}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:outline-none transition-colors resize-none"
              placeholder="Brief description..."
            />
          </div>

          {/* Contenido Español */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              Contenido (Español)
            </label>
            <textarea
              value={editingItem.content}
              onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
              rows={8}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:outline-none transition-colors resize-none"
              placeholder="Contenido completo..."
            />
          </div>

          {/* Contenido Inglés */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              Content (English)
            </label>
            <textarea
              value={editingItem.contentEn}
              onChange={(e) => setEditingItem({ ...editingItem, contentEn: e.target.value })}
              rows={8}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:outline-none transition-colors resize-none"
              placeholder="Full content..."
            />
          </div>

          {/* Categoría */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              {lang === 'es' ? 'Categoría' : 'Category'}
            </label>
            <input
              type="text"
              value={editingItem.category}
              onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:outline-none transition-colors"
              placeholder={lang === 'es' ? 'Ej: Documental, TV, Corporativo...' : 'Eg: Documentary, TV, Corporate...'}
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              Tags (separados por coma)
            </label>
            <input
              type="text"
              value={editingItem.tags.join(', ')}
              onChange={(e) => setEditingItem({
                ...editingItem,
                tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
              })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:outline-none transition-colors"
              placeholder={lang === 'es' ? 'Ej: bolivia, cultura, naturaleza...' : 'Eg: bolivia, culture, nature...'}
            />
          </div>

          {/* Imagen Principal */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              {lang === 'es' ? 'URL de imagen' : 'Image URL'}
            </label>
            <input
              type="text"
              value={editingItem.thumbnail || ''}
              onChange={(e) => setEditingItem({ ...editingItem, thumbnail: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-stone-500 focus:border-gold focus:outline-none transition-colors"
              placeholder="/images/..."
            />
          </div>

          {/* Fecha */}
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">
              {lang === 'es' ? 'Fecha' : 'Date'}
            </label>
            <input
              type="date"
              value={editingItem.date}
              onChange={(e) => setEditingItem({ ...editingItem, date: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
            />
          </div>

          {/* Publicado / Destacado */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={editingItem.published}
                onChange={(e) => setEditingItem({ ...editingItem, published: e.target.checked })}
                className="w-4 h-4 rounded-sm border-white/20 bg-white/5 text-gold focus:ring-gold focus:ring-offset-0"
              />
              <span className="text-sm text-stone-400">
                {lang === 'es' ? 'Publicado' : 'Published'}
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={editingItem.featured || false}
                onChange={(e) => setEditingItem({ ...editingItem, featured: e.target.checked })}
                className="w-4 h-4 rounded-sm border-white/20 bg-white/5 text-gold focus:ring-gold focus:ring-offset-0"
              />
              <span className="text-sm text-stone-400">
                {lang === 'es' ? 'Destacado' : 'Featured'}
              </span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setEditingItem(null);
                setIsCreating(false);
              }}
              className="px-4 py-2 text-sm text-stone-400 hover:text-white transition-colors"
            >
              {lang === 'es' ? 'Cancelar' : 'Cancel'}
            </button>

            <div className="flex items-center gap-3">
              {saveStatus === 'saved' && (
                <span className="text-green-400 text-sm font-mono">
                  {lang === 'es' ? '✓ Guardado' : '✓ Saved'}
                </span>
              )}
              <button
                onClick={handleSave}
                disabled={saveStatus === 'saving'}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-sm transition-all duration-300 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {saveStatus === 'saving'
                  ? (lang === 'es' ? 'Guardando...' : 'Saving...')
                  : (lang === 'es' ? 'Guardar' : 'Save')
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white font-display">
            {lang === 'es' ? 'Gestión de Contenido' : 'Content Management'}
          </h2>
          <p className="text-stone-400 text-sm mt-1">
            {lang === 'es' ? 'Administra blog posts y proyectos del portafolio' : 'Manage blog posts and portfolio projects'}
          </p>
        </div>

        <button
          onClick={handleCreate}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-sm transition-all duration-300"
        >
          <Plus className="w-4 h-4" />
          {lang === 'es' ? 'Nuevo' : 'New'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b border-white/10">
        <button
          onClick={() => setActiveTab('blog')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-mono font-bold uppercase tracking-wider transition-colors border-b-2 ${
            activeTab === 'blog'
              ? 'border-gold text-gold'
              : 'border-transparent text-stone-400 hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4" />
          {lang === 'es' ? 'Blog' : 'Blog'}
          <span className="px-2 py-0.5 bg-white/5 rounded-full text-xs">
            {items.filter(i => i.type === 'blog').length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-mono font-bold uppercase tracking-wider transition-colors border-b-2 ${
            activeTab === 'projects'
              ? 'border-gold text-gold'
              : 'border-transparent text-stone-400 hover:text-white'
          }`}
        >
          <FolderOpen className="w-4 h-4" />
          {lang === 'es' ? 'Proyectos' : 'Projects'}
          <span className="px-2 py-0.5 bg-white/5 rounded-full text-xs">
            {items.filter(i => i.type === 'project').length}
          </span>
        </button>
      </div>

      {/* Items List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-4">
              <FolderOpen className="w-8 h-8 text-stone-500" />
            </div>
            <p className="text-stone-400 text-sm">
              {lang === 'es'
                ? `No hay ${activeTab === 'blog' ? 'artículos' : 'proyectos'} aún`
                : `No ${activeTab === 'blog' ? 'articles' : 'projects'} yet`
              }
            </p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-sm p-4 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Thumbnail */}
                {item.thumbnail ? (
                  <div className="w-20 h-14 bg-white/5 rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-14 bg-white/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-6 h-6 text-stone-600" />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium truncate">
                        {lang === 'es' ? item.title : item.titleEn}
                      </h3>
                      <p className="text-stone-400 text-sm truncate mt-1">
                        {lang === 'es' ? item.excerpt : item.excerptEn}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        {getStatusBadge(item)}
                        <span className="text-stone-500 text-xs font-mono">
                          {item.date}
                        </span>
                        {item.category && (
                          <>
                            <span className="text-stone-600">•</span>
                            <span className="text-stone-400 text-xs">
                              {item.category}
                            </span>
                          </>
                        )}
                        {item.featured && (
                          <>
                            <span className="text-stone-600">•</span>
                            <span className="text-gold text-xs font-mono">
                              {lang === 'es' ? 'Destacado' : 'Featured'}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleTogglePublish(item.id)}
                        className="p-2 hover:bg-white/5 rounded-sm transition-colors group"
                        title={item.published
                          ? (lang === 'es' ? 'Despublicar' : 'Unpublish')
                          : (lang === 'es' ? 'Publicar' : 'Publish')
                        }
                      >
                        <Eye className={`w-4 h-4 ${item.published ? 'text-green-400' : 'text-stone-500 group-hover:text-green-400'}`} />
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 hover:bg-white/5 rounded-sm transition-colors"
                        title={lang === 'es' ? 'Editar' : 'Edit'}
                      >
                        <Edit2 className="w-4 h-4 text-stone-500 hover:text-white" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 hover:bg-red-500/10 rounded-sm transition-colors"
                        title={lang === 'es' ? 'Eliminar' : 'Delete'}
                      >
                        <Trash2 className="w-4 h-4 text-stone-500 hover:text-red-400" />
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  {item.tags.length > 0 && (
                    <div className="flex items-center gap-2 mt-3">
                      <Tag className="w-3 h-3 text-stone-500" />
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-white/5 rounded-sm text-xs text-stone-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
