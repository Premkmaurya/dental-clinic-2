import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts, getBlogPostSchema } from '../data/blogData';
import { useBooking } from '../context/BookingContext';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openBooking } = useBooking();

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 flex flex-col items-center justify-center px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Article Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">The article you are looking for does not exist or has been removed.</p>
        <Link to="/blog" className="px-6 py-3 rounded-full bg-[#0F4C81] text-white font-semibold hover:bg-[#0B3A63] transition-all">
          Return to Blog Hub
        </Link>
      </div>
    );
  }

  const schema = getBlogPostSchema(post);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-28 pb-20">
      <SEO 
        title={`${post.title} | SmileCare Blog`}
        description={post.excerpt}
        ogImage={post.image}
        schemas={[schema]}
      />

      <div className="max-w-4xl mx-auto px-8">
        
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0F4C81] dark:hover:text-[#4FB3BF] font-semibold mb-8 group transition-colors"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Resource Hub
        </Link>

        {/* Article Header */}
        <div className="space-y-6 mb-10">
          <span className="inline-block bg-[#E8F4FF] dark:bg-[#0F4C81]/30 text-[#0F4C81] dark:text-[#4FB3BF] text-xs font-bold uppercase tracking-widest px-3.5 py-2 rounded-full">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-y border-slate-200/50 dark:border-slate-800 py-4">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#4FB3BF]" /> By {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#4FB3BF]" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#4FB3BF]" /> {post.readTime}</span>
          </div>
        </div>

        {/* Feature Image */}
        <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-xl mb-12 border border-slate-200/50 dark:border-slate-800">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Main Body */}
          <div className="lg:col-span-8 prose prose-slate dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-4">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.trim().startsWith('*')) {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 mb-6">
                    {paragraph.split('\n').map((li, idx) => (
                      <li key={idx} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {li.replace('*', '').trim()}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              );
            })}

            {/* Tags footer */}
            <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800 mt-10">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Post Tags</h5>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-xl border border-slate-200/30 dark:border-slate-800">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (Conversion Panel) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Consultation Widget */}
            <div className="bg-[#E8F4FF] dark:bg-slate-800/60 p-6 rounded-3xl border border-[#0F4C81]/10 dark:border-slate-800 shadow-md">
              <h4 className="font-extrabold text-slate-800 dark:text-white text-base leading-snug">
                Need Specific Smile Advice?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2 mb-6">
                Connect with our specialists online or schedule an in-office consult slot to analyze your tooth path.
              </p>
              
              <button
                onClick={() => openBooking(post.category)}
                className="w-full py-3 rounded-full bg-[#0F4C81] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B3A63] shadow-md shadow-[#0F4C81]/25 transition-all flex items-center justify-center gap-1.5"
              >
                Schedule Consult <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Author Profile */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-md text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto overflow-hidden border border-slate-200">
                <div className="w-full h-full bg-[#0F4C81] text-white flex items-center justify-center font-bold text-lg">
                  {post.author.split(' ').slice(-1)[0][0]}
                </div>
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 dark:text-white text-sm">Written By</h4>
                <p className="text-[11px] text-[#4FB3BF] font-semibold mt-0.5">{post.author}</p>
                <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">SmileCare board-certified dentist contributing to clinical education.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
export default BlogPost;
