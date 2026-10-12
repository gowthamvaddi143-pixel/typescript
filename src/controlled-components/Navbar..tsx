import type { NavbarContract } from "../contracts/NavbarContracts";

export function NavBar(props:NavbarContract){
    return(
        <nav>
            <span >{props.title}</span>
            <div>
                {
                    props.menuItems.map(item=><span key={item}>{item}</span>)
                }
            </div>
        </nav>
    )
}