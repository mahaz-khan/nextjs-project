import MainPararaph from "../components/MainPararaph"
import Header from "../components/Header"
import ShopCollection from "../components/ShopCollection"
import OurPhilosophy from "../components/OurPhilosophy.js"
import Vogue from "@/components/Vogue"
import SignUp from "@/components/SignUp"
import EymPerfume from "@/components/EymPerfume"
export default function Home() {
  return (
    <div>
      <div className="sticky top-0"><Header/></div>
      <EymPerfume/>
      <MainPararaph/>
      <ShopCollection/>
      <OurPhilosophy/>
      <Vogue/>
      <SignUp/>
    </div>
  )
}
