export default function Drawer() {
  return (
    <div className="drawer drawer-open  absolute">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <ul className="menu p-4 w-80 min-h-full text-base-content  bg-neutral-900 bg-opacity-70 text-2xl">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
