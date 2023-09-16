import like from "../../../public/images/svg/like.svg"
import commentimg from "../../../public/images/svg/comment.svg"
import emoji from "../../../public/images/svg/emoji.svg"
import checkbox from "../../../public/images/svg/checkbox.svg"
import rightArrow from "../../../public/images/svg/rightArrow.svg"
import leftArrow from "../../../public/images/svg/leftArrow.svg"

import ava from "../../../public/images/svg/Ava.svg"
import Image from "next/image"

//  не работают функции goToPreviousPost и goToNextPost (перход на между постами в модальном окне)
//  комментария не связаны с индексом поста 
//  длинные комментария уходят за рамки родительского дива


export default function ModalPost({goToPreviousPost, goToNextPost, comments, removeComment, allComments, save, onChangeComment, comment, removeComents, addComment, setModalPostActive, currentPost}) {

    return (
        <div>
            <div className= "modal active ModalPost" onClick={() => setModalPostActive(false)}>
                <p id="close">X</p>
            </div>
            <Image onClick={goToPreviousPost} className="arrow" id="leftArrowPost" src={leftArrow}/>
            <div className="ModalPost_content active">
                <div  className="Modal_post_left_item">
                     <Image src={currentPost.image}/>
                </div>
                <div className="Modal_post_right_item">
                    <div className="newsFeed_post mtb4">
                        <div className="flex">
                            <Image className="m2" src={ava}/>
                            <div className=" flex flex-cl flex-ai-s">
                                <h3>Name</h3>
                                <h4>Местоположение</h4>
                            </div>
                        </div>
                        <p>...</p>
                    </div>
                    <div style={{ height: '35%', width:'100%', overflowY: 'scroll' }}>
                    {allComments.map((comment, index) => (
                        <div className="newsFeed_post mtb4">
                            <div className="flex">
                                <Image className="m2" src={ava}/>
                                <div  className=" flex flex-cl flex-ai-s">
                                    <h3 key ={index}>User</h3>
                                    <h4  style={{width:'100%'}}>{comment}</h4>
                                </div>
                                <button onClick={() => removeComment(index)}  className="button-no-border button-delete">x</button>
                            </div>
                        </div>
                     ))}
                     </div>
                    <div className="modalPost-footer">
                        <div className="flex flex-jc-sb p2">
                            <button className="button-no-border">View insights</button>
                            <button className="button-border">Currently boosted</button>
                        </div>
                        <div className="flex modal_post_icon newsFeed_post_icon">
                            <p>
                                <Image src={like}/>
                                <Image src={commentimg}/>
                            </p>
                            <p>
                                <Image src={checkbox}/>
                            </p>
                        </div>
                        <p>like by name</p>
                        <fieldset className={"fieldset"}>
                            <Image src={emoji}/>
                            <textarea value={comments} onChange={onChangeComment} className="textarea" placeholder= "Add a comment"></textarea>
                            <button className="button_none_bordered" onClick={save}>Post</button>
                        </fieldset>
                    </div>
                </div>
            </div>
            <Image onClick={goToNextPost} className="arrow" id="rightArrowPost" src={rightArrow}/>
        </div>  
    )
}