import React from "react";

export default function User() {
    const [name, setName] = React.useState("catanacomics");
    const [profilePicture, setProfilePicture] = React.useState("./assets/img/catanacomics.svg");

    function editProfilePicture() {
        const newProfilePicture = prompt("Digite o novo link da imagem:");
        if (newProfilePicture !== "" && newProfilePicture !== null) {
            setProfilePicture(newProfilePicture);
        }
    }

    function editName() {
        const newName = prompt("Digite o novo nome de usuário:");
        if (newName !== "" && newName !== null) {
            setName(newName);
        }
    }

    return (
        <div className="usuario">
        <img src={profilePicture} alt="imagem de perfil" onClick={editProfilePicture} data-test="profile-image"/>
        <div className="texto">
            <span>
                <strong data-test="name">{name}</strong>
                <ion-icon name="pencil" onClick={editName} data-test="edit-name"></ion-icon>
            </span>
        </div>
    </div>
    );
}