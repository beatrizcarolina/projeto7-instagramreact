import React from "react"

function Post(props) {
    const [bookMark, setBookMark] = React.useState("bookmark-outline");
    const [likesNumber, setLikesNumber] = React.useState(props.postInfo.likes);
    const [likeState, setLikeState] = React.useState({name: "heart-outline", red: false, animation: false});

    function toggleSavePost() {
        if (bookMark === "bookmark") {
            setBookMark("bookmark-outline");
            return;
        }
        setBookMark("bookmark");
    }

    function likeIt() {
        if (likeState.name !== "heart") {
            setLikeState({name: "heart", red: true, animation: true});
            setLikesNumber(likesNumber+1);
            setTimeout(() => setLikeState({name: "heart", red: true, animation: false}),500)
        }
    }

    function toggleLike() {
        if (likeState.name === "heart") {
            setLikeState({name: "heart-outline", red: false})
            setLikesNumber(likesNumber-1);
            return;
        }
        setLikeState({name: "heart", red: true});
        setLikesNumber(likesNumber+1);
    }

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.postInfo.userImage} alt={props.postInfo.user}/>
                    {props.postInfo.user}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postInfo.content} alt={props.postInfo.alt} onDoubleClick={likeIt} data-test="post-image"/>
                {likeState.animation && <ion-icon name="heart" class="heartAnimation"></ion-icon>}
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={likeState.name} class={likeState.red ? "likeHeart" : ""} onClick={toggleLike} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookMark} onClick={toggleSavePost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.postInfo.lastLikeProfileImage} alt={props.postInfo.lastLikeUser}/>
                    <div className="texto">
                        Curtido por <strong>{props.postInfo.lastLikeUser}</strong> e <strong data-test="likes-number">outras {likesNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function Posts() {
    const postsList = [
        {
            userImage: "./assets/img/meowed.svg",
            user: "meowed",
            content: "./assets/img/gato-telefone.svg",
            lastLikeProfileImage: "./assets/img/respondeai.svg",
            lastLikeUser: "respondeai",
            likes: 101.523
        },
        {
            userImage: "./assets/img/barked.svg",
            user: "barked",
            content: "./assets/img/dog.svg",
            lastLikeProfileImage: "./assets/img/adorable_animals.svg",
            lastLikeUser: "adorable_animals",
            likes: 99.159
        },
        {
            userImage: "./assets/img/meowed.svg",
            user: "meowed",
            content: "./assets/img/cat.jpeg",
            lastLikeProfileImage: "./assets/img/smallcutecats.svg",
            lastLikeUser: "smallcutecats",
            likes: 233.085
        }
    ]

    return (
        <div className="posts">
            {postsList.map((post, index) => 
                <Post key={index} postInfo={post}/>
            )}
    </div>
    );
}
