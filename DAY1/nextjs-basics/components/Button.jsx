export default function Button({ title, color }) {
  return (
    <button
      type="button"
      style={{ background: color, color: "white" }}
      className="text-white  py-2 px-8 rounded-2xl"
    >
      {title}
    </button>
  );
}
