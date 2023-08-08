import { NavLink } from "react-router-dom"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <>
      <Hero />
      <main className="main">
        <div className="main__container">
          <section className="section">
            <h2 className="section__title">IDENTIDADE VISUAL</h2>
            <p className="section__text">
              Identidade Visual é extremamente importante para ser marcante e
              capturar o cenário comercial. Junto podemos projetar a nova
              guinada digital dos seus negócios. Confira meu trabalho de web
              design e programação!
            </p>
            <NavLink
              to={"/daniel-pierri-portfolio"}
              className={"section__link"}
            >
              Conferir
            </NavLink>
            {/* insert img */}
          </section>
          <section className="section">
            <h2 className="section__title">WEBSITE RESPONSIVO</h2>
            <p className="section__text">
              Utilizando as linguagens de programação mais modernas, podemos
              criar websites que funcionam perfeitamente em computadores,
              celulares e tablets, aumentando a qualidade da experiência dos
              usuários e consequentemente captação de clientes.
            </p>
            <NavLink
              to={"/daniel-pierri-portfolio"}
              className={"section__link"}
            >
              Fazer orçamento
            </NavLink>
            {/* insert img */}
          </section>
          <section className="section">
            <h2 className="section__title">PLATAFORMAS WEB</h2>
            <p className="section__text">
              O seu negócio precisa de uma plataforma para automatizar e
              gerenciar processos repetitivos? A solução é a criação de uma
              plataforma web, acessível remotamente e capaz de dar tempo e
              dinheiro para os seus negócios. Vamos conversar!
            </p>
            <NavLink
              to={"/daniel-pierri-portfolio"}
              className={"section__link"}
            >
              Entrar em contato
            </NavLink>
            {/* insert img */}
          </section>
          <section className="section">
            <h2 className="section__title">MARKETING DIGITAL</h2>
            <p className="section__text">
              A elaboração de banners para emails, redes sociais e aplicativos
              de mensagens também exigem cuidado estético. Seguindo a hierarquia
              visual do web design para a criação de banners, é possível
              conquistar vendas de maneira surpreendente!
            </p>
            <NavLink
              to={"/daniel-pierri-portfolio"}
              className={"section__link"}
            >
              Ver mais
            </NavLink>
            {/* insert img */}
          </section>
        </div>
      </main>
    </>
  )
}

export default Home
