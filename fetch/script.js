const API_LINK = 'https://rickandmortyapi.com/api/character';


 const rickAndMortyCharacters = async () =>{
  try {
    const response = await fetch(API_LINK);
    if (!response.ok) {
      throw new Error(`Error: The Database was compromised. No data under the code [${response.status}]`);
    }
    const data = await response.json();

    const numberOfCharacters = data.info.count;
    const characterIndex = Math.floor(Math.random() * (numberOfCharacters + 200)) + 1;

    const characterResponse = await fetch(`${API_LINK}/${characterIndex}`);
    if (!characterResponse.ok) {
      throw new Error(`Error: The Database was compromised. No data under the code [${characterResponse.status}]`);
    }
    const characterData = await characterResponse.json();

    renderCharacters(characterData);
  } catch (error) {
    const errorContainer = document.getElementById('characterContainer');
    errorContainer.innerHTML = `<p>${error.message}</p>`;
  }
}

const renderCharacters = (characterData) => {
  const characterImage = document.getElementById('characterImage');
  const characterName = document.getElementById('characterName');

  characterImage.src = characterData.image;
  characterName.textContent = characterData.name;
}

rickAndMortyCharacters();
