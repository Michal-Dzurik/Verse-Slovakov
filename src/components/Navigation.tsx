import { Link } from "react-router-dom"

function Navigation() {

    return (
        <>
            <nav className="navigation z-10">
                <Link to="/" className="logo space-x-3 rtl:space-x-reverse w-full md:w-auto text-center">
                    Verše Slovákov
                </Link>

                {/* Desktop */}
                <div className="w-full md:block md:w-auto">
                    <ul className="font-medium px-4 pt-4 pb-0 flex-row flex justify-center align-middle h-full md:p-0">
                        <li className='mr-5'>
                            <Link className='link' to="/verse">Naše verše</Link>
                        </li>
                        <li>
                            <Link className='link' to="/pridat-svoj-vers">
                                <svg className='inline-block mr-2' width="17" height="17" viewBox="0 0 17 17"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='feather' fillRule="evenodd" clipRule="evenodd"
                                          d="M1.40917 13.3643C0.894576 14.5969 0.199106 15.7673 0 17L0.719307 16.9391C1.85505 13.6797 2.87863 11.4883 5.09824 8.74764C6.76401 6.69458 8.57139 5.06071 10.8892 3.76302C12.1231 3.07129 13.7033 2.31453 15.1251 2.12362C15.5135 2.07105 15.9075 2.05583 16.3113 2.09041C11.9085 3.08512 8.42276 5.38859 5.63807 8.84172C4.50092 10.2501 3.5124 11.8148 2.60381 13.4639L4.27798 13.7655L3.58111 13.4237L6.07414 13.0322C5.14872 12.7099 4.23451 12.8178 3.94146 12.4705C6.50741 12.3557 8.61626 11.8092 10.0969 10.7481C9.54589 10.672 8.91071 10.6042 8.5798 10.4479C11.0602 9.62061 12.4946 8.13338 14.3146 6.81356C11.9492 7.3033 9.76042 7.22306 9.12664 6.77897C13.3009 7.08472 15.9972 5.94613 16.9212 3.07544C17.0012 2.76554 17.0236 2.45288 16.9731 2.13745C16.6492 0.0857747 12.9686 -0.607341 11.7711 1.07495C11.5313 1.41113 11.1934 1.71965 10.9144 2.10978L12.0543 0C8.98643 1.02238 8.73404 2.1499 7.14679 5.54631C7.27299 4.51286 7.56324 3.57625 7.94042 2.69222C4.10692 4.15177 2.82955 7.82625 2.62484 10.9515C2.51407 9.86133 2.71878 8.4917 3.11419 6.95329C1.99527 8.06006 1.2339 9.35913 1.50592 11.213L0.994129 10.9875L1.26334 11.9822L0.497766 11.6239L1.40917 13.3643Z"
                                          fill="#ADADA9"/>
                                </svg>

                                Napíš svoje verše
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation
