import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ArrowRight } from 'lucide-react';

// Tipi per le categorie
export type ProductCategory = {
  key: string;
  title: string;
  description: string;
  image: string;
  accentColor: string;
  cta: string;
  comingSoon?: boolean;
  comingSoonText?: string;
};

interface ProductPreviewFanProps {
  categories: ProductCategory[];
  onSelectCategory?: (key: string) => void;
  onEnterEcommerce?: () => void;
  onBackToSite?: () => void;
}

const ProductPreviewFan: React.FC<ProductPreviewFanProps> = ({
  categories,
  onSelectCategory,
  onEnterEcommerce,
  onBackToSite,
}) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelected(key);
    setTimeout(() => {
      onSelectCategory && onSelectCategory(key);
      onEnterEcommerce && onEnterEcommerce();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black flex flex-col md:flex-row overflow-hidden">
      {/* Back Button */}
      {onBackToSite && (
        <button
          onClick={onBackToSite}
          className="absolute top-6 left-6 z-[70] p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 group"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        </button>
      )}



      {categories.map((cat, index) => {
        const isHovered = hovered === cat.key;
        const isSelected = selected === cat.key;
        const isOtherSelected = selected !== null && !isSelected;

        return (
          <motion.div
            key={cat.key}
            className="relative h-screen flex-1 border-r border-white/5 cursor-pointer overflow-hidden"
            initial={{ flex: 1 }}
            animate={{
              flex: isSelected ? 10 : (isHovered && !selected ? 3 : (isOtherSelected ? 0 : 1)),
              opacity: isOtherSelected ? 0 : 1
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            onMouseEnter={() => !selected && setHovered(cat.key)}
            onMouseLeave={() => !selected && setHovered(null)}
            onClick={() => handleSelect(cat.key)}
          >
            {/* Background Container */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{ scale: isHovered || isSelected ? 1.05 : 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Default Dark Background */}
              <div className="absolute inset-0 bg-neutral-900" />

              {/* Orange Gradient on Hover - Fade In */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-orange-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered || isSelected ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Texture/Overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end pb-24 md:pb-12">

              {/* Large Index Number */}
              <div className="absolute top-8 left-8">
                <span className="font-display font-black text-6xl md:text-8xl text-white/10 outline-text">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <motion.h2
                  layout
                  className={`font-display font-black text-white uppercase tracking-tighter leading-none mb-4 whitespace-nowrap ${selected ? 'text-6xl md:text-9xl' : 'text-3xl md:text-5xl'}`}
                >
                  {cat.title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: isHovered || isSelected ? 1 : 0, height: isHovered || isSelected ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-200 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-4 text-white font-bold tracking-widest uppercase text-sm group">
                    <span className="w-12 h-[1px] bg-white group-hover:w-24 transition-all duration-300" />
                    {cat.cta} <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductPreviewFan; 