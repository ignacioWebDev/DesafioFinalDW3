
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css'

const NavigationTabs = () => {
    return (
        <div className='div-container'>
            <div className='div-flex'>
                <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--bs-white)", "--bs-nav-pills-link-active-color": "var(--bs-primary)", "--bs-nav-pills-link-active-bg": "var(--bs-white)" }}>
                    <li className="nav-item" role="presentation">
                        <NavLink to="/" className="nav-link rounded-5" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                        <NavLink to="/add-product" className="nav-link rounded-5" activeClassName="active">Add New Cat</NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                        <NavLink to="/contact" className="nav-link rounded-5" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationTabs;
