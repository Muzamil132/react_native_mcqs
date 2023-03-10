import {Colors} from "./Colors"

export const RandomColors=[
    "FAFAFA",
    "#ff1744",
    "#d500f9",
    "#5c6bc0",
    "#00796b",
    Colors.orange,
    Colors.red,
    Colors.purple,
    Colors.green,
    Colors.indigo2,
    "#fbbf24",
    "#a3e635",
    "#a3e635",
    "#10b981",
    "#06b6d4",
    "#6366f1",
    "#6366f1",
    "#d946ef",
    "#f43f5e",
    "black"

    
]

export function addRandomColor(title){
    if(title[0].toUpperCase()==="A"){
        return RandomColors[1]
    }
    if(title[0].toUpperCase()==="W" ||title[0]==="B" ){
        return RandomColors[2]
    }
    if(title[0].toUpperCase()==="E"){
        return RandomColors[5]
    }
    if(title[0].toUpperCase()==="D"){
        return RandomColors[4]
    }
    if(title[0].toUpperCase()==="F"){
        return RandomColors[6]
    }
    if(title[0].toUpperCase()==="H"){
        return RandomColors[7]
    }
    if(title[0].toUpperCase()==="G"){
        return RandomColors[8]
    }
    if(title[0].toUpperCase()==="I"){
        return RandomColors[9]
    }
    if(title[0].toUpperCase()==="K"){
        return RandomColors[10]
    }
    if(title[0].toUpperCase()==="J"){
        return RandomColors[11]
    }
    if(title[0].toUpperCase()==="L"){
        return RandomColors[12]
    }
    if(title[0].toUpperCase()==="M"){
        return RandomColors[13]
    }
    if(title[0].toUpperCase()==="N"){
        return RandomColors[14]
    }
    if(title[0].toUpperCase()==="O"){
        return RandomColors[15]
    }
    if(title[0].toUpperCase()==="P"){
        return RandomColors[16]
    }
    if(title[0].toUpperCase()==="S"){
        return RandomColors[17]
    }
    if(title[0].toUpperCase()==="U"){
        return RandomColors[18]
    }
    if(title[0].toUpperCase()==="R"){
        return RandomColors[18]
    }
    if(title[0].toUpperCase()==="T"){
        return RandomColors[19]
    }
   
   


}