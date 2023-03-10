import Link from "next/link";
import { type materia } from "@prisma/client";
import { useLocalStorage } from "hooks/useLocalStorage";

const MateriaButton = ({
  materia,
  forceDone,
  className = "",
  hoverable = false,
}: {
  materia: materia;
  forceDone?: boolean;
  className?: string;
  hoverable?: boolean;
  // done?: boolean;
}) => {
  const [aprobadas] = useLocalStorage("idsAprobadas", [] as number[]);

  const done =
    forceDone !== undefined ? forceDone : aprobadas.includes(materia.id);

  return (
    <Link href={`/materias/${materia.id}`} className={className}>
      <div
        className={`min-w-100 group flex rounded-md bg-white py-4 text-charcoal drop-shadow-lg
        ${hoverable ? (done ? "hover:bg-green-600" : "hover:bg-hover") : ""}
        ${done ? "bg-green-500 !text-white" : ""}
      `}
      >
        <span
          className={`border-r-4 border-gray-100 px-4
            ${hoverable
              ? done
                ? "group-hover:border-green-700"
                : "group-hover:border-gray-300"
              : ""
            }
            ${done ? "border-green-600" : ""}
          `}
        >
          {materia.id}
        </span>

        <span className="overflow-break mx-5 min-h-fit text-left">
          {materia.nombre}
          {/* {done && <BsCheck className="ml-2 inline align-middle" size={20} />} */}
        </span>
      </div>
    </Link>
  );
};

export default MateriaButton;
