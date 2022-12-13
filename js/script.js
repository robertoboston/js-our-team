
// MILESTONE 0
let team = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara-Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

for(let i= 0; i<team.length; i++){

    let teamGroup = team[i]

    // MILESTONE 1 ***************
    for(let key in teamGroup){

        console.log(teamGroup[key])
        
    }
    // **************************
    let divItem = document.createElement('div')

    divItem.classList.add('card')

    document.querySelector('.team-group').appendChild(divItem)

    let img= document.createElement('img')

    divItem.appendChild(img)

    let h1 = document.createElement('h1')

    h1.classList.add('title')

    divItem.appendChild(h1)

    let h2 = document.createElement('h2')

    divItem.appendChild(h2)

    h2.classList.add('subtitle')

    h1.innerText = teamGroup.name

    h2.innerText = teamGroup.role

    img.src ='./img/'+ teamGroup.image


 
}