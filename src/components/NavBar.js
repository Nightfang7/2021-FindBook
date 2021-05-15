import React, {useState}  from 'react'
import HamMenu from './HamMenu';
import { Drawer } from "antd";

function NavBar() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <div className="nav-bar collapse-mobile">
                <div className="nav-column">
                    <a href="#" className="column-content">
                        <i class="nav-icon fas fa-search fa-lg" />
                        <div className="column column1"></div>
                    </a>
                    
                </div>
                <div className="nav-column">
                    <a href="#" className="column-content">
                        <i class="nav-icon fas fa-user fa-lg" />
                        <div className="column column2"></div>
                    </a>
                </div>
                <div className="nav-column">
                    <a href="#" className="column-content">
                        <i class="nav-icon fas fa-shopping-bag fa-lg" />
                        <div className="column column3"></div>
                    </a>
                </div>
            </div>
            <Drawer
                title=" "
                placement={"top"}
                closable={false}
                onClose={handleCloseDrawer}
                visible={isOnTouch}
                key={"top"}
                height={400}
                zIndex={99}
                bodyStyle={{ backgroundColor: "#253237" }}
                headerStyle={{ backgroundColor: "#253237", color: "#FBFFF1", height: "0.8rem", padding: "0", borderBottom: "0"}}
            >
                
            </Drawer>
        </div>
    )
}

export default NavBar
