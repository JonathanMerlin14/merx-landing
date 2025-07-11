import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function MerxLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          ACTIVA EL MODO BESTIA
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          MERX MEDS – Pre-entreno con doble intensidad. Fórmula legal con efecto extremo en 2 scoops.
        </p>
        <a
          href="https://wa.me/526462213094?text=Hola,%20quiero%20apartar%20el%20pre-entreno%20MERX%20MEDS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-8 px-8 py-4 text-lg rounded-2xl">
            Reserva en Preventa
          </Button>
        </a>
      </section>

      <section className="bg-gray-900 px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <img src="/images/merx-meds.png" alt="MERX MEDS" className="rounded-xl shadow-xl" />
          <h2 className="text-3xl font-bold mt-6">MERX MEDS</h2>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Pre-entreno potente diseñado para atletas que buscan romper sus límites. Una medida legal. Dos medidas, otro nivel.
          </p>
        </motion.div>
      </section>

      <section className="bg-black px-6 py-16">
        <h3 className="text-2xl font-bold text-center mb-10">¿Por qué MERX?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            "Fórmula con ingredientes clínicamente dosificados",
            "Potencia extrema sin crash",
            "Diseñado bajo regulación COFEPRIS (200mg por scoop)",
            "Estética premium, efecto real"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-2xl shadow-md"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-gray-900 px-6 py-20 text-center">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold"
        >
          Únete a la comunidad MERX y prepárate para tu mejor versión
        </motion.h4>
        <a
          href="https://wa.me/526462213094?text=Hola,%20quiero%20apartar%20el%20pre-entreno%20MERX%20MEDS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-6 px-8 py-3 rounded-xl text-lg">
            Apartar Pre-entreno
          </Button>
        </a>
      </section>

      <footer className="bg-black text-gray-500 text-sm text-center py-10 px-6">
        <p>© 2025 MERX Supplements. Todos los derechos reservados.</p>
        <p className="mt-2">Aviso de privacidad | Políticas de envío</p>
      </footer>
    </main>
  );
}