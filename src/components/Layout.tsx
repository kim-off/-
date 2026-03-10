import { motion } from 'motion/react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background atmospheric gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-rose-200/20 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-orange-200/20 blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="w-full p-8 md:p-12 flex justify-between items-center z-10 absolute top-0 left-0">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center gap-3 relative z-20"
        >
          <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="https://i.postimg.cc/cJgFyMmH/hateu.jpg" 
              alt="첫눈에 로고" 
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl md:text-2xl font-medium tracking-[0.2em] text-[#5c4d43]">
              첫눈에
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10"
        >
          {['첫눈에', '매니저 소개', '만남 후기', '공지사항', '문의하기', '소개 받기'].map((item) => (
            <Link 
              key={item} 
              to={item === '첫눈에' ? '/about' : `#${item}`} 
              className="text-[#5c4d43] hover:text-[#2c2a29] text-sm tracking-widest transition-colors duration-300 hover:-translate-y-0.5 transform inline-block"
            >
              {item}
            </Link>
          ))}
        </motion.nav>

        {/* Auth Links & Mobile Menu */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center gap-6 relative z-20"
        >
          <div className="hidden md:flex items-center gap-6 text-sm tracking-widest">
            <a href="#login" className="text-[#5c4d43] hover:text-[#2c2a29] transition-colors duration-300">
              로그인
            </a>
            <a href="#signup" className="px-5 py-2 border border-[#5c4d43] text-[#5c4d43] rounded-full hover:bg-[#5c4d43] hover:text-[#F9F6F0] transition-all duration-300">
              회원가입
            </a>
          </div>

          <button className="lg:hidden text-[#5c4d43]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <Outlet />

      {/* Footer */}
      <footer className="w-full p-8 pl-12 md:px-20 lg:px-24 md:pb-12 z-10 relative text-left text-xs md:text-sm text-[#5c4d43]/80 leading-relaxed mt-auto">
        <div className="space-y-1">
          <p>상호명 첫눈에 컴퍼니</p>
          <p>대표이사 김승민</p>
          <p>BUSINESS LICENSE 00-00-00000</p>
          <p>이메일 chutnoone@naver.com</p>
        </div>
        <p className="mt-4 font-bold text-[#2c2a29]">
          Copyright ㈜ 첫눈에 - 카톡소개팅 All rights reserved.
        </p>
      </footer>
    </div>
  );
}
