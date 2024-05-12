import Link from 'next/link';

export function Button({ href, children }) {
    return (
      <Link href={href}>
        <button className="m-2 w-24 h-12 rounded-3xl text-lg font-zen-bold bg-lightgreen transform transition-transform duration-500 hover:scale-110">
          {children}
        </button>
      </Link>
    );
}