import React, { useEffect } from 'react'
import Translate from "../../components/Translate/Translate"

function Header() {
    function Header_opacity() {
        const header = document.querySelector('header');
        header.style.opacity = 1
    }

    useEffect(() => {
        Header_opacity()
    }, [])
    return (
        <header>
            <div className="container">
                {
                    Translate(
                        <h1>
                            <span>- Layers </span>
                            bilan <br /> birga
                            <span> rivojlaning</span>
                        </h1>, <h1>
                        <span>- Layers </span>
                        bilan <br /> birga
                        <span> rivojlaning</span>
                    </h1>, <h1>
                        <span>Grow  </span>
                        with  <br />
                        <span>- Layers!
                        </span>
                    </h1>)
                }
                <button className="hover-effect">
                    <span>Boshlang!</span>
                </button>
            </div>
        </header>
    )
}

export default Header