export default function Button({children}: {children: string | JSX.Element}) {
  return (
    <button className="button">{children}</button>
  );
}
