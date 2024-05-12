import React from "react";

const FooterNews = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="container">
        <footer className="py-5">
          <div className="row flex justify-content-center">
            <div className="col-md-5 offset-md-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-center mt-4 border-top">
            <p>© {year} Daily Upadtes. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterNews;
