import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex items-center justify-between container m-auto py-12 mb-8 border-b-2'>
            <h1 className='text-4xl font-bold text-black'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;