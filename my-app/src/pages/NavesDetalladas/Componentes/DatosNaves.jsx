
export default function DatosNaves({ details,imagen}) {
  return (
    <>
     
      
        <div className='col-12'>
           {imagen.length == 0  ? <h2 className='text-center py-5 text-warning'>No hay imagen XC </h2>  :   <img src={imagen} alt="imagen nave" />}
        </div>

        <div className='col-12'>
        <h1>{details.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque repudiandae quae optio maxime totam mollitia velit officia facilis! Aliquam nihil eveniet repellat molestiae est unde modi quasi quis cumque, quia id dolorum. Repellendus expedita iure repudiandae atque quas similique inventore ad laborum vitae praesentium, non minus ipsa tempore adipisci exercitationem corrupti ex incidunt quaerat eos dolor aspernatur labore animi perspiciatis! Soluta tenetur est dolorum molestiae ducimus! Sint excepturi hic similique suscipit perferendis dolor voluptates, nam veritatis quia explicabo laborum, minima quis. Aliquid repellendus porro consequuntur commodi quo illum. Temporibus, non. Veniam iure obcaecati officia expedita? Ut ipsum in earum provident distinctio explicabo quo, nesciunt neque cupiditate nisi commodi ipsam voluptatem asperiores fugiat! Aliquid unde odit, earum sequi iure ut cumque magni laborum ab consequuntur fugiat natus non saepe? Illo, enim natus! Rerum, doloribus velit perspiciatis quos dignissimos quo eum porro sed minima quia tempore nemo placeat quod reiciendis molestiae mollitia veritatis iste, aliquid perferendis aperiam magnam ad quaerat quasi nulla? Labore autem nihil illum. Facilis qui quas possimus, asperiores aspernatur ad incidunt placeat doloribus et pariatur neque unde cupiditate natus quia, consequatur perferendis alias porro ab tempore consectetur impedit ipsum dolor libero! Nesciunt doloremque repellat quam aspernatur corporis ut.</p>
        </div>

      <div className='col-6 '>
        <p>Name: {details.name}</p>
        <p>Model: {details.model}</p>
        <p>Manufacturer: {details.manufacturer}</p>
      </div>

      <div className='col-6 '>
      <p>Credits: {details.cost_in_credits}</p>
        <p>Length: {details.length}</p>
        <p>Crew: {details.crew}</p>
      </div>
      
    </>
  )
}
