import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import TypeScript from '../../assets/typescript.png'



const FrontEndIcons = () => {

    return (
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={HTML} alt="HTML icon"/>
                <p className='my-4 pdt-body-muted'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={CSS} alt="HTML icon"/>
                <p className='my-4 pdt-body-muted'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={JavaScript} alt="HTML icon" />
                <p className='my-4 pdt-body-muted'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={ReactImg} alt="HTML icon" />
                <p className='my-4 pdt-body-muted'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={TypeScript} alt="HTML icon" />
                <p className='my-4 pdt-body-muted'>TypeScript</p>
            </div>
        </div>
    );
}

export default FrontEndIcons;