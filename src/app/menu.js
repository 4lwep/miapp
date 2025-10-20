import Image from "next/image";

export default function Menu() {
  return (
    <div className="text-4xl">
      <div className="text-xl bg-blue-400 menu">
        <a href="/">INICIO</a>
        <a href="" className="tienda">
          TIENDA
        </a>
        <a href="/blog">BLOG</a>
        <a href="/acerca">ACERCA</a>
        <a href="/registro">REGISTRO</a>
      </div>
      <div className="text-xl bg-blue-400 menu submenu">
        <a href="/tienda/decoracion">DECORACIÓN</a>
        <a href="/tienda/electronica">ELECTRÓNICA</a>
        <a href="/tienda/libros">LIBROS</a>
        <a href="/tienda/mobiliario">MOBILIARIO</a>
      </div>
    </div>
  );
}
