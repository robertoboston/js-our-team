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
    }
]

for(let i= 0; i<team.length; i++){
    
    let teamGroup = team[i]

    for(let key in team){
        console.log(teamGroup[key])
    }



}