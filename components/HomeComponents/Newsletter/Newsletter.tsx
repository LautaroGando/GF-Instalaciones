import Image from "next/image";
import React from "react";
import newssletterImg from "@/public/assets/ilustrations/home/newsletter.svg";

const NewsLetter = () => {
  return (
    <div>
      <div>
        <Image src={newssletterImg} alt="Newsletter imagen" />
      </div>

      <div>
        <h3>Suscríbete a Nuestro Newsletter</h3>
        <p>
          Déjanos tu mail para recibir novedades, ofertas exclusivas y actualizaciones de nuestros
          proyectos.
        </p>
        <div>
          <p>Correo electrónico*</p>
          <div>
            <input type="text" placeholder="JhonDoe@gmail.com" />
            <input type="submit" value="Suscribirse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
