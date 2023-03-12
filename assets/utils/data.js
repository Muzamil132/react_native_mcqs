export const sideItemList= [
 
    {
      title: "GK",
      to: "gk",
    },
    {
      title: "Islamiate",
      to: "islamiate",
    },
    {
      title: "Pak Study",
      to: "pak_study",
    },
    {
      title: "Pakistan Current Affairs",
      to: "pak_current",
    },
    {
      title: "World Current Affairs",
      to: "word_current",
    },
    {
      title: "Mathematics",
      to: "maths",
    },
    {
      title: "Physics",
      to: "physics",
    },
    {
      title: "Everyday Science",
      to: "science",
    },
    {
        title: "Everyday Science",
        to: "science",
      },
  ];


  const Icons =[
    "globe",
    "infinity",
    "mosque",
    "star-and-crescent",
    "magnet",
    "tenge",
    "desktop",
    "globe",
    "space-shuttle",
    "instalod"

  ]


  export const getIcon=(cate)=>{
    if(cate.toUpperCase().trim("")==="WORLD AFFAIRS"){
      return Icons[0]
    }
    if(cate.toUpperCase().trim()==="MATHEMATICS"){
      return Icons[1]
    }
    if(cate.toUpperCase().trim()==="ISLAMIATE"){
      return Icons[2]
    }
    if(cate.toUpperCase().replace(/\s/g, '')==="PAKSTUDY"){
      return Icons[3]
    }
    if(cate.toUpperCase().replace(/\s/g, '')==="EVERYDAYSCIENCE"){
      return Icons[4]
    }
    if(cate.toUpperCase().replace(/\s/g, '')==="ENGLISH"){
      return Icons[5]
    }
    if(cate.toUpperCase().replace(/\s/g, '')==="COMPUTER"){
      return Icons[6]
    }
    if(cate.toUpperCase().replace(/\s/g, '')==="GENERALKNOWLEDGE"){
      return Icons[7]
    }
    if(cate.toUpperCase().replace(/\s/g, '')==="PHYSICS"){
      return Icons[8]
    }
    return Icons[9]



  }