import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenu(props) {
    // Texto que vai para o PR
    return (
        <div>
            <div className="font-bold py-3">
                AppName
                    </div>
            <ul>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="text-blue-500 py-3 border-t border-b block"
                            onClick={props.closeMenu}
                        >
                            Home</Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="text-blue-500 py-3 border-b block"
                            onClick={props.closeMenu}
                        >
                            About</Link>
                    </li>

                    <li>
                        <Link
                            to="/contact"
                            className="text-blue-500 py-3 border-b block"
                            onClick={props.closeMenu}
                        >
                            Contact</Link>
                    </li>

                </ul>
            </ul>
        </div>
    )
}

export default NavigationMenu