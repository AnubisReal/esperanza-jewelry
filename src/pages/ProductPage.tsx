import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="pp">
        <p style={{ color: "#fff", padding: 40 }}>Producto no encontrado</p>
        <button onClick={() => navigate("/")} style={{ color: "#fff", padding: 10 }}>Volver</button>
      </div>
    );
  }

  return (
    <div className="pp">
      <div className="pp__header">
        <h2 className="pp__header-title">{product.name}</h2>
        <button className="pp__header-back" onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>
      <div className="pp__content">
        <div className="pp__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="pp__info">
          <span className="pp__number">{String(product.id).padStart(2, "0")}</span>
          <h1 className="pp__name">{product.name}</h1>
          <p className="pp__type">{product.type}</p>
          <p className="pp__description">{product.description}</p>
          <p className="pp__material">{product.material}</p>
          <span className="pp__price">{product.price}</span>
        </div>
      </div>
    </div>
  );
}
