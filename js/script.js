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
    console.log(teamGroup)

    let h1 = document.createElement('h1')

    document.querySelector('.team-group').appendChild(h1)

    let img= document.createElement('img')

    document.querySelector('.team-group').appendChild(img)

   

    for(let key in teamGroup){

        console.log(teamGroup[key])
        h1.innerText = teamGroup.name + " " + ", " + teamGroup.role
        img.src ='./img/'+ teamGroup.image

    }

    
    
 
}