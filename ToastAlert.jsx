import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToastAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Parte 4: Animação de Saída</h3>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Fechar" : "Mostrar Alerta"}
      </button>

      {/* [Documentação: AnimatePresence] Garante que a animação de saída ocorra antes da remoção do DOM [cite: 45, 47] */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            [cite_start]// [Documentação: exit] Define o deslize para fora da tela antes de ser desmontado [cite: 44, 47]
            exit={{ opacity: 0, x: 100 }}
            style={{
              marginTop: "10px",
              padding: "15px",
              backgroundColor: "#e74c3c",
              color: "white",
              borderRadius: "5px"
            }}
          >
            Alerta: Operação concluída!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToastAlert;
