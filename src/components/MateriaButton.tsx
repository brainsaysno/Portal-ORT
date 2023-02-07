import Link from "next/link";

const MateriaButton = ({
  id,
  nombre,
  principal = false,
}: {
  id: number;
  nombre: string;
  principal?: boolean;
}) => (
  <Link href={`/materia/${id}`}>
    <div
      className={`w-100 my-2 border-2 border-black py-5 ${principal ? "bg-orange-300" : "bg-white"
        }`}
    >
      <span
        className={`border-r-4 px-4 ${principal ? "border-orange-400" : ""}`}
      >
        {id}
      </span>
      <span className="px-4">{nombre}</span>
    </div>
  </Link>
);

export default MateriaButton;
