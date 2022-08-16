const Button = ({ width, height, text, color, bgColor, icon, fontSize }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, fontSize, width, height }}
      className={`rounded-[10px] font-semibold scale-100 transition-transform hover:scale-95`}
    >
      <div className="flex items-center gap-[10px] justify-center">
        <span>{text}</span>
        <span>{icon}</span>
      </div>
    </button>
  );
};

export default Button;
