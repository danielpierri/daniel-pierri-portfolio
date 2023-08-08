import { NavLink } from "react-router-dom"
import Menu from "./Menu"
// import daniel from "../img/daniel (2).png"
import binaryNumsSvg from "../icons/binary-nums-svg.svg"
import circuitBoardSvg from "../icons/circuit-board-svg.svg"
import cpuSvg from "../icons/cpu-svg.svg"
import networkSvg from "../icons/network-svg.svg"
import tagSvg from "../icons/tag-svg.svg"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Menu />

        <div className="hero__container">
          <img
            src={binaryNumsSvg}
            alt="ícone de números binários"
            className="hero__background-icon binary-num"
          />
          <img
            src={circuitBoardSvg}
            alt="ícone de placa de circuito"
            className="hero__background-icon circuit-board"
          />
          <img
            src={cpuSvg}
            alt="ícone de processador"
            className="hero__background-icon cpu"
          />
          <img
            src={networkSvg}
            alt="ícone de rede"
            className="hero__background-icon network"
          />
          <img
            src={tagSvg}
            alt="ícone de tag HTML"
            className="hero__background-icon tag"
          />

          <div className="hero__left-side">
            <div>
              <h1 className="hero__title">
                Eu sou
                <br />
                <p className="hero__name">
                  <span className="hero__letter">D</span>
                  <span className="hero__letter">A</span>
                  <span className="hero__letter">N</span>
                  <span className="hero__letter">I</span>
                  <span className="hero__letter">E</span>
                  <span className="hero__letter">L</span>
                  <span> </span>
                  <span className="hero__letter">P</span>
                  <span className="hero__letter">I</span>
                  <span className="hero__letter">E</span>
                  <span className="hero__letter">R</span>
                  <span className="hero__letter">R</span>
                  <span className="hero__letter">I</span>
                </p>
              </h1>
              <p className="hero__subtitle">Desenvolvedor de Software</p>
            </div>

            <div className="hero__cta__container">
              <p className="hero__cta__description">
                Descubra mais sobre <br />
                os meus projetos
              </p>
              <NavLink to={"/"} className={"hero__cta__button"}>
                Conhecer
              </NavLink>
            </div>

            {/* <img src={daniel} alt="" /> */}
          </div>

          <div>
            <div className="hero__right-side">
              <div>
                <h2 className="hero__text-title">
                  Programar é um ato de criar
                </h2>
                <p className="hero__text">
                  Eu crio <span className="strong">websites</span>,{" "}
                  <span className="strong">plataformas web</span> e{" "}
                  <span className="strong">aplicativos</span> aliando design,
                  velocidade e funcionalidade em projetos completos
                </p>
              </div>

              <div>
                <p className="hero__text__cta">
                  Você sabia que possuir um website é a maneira mais eficaz de
                  aumentar suas vendas e intensificar a confiança de seu
                  negócio?
                </p>
                <NavLink to={"/"} className={"hero__text__button"}>
                  Tire suas dúvidas
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
