import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../Components/NavBar";
import Part1 from "@/Components/Part1";
import Part2 from "@/Components/Part2";

export default function Home() {
  return (
   <main>
      <NavBar></NavBar>
      <Part1></Part1>
    
    </main>
  );
}
