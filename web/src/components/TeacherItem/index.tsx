import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/37315220?s=460&u=5a992013dc97ebfcb33ee7c46f54085e0e5d7cce&v=4"
          alt="Gabriel de Carvalho"
        />
        <div>
          <strong>Gabriel de Carvalho</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros.
        Vivamus sit amet nibh non tellus tristique interdum. Praesent vel
        viverra nisi.
        <br />
        <br />
        Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então
        bota uma pinga aí cumpadi! Admodum accumsan disputationi eu sit. Vide
        electram sadipscing et per.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
}
