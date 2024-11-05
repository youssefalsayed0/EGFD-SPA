
export default function AboutCard({title , description , image}) {
  return (
 <>
    <div className="col-md-6  ">
        <h2 data-aos="fade-right" className="featurette-heading">  
         {title}
        </h2>
        <p data-aos="fade-right" className="text-secondry mt-4 ">
             {description}
        </p>
      </div>
      <div className="col-md-6 ">
        <div className="image ">
            <img  data-aos="fade-left" src={image} alt={title}  className="img-fluid  rounded-3"/>
        </div>
       </div>
 
 </>
  )
}
