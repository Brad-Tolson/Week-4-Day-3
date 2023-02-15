const form = document.querySelector('form')
const input = document.querySelector('input')
const pokeDiv = document.querySelector('.poke-div')

let pokeURL = 'https://pokeapi.co/api/v2'

const createPokeDisplay = obj => {
    let { name, spritesArr } = obj
    let pokeName = document.createElement('h1')
    pokeName.textContent = name[0].toUpperCase() + name.slice(1)

    let imageIndex = 0
    let maxIndex = spritesArr.length - 1

    let imageDiv = document.createElement('div')
    let prevBtn = document.createElement('button')
    prevBtn.textContent = '<='
    
    let pokeImg = document.createElement('img')
    pokeImg.src = spritesArr[imageIndex]

    let nextBtn = document.createElement('button')
    nextBtn.textContent = '=>'

    prevBtn.addEventListener('click', (evt) => {
        imageIndex--
        if(imageIndex < 0){
            imageIndex = maxIndex
        }
        pokeImg.src = spritesArr[imageIndex]
    })

    nextBtn.addEventListener('click', (evt) => {
        imageIndex++
        if(imageIndex > maxIndex){
            imageIndex = 0
        }
        pokeImg.src = spritesArr[imageIndex]
    })

    imageDiv.appendChild(prevBtn)
    imageDiv.appendChild(pokeImg)
    imageDiv.appendChild(nextBtn)

    pokeDiv.appendChild(pokeName)
    pokeDiv.appendChild(imageDiv)
}


const getPokeData = evt => {
    evt.preventDefault()

    let pokemon = input.value.toLocaleLowerCase()
    axios.get(pokeURL + `/pokemon/${pokemon}`)
        .then(response => {
            console.log(response.data)
            let { name,sprites } = response.data
            console.log(name)
            console.log(sprites)

            let spritesArr = []
            for(let key in sprites){
                if(typeof sprites[key] === "string"){
                    spritesArr.push(sprites[key])
                }
            }
            console.log(spritesArr)
            let pokeObj = {
                name,
                spritesArr
            }

            createPokeDisplay(pokeObj)
        })
        .catch(err => console.log(err))
}





form.addEventListener('submit', getPokeData)