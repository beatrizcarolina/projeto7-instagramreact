function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.storyInfo.image} alt={props.storyInfo.user}/>
            </div>
            <div className="usuario">
                {props.storyInfo.user}
            </div>
        </div>
    );
}

export default function Stories() {
    const storiesList = [
        {
            image: "./assets/img/9gag.svg",
            user: "9gag"
        },
        {
            image: "./assets/img/meowed.svg",
            user: "meowed"
        },
        {
            image: "./assets/img/barked.svg",
            user: "barked"
        },
        {
            image: "./assets/img/nathanwpylestrangeplanet.svg",
            user: "nathanwpylestrangeplanet"
        },
        {
            image: "./assets/img/wawawicomics.svg",
            user: "wawawicomics"
        },
        {
            image: "./assets/img/respondeai.svg",
            user: "respondeai"
        },
        {
            image: "./assets/img/filomoderna.svg",
            user: "filomoderna"
        },
        {
            image: "./assets/img/memeriagourmet.svg",
            user: "memeriagourmet"
        },
    ]

    return (
        <div className="stories">
             {storiesList.map((story, index) => 
                 <Story key={index} storyInfo={story}/>
             )}
             <div className="setinha">
                 <ion-icon name="chevron-forward-circle"></ion-icon>
           </div>
        </div>
     );
}
