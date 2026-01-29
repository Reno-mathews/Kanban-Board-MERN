function Header({ onLogout }) {
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-center">
            Kanban Board
        </h1>

        <button
            onClick={onLogout}
            className="text-sm text-gray-400 hover:text-white transition"
        >
            Logout
        </button>
        <p className="text-sm text-gray-400">My Study Board</p>
        </div>
    );

}
export default Header;