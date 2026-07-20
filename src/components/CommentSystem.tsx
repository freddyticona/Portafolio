/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  Send,
  Trash2,
  Flag,
  ThumbsUp,
  User,
  Clock,
  CheckCircle
} from 'lucide-react';

// ==========================================
// TYPES
// ==========================================

interface Comment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  likes: number;
  isApproved: boolean;
}

interface CommentSystemProps {
  postId: string;
  lang: 'es' | 'en';
  t: any;
}

// ==========================================
// STORAGE HELPERS
// ==========================================

const COMMENTS_KEY = 'blog_comments';

const getComments = (postId: string): Comment[] => {
  const allComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '[]');
  return allComments
    .filter((c: Comment) => c.postId === postId && c.isApproved)
    .sort((a: Comment, b: Comment) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

const addComment = (comment: Omit<Comment, 'id' | 'createdAt' | 'likes' | 'isApproved'>): Comment => {
  const allComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '[]');
  const newComment: Comment = {
    ...comment,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    likes: 0,
    isApproved: true // Auto-approve for demo
  };
  allComments.push(newComment);
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(allComments));
  return newComment;
};

const likeComment = (commentId: string) => {
  const allComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '[]');
  const comment = allComments.find((c: Comment) => c.id === commentId);
  if (comment) {
    comment.likes = (comment.likes || 0) + 1;
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(allComments));
  }
};

// ==========================================
// COMPONENT
// ==========================================

export default function CommentSystem({ postId, lang, t }: CommentSystemProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  // Load comments on mount
  useEffect(() => {
    setComments(getComments(postId));
  }, [postId]);

  // Load liked comments from localStorage
  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem(`liked_comments_${postId}`) || '[]');
    setLikedComments(new Set(liked));
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    const newComment = addComment({
      postId,
      ...formData
    });

    setComments([newComment, ...comments]);
    setSubmitted(true);
    setFormData({ author: '', email: '', content: '' });

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 3000);

    setIsSubmitting(false);
  };

  const handleLike = (commentId: string) => {
    if (likedComments.has(commentId)) return;

    likeComment(commentId);
    setLikedComments(new Set([...likedComments, commentId]));
    setComments(comments.map(c =>
      c.id === commentId ? { ...c, likes: c.likes + 1 } : c
    ));

    // Save to localStorage
    localStorage.setItem(
      `liked_comments_${postId}`,
      JSON.stringify([...likedComments, commentId])
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return lang === 'es' ? 'Ahora' : 'Just now';
    if (diffMins < 60) return lang === 'es'
      ? `Hace ${diffMins} min`
      : `${diffMins}m ago`;
    if (diffHours < 24) return lang === 'es'
      ? `Hace ${diffHours}h`
      : `${diffHours}h ago`;
    if (diffDays < 7) return lang === 'es'
      ? `Hace ${diffDays} días`
      : `${diffDays}d ago`;

    return date.toLocaleDateString(lang === 'es' ? 'es-BO' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const ct = {
    title: lang === 'es' ? 'Comentarios' : 'Comments',
    count: lang === 'es'
      ? `${comments.length} ${comments.length === 1 ? 'comentario' : 'comentarios'}`
      : `${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}`,
    addComment: lang === 'es' ? 'Agregar Comentario' : 'Add Comment',
    cancel: lang === 'es' ? 'Cancelar' : 'Cancel',
    submit: lang === 'es' ? 'Publicar' : 'Post',
    namePlaceholder: lang === 'es' ? 'Tu nombre' : 'Your name',
    emailPlaceholder: lang === 'es' ? 'Tu correo' : 'Your email',
    commentPlaceholder: lang === 'es'
      ? '¿Qué opinas sobre este artículo?'
      : 'What do you think about this article?',
    success: lang === 'es'
      ? '¡Comentario publicado!'
      : 'Comment posted!',
    noComments: lang === 'es'
      ? 'Sé el primero en comentar'
      : 'Be the first to comment',
    reply: lang === 'es' ? 'Responder' : 'Reply',
    report: lang === 'es' ? 'Reportar' : 'Report',
    like: lang === 'es' ? 'Me gusta' : 'Like'
  };

  return (
    <div className="space-y-8 pt-8 border-t border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-5 h-5 text-gold" />
          <h3 className="text-lg font-bold text-white">{ct.title}</h3>
          <span className="text-sm text-stone-400">({ct.count})</span>
        </div>

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-gold/10 hover:bg-gold/20 border border-gold/30 rounded text-xs font-mono font-bold text-gold transition-colors"
          >
            {ct.addComment}
          </button>
        )}
      </div>

      {/* Comment Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/[0.02] border border-white/10 rounded-lg p-6 space-y-4"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder={ct.namePlaceholder}
                  className="px-4 py-2.5 bg-white/5 border border-white/10 rounded text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors text-sm"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={ct.emailPlaceholder}
                  className="px-4 py-2.5 bg-white/5 border border-white/10 rounded text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors text-sm"
                />
              </div>

              <textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder={ct.commentPlaceholder}
                rows={4}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors resize-none text-sm"
              />

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-xs text-stone-400 hover:text-white transition-colors"
                >
                  {ct.cancel}
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`
                    px-6 py-2.5 rounded font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300
                    ${submitted
                      ? 'bg-green-600 text-white'
                      : isSubmitting
                      ? 'bg-white/10 text-stone-400 cursor-wait'
                      : 'bg-gold hover:bg-gold-hover text-black cursor-pointer'
                    }
                  `}
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {ct.success}
                    </span>
                  ) : isSubmitting ? (
                    <span className="animate-pulse">{lang === 'es' ? 'Publicando...' : 'Posting...'}</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      {ct.submit}
                    </span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comments List */}
      <div className="space-y-6">
        <AnimatePresence>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#020202] border border-white/5 rounded-lg p-5 space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{comment.author}</div>
                      <div className="flex items-center gap-1.5 text-xs text-stone-500">
                        <Clock className="w-3 h-3" />
                        {formatDate(comment.createdAt)}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLike(comment.id)}
                    disabled={likedComments.has(comment.id)}
                    className={`
                      flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors
                      ${likedComments.has(comment.id)
                        ? 'bg-gold/20 text-gold'
                        : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-stone-300'
                      }
                    `}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    {comment.likes > 0 && <span>{comment.likes}</span>}
                  </button>
                </div>

                <p className="text-stone-300 text-sm leading-relaxed pl-13">
                  {comment.content}
                </p>

                <div className="flex items-center gap-4 pl-13 text-xs text-stone-500">
                  <button className="hover:text-gold transition-colors flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {ct.reply}
                  </button>
                  <button className="hover:text-red-400 transition-colors flex items-center gap-1">
                    <Flag className="w-3 h-3" />
                    {ct.report}
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-8 text-stone-500">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">{ct.noComments}</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
