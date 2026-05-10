import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const fadeIn = {
  initial: {
    opacity: 0,
    y: 70,
    filter: "blur(10px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
};

const children = {
  gabriel: {
    name: "Gabriel",
    subtitle: "O filho preferido 😋",
    text: "Mamãe, obrigado por sempre cuidar de mim, por me proteger, por brigar quando precisava, sempre tentando me aconselhar e por nunca deixar faltar amor. Eu te amo demais.",
    photos: ["/images/gabriel1.jpg", "/images/gabriel2.jpg"],
  },
  sofia: {
    name: "Sofia",
    subtitle: "A caçula mais fofa 🥰",
    text: "Mamãe, seu carinho é meu lugar favorito. Obrigado por cuidar de mim, me proteger e fazer meus dias mais felizes.",
    photos: ["/images/sofia1.jpg", "/images/sofia2.jpg"],
  },
};

function App() {
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <main className="page">
      <section className="hero">
        <div className="floatingHearts">
          <span>💛</span>
          <span>✨</span>
          <span>💛</span>
          <span>⭐</span>
          <span>✨</span>
          <span>💛</span>
        </div>

        <div className="mouseGlow"></div>
        <div className="heroGlow"></div>

        <motion.div
          className="heroBadge"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
        >
          DIA DAS MÃES
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.15 }}
        >
          <span>Feliz Dia das Mães,</span>
          <br />
          <span>Mamãe.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          Um cantinho feito com amor para a mulher que cuida, protege, trabalha,
          briga quando precisa e ama em todos os detalhes.
        </motion.p>

        <motion.a
          href="#lorena"
          className="heroButton"
          initial={{ opacity: 0, y: 45, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          Abrir homenagem
        </motion.a>
      </section>

      <section className="lorena" id="lorena">
        <motion.div className="lorenaImageWrap" {...fadeIn}>
          <img src="/images/lorena.jpg" alt="Lorena sorrindo" />
        </motion.div>

        <motion.div
          className="lorenaText"
          {...fadeIn}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>Sobre ela</span>
          <h2>Lorena</h2>
          <p>
            Brava quando precisa, protetora todos os dias e trabalhadora de um
            jeito que inspira. Mulher forte, de coração enorme, que cuida,
            acolhe e se dedica em tudo que faz. Tem um jeito único de estar
            presente, de proteger quem ama e de transformar os dias mais simples
            em lembranças especiais. Acima de tudo, ela tem o dom de transformar
            qualquer lugar em casa, só por estar ali.
          </p>
        </motion.div>
      </section>

      <section className="children">
        <motion.div className="sectionHeader" {...fadeIn}>
          <span>O maior presente</span>
          <h2>Filhos da Lorena</h2>
        </motion.div>

        <div className="childrenGrid">
          <motion.button
            className="childCard gabrielCard"
            onClick={() => setSelectedChild("gabriel")}
            initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <img src="/images/gabriel1.jpg" alt="Gabriel" />
            <div>
              <span>Filho</span>
              <h3>Gabriel</h3>
              <p>Clique para abrir minha mensagem.</p>
            </div>
          </motion.button>

          <motion.button
            className="childCard sofiaCard"
            onClick={() => setSelectedChild("sofia")}
            initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <img src="/images/sofia1.jpg" alt="Sofia" />
            <div>
              <span>Filha</span>
              <h3>Sofia</h3>
              <p>Clique para abrir a mensagem dela.</p>
            </div>
          </motion.button>
        </div>
      </section>

      <section className="letter">
        <motion.h2 {...fadeIn}>Mamãe,</motion.h2>

        <motion.p
          {...fadeIn}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          obrigado por sempre ser a força, o cuidado e a proteção. Obrigado por
          tudo que você faz, até pelas coisas que muitas vezes passam
          despercebidas. Esse site é só um gesto simples de dizer que você é
          muito amada.
        </motion.p>

        <motion.strong
          {...fadeIn}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Com amor, Gabriel.
        </motion.strong>
      </section>

      <AnimatePresence>
        {selectedChild && (
          <motion.div
            className="modalOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="childModal"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
            >
              <button
                className="closeButton"
                onClick={() => setSelectedChild(null)}
              >
                ×
              </button>

              <div className="modalPhotos">
                {children[selectedChild].photos.map((photo) => (
                  <img
                    key={photo}
                    src={photo}
                    alt={children[selectedChild].name}
                  />
                ))}
              </div>

              <div className="modalText">
                <span>{children[selectedChild].subtitle}</span>
                <h2>{children[selectedChild].name}</h2>
                <p>{children[selectedChild].text}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;