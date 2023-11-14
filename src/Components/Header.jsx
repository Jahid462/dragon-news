import moment from 'moment/moment';
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <img className='mx-auto' src={Logo} alt="Logo" />
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