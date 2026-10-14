function App() {
  return (
    <main className="container-fluid min-vh-100 d-flex justify-content-center align-items-center page-bg py-4">
      <div className="form-card bg-white d-flex p-3 rounded-4 shadow">
        <section className="sidebar rounded-3 p-4">
          <div className="step active d-flex align-items-center gap-3 mb-4">
            <span className="step-number">1</span>
            <div>
              <small>STEP 1</small>
              <strong>YOUR INFO</strong>
            </div>
          </div>

          <div className="step d-flex align-items-center gap-3 mb-4">
            <span className="step-number">2</span>
            <div>
              <small>STEP 2</small>
              <strong>SELECT PLAN</strong>
            </div>
          </div>

          <div className="step d-flex align-items-center gap-3 mb-4">
            <span className="step-number">3</span>
            <div>
              <small>STEP 3</small>
              <strong>ADD-ONS</strong>
            </div>
          </div>

          <div className="step d-flex align-items-center gap-3">
            <span className="step-number">4</span>
            <div>
              <small>STEP 4</small>
              <strong>SUMMARY</strong>
            </div>
          </div>
        </section>

        <section className="content flex-grow-1">
          <h1 className="fw-bold">Personal info</h1>

          <p className="description mb-4">
            Please provide your name, email address, and phone number.
          </p>

          <form>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control mb-3"
              placeholder="e.g. Stephen King"
            />

            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="form-control mb-3"
              placeholder="e.g. stephenking@lorem.com"
            />

            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="form-control"
              placeholder="e.g. +1 234 567 890"
            />

            <div className="d-flex justify-content-end mt-4">
              <button type="button" className="btn next-btn">
                Next Step
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default App;
