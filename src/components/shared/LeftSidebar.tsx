import { sidebarLinks } from '@/constants'
import { INavLink } from '@/types'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'

const LeftSidebar = () => {
    const { pathname } = useLocation()
    // const navigate = useNavigate()
    const user = {
        id: 1,
        imageUrl: '/assets/images/profile.jpg',
        firstname: "Nguyễn",
        lastname: "Lê Tiến Đạt",
        username: "rumdien113"
    }
    // const { user } = useUserContext()

    // useEffect(() => {
    //     if (isSuccess) navigate(0)
    // } [isSuccess])
    return (
        <nav className='leftsidebar'>
            <div className='flex flex-col gap-11'>
                <Link to='/' className='flex gap-3 items-center'>
                    <img src='/assets/images/logo.svg' alt='Logo' width={60} height={60} />
                    <h1 className='text-white font-bold text-3xl'>Linux</h1>
                </Link>

                <Link to={`/profile/${user.id}`} className='flex gap-3 items-center'>
                    <img src={user.imageUrl || '/assets/images/profile.jpg'} alt='profile' className='h-14 w-14 rounded-full' />
                    <div className='flex flex-col'>
                        <p className='body-bold'>{user.firstname + ' ' + user.lastname}</p>
                        <p className='small-regular text-light-3'>@{user.username}</p>
                    </div>
                </Link>

                <ul className='flex flex-col gap-6'>
                    {sidebarLinks.map((link: INavLink) => {
                        const isActive = pathname === link.route

                        return (
                            <li className={`leftsidebar-link group ${
                                isActive && 'bg-primary-500'
                            }`}>
                                <NavLink to={link.route} className='flex gap-4 items-center p-4'>
                                    <img src={link.imgURL} alt={link.label} className={`group-hover:invert-white ${isActive && 'invert-white'}`} />
                                    {link.label}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <Button variant="ghost" className='shad-button_ghost' onClick={() => console.log('logout')}>
                    <img src='/assets/icons/logout.svg' alt='logout' width={20} height={20}/>
                    <p className='small-medim lg:base-medium'>Logout</p>
            </Button>
        </nav>
    )
}

export default LeftSidebar