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
    description: "Chocolate ao leite recheado com Nutella® original e wafer crocante, inspirado no clássico Kinder Bueno.",
    imageInteiro: kinderInteiro,
    imageMetade: kinderMetade,
    featured: true,
    tag: "Mais Vendido",
  },
  {
    id: "ferrero-rocher",
    name: "Ferrero Rocher",
    price: "R$ 89,90",
    priceNum: 89.9,
    description: "Chocolate meio amargo com recheio cremoso de Nutella® original, pedaços crocantes e Ferrero Rocher inteiro.",
    imageInteiro: ferreroInteiro,
    imageMetade: ferreroMetade,
    featured: true,
    tag: "Premium",
  },
  {
    id: "pistache",
    name: "Pistache",
    price: "R$ 99,90",
    priceNum: 99.9,
    description: "Chocolate branco com ganache cremosa de pistache e cobertura generosa de pistache triturado.",
    imageInteiro: pistacheInteiro,
    imageMetade: pistacheMetade,
    featured: true,
    tag: "Exclusivo",
  },
  {
    id: "brownie",
    name: "Brownie",
    price: "R$ 89,90",
    priceNum: 89.9,
    description: "Chocolate com recheio de brownie artesanal, creme de baunilha e pedaços de brownie crocante.",
    imageInteiro: brownieInteiro,
    imageMetade: brownieMetade,
    featured: false,
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro",
    price: "R$ 85,00",
    priceNum: 85.0,
    description: "O clássico brasileiro: chocolate ao leite com brigadeiro cremoso gourmet e granulado belga.",
    imageInteiro: brigadeiroInteiro,
    imageMetade: brigadeiroMetade,
    featured: false,
  },
  {
    id: "kids",
    name: "Kids",
    price: "R$ 85,00",
    priceNum: 85.0,
    description: "Chocolate com recheio divertido, marshmallows coloridos, balas e confetes — feito para a criançada!",
    imageInteiro: kidsInteiro,
    imageMetade: kidsMetade,
    featured: false,
  },
  {
    id: "kit-degustacao",
    name: "Kit Degustação",
    price: "R$ 59,00",
    priceNum: 59.0,
    description: "Mini ovos sortidos com 6 sabores diferentes — perfeito para experimentar todos os nossos recheios.",
    imageInteiro: kitInteiro,
    imageMetade: kitMetade,
    featured: false,
    tag: "Novidade",
  },
];

export default products;