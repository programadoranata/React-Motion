import { motion } from "framer-motion";

// [Documentação: Variants] Objeto externo para definir os estados, evitando código de estilo no JSX [cite: 35, 37]
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // [Documentação: staggerChildren] Cria o efeito de cascata (um após o outro) nos itens filhos [cite: 34, 38]
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const StaggerList = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Parte 3: Variants e Cascata</h3>
      {/* Repassando as variantes do pai para os filhos através das props 'variants' [cite: 39] */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ listStyle: "none", padding: 0 }}
      >
        {items.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants} // O filho herda os nomes de estados 'hidden' e 'visible' do pai
            style={{ background: "#eee", margin: "5px 0", padding: "10px" }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default StaggerList;
