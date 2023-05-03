import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/super-heroes'>Traditional Super Heroes</Link>
                        </li>
                        <li>
                            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                        </li>
                        {/*   <li>
                            <Link to='/parallel-queries'>Parallel</Link>
                        </li>
                        <li>
                            <Link to='/dynamic-parallel-queries'>Dynamic Parallel</Link>
                        </li> */}
                        <li>
                            <Link to='/dependednt-queries'>Dependent Queries</Link>
                        </li>
                        <li>
                            <Link to='/insert-superheroes'>Insert SHs</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;