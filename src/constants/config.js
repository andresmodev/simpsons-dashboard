import githubIconDynamic from "../assets/icons/dynamic-github-icon.svg";
import reactIcon from "../assets/icons/dynamic-react-icon.svg";
import viteIcon from "../assets/icons/dynamic-vite-icon.svg";
import hamburguerIcon from "../assets/icons/hamburguer.svg";
import gitIcon from "../assets/icons/dynamic-git-icon.svg";
import cssIcon from "../assets/icons/dymanic-css-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";

// objeto mapa para los iconos
export const icons = {
  git: gitIcon,
  github: githubIcon,
  githubDynamic: githubIconDynamic,
  react: reactIcon,
  css: cssIcon,
  hamburguer: hamburguerIcon,
  vite: viteIcon,
};

// fetch principal
export const CHARACTERS_ENDPOINT = "https://thesimpsonsapi.com/api/characters";

// ruta para las imagenes de los personajes
export const IMAGE_PATH = "https://cdn.thesimpsonsapi.com/500";

// limite de caracteres por frase
export const MAX_PHRASE_LENGTH = 40;

// ruta hacia el repo de github del proyecto
export const githubRepo = "https://github.com/andresmodev/simpsons-dashboard";
