import { motion } from 'motion/react';

export default function Match() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-light text-[#2c2a29] tracking-widest">
          소개 받기
        </h2>
        <p className="mt-4 text-[#5c4d43] tracking-wider">
          페이지 준비 중입니다.
        </p>
      </motion.div>
    </main>
  );
}
