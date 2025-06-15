import { TvIcon } from "lucide-react";

function Footer() {
  return (
    <footer
      className={`flex flex-row justify-between items-center px-8 py-8 border-t-2 border-t-zinc-600 `}
    >
      <div>Copyright &copy; {new Date().getFullYear()}</div>
      <div>
        <TvIcon />
      </div>
    </footer>
  );
}

export default Footer;
