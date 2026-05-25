import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="h-screen w-full bg-[#0a0a0a] font-mono text-sm flex flex-col overflow-hidden">
            <header className="h-12 border-b border-[#0a0a0a] flex items-center justify-between px-4 shrink-0 bg-[#121212]">
                <div className="flex items-center gap-6 bg-[#121212]">
                    <h1 className="font-bold text-blue-500 tracking-wider"><span className="text-gray-400 font-normal bg-[#121212]">MISSION CONTROL</span></h1>
                    <nav className="flex gap-4 text-xs bg-[#121212]">
                        <span className="text-blue-400 border-b-2 border-blue-400 pb-1 cursor-pointer bg-[#121212]">Dashboard</span>
                        <Link to="/" className="hover:text-white cursor-pointer bg-[#121212]">Plan</Link>
                        <Link to="/" className="hover:text-white cursor-pointer bg-[#121212]">Simulate</Link>
                        <Link to="/" className="hover:text-white cursor-pointer bg-[#121212]">History</Link>
                    </nav>
                </div>
            </header>
        </nav>
    );
}

export default Navbar;