function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.suggestionInfo.image} alt={props.suggestionInfo.user} />
                <div className="texto">
                    <div className="nome">{props.suggestionInfo.user}</div>
                    <div className="razao">{props.suggestionInfo.follow ? "Segue você" : "Novo no Instagram"}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}

export default function Suggestions() {
    const suggestionsList = [
        {
            image: "./assets/img/bad.vibes.memes.svg",
            user: "bad.vibes.memes",
            follow: true
        },
        {
            image: "./assets/img/chibirdart.svg",
            user: "chibirdart",
            follow: true
        },
        {
            image: "./assets/img/razoesparaacreditar.svg",
            user: "razoesparaacreditar",
            follow: false
        },
        {
            image: "./assets/img/adorable_animals.svg",
            user: "adorable_animals",
            follow: true
        },
        {
            image: "./assets/img/smallcutecats.svg",
            user: "smallcutecats",
            follow: true
        }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestionsList.map((story, index) => 
                <Suggestion key={index} suggestionInfo={story}/>
            )}
        </div>
    );
}