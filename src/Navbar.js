import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-[60px] h-screen bg-[#202123] flex flex-col items-center pt-2.5 shadow-sm">
            <div className="menu w-full text-center py-3.75 text[#ccc] cursor-pointer transition-colors duration-200 hover:bg-[#333]">
                <Link to="/" className="bg-[#202123] no-underline text-[#ccc] hover:text-white">Data</Link>
            </div>
            <div className="menu w-full text-center py-3.75 text[#ccc] cursor-pointer transition-colors duration-200 hover:bg-[#333]">
                <Link to="/" className="bg-[#202123] no-underline text-[#ccc] hover:text-white">Plan</Link>
            </div>
            <div className="menu w-full text-center py-3.75 text[#ccc] cursor-pointer transition-colors duration-200 hover:bg-[#333]">
                <Link to="/" className="bg-[#202123] no-underline text-[#ccc] hover:text-white">Setup</Link>
            </div>
            <div className="menu w-full text-center py-3.75 text[#ccc] cursor-pointer transition-colors duration-200 hover:bg-[#333]">
                <Link to="/" className="bg-[#202123] no-underline text-[#ccc] hover:text-white">Config</Link>
            </div>
            <div className="menu w-full text-center py-3.75 text[#ccc] cursor-pointer transition-colors duration-200 hover:bg-[#333]">
                <Link to="/" className="bg-[#202123] no-underline text-[#ccc] hover:text-white">Help</Link>
            </div>
    
        </nav>
    );
}

export default Navbar;