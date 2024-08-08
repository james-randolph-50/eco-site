import { NavBar } from "./navbar"

export default function Header() {
    return (
      <header className="flex justify-between items-center p-4">
          <p>Logo</p>
       <NavBar />
      </header>
    );
  }