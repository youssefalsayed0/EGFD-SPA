import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <main>
     
          <section className="notfound  bg-dark text-white vh-100 d-flex align-items-center justify-content-center ">
<div>
              <h1 className="display-3">404 - Page not found</h1>
              <p className="my-4 fs-5">
                The page you are looking for might have been removed had its name
                changed or is temporarily unavailable.
              </p>
  
              <Link to="/home" className="secondry-button d-in">
                home page
              </Link>
</div>
        </section>
      </main>
    </>
  );
}
