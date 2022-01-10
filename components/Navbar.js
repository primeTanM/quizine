import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div>
                <Image src="https://cdn-icons-png.flaticon.com/128/3406/3406828.png" alt='' width={128} height={77} />
            </div>

            {/* add more links */}
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/create"><a>Content</a></Link>
        </nav>
     );
}   
 
export default Navbar;