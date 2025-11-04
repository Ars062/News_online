const NewsItem =({title,description,src,url})=>{
  return(
    <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 py-2 px-2" style={{maxWidth: "346px"}}>
  <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title ? title.slice(0, 50) : "No Title"}</h5>
    <p className="card-text">{description?description.slice(0,88):"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  );
  } 
export default NewsItem;