import { motion } from "framer-motion";

const AnimatedButton = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Parte 2: Interação e Gestos</h3>
      <motion.button
        style={{
          padding: "10px 25px",
          [cite_start]cursor: "pointer", // Cursor "pointer" via CSS conforme permitido [cite: 25]
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
        [cite_start]// [Documentação: whileHover] Aumenta levemente o tamanho quando o mouse passa (escala 1.1) [cite: 22, 28]
        whileHover={{ scale: 1.1 }}
        [cite_start]// [Documentação: whileTap] Diminui a escala enquanto o botão é pressionado (efeito de clique) [cite: 23, 28]
        whileTap={{ scale: 0.9 }}
      >
        Enviar
      </motion.button>
    </div>
  );
};

export default AnimatedButton;
