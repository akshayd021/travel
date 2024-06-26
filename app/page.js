import Image from "next/image";
import { Camp, Features, GetApp, Guide, Hero } from "./componets";


export default function Home() {
  return (
   <div>
   <Hero />
   <Camp />
   <Guide/>
   <Features/>
   <GetApp />
   </div>
  );
}
