import MongoDB from "../../assets/mongo.png";
import sql from "../../assets/sql.png";
import github from "../../assets/github.png";
import ubuntu from "../../assets/ubuntu.png";

const DataBaseIcons = () => {
    return(
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={MongoDB} alt="HTML icon"/>
                <p className='my-4 pdt-body-muted'>MongoDB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={sql} alt="HTML icon"/>
                <p className='my-4 pdt-body-muted'>SQL</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={github} alt="HTML icon" />
                <p className='my-4 pdt-body-muted'>GitHub</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-10 mx-auto' src={ubuntu} alt="HTML icon" />
                <p className='my-4 pdt-body-muted'>Ubuntu</p>
            </div>
        </div>
    )
}

export default DataBaseIcons;