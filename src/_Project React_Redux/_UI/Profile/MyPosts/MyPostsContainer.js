import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, changePostText} from "../../../redux/profile_page/ProfilePage_Action";

let mapStateToProps=(state)=>({
        posts: state.profilePage.posts,
        postText: state.profilePage.postText

});

// let mapDispatchToProps=(dispatch)=>{
//     return{
//         addPost: (newPost)=>{
//             dispatch(addPost(newPost))
//         },
//         changePostText : (text)=>{
//             dispatch(changePostText(text))
//         },
//     }
// };


export default connect(mapStateToProps, {addPost, changePostText})(MyPosts)
