import { motion } from "framer-motion";

const WelcomeCard = () => {
  return (
    <motion.div
      style={{
        padding: "20px",
        backgroundColor: "#2ecc71",
        color: "white",
        borderRadius: "8px",
        marginBottom: "20px"
      }}
      [cite_start]// [Documentação: initial] Define o estado inicial: invisível (opacity 0) e deslocado abaixo (y: 50) [cite: 12, 17]
      initial={{ opacity: 0, y: 50 }}
      [cite_start]// [Documentação: animate] Define o estado final: visível e na posição original [cite: 13, 17]
      animate={{ opacity: 1, y: 0 }}
      [cite_start]// [Documentação: transition] Controla o tempo da animação: exatamente 1.2 segundos [cite: 14, 17]
      transition={{ duration: 1.2 }}
    >
      <h2>Parte 1: Card de Boas-vindas</h2>
      <p>Componente animado no ciclo de montagem.</p>
    </motion.div>
  );
};

export default WelcomeCard;
