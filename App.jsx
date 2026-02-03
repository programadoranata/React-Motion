import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- PARTE 3: VARIANTS (Objeto externo para organizar estados) ---
// [Documentação: Variants] Define estados reutilizáveis e limpa o JSX [cite: 35, 37, 50]
const listVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.2 } // [Documentação: staggerChildren] Efeito cascata [cite: 34, 38]
  }
};

export default function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      
      {/* PARTE 1: FUNDAMENTOS */}
      <motion.div
        style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px' }}
        [cite_start]initial={{ opacity: 0, y: 50 }} // [Documentação: initial] Começa invisível e abaixo [cite: 12, 17]
        [cite_start]animate={{ opacity: 1, y: 0 }}  // [Documentação: animate] Vai para posição final [cite: 13, 17]
        [cite_start]transition={{ duration: 1.2 }}  // [Documentação: transition] Tempo exato de 1.2s [cite: 14, 17]
      >
        <h1>Bem-vindo</h1>
      </motion.div>

      {/* PARTE 2: GESTOS */}
      <motion.button
        style={{ marginTop: '20px', cursor: 'pointer', padding: '10px 20px' }}
        [cite_start]whileHover={{ scale: 1.1 }} // [Documentação: whileHover] Aumenta ao passar o mouse [cite: 22, 28]
        [cite_start]whileTap={{ scale: 0.95 }}  // [Documentação: whileTap] Efeito de clique [cite: 23, 28]
        onClick={() => setShowToast(true)}
      >
        Enviar (Parte 2 e 4)
      </motion.button>

      {/* PARTE 3: LISTA COM VARIANTS */}
      <motion.ul
        style={{ marginTop: '30px' }}
        [cite_start]variants={listVariants} // [Documentação: Variants] Repassa estados do pai para os filhos [cite: 39]
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4, 5].map(i => (
          <motion.li key={i} variants={listVariants} style={{ marginBottom: '10px' }}>
            Item da Lista {i}
          </motion.li>
        ))}
      </motion.ul>

      {/* PARTE 4: SAÍDA (UNMOUNTING) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            style={{ background: '#333', color: '#fff', padding: '10px', position: 'fixed', bottom: 20 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            [cite_start]exit={{ opacity: 0, x: 50 }} // [Documentação: exit] Animação antes de sair do DOM [cite: 44, 47]
            onClick={() => setShowToast(false)}
          >
            Alerta: Clique para fechar [cite: 43]
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
