import game2Bg from '../assets/Alabay Games/Alabay heritage prev gradient.png'
import game2preview1 from '../assets/Alabay Games/Alabay Adventure - The Lost Heritage/overview.png'
import game2preview4 from '../assets/Alabay Games/Alabay Adventure - The Lost Heritage/locations preview.png'
import game2preview2 from '../assets/Alabay Games/Alabay Adventure - The Lost Heritage/Abilities.png'
import game2preview3 from '../assets/Alabay Games/Alabay Adventure - The Lost Heritage/artifacts.png'
import game1Bg from '../assets/Alabay Games/Alabay Guard prev gradient.png'
import game1preview1 from '../assets/Alabay Games/Alabay Guard/image 1 alabay guard.png'
import game1preview2 from '../assets/Alabay Games/Alabay Guard/image 2 alabay guard.png'
import game1preview3 from '../assets/Alabay Games/Alabay Guard/image 3 alabay guard.png'

export const gameData = [
    {
        id:1,
        title: 'Alabay Gaurdian',
        subtitle: 'Shepherd of the steppes',
        theme: '#A4A8FF',
        bgImage: game1Bg,
        previewImages: [
            game1preview1,
            game1preview2,
            game1preview3,
        ]
    },
    {
        id:2,
        title: 'Alabay Heritage',
        subtitle: 'The Lost Adventure',
        theme: '#90FFAE',
        bgImage: game2Bg,
        previewImages: [
            game2preview1,
            game2preview2,
            game2preview3,
            game2preview4,
        ]
    }
]