import { motion } from 'motion/react';

export default function Home() {
  return (
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
  );
}
