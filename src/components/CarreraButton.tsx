import Link from "next/link";
import { type carrera } from "@prisma/client";

const CarreraButton = ({
  carrera,
  className = "",
  hoverable = false,
}: {
  carrera: carrera;
  className?: string;
  hoverable?: boolean;
}) => {

  return (
    <Link href={`/carreras/${carrera.id}`} className={className}>
      <div
        className={`min-w-100 group flex rounded-md bg-white py-4 text-charcoal drop-shadow-lg
        ${hoverable ? "hover:bg-hover" : ""}
      `}
      >
        <span
          className={`border-r-4 border-gray-100 px-4
          ${hoverable ? "group-hover:border-gray-300" : ""}
        `}
        >
          {carrera.id}
        </span>

        <span className="overflow-break mx-5 min-h-fit text-left">
          {carrera.nombre}
        </span>
      </div>
    </Link>
  );
};

export default CarreraButton;