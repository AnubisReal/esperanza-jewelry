import ringImg from "../assets/products/ring.jpeg";
import braceletImg from "../assets/products/bracelet.jpeg";
import necklaceImg from "../assets/products/necklace.jpeg";
import earringsImg from "../assets/products/earrings.jpeg";
import setImg from "../assets/products/set.jpeg";

export interface Product {
  id: number;
  name: string;
  type: string;
  price: string;
  material: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  { id: 1, name: "Solstice", type: "Anillo Solitario", price: "$600", material: "Oro Blanco 18K · Diamante", description: "Minimalista, elegante, brillo puro. El símbolo esencial del lujo.", image: ringImg },
  { id: 2, name: "Lumière", type: "Pulsera de Diamantes", price: "$1,000", material: "Oro Amarillo 18K · Diamantes", description: "Clásica, refinada, con destellos controlados y acabado brillante.", image: braceletImg },
  { id: 3, name: "Celestia", type: "Collar con Zafiro", price: "$1,500", material: "Oro Rosa 18K · Zafiro Azul", description: "Pieza protagonista, sofisticada, con piedra central magnética.", image: necklaceImg },
  { id: 4, name: "Éternité", type: "Pendientes de Alta Joyería", price: "$2,000", material: "Oro Blanco 18K · Diamantes", description: "Alta joyería, simetría perfecta, brillo intenso elegante.", image: earringsImg },
  { id: 5, name: "Infinité", type: "Set Exclusivo de Lujo", price: "$4,000", material: "Oro 18K · Collar + Pulsera + Anillo", description: "La colección completa. Máxima expresión de lujo, poder y exclusividad absoluta.", image: setImg },
];
