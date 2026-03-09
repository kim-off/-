import { motion } from 'motion/react';

export default function App() {
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
          <img 
            src="https://i.postimg.cc/cJgFyMmH/hateu.jpg" 
            alt="첫눈에 로고" 
            className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl md:text-2xl font-medium tracking-[0.2em] text-[#5c4d43]">
            첫눈에
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10"
        >
          {['첫눈에', '매니저 소개', '만남 후기', '공지사항', '문의하기', '소개 받기'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-[#5c4d43] hover:text-[#2c2a29] text-sm tracking-widest transition-colors duration-300 hover:-translate-y-0.5 transform inline-block"
            >
              {item}
            </a>
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-relaxed md:leading-tight text-[#2c2a29]">
            <span className="block mb-4 md:mb-6 tracking-wide">첫눈에, 반한 당신</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl text-[#5c4d43] tracking-wider mt-2">인연이 시작되는 곳.</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="pt-16"
          >
            <button className="px-10 py-4 bg-[#3a302b] text-[#F9F6F0] rounded-full text-sm md:text-base tracking-[0.15em] hover:bg-[#2c2a29] transition-all duration-500 shadow-xl shadow-[#3a302b]/10 hover:shadow-[#3a302b]/20 hover:-translate-y-0.5">
              지금 소개 받기
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full p-8 pl-12 md:px-20 lg:px-24 md:pb-12 z-10 relative text-left text-xs md:text-sm text-[#5c4d43]/80 leading-relaxed">
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
