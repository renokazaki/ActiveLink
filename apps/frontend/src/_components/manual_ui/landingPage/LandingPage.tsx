"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1000], [0, 100]) }}
          className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1000], [0, -150]) }}
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ opacity: heroOpacity }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              あなたの
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                毎日を可視化
              </span>
              <br />
              成長を加速する
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              友達と一緒に目標を設定し、日々の活動を記録。
              <br />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <Link href="/sign-up">無料で始める</Link>
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-blue-700 transition-all duration-300"
            >
              <Link href="/sign-in">サインイン</Link>
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center"
          >
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              実際の画面
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              シンプルで使いやすいインターフェース
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                直感的なダッシュボード
              </h3>
              <p className="text-gray-300 text-lg">
                日々の活動を一目で確認できる見やすいデザイン。目標達成状況や友達の活動も簡単にチェックできます。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  週次目標の進捗を可視化
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  活動時間の詳細な記録
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  友達の活動状況をリアルタイム表示
                </li>
              </ul>
            </motion.div>

             <div className="flex justify-center lg:justify-end">
            <div className="rounded-xl overflow-hidden shadow-lg max-w-full">
              <Image
                src="/DashBoard.PNG"
                alt="ActiveLink ダッシュボード画面"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-6 lg:order-2"
            >
              <h3 className="text-3xl font-bold text-white">
                友達と一緒に成長
              </h3>
              <p className="text-gray-300 text-lg">
                フレンド機能で仲間とつながり、お互いの活動を確認可能。
                競争と励まし合いでモチベーションを維持できます。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  Line連携を行い、公式アカウントを追加することで友達が活動した時にメッセージを受け取ることもできます。
                </li>
              </ul>
            </motion.div>

            <div className="p-4">
              <img
                src="/LineRemind.png"
                alt="ActiveLink フレンド画面"
                className="w-full max-w-xs h-auto rounded-lg mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              今すぐ始めて、
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                人生を変えよう
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              あなたも今日から始めませんか？
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              無料でアカウント作成
              <ArrowRight className="inline ml-2 w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
