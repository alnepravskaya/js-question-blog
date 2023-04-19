import Link from 'next/link';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>JS question</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/questions/nextjs">NextJs</Link>
                    </li>

                    <li>
                        <Link href="/questions/typescript">Typescript</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
