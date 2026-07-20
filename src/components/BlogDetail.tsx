/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BlogPost, Comment, User } from '../types';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  MessageSquare,
  Image as ImageIcon,
  Video,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  X,
  User as UserIcon,
  LogOut,
  ChevronDown,
  ChevronUp,
  Send
} from 'lucide-react';

interface BlogDetailProps {
  post: BlogPost;
  lang: 'es' | 'en';
  t: any;
  onBack: () => void;
}

export default function BlogDetail({ post, lang, t, onBack }: BlogDetailProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '' });

  // Cargar comentarios
  useEffect(() => {
    const savedComments = localStorage.getItem('blogComments');
    if (savedComments) {
      const allComments = JSON.parse(savedComments);
      setComments(allComments.filter((c: Comment) => c.postId === post.id && c.status === 'approved'));
    }

    // Cargar usuario actual
    const currentUser = localStorage.getItem('blogCurrentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, [post.id]);

  // Compartir en redes sociales
  const shareUrl = window.location.href;
  const shareTitle = lang === 'es' ? post.titleEs : post.titleEn;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      copy: shareUrl
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      alert(lang === 'es' ? '¡Enlace copiado!' : 'Link copied!');
    } else {
      window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  // Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('blogUsers') || '[]');
    const foundUser = users.find((u: User) => u.email === loginForm.email && u.password === loginForm.password);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('blogCurrentUser', JSON.stringify(foundUser));
      setShowLoginForm(false);
      setLoginForm({ email: '', password: '' });
    } else {
      alert(lang === 'es' ? 'Credenciales incorrectas' : 'Invalid credentials');
    }
  };

  // Registro
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('blogUsers') || '[]');

    if (users.find((u: User) => u.email === registerForm.email)) {
      alert(lang === 'es' ? 'Este email ya está registrado' : 'This email is already registered');
      return;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: registerForm.name,
      email: registerForm.email,
      password: registerForm.password,
      registeredAt: new Date().toISOString().split('T')[0]
    };

    users.push(newUser);
    localStorage.setItem('blogUsers', JSON.stringify(users));

    setUser(newUser);
    localStorage.setItem('blogCurrentUser', JSON.stringify(newUser));
    setShowRegisterForm(false);
    setRegisterForm({ name: '', email: '', password: '' });
  };

  // Logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('blogCurrentUser');
  };

  // Publicar comentario
  const handleSubmitComment = () => {
    if (!user) {
      setShowLoginForm(true);
      return;
    }

    if (!newComment.trim()) {
      alert(lang === 'es' ? 'Escribe un comentario' : 'Write a comment');
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      postId: post.id,
      author: user.name,
      email: user.email,
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      status: 'pending' // Requiere aprobación del admin
    };

    const allComments = JSON.parse(localStorage.getItem('blogComments') || '[]');
    allComments.push(comment);
    localStorage.setItem('blogComments', JSON.stringify(allComments));

    setNewComment('');
    alert(lang === 'es' ? 'Comentario enviado. Aparecerá tras ser aprobado.' : 'Comment submitted. It will appear after approval.');
  };

  // Función para renderizar contenido HTML
  const renderContent = (html: string) => {
    const paragraphs = html.split('\n\n');

    return paragraphs.map((p, index) => {
      const trimmed = p.trim();

      if (trimmed.startsWith('<h3>')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-bold text-white tracking-tight mt-8 mb-4 font-display">
            {trimmed.replace(/<\/?h3>/g, '')}
          </h3>
        );
      }
      if (trimmed.startsWith('<h4>')) {
        return (
          <h4 key={index} className="text-lg font-bold text-gold mt-6 mb-3 font-display">
            {trimmed.replace(/<\/?h4>/g, '')}
          </h4>
        );
      }
      if (trimmed.startsWith('<h5>')) {
        return (
          <h5 key={index} className="text-base font-bold text-stone-300 mt-4 mb-2 font-display">
            {trimmed.replace(/<\/?h5>/g, '')}
          </h5>
        );
      }
      if (trimmed.startsWith('<strong>')) {
        return (
          <p key={index} className="text-stone-300 leading-relaxed">
            <strong className="text-white">{trimmed.replace(/<\/?strong>/g, '')}</strong>
          </p>
        );
      }
      if (trimmed.startsWith('<ul>')) {
        const items = trimmed.match(/<li>(.*?)<\/li>/g) || [];
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-4 text-stone-300">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/<\/?li>/g, '')}</li>
            ))}
          </ul>
        );
      }

      return (
        <p key={index} className="whitespace-pre-line text-stone-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: trimmed }} />
      );
    });
  };

  const content = lang === 'es' ? post.contentEs : post.contentEn;

  return (
    <article className="max-w-4xl mx-auto space-y-8 md:space-y-12 animate-fadeIn text-left">
      {/* Top action header */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          <span>{t.blogBackToList}</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>{lang === 'es' ? 'Compartir' : 'Share'}</span>
          </button>

          {showShareMenu && (
            <div className="absolute top-full right-0 mt-2 bg-[#020202] border border-white/10 rounded-sm shadow-xl overflow-hidden z-10 min-w-[200px]">
              <button onClick={() => handleShare('facebook')} className="w-full px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/5 hover:text-white flex items-center gap-3 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
                {lang === 'es' ? 'Facebook' : 'Facebook'}
              </button>
              <button onClick={() => handleShare('twitter')} className="w-full px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/5 hover:text-white flex items-center gap-3 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
                X (Twitter)
              </button>
              <button onClick={() => handleShare('linkedin')} className="w-full px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/5 hover:text-white flex items-center gap-3 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
              <button onClick={() => handleShare('copy')} className="w-full px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/5 hover:text-white flex items-center gap-3 transition-colors cursor-pointer border-t border-white/5">
                <Link2 className="w-4 h-4" />
                {lang === 'es' ? 'Copiar enlace' : 'Copy link'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hero Header Area */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-gold/10 text-gold border border-gold/20 px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-wider uppercase">
              {lang === 'es' ? post.categoryEs : post.categoryEn}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? post.readTimeEs : post.readTimeEn}</span>
            </div>
            {post.font && (
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span>{post.font}</span>
              </div>
            )}
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight" style={{ fontFamily: post.font || 'Inter' }}>
            {lang === 'es' ? post.titleEs : post.titleEn}
          </h1>
        </div>

        {/* Big visual banner */}
        <div className="aspect-[21/9] w-full rounded-sm overflow-hidden bg-[#050505] border border-white/5 shadow-2xl relative">
          <img
            src={post.imageUrl}
            alt={lang === 'es' ? post.titleEs : post.titleEn}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Video Embed */}
      {post.videoUrl && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gold font-mono uppercase tracking-widest flex items-center gap-2">
            <Video className="w-4 h-4" />
            {lang === 'es' ? 'Video Relacionado' : 'Related Video'}
          </h3>
          <div className="aspect-video w-full rounded-sm overflow-hidden bg-[#020202] border border-white/5">
            <iframe
              src={post.videoUrl}
              title={lang === 'es' ? post.titleEs : post.titleEn}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Gallery */}
      {post.images && post.images.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gold font-mono uppercase tracking-widest flex items-center gap-2">
            <ImageIcon className="w-4 h-4" />
            {lang === 'es' ? 'Galería' : 'Gallery'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {post.images.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-sm overflow-hidden border border-white/5 hover:border-gold/30 transition-colors cursor-pointer">
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="space-y-6 text-stone-300 text-sm md:text-base" style={{ fontFamily: post.font || 'Inter' }}>
        {renderContent(content)}
      </div>

      {/* Comments Section */}
      {post.enableComments !== false && (
        <div className="space-y-6 pt-8 border-t border-white/5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-gold" />
              {lang === 'es' ? 'Comentarios' : 'Comments'} ({comments.length})
            </h3>
            <button
              onClick={() => setShowComments(!showComments)}
              className="text-xs text-stone-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              {showComments ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showComments ? (lang === 'es' ? 'Ocultar' : 'Hide') : (lang === 'es' ? 'Mostrar' : 'Show')}
            </button>
          </div>

          {showComments && (
            <div className="space-y-6">
              {/* User area */}
              {user ? (
                <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                        <UserIcon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{user.name}</div>
                        <div className="text-xs text-stone-500">{user.email}</div>
                      </div>
                    </div>
                    <button onClick={handleLogout} className="text-xs text-stone-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer">
                      <LogOut className="w-3 h-3" />
                      {lang === 'es' ? 'Salir' : 'Logout'}
                    </button>
                  </div>

                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={lang === 'es' ? 'Escribe tu comentario...' : 'Write your comment...'}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors resize-none"
                  />

                  <button
                    onClick={handleSubmitComment}
                    className="flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    {lang === 'es' ? 'Publicar' : 'Post'}
                  </button>
                </div>
              ) : (
                <div className="bg-white/[0.02] border border-white/5 rounded-sm p-6 text-center space-y-4">
                  <UserIcon className="w-12 h-12 text-stone-600 mx-auto" />
                  <div>
                    <p className="text-stone-400 text-sm mb-4">
                      {lang === 'es' ? 'Debes estar registrado para comentar' : 'You must be registered to comment'}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={() => { setShowLoginForm(true); setShowRegisterForm(false); }}
                        className="px-4 py-2 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                      >
                        {lang === 'es' ? 'Iniciar Sesión' : 'Login'}
                      </button>
                      <button
                        onClick={() => { setShowRegisterForm(true); setShowLoginForm(false); }}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                      >
                        {lang === 'es' ? 'Registrarse' : 'Register'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Login Form */}
              {showLoginForm && (
                <div className="bg-white/[0.02] border border-white/5 rounded-sm p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{lang === 'es' ? 'Iniciar Sesión' : 'Login'}</h4>
                    <button onClick={() => setShowLoginForm(false)} className="text-stone-400 hover:text-white cursor-pointer">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <input
                      type="email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      placeholder={lang === 'es' ? 'Email' : 'Email'}
                      className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                    <input
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      placeholder={lang === 'es' ? 'Contraseña' : 'Password'}
                      className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                    >
                      {lang === 'es' ? 'Entrar' : 'Login'}
                    </button>
                  </form>
                </div>
              )}

              {/* Register Form */}
              {showRegisterForm && (
                <div className="bg-white/[0.02] border border-white/5 rounded-sm p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{lang === 'es' ? 'Registrarse' : 'Register'}</h4>
                    <button onClick={() => setShowRegisterForm(false)} className="text-stone-400 hover:text-white cursor-pointer">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <input
                      type="text"
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                      placeholder={lang === 'es' ? 'Nombre' : 'Name'}
                      className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                    <input
                      type="email"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      placeholder={lang === 'es' ? 'Email' : 'Email'}
                      className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                    <input
                      type="password"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      placeholder={lang === 'es' ? 'Contraseña' : 'Password'}
                      className="w-full px-4 py-3 bg-[#020202] border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                    >
                      {lang === 'es' ? 'Registrarse' : 'Register'}
                    </button>
                  </form>
                </div>
              )}

              {/* Comments List */}
              {comments.length > 0 ? (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-white/[0.02] border border-white/5 rounded-sm p-4 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                          <UserIcon className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">{comment.author}</div>
                          <div className="text-xs text-stone-500">{comment.date}</div>
                        </div>
                      </div>
                      <p className="text-stone-300 text-sm leading-relaxed">{comment.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-stone-500 text-sm py-8">
                  {lang === 'es' ? 'Aún no hay comentarios. ¡Sé el primero!' : 'No comments yet. Be the first!'}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-8 text-center border-t border-white/5">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-gold hover:bg-white/10 text-stone-300 hover:text-white rounded-sm text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          <span>{t.blogBackToList}</span>
        </button>
      </div>
    </article>
  );
}
