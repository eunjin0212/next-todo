export default function Header() {
  return (
    <header className='flex flex-row justify-between w-full'>
      <h1>MY TODO</h1>
      <div className='flex gap-3'>
        <div>mode</div>
        <button>Login</button>
      </div>
    </header>
  );
}