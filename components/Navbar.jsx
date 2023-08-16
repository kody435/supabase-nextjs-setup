import LogoutButton from './LogoutButton'

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center py-2 px-5 border">
      <h2 className="text-2xl flex justify-between items-center ">
        <span className="text-5xl font-extrabold">L</span>
        <span className='underline mt-3 font-normal'>ucidian</span>
      </h2>
      <LogoutButton />
    </div>
  );
}