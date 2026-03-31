import kinderInteiro from "@/assets/images/kinder-bueno-inteiro.jpeg";
import kinderMetade from "@/assets/images/kinder-bueno-metade.jpeg";
import ferreroInteiro from "@/assets/images/ferrero-rocher-inteiro.jpeg";
import ferreroMetade from "@/assets/images/ferrero-rocher-metade.jpeg";
import pistacheInteiro from "@/assets/images/pistache-inteiro.jpeg";
import pistacheMetade from "@/assets/images/pistache-metade.jpeg";
import brownieInteiro from "@/assets/images/brownie-inteiro.jpeg";
import brownieMetade from "@/assets/images/brownie-metade.jpeg";
import brigadeiroInteiro from "@/assets/images/brigadeiro-inteiro.jpeg";
import brigadeiroMetade from "@/assets/images/brigadeiro-metade.jpeg";
import kidsInteiro from "@/assets/images/kids-inteiro.jpeg";
import kidsMetade from "@/assets/images/kids-metade.jpeg";
import kitInteiro from "@/assets/images/kit-degustacao-inteiro.jpeg";
import kitMetade from "@/assets/images/kit-degustacao-metade.jpeg";

const products = [
  {
    id: "kinder-bueno",
    name: "Kinder Bueno",
    price: "R$ 89,90",
    priceNum: 89.9,
    description: "Casca de chocolate ao leite recheada com creme de ninho artesanal, pedaços de kinder e uma camada de nutella",
    imageInteiro: kinderInteiro,
    imageMetade: kinderMetade,
    featured: true,
    tag: "Mais Vendido",
    unavailable: true,
  },
  {
    id: "ferrero-rocher",
    name: "Ferrero Rocher",
    price: "R$ 89,90",
    priceNum: 89.9,
    description: "Casca de chocolate ao leite recheada com brigadeiro gourmet, amendoim triturado, uma camada de nutella e um bombom ferreiro rocher.",
    imageInteiro: ferreroInteiro,
    imageMetade: ferreroMetade,
    featured: true,
    tag: "Premium",
    unavailable: true,
  },
  {
    id: "pistache",
    name: "Pistache",
    price: "R$ 99,90",
    priceNum: 99.9,
    description: "Casca de chocolate ao leite recheada com brigadeiro artesanal de pistache, finalizada com pedaços de pistache",
    imageInteiro: pistacheInteiro,
    imageMetade: pistacheMetade,
    featured: true,
    tag: "Exclusivo",
    unavailable: true,
  },
  {
    id: "brownie",
    name: "Brownie",
    price: "R$ 89,90",
    priceNum: 89.9,
    description: "Casca de chocolate ao leite recheada com creme de ninho artesanal e pedaços de brownie, finalizada com brownies decorados com brigadeiro gourmet",
    imageInteiro: brownieInteiro,
    imageMetade: brownieMetade,
    featured: false,
    unavailable: true,
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro",
    price: "R$ 85,00",
    priceNum: 85.0,
    description: "Casca de chocolate ao leite recheada com brigadeiro gourmet 50% cacau, finalizada com granulado de chocolate ao leite",
    imageInteiro: brigadeiroInteiro,
    imageMetade: brigadeiroMetade,
    featured: false,
    unavailable: true,
  },
  {
    id: "kids",
    name: "Kids",
    price: "R$ 85,00",
    priceNum: 85.0,
    description: "Casca de chocolate ao leite recheada com creme de ninho artesanal, brigadeiro gourmet, finalizada com marshmallows, fini tubes, fini beijos e confetes",
    imageInteiro: kidsInteiro,
    imageMetade: kidsMetade,
    featured: false,
    unavailable: true,
  },
  {
    id: "kit-degustacao",
    name: "Kit Degustação",
    price: "R$ 59,00",
    priceNum: 59.0,
    description: "6 mini ovos com a casca de chocolate nobre nos sabores de Kinder Bueno, Ferrero Rocher, Pistache, Brigadeiro, Brownie e Kids",
    imageInteiro: kitInteiro,
    imageMetade: kitMetade,
    featured: false,
    tag: "Novidade",
    unavailable: true,
  },
];

export default products;