const ControlButton = ({ icon, label }) => (
  <button className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded text-xs border border-gray-700 transition">
    <span>{icon}</span> {label}
  </button>
);

export default ControlButton;