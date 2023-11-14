import moment from 'moment/moment';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <div className='max-w-max mx-auto'>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <p className='text-[#706F6F] text-lg font-medium'>Journalism Without Fear or Favour</p>
            <p className='text-lg font-medium'>
                {
                    moment().format("dddd, MMMM D, YYYY")
                }
            </p>
        </div>
    );
};

export default Header;