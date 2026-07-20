/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BlogPost, Comment, User, Payment } from '../types';
import CMSPanel from './CMSPanel';
import AnalyticsDashboard from './AnalyticsDashboard';
import {
  getStoredPayments,
  getPaymentStats,
  formatMoney,
  formatPaymentMethod,
  formatPaymentStatus,
  getPaymentStatusColor,
  downloadPaymentReceipt
} from '../lib/payments';
import {
  Lock,
  Save,
  Eye,
  Edit,
  Trash2,
  Plus,
  LogOut,
  Image as ImageIcon,
  FileText,
  Calendar,
  Clock,
  Video,
  MessageSquare,
  Share2,
  Type,
  X as XIcon,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  BarChart3,
  CreditCard,
  Download,
  TrendingUp,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AdminPanelProps {
  lang: 'es' | 'en';
  onBack: () => void;
}

export default function AdminPanel({ lang, onBack }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [activeTab, setActiveTab] = useState<'posts' | 'comments' | 'users' | 'cms' | 'analytics' | 'payments'>('posts');
  const [payments, setPayments] = useState<Payment[]>([]);
  const [paymentStats, setPaymentStats] = useState(getPaymentStats());

  // Cargar posts del localStorage
  useEffect(() => {
    loadPosts();
    loadComments();
    loadUsers();
    loadPayments();
  }, []);

  const loadPosts = () => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  };

  const [comments, setComments] = useState<Comment[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const loadComments = () => {
    const savedComments = localStorage.getItem('blogComments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  };

  const loadUsers = () => {
    const savedUsers = localStorage.getItem('blogUsers');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  };

  const loadPayments = () => {
    const storedPayments = getStoredPayments();
    setPayments(storedPayments);
    setPaymentStats(getPaymentStats());
  };

  // Login simple
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin2024') {
      setIsAuthenticated(true);
    } else {
      alert(lang === 'es' ? 'Contraseña incorrecta' : 'Incorrect password');
    }
  };

  // Crear nuevo post
  const createNewPost = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      slug: `new-post-${Date.now()}`,
      titleEs: 'Nuevo Artículo',
      titleEn: 'New Article',
      excerptEs: 'Resumen del artículo...',
      excerptEn: 'Article excerpt...',
      contentEs: '<p>Contenido del artículo en español...</p>',
      contentEn: '<p>Article content in English...</p>',
      date: new Date().toISOString().split('T')[0],
      readTimeEs: '5 min de lectura',
      readTimeEn: '5 min read',
      imageUrl: '/images/freddy_working.jpg',
      images: [],
      categoryEs: 'General',
      categoryEn: 'General',
      enableComments: true,
      videoUrl: '',
      font: 'Inter'
    };
    setEditingPost(newPost);
    setIsCreating(true);
  };

  // Guardar post
  const savePost = (updatedPost: BlogPost) => {
    let updatedPosts: BlogPost[];
    if (isCreating) {
      updatedPosts = [...posts, updatedPost];
    } else {
      updatedPosts = posts.map(p => p.id === updatedPost.id ? updatedPost : p);
    }
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setEditingPost(null);
    setIsCreating(false);
    loadPosts();
  };

  // Eliminar post
  const deletePost = (postId: string) => {
    if (confirm(lang === 'es' ? '¿Estás seguro de eliminar este post?' : 'Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(p => p.id !== postId);
      setPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      loadPosts();
    }
  };

  // Aprobar comentario
  const approveComment = (commentId: string) => {
    const updatedComments = comments.map(c =>
      c.id === commentId ? { ...c, status: 'approved' as const } : c
    );
    setComments(updatedComments);
    localStorage.setItem('blogComments', JSON.stringify(updatedComments));
  };

  // Eliminar comentario
  const deleteComment = (commentId: string) => {
    const updatedComments = comments.filter(c => c.id !== commentId);
    setComments(updatedComments);
    localStorage.setItem('blogComments', JSON.stringify(updatedComments));
  };

  // Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setEditingPost(null);
    setIsCreating(false);
  };

  // Si no está autenticado, mostrar login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/[0.02] border border-white/10 rounded-sm p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-2xl font-bold text-white font-display">
              {lang === 'es' ? 'Panel de Administración' : 'Admin Panel'}
            </h1>
            <p className="text-stone-400 text-sm">
              {lang === 'es' ? 'Ingresa tu contraseña para continuar' : 'Enter your password to continue'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-gold uppercase tracking-widest mb-2">
                {lang === 'es' ? 'Contraseña' : 'Password'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
            >
              {lang === 'es' ? 'Ingresar' : 'Login'}
            </button>
          </form>

          <button
            onClick={onBack}
            className="w-full text-center text-xs text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            ← {lang === 'es' ? 'Volver al sitio' : 'Back to site'}
          </button>
        </div>
      </div>
    );
  }

  // Si está editando un post
  if (editingPost) {
    return <PostEditor post={editingPost} isCreating={isCreating} lang={lang} onSave={savePost} onCancel={() => { setEditingPost(null); setIsCreating(false); }} />;
  }

  // Panel principal
  return (
    <div className="min-h-screen bg-[#050505] text-stone-300">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#050505]/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
              ← {lang === 'es' ? 'Volver' : 'Back'}
            </button>
            <h1 className="text-xl font-bold text-white font-display">
              {lang === 'es' ? 'Blog Admin' : 'Blog Admin'}
            </h1>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer">
            <LogOut className="w-4 h-4" />
            {lang === 'es' ? 'Salir' : 'Logout'}
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-4 py-4 text-xs font-mono font-bold uppercase tracking-widest border-b-2 transition-colors ${
                activeTab === 'posts'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-stone-400 hover:text-white'
              }`}
            >
              {lang === 'es' ? 'Artículos' : 'Posts'} ({posts.length})
            </button>
            <button
              onClick={() => setActiveTab('comments')}
              className={`px-4 py-4 text-xs font-mono font-bold uppercase tracking-widest border-b-2 transition-colors ${
                activeTab === 'comments'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-stone-400 hover:text-white'
              }`}
            >
              {lang === 'es' ? 'Comentarios' : 'Comments'} ({comments.filter(c => c.status === 'pending').length})
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-4 text-xs font-mono font-bold uppercase tracking-widest border-b-2 transition-colors ${
                activeTab === 'users'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-stone-400 hover:text-white'
              }`}
            >
              {lang === 'es' ? 'Usuarios' : 'Users'} ({users.length})
            </button>
            <button
              onClick={() => setActiveTab('cms')}
              className={`px-4 py-4 text-xs font-mono font-bold uppercase tracking-widest border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'cms'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-stone-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              {lang === 'es' ? 'CMS' : 'CMS'}
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-4 text-xs font-mono font-bold uppercase tracking-widest border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'analytics'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-stone-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              {lang === 'es' ? 'Analytics' : 'Analytics'}
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`px-4 py-4 text-xs font-mono font-bold uppercase tracking-widest border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'payments'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-stone-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              {lang === 'es' ? 'Pagos' : 'Payments'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Posts Tab */}
        {activeTab === 'posts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {lang === 'es' ? 'Gestionar Artículos' : 'Manage Articles'}
                </h2>
                <p className="text-sm text-stone-400 mt-1">
                  {posts.length} {posts.length === 1 ? (lang === 'es' ? 'artículo' : 'article') : (lang === 'es' ? 'artículos' : 'articles')}
                </p>
              </div>
              <button onClick={createNewPost} className="flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer">
                <Plus className="w-4 h-4" />
                {lang === 'es' ? 'Nuevo Artículo' : 'New Article'}
              </button>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-16 bg-white/[0.02] border border-white/5 rounded-sm">
                <FileText className="w-12 h-12 text-stone-600 mx-auto mb-4" />
                <p className="text-stone-400">
                  {lang === 'es' ? 'No hay artículos aún. ¡Crea el primero!' : 'No articles yet. Create the first one!'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-300">
                    <div className="aspect-video bg-[#020202] relative">
                      <img src={post.imageUrl} alt={lang === 'es' ? post.titleEs : post.titleEn} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-gold text-black text-[10px] font-mono font-bold uppercase px-2 py-1 rounded-sm">
                          {lang === 'es' ? post.categoryEs : post.categoryEn}
                        </span>
                        {post.videoUrl && (
                          <span className="bg-red-500 text-white text-[10px] font-mono font-bold uppercase px-2 py-1 rounded-sm flex items-center gap-1">
                            <Video className="w-3 h-3" />
                            Video
                          </span>
                        )}
                        {post.images && post.images.length > 0 && (
                          <span className="bg-blue-500 text-white text-[10px] font-mono font-bold uppercase px-2 py-1 rounded-sm">
                            +{post.images.length}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                        <Clock className="w-3 h-3 ml-2" />
                        {lang === 'es' ? post.readTimeEs : post.readTimeEn}
                        {post.font && (
                          <>
                            <Type className="w-3 h-3 ml-2" />
                            {post.font}
                          </>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-white line-clamp-2">
                        {lang === 'es' ? post.titleEs : post.titleEn}
                      </h3>
                      <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                        <button
                          onClick={() => { setEditingPost(post); setIsCreating(false); }}
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-sm text-xs transition-colors cursor-pointer"
                        >
                          <Edit className="w-3 h-3" />
                          {lang === 'es' ? 'Editar' : 'Edit'}
                        </button>
                        <button
                          onClick={() => deletePost(post.id)}
                          className="flex items-center justify-center px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-sm text-xs transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Comments Tab */}
        {activeTab === 'comments' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {lang === 'es' ? 'Comentarios Pendientes' : 'Pending Comments'}
              </h2>
              <p className="text-sm text-stone-400 mt-1">
                {comments.filter(c => c.status === 'pending').length} {lang === 'es' ? 'pendientes' : 'pending'}
              </p>
            </div>

            {comments.filter(c => c.status === 'pending').length === 0 ? (
              <div className="text-center py-16 bg-white/[0.02] border border-white/5 rounded-sm">
                <MessageSquare className="w-12 h-12 text-stone-600 mx-auto mb-4" />
                <p className="text-stone-400">
                  {lang === 'es' ? 'No hay comentarios pendientes' : 'No pending comments'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {comments.filter(c => c.status === 'pending').map((comment) => (
                  <div key={comment.id} className="bg-white/[0.02] border border-white/5 rounded-sm p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="font-bold text-white">{comment.author}</div>
                        <div className="text-xs text-stone-500">{comment.email}</div>
                        <div className="text-xs text-stone-400">{comment.date}</div>
                      </div>
                      <span className="bg-yellow-500/20 text-yellow-400 text-[10px] font-mono font-bold uppercase px-2 py-1 rounded-sm">
                        {lang === 'es' ? 'Pendiente' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-stone-300 text-sm leading-relaxed">{comment.content}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <button
                        onClick={() => approveComment(comment.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-sm text-xs font-bold uppercase transition-colors cursor-pointer"
                      >
                        <Save className="w-3 h-3" />
                        {lang === 'es' ? 'Aprobar' : 'Approve'}
                      </button>
                      <button
                        onClick={() => deleteComment(comment.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-sm text-xs font-bold uppercase transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        {lang === 'es' ? 'Eliminar' : 'Delete'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {lang === 'es' ? 'Usuarios Registrados' : 'Registered Users'}
              </h2>
              <p className="text-sm text-stone-400 mt-1">
                {users.length} {lang === 'es' ? 'usuarios' : 'users'}
              </p>
            </div>

            {users.length === 0 ? (
              <div className="text-center py-16 bg-white/[0.02] border border-white/5 rounded-sm">
                <p className="text-stone-400">
                  {lang === 'es' ? 'No hay usuarios registrados aún' : 'No registered users yet'}
                </p>
              </div>
            ) : (
              <div className="bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-white/[0.02] border-b border-white/5">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                        {lang === 'es' ? 'Nombre' : 'Name'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                        {lang === 'es' ? 'Email' : 'Email'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                        {lang === 'es' ? 'Registrado' : 'Registered'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 text-sm text-white">{user.name}</td>
                        <td className="px-6 py-4 text-sm text-stone-400">{user.email}</td>
                        <td className="px-6 py-4 text-sm text-stone-500">{user.registeredAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* CMS Tab */}
        {activeTab === 'cms' && (
          <CMSPanel lang={lang} />
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <AnalyticsDashboard lang={lang} />
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/[0.02] border border-white/5 rounded-sm p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-sm">{lang === 'es' ? 'Total Pagos' : 'Total Payments'}</span>
                  <FileText className="w-5 h-5 text-gold" />
                </div>
                <p className="text-3xl font-bold text-white">{paymentStats.total}</p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-sm p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-sm">{lang === 'es' ? 'Completados' : 'Completed'}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-3xl font-bold text-green-400">{paymentStats.completed}</p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-sm p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-sm">{lang === 'es' ? 'Pendientes' : 'Pending'}</span>
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-3xl font-bold text-yellow-400">{paymentStats.pending}</p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-sm p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-sm">{lang === 'es' ? 'Total Recaudado' : 'Total Revenue'}</span>
                  <TrendingUp className="w-5 h-5 text-gold" />
                </div>
                <p className="text-3xl font-bold text-gold">{formatMoney(paymentStats.completedAmount, 'BOB')}</p>
              </div>
            </div>

            {/* Payment Methods Breakdown */}
            <div className="bg-white/[0.02] border border-white/5 rounded-sm p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                {lang === 'es' ? 'Por Método de Pago' : 'By Payment Method'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(paymentStats.byMethod).map(([method, amount]) => (
                  <div key={method} className="text-center p-4 bg-white/[0.02] rounded-sm">
                    <p className="text-stone-400 text-xs uppercase mb-1">{formatPaymentMethod(method as any, lang)}</p>
                    <p className="text-xl font-bold text-white">{formatMoney(amount, 'BOB')}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payments List */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {lang === 'es' ? 'Historial de Transacciones' : 'Transaction History'}
                </h2>
                <button
                  onClick={loadPayments}
                  className="text-xs text-stone-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  {lang === 'es' ? 'Actualizar' : 'Refresh'}
                </button>
              </div>

              {payments.length === 0 ? (
                <div className="text-center py-16 bg-white/[0.02] border border-white/5 rounded-sm">
                  <CreditCard className="w-12 h-12 text-stone-600 mx-auto mb-4" />
                  <p className="text-stone-400">
                    {lang === 'es' ? 'No hay pagos registrados aún' : 'No payments registered yet'}
                  </p>
                </div>
              ) : (
                <div className="bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-white/[0.02] border-b border-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                            {lang === 'es' ? 'ID' : 'ID'}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                            {lang === 'es' ? 'Cliente' : 'Customer'}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                            {lang === 'es' ? 'Servicio' : 'Service'}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                            {lang === 'es' ? 'Monto' : 'Amount'}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                            {lang === 'es' ? 'Método' : 'Method'}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                            {lang === 'es' ? 'Estado' : 'Status'}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                            {lang === 'es' ? 'Fecha' : 'Date'}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-mono font-bold uppercase text-stone-400">
                            {lang === 'es' ? 'Acciones' : 'Actions'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {payments.map((payment) => (
                          <tr key={payment.id} className="hover:bg-white/[0.02]">
                            <td className="px-6 py-4 text-sm font-mono text-gold">
                              {payment.id.slice(0, 8).toUpperCase()}
                            </td>
                            <td className="px-6 py-4">
                              <div>
                                <p className="text-sm text-white">{payment.customerName}</p>
                                <p className="text-xs text-stone-500">{payment.customerEmail}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-stone-300">
                              {payment.items[0]?.serviceName || (lang === 'es' ? 'Múltiple' : 'Multiple')}
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-white">
                              {formatMoney(payment.total, payment.currency)}
                            </td>
                            <td className="px-6 py-4 text-sm text-stone-400">
                              {formatPaymentMethod(payment.method, lang)}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded text-xs font-bold ${getPaymentStatusColor(payment.status)}`}>
                                {formatPaymentStatus(payment.status, lang)}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-stone-500">
                              {new Date(payment.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => downloadPaymentReceipt(payment, lang)}
                                  className="p-2 hover:bg-white/10 rounded-sm text-stone-400 hover:text-gold transition-colors"
                                  title={lang === 'es' ? 'Descargar recibo' : 'Download receipt'}
                                >
                                  <Download className="w-4 h-4" />
                                </button>
                                {payment.status === 'pending' && (
                                  <button
                                    onClick={() => {
                                      const updatedPayments = payments.map(p =>
                                        p.id === payment.id ? { ...p, status: 'completed' as const, completedAt: new Date().toISOString() } : p
                                      );
                                      setPayments(updatedPayments);
                                      localStorage.setItem('payments', JSON.stringify(updatedPayments));
                                      loadPayments();
                                    }}
                                    className="p-2 hover:bg-green-500/10 rounded-sm text-stone-400 hover:text-green-400 transition-colors"
                                    title={lang === 'es' ? 'Marcar como completado' : 'Mark as completed'}
                                  >
                                    <CheckCircle className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Componente para editar/crear posts con todas las funcionalidades
interface PostEditorProps {
  post: BlogPost;
  isCreating: boolean;
  lang: 'es' | 'en';
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}

function PostEditor({ post, isCreating, lang, onSave, onCancel }: PostEditorProps) {
  const [editedPost, setEditedPost] = useState<BlogPost>(post);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleChange = (field: keyof BlogPost, value: any) => {
    setEditedPost({ ...editedPost, [field]: value });
  };

  const handleAddImage = () => {
    const imageUrl = prompt(lang === 'es' ? 'URL de la imagen:' : 'Image URL:');
    if (imageUrl) {
      setEditedPost({
        ...editedPost,
        images: [...(editedPost.images || []), imageUrl]
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    setEditedPost({
      ...editedPost,
      images: editedPost.images?.filter((_, i) => i !== index)
    });
  };

  const extractYoutubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  const handleYoutubeUrl = (url: string) => {
    const youtubeId = extractYoutubeId(url);
    if (youtubeId) {
      handleChange('videoUrl', `https://www.youtube.com/embed/${youtubeId}`);
    } else {
      handleChange('videoUrl', url);
    }
  };

  const handleSubmit = () => {
    onSave(editedPost);
  };

  const fonts = ['Inter', 'Playfair Display', 'Space Grotesk', 'JetBrains Mono', 'Georgia', 'Arial'];

  return (
    <div className="min-h-screen bg-[#050505] text-stone-300">
      <header className="border-b border-white/5 bg-[#050505]/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white font-display">
            {isCreating ? (lang === 'es' ? 'Nuevo Artículo' : 'New Article') : (lang === 'es' ? 'Editar Artículo' : 'Edit Article')}
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs text-stone-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showAdvanced ? (lang === 'es' ? 'Básico' : 'Basic') : (lang === 'es' ? 'Avanzado' : 'Advanced')}
            </button>
            <button onClick={onCancel} className="text-stone-400 hover:text-white transition-colors cursor-pointer">
              {lang === 'es' ? 'Cancelar' : 'Cancel'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Título Español */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-gold uppercase tracking-widest">
              Título (Español) *
            </label>
            <input
              type="text"
              value={editedPost.titleEs}
              onChange={(e) => handleChange('titleEs', e.target.value)}
              className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
              placeholder="Título del artículo en español..."
            />
          </div>

          {/* Título Inglés */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-gold uppercase tracking-widest">
              Title (English) *
            </label>
            <input
              type="text"
              value={editedPost.titleEn}
              onChange={(e) => handleChange('titleEn', e.target.value)}
              className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
              placeholder="Article title in English..."
            />
          </div>

          {/* Extracto Español */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-gold uppercase tracking-widest">
              Extracto (Español) *
            </label>
            <textarea
              value={editedPost.excerptEs}
              onChange={(e) => handleChange('excerptEs', e.target.value)}
              rows={2}
              className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors resize-none"
              placeholder="Breve descripción del artículo..."
            />
          </div>

          {/* Extracto Inglés */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-gold uppercase tracking-widest">
              Excerpt (English) *
            </label>
            <textarea
              value={editedPost.excerptEn}
              onChange={(e) => handleChange('excerptEn', e.target.value)}
              rows={2}
              className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors resize-none"
              placeholder="Brief article description..."
            />
          </div>

          {/* Contenido Español */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-gold uppercase tracking-widest">
              Contenido (Español) - HTML *
            </label>
            <textarea
              value={editedPost.contentEs}
              onChange={(e) => handleChange('contentEs', e.target.value)}
              rows={10}
              className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors resize-none font-mono text-sm"
              placeholder="<h3>Subtítulo</h3><p>Contenido del artículo...</p>"
            />
          </div>

          {/* Contenido Inglés */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-gold uppercase tracking-widest">
              Content (English) - HTML *
            </label>
            <textarea
              value={editedPost.contentEn}
              onChange={(e) => handleChange('contentEn', e.target.value)}
              rows={10}
              className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors resize-none font-mono text-sm"
              placeholder="<h3>Subtitle</h3><p>Article content...</p>"
            />
          </div>

          {/* Sección Avanzada */}
          {showAdvanced && (
            <div className="space-y-6 pt-6 border-t border-white/5">
              {/* Galería de imágenes */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono text-gold uppercase tracking-widest">
                    Galería de Imágenes Adicionales
                  </label>
                  <button
                    onClick={handleAddImage}
                    className="flex items-center gap-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-sm text-xs transition-colors cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    {lang === 'es' ? 'Añadir' : 'Add'}
                  </button>
                </div>
                {editedPost.images && editedPost.images.length > 0 ? (
                  <div className="grid grid-cols-4 gap-3">
                    {editedPost.images.map((img, idx) => (
                      <div key={idx} className="relative group">
                        <img src={img} alt={`Gallery ${idx + 1}`} className="w-full aspect-square object-cover rounded-sm border border-white/10" />
                        <button
                          onClick={() => handleRemoveImage(idx)}
                          className="absolute top-1 right-1 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        >
                          <XIcon className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-stone-500">{lang === 'es' ? 'No hay imágenes adicionales' : 'No additional images'}</p>
                )}
              </div>

              {/* Video de YouTube */}
              <div className="space-y-2">
                <label className="block text-xs font-mono text-gold uppercase tracking-widest flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Video de YouTube
                </label>
                <input
                  type="text"
                  value={editedPost.videoUrl || ''}
                  onChange={(e) => handleYoutubeUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                  placeholder="https://www.youtube.com/watch?v=..."
                />
                <p className="text-xs text-stone-500">{lang === 'es' ? 'Pega la URL completa del video de YouTube' : 'Paste the full YouTube video URL'}</p>
              </div>

              {/* Selector de Fuente */}
              <div className="space-y-2">
                <label className="block text-xs font-mono text-gold uppercase tracking-widest flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Fuente del Artículo
                </label>
                <select
                  value={editedPost.font || 'Inter'}
                  onChange={(e) => handleChange('font', e.target.value)}
                  className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                >
                  {fonts.map(font => (
                    <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
                  ))}
                </select>
              </div>

              {/* Habilitar comentarios */}
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editedPost.enableComments ?? true}
                    onChange={(e) => handleChange('enableComments', e.target.checked)}
                    className="w-5 h-5 rounded-sm border-white/20 bg-white/5 text-gold focus:ring-gold focus:ring-offset-0"
                  />
                  <span className="text-xs font-mono text-gold uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {lang === 'es' ? 'Habilitar comentarios' : 'Enable comments'}
                  </span>
                </label>
                <p className="text-xs text-stone-500 ml-8">{lang === 'es' ? 'Los usuarios podrán comentar después de registrarse' : 'Users can comment after registration'}</p>
              </div>
            </div>
          )}

          {/* URL de imagen principal */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-gold uppercase tracking-widest flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              URL de Imagen Principal *
            </label>
            <input
              type="text"
              value={editedPost.imageUrl}
              onChange={(e) => handleChange('imageUrl', e.target.value)}
              className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
              placeholder="/images/freddy_working.jpg"
            />
          </div>

          {/* Categoría */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-mono text-gold uppercase tracking-widest">
                Categoría (ES)
              </label>
              <input
                type="text"
                value={editedPost.categoryEs}
                onChange={(e) => handleChange('categoryEs', e.target.value)}
                className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                placeholder="Ej: Reflexiones"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-mono text-gold uppercase tracking-widest">
                Category (EN)
              </label>
              <input
                type="text"
                value={editedPost.categoryEn}
                onChange={(e) => handleChange('categoryEn', e.target.value)}
                className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                placeholder="Eg: Reflections"
              />
            </div>
          </div>

          {/* Fecha y tiempo de lectura */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-mono text-gold uppercase tracking-widest">
                Fecha *
              </label>
              <input
                type="date"
                value={editedPost.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-mono text-gold uppercase tracking-widest">
                Tiempo Lectura *
              </label>
              <input
                type="text"
                value={lang === 'es' ? editedPost.readTimeEs : editedPost.readTimeEn}
                onChange={(e) => {
                  const value = e.target.value;
                  setEditedPost({
                    ...editedPost,
                    readTimeEs: value,
                    readTimeEn: value
                  });
                }}
                className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                placeholder="5 min"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <button
              onClick={handleSubmit}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              {lang === 'es' ? 'Guardar Artículo' : 'Save Article'}
            </button>
            <button
              onClick={onCancel}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
            >
              {lang === 'es' ? 'Cancelar' : 'Cancel'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
