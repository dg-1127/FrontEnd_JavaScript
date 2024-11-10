const makeImage = (image) =>
  `<div class="image">
        <img src="${image}" alt="" />
    </div>
`;

const makeName = (name) =>
  `
    <h4 class="name">${name}</h4>
`;

export const makeAvatarCard = (image, name) => `
    <div class="avatarCard">
        ${makeImage(image)}
        ${makeName(name)}
    </div>
`;
