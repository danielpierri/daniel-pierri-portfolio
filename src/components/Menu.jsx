import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import linkedinSvg from "../icons/linkedin-svg.svg"
import githubSvg from "../icons/github-svg.svg"
import instagramSvg from "../icons/instagram-svg.svg"
import whatsappSvg from "../icons/whatsapp-svg.svg"

const Menu = () => {
  const [menu, setMenu] = useState(false)
  const [navBg, setNavBg] = useState(true)
  
  const menuAction = (e) => {
    e.preventDefault()
    setMenu((prevMenu) => !prevMenu)
  }

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavBg(true)
    } else {
      setNavBg(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
      <nav className={navBg ? "nav--scrolled" : "nav"}>
        <div className={"nav__container"}>
          <div>
            <div className="nav__hamburger" onClick={menuAction}>
              <button
                id="nav__hamburger__btn"
                className={menu ? "nav__hamburger__btn--active" : "nav__hamburger__btn"
                }
              ></button>
            </div>
          </div>

          <div className="nav__logo__container">

            <NavLink to={"/daniel-pierri-portfolio"} className={"nav__logo"}>
              DP
            </NavLink>

            <div className="nav__social-media__container">
              <a href="www.github.com/danielpierri">
                <img src={instagramSvg} alt="link para o meu Instagram" />
              </a>
              <a href="www.github.com/danielpierri">
                <img src={linkedinSvg} alt="link para o meu LinkedIn" />
              </a>
              <a href="www.github.com/danielpierri">
                <img src={githubSvg} alt="Link para o meu GitHub" />
              </a>
              <a href="www.github.com/danielpierri">
                <img src={whatsappSvg} alt="Link para o meu WhatsApp" />
              </a>
            </div>
          </div>

          <div className={menu ? "nav__wrapper" : "nav__wrapper--hidden"}>
            <ul className="nav__list">

              <li>
                <NavLink
                  to={"/daniel-pierri-portfolio"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav__link pending"
                      : isActive
                      ? "nav__link active"
                      : "nav__link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/projetos"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav__link pending"
                      : isActive
                      ? "nav__link active"
                      : "nav__link"
                  }
                >
                  Projetos
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/servicos"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav__link pending"
                      : isActive
                      ? "nav__link active"
                      : "nav__link"
                  }
                >
                  Serviços
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/sobre-mim"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav__link pending"
                      : isActive
                      ? "nav__link active"
                      : "nav__link"
                  }
                >
                  Sobre Mim
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/contato"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav__link pending"
                      : isActive
                      ? "nav__link active"
                      : "nav__link"
                  }
                >
                  Contato
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menu
