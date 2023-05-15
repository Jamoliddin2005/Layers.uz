import React, { useEffect, useState } from 'react'
import Translate from "../../components/Translate/Translate"

function Header() {

    const [opacity, setOpacity] = useState(".1")

    function Header_opacity() {
        setOpacity(1)
    }

    useEffect(() => {
        Header_opacity()
    }, [])
    return (
        <header style={{ opacity: opacity }}>
            <div className="container">
                {
                    Translate(
                        <h1>
                            <span>Развивайтесь </span> <br />
                            вместе  с<br />
                            <span>- Layers</span>
                        </h1>, <h1>
                        <span>- Layers </span>
                        bilan <br /> birga <span> rivojlaning</span>
                    </h1>, <h1>
                        <span>Grow  </span>with<br />
                        <span>- Layers!</span>
                    </h1>)
                }
                <button className="hover-effect">
                    <span>{Translate("Начать!", "Boshlang!", "Get started!")}</span>
                </button>
            </div>
        </header>
    )
}

export default Header