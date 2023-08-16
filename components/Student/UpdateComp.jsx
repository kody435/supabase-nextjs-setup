

export default function UpdateComp({ updates }) {
    
    console.log(updates)


  return (
      <div>
          {updates.map((update) => (
              <div>   
                  <h1>{update}</h1>
                  </div>
         ))} 
    </div>
  )
}
