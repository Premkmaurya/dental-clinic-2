import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight, BookOpen, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../data/blogData';

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Orthodontics' | 'Implants' | 'Cosmetic'>('all');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'Orthodontics', 'Implants', 'Cosmetic'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28 pb-20">
      <SEO 
        title="Dental Health Blog & Smile Tips | SmileCare"
        description="Explore articles on orthodontics, dental implants, porcelain veneers, teeth whitening, and hygiene care written by our specialists."
      />

      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-sm font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">
            <BookOpen className="w-4 h-4" /> Dental Education
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            SmileCare Resource Hub
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Read dental articles, procedure overviews, and tips to maintain excellent gum health and teeth alignment.
          </p>
        </div>

        {/* Search & Category Layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-slate-200/50 dark:border-slate-800 pb-8">
          
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#0F4C81] text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-150 dark:hover:bg-slate-700 border border-slate-200/50 dark:border-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-xs dark:text-white"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          </div>

        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} direction="up" delay={idx * 0.1}>
                <article className="group bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between h-full shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                  <div>
                    {/* Cover Photo */}
                    <div className="h-[220px] overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 bg-[#0F4C81] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md border border-white/10">
                        {post.category}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="p-6 pb-2 flex items-center gap-4 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>

                    {/* Content brief */}
                    <div className="px-6 pb-6 space-y-3">
                      <h3 className="text-xl font-extrabold text-slate-800 dark:text-white group-hover:text-[#0F4C81] dark:group-hover:text-[#4FB3BF] transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read link */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/40">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0F4C81] dark:text-[#4FB3BF] hover:text-[#4FB3BF] dark:hover:text-[#E8F4FF] transition-colors group/link"
                    >
                      Read Full Article 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </article>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white dark:bg-slate-800 rounded-[32px] border border-slate-200/50 dark:border-slate-800">
              <p className="text-slate-550 dark:text-slate-400 font-semibold font-medium">No articles matched your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-4 text-[#0F4C81] dark:text-[#4FB3BF] text-xs font-bold"
              >
                Clear Searches
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
export default Blog;
