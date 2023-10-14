interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <h1 className="text-md h-fit bg-white py-2 text-center text-charcoal drop-shadow-lg">
      {title}
    </h1>
  );
}
