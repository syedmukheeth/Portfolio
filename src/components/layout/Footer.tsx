/**
 * Footer Component
 * 
 * A cinematic, information-dense footer that reinforces the "Systems Thinker" brand.
 * Includes terminal-style metadata, social integration, and interactive CTA.
 */
"use client";

import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Globe, Cpu, Database, FileText } from 'lucide-react';
import { FadeIn } from '@/components/jack/JackComponents';
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { mode } = useMode();
  const currentYear = new Date().getFullYear();
  const email = "syedmukheeth09@gmail.com";
  const [emailHref, setEmailHref] = React.useState(`mailto:${email}`);
  const [systemTime, setSystemTime] = React.useState("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    // Determine the best Gmail link based on platform
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isAndroid = /Android/.test(ua);
    
    if (isIOS) {
      // iOS Gmail deep link - if Gmail isn't installed, this might fail, 
      // but the user specifically requested the Gmail app.
      setEmailHref(`googlegmail:///co?to=${email}`);
      
      // Fallback mechanism: if it fails, maybe mailto:?
      // For now, adhering strictly to "directs gmail app"
    } else if (isAndroid) {
      // On Android, mailto: is usually intercepted by Gmail or triggers the app chooser.
      setEmailHref(`mailto:${email}`);
    } else {
      // Desktop: Redirect to Gmail Web UI
      setEmailHref(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`);
    }
  }, []);

  return (
    <footer 
      id="contact"
      className={cn(
        "relative pt-32 pb-12 overflow-hidden transition-colors duration-1000",
        mode === 'machine' ? 'bg-black border-t border-accent/20' : 'bg-black border-t border-white/5'
      )}
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Refined Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-accent/[0.05] to-transparent pointer-events-none blur-[120px]" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 items-start">
          
          {/* Left Side: Brand & CTA (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <FadeIn delay={0.1} y={20}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div className={cn(
                    "relative w-14 h-14 flex items-center justify-center transition-all duration-500 group",
                    mode === 'machine' ? 'bg-accent/5' : 'bg-white/[0.02]'
                  )}>
                    {/* Technical Corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent/50" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent/50" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent/50" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent/50" />
                    
                    <Cpu className={cn("w-7 h-7 animate-pulse", mode === 'machine' ? 'text-accent' : 'text-white/80')} />
                  </div>
                  
                  <h2 
                    id="contact-title"
                    className={cn(
                      "text-4xl md:text-6xl font-black uppercase tracking-tighter transition-colors",
                      mode === 'machine' ? 'text-accent font-mono' : 'text-white'
                    )}
                  >
                    {mode === 'machine' ? "NODE_HANDSHAKE" : "Let's Connect."}
                  </h2>
                </div>
                
                <p className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
                  Available for <span className="text-white">Full-Stack Development</span>, 
                  <span className="text-white"> Backend Infrastructure</span>, and 
                  <span className="text-white"> Systems Engineering</span> roles.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={20}>
              <a 
                href={emailHref}
                target={emailHref.startsWith('http') ? "_blank" : undefined}
                rel={emailHref.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group relative flex items-center gap-8 p-1 rounded-full border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 w-fit pr-10"
              >
                <div className="relative w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-accent/20 animate-pulse" />
                  <Mail className="relative w-6 h-6 text-accent" />
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    <span className="mono text-[10px] uppercase tracking-[0.4em] text-accent/80 font-black">Secure_Protocol // Email</span>
                  </div>
                  <span className={cn(
                    "text-xl md:text-3xl font-black tracking-tight text-white/90 group-hover:text-white transition-colors",
                    mode === 'machine' && 'font-mono'
                  )}>syedmukheeth09@gmail.com</span>
                </div>
                
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 text-accent ml-2" size={24} />
              </a>
            </FadeIn>
          </div>

          {/* Right Side: Social Nodes (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <FadeIn delay={0.3} y={20} className="flex flex-col gap-8">
               <div className="flex items-center justify-between">
                 <span className="mono text-[11px] uppercase tracking-[0.5em] text-accent font-black">Social_Nodes</span>
                 <span className="mono text-[9px] uppercase tracking-widest text-white/20">Status: Online</span>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'Github', icon: <Github size={18} />, href: 'https://github.com/Syed-Mukheeth' },
                    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/syed-mukheeth-425b03212/' },
                    { name: 'Twitter', icon: <Twitter size={18} />, href: 'https://twitter.com/syed_mukheeth' },
                    { name: 'Resume', icon: <FileText size={18} />, href: '#' }
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-accent/40 hover:bg-accent/[0.02] transition-all duration-500"
                    >
                      <div className="flex items-center gap-4 text-white/60 group-hover:text-white transition-all">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                          {social.icon}
                        </div>
                        <span className="mono text-[11px] uppercase tracking-widest font-bold">{social.name}</span>
                      </div>
                      <ArrowUpRight size={14} className="text-white/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  ))}
               </div>

               {/* System Metadata Block */}
               <div className="mt-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="mono text-[9px] uppercase text-white/40 tracking-widest">Active_Region</span>
                    <span className="mono text-[10px] text-white/80 font-bold tracking-tight uppercase">Bengaluru, India // IST</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="flex flex-col gap-1 text-right">
                    <span className="mono text-[9px] uppercase text-white/40 tracking-widest">System_Time</span>
                    <span className="mono text-[10px] text-white/80 font-bold tracking-tight uppercase">
                      {systemTime} UTC+5:30
                    </span>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="mono text-[10px] text-white/60 uppercase tracking-[0.4em] font-medium">© {currentYear} Syed Mukheeth</span>
          </div>

          <div className="flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll back to the top of the page"
              className="mono text-[10px] uppercase tracking-[0.4em] text-white/80 hover:text-white transition-colors flex items-center gap-2 group font-black"
            >
              Back to Top
              <ArrowUpRight size={12} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Scanline */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-[shimmer_4s_infinite]" />
    </footer>
  );
}
