import Link from "next/link";
import React from "react";

const BlogArticleCard: React.FC = () => {
  return (
    <div className="w-full mb-[15px] md:max-w-[230px] lg:max-w-[290px] xl:max-w-[350px]">
      <Link href="/blog/article?name=articulo1&template=1">
        <div className="bg-[#D9D9D9] w-full h-[200px] rounded-[8px]"></div>
      </Link>
      <div className="flex flex-col gap-[6px] pt-[20px] pb-[30px] sm:gap-[12px]">
        <p className="text-primaryColor text-[14px]">
          27 aug • <Link href="#"> FILTRO 1 </Link>
        </p>
        <Link href="/blog/article?name=articulo1&template=1">
          <h3 className="text-[19px] text-primaryColor font-semibold sm:text-[20px] xl:text-[21px]">
            25 formas ideales para ganar dinero por Internet en 2025
          </h3>
        </Link>
        <p className="text-blog-letterColor text-[16px]">
          ¿Estás buscando recibir ingresos extra desde casa para pagar algunas cuentas o reemplazar
          tu trabajo actual? Cualquiera que sea tu motivación,...
        </p>
      </div>
    </div>
  );
};

export default BlogArticleCard;
