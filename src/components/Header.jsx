import IconsMoon from "./icons/IconsMoon.jsx";

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl tracking-widest font-bold">Por hacer</h1>
                <button><IconsMoon fill="#fff"/></button>
            </div>
        </header>
    );
}

export default Header;
