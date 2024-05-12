import { Button } from './utils';

function Nav() {
    return (
        <nav className="flex items-center justify-center mt-5">
            <Button href="/">Accueil</Button>
            <Button href="/portfolio">Portfolio</Button>
            <Button href="/cv">CV</Button>
        </nav>
    );
}

export default Nav;