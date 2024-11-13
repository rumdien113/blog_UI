import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'


const Topbar = () => {
    // const navigate = useNavigate()
    const user = { id: 1, imageUrl: '/assets/images/profile.jpg' }
    // const { user } = useUserContext()

    // useEffect(() => {
    //     if (isSuccess) navigate(0)
    // } [isSuccess])

    return (
    <section className='topbar'>
        <div className='flex-between py-4 px-5'>
            <Link to='/' className='flex gap-3 items-center'>
                <img src='/assets/images/logo.svg' alt='Logo' width={50} height={50}/>
                <h1 className='text-white font-bold text-3xl'>Linux</h1>                
            </Link>

            <div className='flex gap-4'>
                <Button variant="ghost" className='shad-button_ghost' onClick={() => console.log('logout')}>
                    <img src='/assets/icons/logout.svg' alt='logout' width={20} height={20}/>
                </Button>
                <Link to={`/profile/${user.id}`} className='flex-center gap-3'>
                    <img src={user.imageUrl || '/assets/images/profile.jpg'} alt='profile' className='h-8 w-8 rounded-full'/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Topbar