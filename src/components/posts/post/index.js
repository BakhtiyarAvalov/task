import eye from '../../../../public/images/svg/eye.svg'
import massage from '../../../../public/images/svg/message.svg'
import heart from '../../../../public/images/svg/heart.svg'

import Image from "next/image"


export default function Post({item, onClick}){
    return <div className='post'>
        <div onClick={()=>onClick(item)} >{item.image}</div>
        {/* <div onClick={()=>onClick(item)} >{item.image.src}</div> */}
        <div className='post-stat'> 
            <a> {item.show} <Image src={eye} alt=''/></a>
            <a> {item.comments} <Image src={massage} alt=''/></a>
            <a> {item.like} <Image src={heart} alt=''/></a>
        </div>
    </div>
}