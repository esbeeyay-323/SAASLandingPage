import ApexLogo from "../assets/Logo2.webp"
import MobileDrawer from "./MobileDrawer"

function MobileHeader () {

    return(

        <header className="flex w-full items-center justify-between border-b border-apex-line bg-white px-5 py-4">
            <img className="h-8 w-auto" src={ApexLogo} alt="ApexPerform"/>
            <MobileDrawer/>
        </header>
    )    
}

export default MobileHeader
